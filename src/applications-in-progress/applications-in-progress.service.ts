import { Injectable } from '@nestjs/common'
import { ApplicationsService } from 'src/applications/applications.service'

@Injectable()
export class ApplicationsInProgressService {
  constructor(private applicationsService: ApplicationsService) {}

  async getAllApplicationsInProgress() {
    const applicationsInProgress =
      await this.applicationsService.getAllInProgress()

    return applicationsInProgress
  }
}
