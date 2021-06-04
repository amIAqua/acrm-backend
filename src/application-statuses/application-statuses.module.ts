import { Module } from '@nestjs/common'
import { ApplicationStatusesService } from './application-statuses.service'
import { ApplicationStatusesController } from './application-statuses.controller'
import { ApplicationsModule } from 'src/applications/applications.module'

@Module({
  imports: [ApplicationsModule],
  providers: [ApplicationStatusesService],
  controllers: [ApplicationStatusesController],
})
export class ApplicationStatusesModule {}
