import { Injectable } from '@angular/core';
import { AppSettings, LocationBase } from 'src/app/appSettings.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Location {
  number: number;
  name: string;
  roles: string[];
  isActive: boolean;
}

export interface LocationDto {
  locations: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationsApiService {

  readonly URL = AppSettings.LOCATIONS_ENDPOINT;
  posts: any;

  constructor(private httpClient: HttpClient) {
  }

  getLocationsById(id: string) {
    return this.httpClient.get<LocationDto>(this.URL + "/" + id);
  }

  getDefaultLocations() {
    return this.httpClient.get<Location[]>(this.URL + "/default");
  }

  sendLocations(locations: Location[], name: string) {
    return this.httpClient.post<LocationDto>(this.URL, 
      {
        locations: JSON.stringify(locations), 
        name: name
      });
  }

  getAllSaves() {
    return this.httpClient.get<LocationDto[]>(this.URL);
  }

  deleteSave(name: string) {
    return this.httpClient.delete(this.URL + "/" + name);
  }
}
