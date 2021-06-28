import { HttpStatus, Injectable } from '@nestjs/common'
import { ApplicationsService } from 'src/applications/applications.service'
import { error, response } from 'src/features/response'

@Injectable()
export class ApplicationEditingService {
  constructor(private applicationsService: ApplicationsService) {}

  async getOneForEditing(id: number) {
    const application = await this.applicationsService.findByPkWithClient(id)

    return response(HttpStatus.OK, application)
  }

  async saveChanged(id: number, application: any) {
    let candidate = await this.applicationsService.findByPk(id)

    if (!candidate) {
      error('something went wrong...', HttpStatus.BAD_REQUEST)
    }

    candidate.client = application.client
    candidate.vehicle = application.vehicle
    candidate.issues = application.issues

    await candidate.save()

    return response(HttpStatus.OK, null)
  }
}
