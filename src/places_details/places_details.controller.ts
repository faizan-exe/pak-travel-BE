import { Controller, Get, Query } from '@nestjs/common';
import { PlacesDetailsService } from './places_details.service';

@Controller('places-details')
export class PlacesDetailsController {


    constructor(private readonly service: PlacesDetailsService) { }

    @Get()
    async index(@Query('query') query: string) {
        return this.service.searchPlaces(query);
    }

}
