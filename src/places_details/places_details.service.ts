import { Injectable } from '@nestjs/common';
import { createClient, ClientResponse, GoogleMapsClient } from '@google/maps';

@Injectable()
export class PlacesDetailsService {

    private googleMapsClient: GoogleMapsClient;

    constructor() {
      this.googleMapsClient = createClient({
        key: process.env.GOOGLE_MAPS_API_KEY,
      });
    }
  
    async searchPlaces(input: string): Promise<ClientResponse> {
      return new Promise((resolve, reject) => {
        this.googleMapsClient.places(
          {
            query: input,
            language: 'en',
          },
          (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(response.json.results);
            }
          },
        );
      });
    }






}
