import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { IssuesType, VehicleType, Status } from './application.types'
import { Client } from '../../../clients/models/client/client.model'
import { ClientType } from 'src/clients/models/client/client.types'

interface ApplicationCreationAttrs {
  client: ClientType
  vehicle: VehicleType
  issues: IssuesType
  status: Status
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
  vehicle: VehicleType

  @Column({ type: DataType.JSON, allowNull: false })
  issues: IssuesType

  @Column({ type: DataType.STRING, allowNull: false })
  status: Status
}
