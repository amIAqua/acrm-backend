import { Module } from '@nestjs/common'
import { ApplicationsModule } from 'src/applications/applications.module'
import { ApplicationsService } from 'src/applications/applications.service'
import { ClientsModule } from 'src/clients/clients.module'
import { ClientsService } from 'src/clients/clients.service'
import { ApplicationCreationController } from './application-creation.controller'
import { ApplicationCreationService } from './application-creation.service'

@Module({
  imports: [ClientsModule, ApplicationsModule],
  controllers: [ApplicationCreationController],
  providers: [ApplicationCreationService],
})
export class ApplicationCreationModule {}
