import { Prop, raw, SchemaFactory, Schema } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Vehicle, Issues, Client } from './application.types'

export type ApplicationDocument = Application & Document

@Schema()
export class Application {
  @Prop(
    raw({
      name: { type: String, required: true },
      surname: { type: String },
      phoneNumber: { type: String, required: true },
      email: { type: String },
    }),
  )
  client: Client

  @Prop(
    raw({
      brand: { type: String, required: true },
      model: { type: String, required: true },
      yearOfIssue: { type: String, required: true },
      registrationNumber: { type: String, required: true },
      engineSpecification: { type: String, required: true },
      VIN: { type: String, required: true },
    }),
  )
  vehicle: Vehicle

  @Prop(
    raw({
      description: { type: String },
    }),
  )
  issues: Issues

  @Prop({ required: true })
  creationDate: string
}

export const ApplicationSchema = SchemaFactory.createForClass(Application)
