import { Controller, Get, Param } from '@nestjs/common'
import { ApplicationEditingService } from './application-editing.service'

@Controller(':id/edit')
export class ApplicationEditingController {
  constructor(private applicationEditingService: ApplicationEditingService) {}

  @Get()
  getOne(@Param() params: { id: string }) {
    return this.applicationEditingService.getOneForEditing(+params.id)
  }
}
