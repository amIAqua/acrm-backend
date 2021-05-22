import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { IClient, Issues, IVehicle } from './application.types'
import { Client } from '../../../clients/models/client/client.model'

interface ApplicationCreationAttrs {
  client: IClient
  vehicle: IVehicle
  issues: Issues
}

@Table({ tableName: 'applications' })
export class Application extends Model<Application, ApplicationCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @BelongsTo(() => Client)
  client: Client

  @ForeignKey(() => Client)
  @Column({ type: DataType.INTEGER })
  clientId: number

  @Column({ type: DataType.JSON, allowNull: false })
  vehicle: IVehicle

  @Column({ type: DataType.JSON, allowNull: false })
  issues: Issues
}
