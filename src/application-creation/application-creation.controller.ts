import { Body, Controller, Post } from '@nestjs/common'
import { ApplicationCreationService } from './application-creation.service'
import { CreateApplicationDto } from './dto/create-application.dto'

@Controller('application-creation')
export class ApplicationCreationController {
  constructor(private ApplicationCreationService: ApplicationCreationService) {}

  @Post('/create-new')
  addNew(@Body() application: CreateApplicationDto) {
    return this.ApplicationCreationService.createNewApplication(application)
  }
}
