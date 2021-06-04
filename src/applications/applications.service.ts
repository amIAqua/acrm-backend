import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateApplicationDto } from 'src/application-creation/dto/create-application.dto'
import { Application } from './models/application/application.model'
import { Status } from './models/application/application.types'

type ApplicationDtoWithClientId = CreateApplicationDto & { clientId?: string }

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application)
    private applicationRepozitory: typeof Application,
  ) {}

  async createNewApplication(
    application: ApplicationDtoWithClientId,
    applicationStatus: Status,
  ) {
    return this.applicationRepozitory.create({
      status: applicationStatus,
      ...application,
    })
  }

  async findByPk(pk: string) {
    return this.applicationRepozitory.findByPk(pk)
  }
}
