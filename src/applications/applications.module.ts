import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ApplicationsController } from './applications.controller'
import { ApplicationsService } from './applications.service'
import {
  Application,
  ApplicationSchema,
} from './models/application/application.model'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Application.name, schema: ApplicationSchema },
    ]),
  ],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
