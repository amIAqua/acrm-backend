import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Application } from './models/application/application.model'

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application)
    private applicationRepozitory: typeof Application,
  ) {}

  async createNewApplication(application: any) {
    return this.applicationRepozitory.create(application)
  }
}
