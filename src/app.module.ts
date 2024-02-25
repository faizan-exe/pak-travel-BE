import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { TravelBuilderModule } from './travel_builder/travel_builder.module';
import { PlacesDetailsModule } from './places_details/places_details.module';
import { PlaceModule } from './place/place.module';
import { CommunityModule } from './community/community.module';
import { UploadModule } from './upload/upload.module';



@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_STRING, {
    dbName: 'pak-travel-db',
    autoIndex: true
  }),
    AuthModule,
    UserModule,
    TravelBuilderModule,
    PlacesDetailsModule,
    PlaceModule,
    CommunityModule,
    UploadModule
  ],
  
})
export class AppModule {

}
