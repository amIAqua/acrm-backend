import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApplicationsService } from './applications.service'
import { CreateApplicationDto } from './dto/create-application.dto'

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Post('/add')
  addNew(@Body() application: CreateApplicationDto) {
    return this.applicationsService.createNewApplication(application)
  }

  @Get('/all')
  getAll() {
    return this.applicationsService.getAllApplications()
  }

  @Get('/:pk')
  getById(@Param() params: { pk: string }) {
    return this.applicationsService.getApplicationByPk(params.pk)
  }
}
