import { Controller, Get } from '@nestjs/common';
import { PlacesDetailsService } from './places_details.service';

@Controller('places-details')
export class PlacesDetailsController {


    constructor(private readonly service: PlacesDetailsService) { }

    @Get()
    async index(){
        return this.service.searchPlaces('Badshahi Mosque');
    }

}
