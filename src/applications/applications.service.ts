import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateApplicationDto } from './dto/create-application.dto'
import { Application } from './models/application/application.model'

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application)
    private applicationRepozitory: typeof Application,
  ) {}

  async createNewApplication(application: CreateApplicationDto) {
    const serializedApplication = this.serializeApplicationObject(application)

    try {
      const newApplication = await this.applicationRepozitory.create(
        serializedApplication,
      )

      return newApplication
    } catch (error) {
      throw new HttpException(
        'Cannot create an application. Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async getAllApplications() {
    try {
      const allApplications = await this.applicationRepozitory.findAll()

      return allApplications
    } catch (error) {
      throw new HttpException(
        'Cannot load applications. Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async getApplicationByPk(pk: string) {
    const application = await this.applicationRepozitory.findByPk(pk)

    if (!application) {
      throw new HttpException(
        'Cannot load an application. Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }

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
    }
  }
}
