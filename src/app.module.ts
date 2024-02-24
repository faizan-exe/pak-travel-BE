import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';



@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_STRING, {
    dbName: 'pak-travel-db',
    autoIndex: true
  }),
    AuthModule,
    UserModule
  ],
  
})
export class AppModule {

}
