import { Controller, Get } from '@nestjs/common'
import { ApplicationsInProgressService } from './applications-in-progress.service'

@Controller('in_progress')
export class ApplicationsInProgressController {
  constructor(
    private applicationsInProgressService: ApplicationsInProgressService,
  ) {}

  @Get('/all')
  getAll() {
    return this.applicationsInProgressService.getAllApplicationsInProgress()
  }
}
