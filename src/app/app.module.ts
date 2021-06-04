import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { ApplicationCreationModule } from 'src/application-creation/application-creation.module'
import { ApplicationStatusesModule } from 'src/application-statuses/application-statuses.module'
import { ApplicationsModule } from 'src/applications/applications.module'
import { Application } from 'src/applications/models/application/application.model'
import { Client } from 'src/clients/models/client/client.model'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApplicationsModule,
    ApplicationCreationModule,
    ApplicationStatusesModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [Application, Client],
      autoLoadModels: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
