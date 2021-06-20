import { HttpCode, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateApplicationDto } from 'src/application-creation/dto/create-application.dto'
import { Client } from 'src/clients/models/client/client.model'
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

  async findByPk(pk: number) {
    return this.applicationRepozitory.findByPk(pk)
  }

  async findByPkWithClient(pk: number) {
    return this.applicationRepozitory.findByPk(pk, { include: [Client] })
  }

  async getAllInProgress() {
    return this.applicationRepozitory.findAll({
      include: [Client],
      where: {
        status: Status.IN_PROGRESS,
      },
    })
  }

  async deleteOne(id: number) {
    this.applicationRepozitory.destroy({
      where: {
        id,
      },
    })

    return HttpStatus.OK
  }
}
