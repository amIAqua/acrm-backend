import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ApplicationsService } from 'src/applications/applications.service'
import { Status } from 'src/applications/models/application/application.types'
import { response } from 'src/features/response'

@Injectable()
export class ApplicationStatusesService {
  constructor(private applicationsService: ApplicationsService) {}

  async changeApplicationStatus(pk: number, status: Status) {
    const application = await this.applicationsService.findByPk(pk)

    if (!application) {
      return new HttpException(
        'Something goes wrong...Try again',
        HttpStatus.BAD_REQUEST,
      )
    }

    application.status = status
    await application.save()

    return response(HttpStatus.OK, null)
  }
}
