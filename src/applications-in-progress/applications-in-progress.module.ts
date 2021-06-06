import { Module } from '@nestjs/common'
import { ApplicationsInProgressService } from './applications-in-progress.service'
import { ApplicationsInProgressController } from './applications-in-progress.controller'
import { ApplicationsModule } from 'src/applications/applications.module'
import { ClientsModule } from 'src/clients/clients.module'

@Module({
  imports: [ApplicationsModule, ClientsModule],
  providers: [ApplicationsInProgressService],
  controllers: [ApplicationsInProgressController],
})
export class ApplicationsInProgressModule {}
