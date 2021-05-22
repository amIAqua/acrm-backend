import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Application } from 'src/applications/models/application/application.model'

interface ClientCreatingAttrs {
  name: string
  surname?: string
  phoneNumber: string
  email?: string
}

@Table({ tableName: 'clients', createdAt: false, updatedAt: false })
export class Client extends Model<Client, ClientCreatingAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.STRING, allowNull: false })
  surname: string

  @Column({ type: DataType.STRING, allowNull: false })
  phoneNumber: string

  @Column({ type: DataType.STRING, allowNull: true })
  email: string

  @HasMany(() => Application)
  applications: Application[]
}
