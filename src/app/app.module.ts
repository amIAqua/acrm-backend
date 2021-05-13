import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ApplicationsModule } from 'src/applications/applications.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    ApplicationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
