import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Application } from 'src/applications/models/application/application.model'
import { IClient } from 'src/applications/models/application/application.types'
import { Client } from './models/client/client.model'

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client)
    private clientRepozitory: typeof Client,
  ) {}

  async createNewClient(client: IClient) {
    return this.clientRepozitory.create(client)
  }

  async getClientByPk(pk: string) {
    return this.clientRepozitory.findByPk(pk, { include: [Application] })
  }

  async getAllClients() {
    return this.clientRepozitory.findAll()
  }
}
