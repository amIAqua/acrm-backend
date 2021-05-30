import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ClientsModule } from 'src/clients/clients.module'
import { Client } from 'src/clients/models/client/client.model'
import { ApplicationsController } from './applications.controller'
import { ApplicationsService } from './applications.service'
import { Application } from './models/application/application.model'

@Module({
  imports: [SequelizeModule.forFeature([Application, Client])],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
  exports: [ApplicationsService],
})
export class ApplicationsModule {}
