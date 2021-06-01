import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateApplicationDto } from 'src/application-creation/dto/create-application.dto'
import { Application } from './models/application/application.model'

type ApplicationDtoWithClientId = CreateApplicationDto & { clientId?: string }

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application)
    private applicationRepozitory: typeof Application,
  ) {}

  async createNewApplication(application: ApplicationDtoWithClientId) {
    return this.applicationRepozitory.create(application)
  }
}
