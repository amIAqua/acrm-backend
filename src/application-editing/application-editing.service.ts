import { Injectable } from '@nestjs/common'
import { ApplicationsService } from 'src/applications/applications.service'

@Injectable()
export class ApplicationEditingService {
  constructor(private applicationsService: ApplicationsService) {}

  async getOneForEditing(id: number) {
    const application = await this.applicationsService.findByPkWithClient(id)

    return application
  }
}
