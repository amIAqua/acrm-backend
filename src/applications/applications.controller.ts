import { Controller, Delete, Param } from '@nestjs/common'
import { ApplicationsService } from './applications.service'

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Delete('/:id/delete')
  async deleteOne(@Param() params: { id: string }) {
    return this.applicationsService.deleteOne(+params.id)
  }
}
