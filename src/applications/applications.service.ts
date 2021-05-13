import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateApplicationDto } from './dto/create-application.dto'
import {
  Application,
  ApplicationDocument,
} from './models/application/application.model'

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application.name)
    private applicationRepozitory: Model<ApplicationDocument>,
  ) {}

  async createNewApplication(application: CreateApplicationDto) {
    const serializedApplication = this.serializeApplicationObject(application)

    const newApplication = new this.applicationRepozitory(serializedApplication)
    await newApplication.save()
  }

  async getAllApplications() {
    const allApplications = await this.applicationRepozitory.find()

    return allApplications
  }

  async getApplicationById(_id: string) {
    const application = await this.applicationRepozitory.findById({ _id })

    return application
  }

  private serializeApplicationObject(application: CreateApplicationDto) {
    return {
      client: {
        name: application.name,
        surname: application.surname,
        phoneNumber: application.phoneNumber,
        email: application.email,
      },
      vehicle: {
        brand: application.brand,
        model: application.model,
        yearOfIssue: application.yearOfIssue,
        registrationNumber: application.registrationNumber,
        engineSpecification: application.engineSpecification,
        VIN: application.VIN,
      },
      issues: {
        description: application.description,
      },
      creationDate: new Date().toLocaleDateString(),
    }
  }
}
