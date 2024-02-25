import { Module } from '@nestjs/common';
import { TravelBuilderController } from './travel_builder.controller';
import { TravelBuilderService } from './travel_builder.service';

@Module({
  controllers: [TravelBuilderController],
  providers: [TravelBuilderService]
})
export class TravelBuilderModule {}
