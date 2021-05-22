import { Controller, Get } from '@nestjs/common'
import { ClientsService } from './clients.service'

@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}

  @Get('/all')
  getClients() {
    return this.clientService.getAllClients()
  }
}
