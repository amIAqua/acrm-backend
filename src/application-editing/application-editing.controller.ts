import { Body, Controller, Get, Param, Put } from '@nestjs/common'
import { ApplicationEditingService } from './application-editing.service'

@Controller(':id')
export class ApplicationEditingController {
  constructor(private applicationEditingService: ApplicationEditingService) {}

  @Get('/edit')
  getOne(@Param() params: { id: string }) {
    return this.applicationEditingService.getOneForEditing(+params.id)
  }

  @Put('/save')
  saveChanges(@Param() params: { id: string }, @Body() application: any) {
    return this.applicationEditingService.saveChanged(+params.id, application)
  }
}
