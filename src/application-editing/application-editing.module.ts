import { Module } from '@nestjs/common'
import { ApplicationEditingService } from './application-editing.service'
import { ApplicationEditingController } from './application-editing.controller'
import { ApplicationsModule } from 'src/applications/applications.module'

@Module({
  imports: [ApplicationsModule],
  providers: [ApplicationEditingService],
  controllers: [ApplicationEditingController],
})
export class ApplicationEditingModule {}
