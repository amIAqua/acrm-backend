import { Controller, Headers, Param, Put } from '@nestjs/common'
import { Status } from 'src/applications/models/application/application.types'
import { ApplicationStatusesService } from './application-statuses.service'

@Controller('applications/:id')
export class ApplicationStatusesController {
  constructor(
    private applicationsStatusesService: ApplicationStatusesService,
  ) {}

  @Put('status')
  changeStatus(
    @Param() params: { id: string },
    @Headers('Status') status: Status,
  ) {
    return this.applicationsStatusesService.changeApplicationStatus(
      params.id,
      status,
    )
  }
}