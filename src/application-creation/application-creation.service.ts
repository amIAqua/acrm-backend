import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ApplicationsService } from 'src/applications/applications.service'
import { ClientsService } from 'src/clients/clients.service'
import { CreateApplicationDto } from './dto/create-application.dto'

@Injectable()
export class ApplicationCreationService {
  constructor(
    private clientsService: ClientsService,
    private applicationsService: ApplicationsService,
  ) {}

  async createNewApplication(application: CreateApplicationDto) {
    try {
      const newClient = await this.clientsService.createNewClient(
        application.client,
      )

      const newApplication =
        await this.applicationsService.createNewApplication(application)

      await newClient.$set('applications', [newApplication.id])
      newClient.applications = [newApplication]

      return HttpStatus.OK
    } catch (error) {
      throw new HttpException(
        'Cannot create an application. Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async addNewApplication(
    clientId: string,
    application: Omit<CreateApplicationDto, 'client'>,
  ) {
    const client = await this.clientsService.getClientByPk(clientId)

    const newApplication = await this.applicationsService.createNewApplication({
      client,
      clientId,
      vehicle: application.vehicle,
      issues: application.issues,
    })

    client.applications = [newApplication]

    return HttpStatus.OK
  }
}
