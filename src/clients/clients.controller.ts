import { Body, Controller, Get, Param } from '@nestjs/common'
import { ClientsService } from './clients.service'

@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}

  @Get('/:query')
  getClientsByQuery(@Param() params: { query: string }) {
    return this.clientService.getClientsBySearchQuery(params.query)
  }

  @Get('/:clientId/applications')
  getClientApplications(@Param() params: { clientId: string }) {
    return this.clientService.getClientApplications(params.clientId)
  }
}
