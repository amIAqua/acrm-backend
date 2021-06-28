import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { Application } from 'src/applications/models/application/application.model'
import { ClientType } from './models/client/client.types'
import { Client } from './models/client/client.model'
import { queryToModelFormat } from './utils/string-queries'
import { error, response } from 'src/features/response'

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client)
    private clientRepozitory: typeof Client,
  ) {}

  async createNewClient(client: ClientType) {
    return this.clientRepozitory.create(client)
  }

  async getClientByPk(clientId: number) {
    return this.clientRepozitory.findByPk(clientId)
  }

  async getClientsBySearchQuery(query: string) {
    const candidates = await this.clientRepozitory.findAll({
      where: {
        [Op.or]: [
          { name: queryToModelFormat(query) },
          { surname: queryToModelFormat(query) },
          { phoneNumber: query },
          { email: query },
        ],
      },
    })

    if (!candidates.length) {
      return error('Cannot find clients with given query', HttpStatus.NOT_FOUND)
    }

    return response(HttpStatus.OK, candidates)
  }

  async getClientApplications(clientId: number) {
    const client = await this.clientRepozitory.findByPk(clientId, {
      include: [Application],
    })

    if (!client) {
      return error(
        'Cannot find client applications with given identifier',
        HttpStatus.NOT_FOUND,
      )
    }

    return response(HttpStatus.OK, client.applications)
  }
}
