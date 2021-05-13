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

  @Get('/:_id')
  getById(@Param() params: { _id: string }) {
    return this.applicationsService.getApplicationById(params._id)
  }
}
