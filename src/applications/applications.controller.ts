import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApplicationsService } from './applications.service'
import { CreateApplicationDto } from '../application-creation/dto/create-application.dto'

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}
}
