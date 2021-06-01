import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { Application } from 'src/applications/models/application/application.model'
import { ClientType } from './models/client/client.types'
import { Client } from './models/client/client.model'

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client)
    private clientRepozitory: typeof Client,
  ) {}

  async createNewClient(client: ClientType) {
    return this.clientRepozitory.create(client)
  }

  async getClientByPk(clientId: string) {
    return this.clientRepozitory.findByPk(clientId)
  }

  async getClientsBySearchQuery(query: string) {
    const candidates = await this.clientRepozitory.findAll({
      where: {
        [Op.or]: [
          { name: query },
          { surname: query },
          { phoneNumber: query },
          { email: query },
        ],
      },
    })

    return candidates
  }

  async getClientApplications(clientId: string) {
    const client = await this.clientRepozitory.findByPk(clientId, {
      include: [Application],
    })

    if (!client) {
      throw new HttpException(
        'Cannot find client with given identifier',
        HttpStatus.NOT_FOUND,
      )
    }

    return client.applications
  }
}
