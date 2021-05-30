import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ApplicationsService } from 'src/applications/applications.service'
import { ClientsService } from 'src/clients/clients.service'
import { CreateApplicationDto } from './dto/create-application.dto'
import { serializeApplicationObject } from './serializers'

@Injectable()
export class ApplicationCreationService {
  constructor(
    private clientsService: ClientsService,
    private applicationsService: ApplicationsService,
  ) {}

  async createNewApplication(application: CreateApplicationDto) {
    const serializedApplication = serializeApplicationObject(application)

    try {
      const newClient = await this.clientsService.createNewClient({
        name: application.name,
        surname: application.surname,
        phoneNumber: application.phoneNumber,
        email: application.email,
      })

      const newApplication =
        await this.applicationsService.createNewApplication(
          serializedApplication,
        )

      await newClient.$set('applications', [newApplication.id])
      newClient.applications = [newApplication]

      return HttpStatus.OK //this.clientsService.getClientByPk(newClient.id.toString())
    } catch (error) {
      throw new HttpException(
        'Cannot create an application. Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }
}
