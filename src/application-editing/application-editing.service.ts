import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ApplicationsService } from 'src/applications/applications.service'

@Injectable()
export class ApplicationEditingService {
  constructor(private applicationsService: ApplicationsService) {}

  async getOneForEditing(id: number) {
    const application = await this.applicationsService.findByPkWithClient(id)

    return application
  }

  async saveChanged(id: number, application: any) {
    let candidate = await this.applicationsService.findByPk(id)

    if (!candidate) {
      throw new HttpException('something goes wrong...', HttpStatus.BAD_REQUEST)
    }

    candidate.client = application.client
    candidate.vehicle = application.vehicle
    candidate.issues = application.issues

    await candidate.save()

    return HttpStatus.OK
  }
}
