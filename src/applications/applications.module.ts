import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ApplicationsController } from './applications.controller'
import { ApplicationsService } from './applications.service'
import { Application } from './models/application/application.model'

@Module({
  imports: [SequelizeModule.forFeature([Application])],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
