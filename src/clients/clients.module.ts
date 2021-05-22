import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Application } from 'src/applications/models/application/application.model'
import { ClientsController } from './clients.controller'
import { ClientsService } from './clients.service'
import { Client } from './models/client/client.model'

@Module({
  imports: [SequelizeModule.forFeature([Client, Application])],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [ClientsService],
})
export class ClientsModule {}
