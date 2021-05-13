import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { Client, Issues, Vehicle } from './application.types'

interface ApplicationCreationAttrs {
  client: Client
  vehicle: Vehicle
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

  @Column({ type: DataType.JSON, allowNull: false })
  client: Client

  @Column({ type: DataType.JSON, allowNull: false })
  vehicle: Vehicle

  @Column({ type: DataType.JSON, allowNull: false })
  issues: Issues
}
