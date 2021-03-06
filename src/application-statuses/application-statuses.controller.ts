import { Controller, Param, Put } from '@nestjs/common'
import { Status } from 'src/applications/models/application/application.types'
import { ApplicationStatusesService } from './application-statuses.service'

@Controller('applications/:id')
export class ApplicationStatusesController {
  constructor(
    private applicationsStatusesService: ApplicationStatusesService,
  ) {}

  @Put('status/:status')
  to_progress(@Param() params: { id: string; status: Status }) {
    return this.applicationsStatusesService.changeApplicationStatus(
      +params.id,
      params.status,
    )
  }
}
