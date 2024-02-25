import { Module } from '@nestjs/common';
import { PlacesDetailsService } from './places_details.service';
import { PlacesDetailsController } from './places_details.controller';

@Module({
  providers: [PlacesDetailsService],
  controllers: [PlacesDetailsController]
})
export class PlacesDetailsModule {}
