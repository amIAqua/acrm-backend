import { Controller, Delete, Get, Param } from '@nestjs/common'
import { ApplicationsService } from './applications.service'

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Get('/:id')
  async getOne(@Param() params: { id: string }) {
    return this.applicationsService.findByPk(+params.id)
  }

  @Delete('/:id/delete')
  async deleteOne(@Param() params: { id: string }) {
    return this.applicationsService.deleteOne(+params.id)
  }
}
