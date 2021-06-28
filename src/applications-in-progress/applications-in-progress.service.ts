import { HttpStatus, Injectable } from '@nestjs/common'
import { ApplicationsService } from 'src/applications/applications.service'
import { response } from 'src/features/response'

@Injectable()
export class ApplicationsInProgressService {
  constructor(private applicationsService: ApplicationsService) {}

  async getAllApplicationsInProgress() {
    const applicationsInProgress =
      await this.applicationsService.getAllInProgress()

    return response(HttpStatus.OK, applicationsInProgress)
  }
}
