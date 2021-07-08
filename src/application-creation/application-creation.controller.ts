import { Body, Controller, Param, Post } from '@nestjs/common'
import { ApplicationCreationService } from './application-creation.service'
import { CreateApplicationDto } from './dto/create-application.dto'

@Controller('application-creation')
export class ApplicationCreationController {
  constructor(private applicationCreationService: ApplicationCreationService) {}

  @Post('/create-new')
  createApplication(@Body() application: CreateApplicationDto) {
    return this.applicationCreationService.createNewApplicationFromScratch(
      application,
    )
  }

  @Post(':clientId/add-new')
  addNewApplication(
    @Param() params: { clientId: string },
    @Body() application: Omit<CreateApplicationDto, 'client'>,
  ) {
    return this.applicationCreationService.addNewApplication(
      params.clientId,
      application,
    )
  }
}
