import { Injectable } from '@angular/core';
import { AppSettings, LocationBase } from 'src/app/appSettings.module';
import { LocationsApiService } from './locations-api.service';
import { lastValueFrom } from 'rxjs';
import { LocationStrategy } from '@angular/common';

export class Location {
  number: number;
  name: string;
  roles: string[];
  isActive: boolean;

  constructor(location: LocationBase, number: number, isActive: boolean) {
    this.number = number;
    this.name = location.name;
    this.roles = location.roles;
    this.isActive = isActive;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LocationsManagerService {
  locations: Location[] = [];
  storageLocationsKey: string = "locations";

  constructor(private locationAPI: LocationsApiService) {
    if (this.isStorageEmpty()) {
      this.fetchDefaultLocations().subscribe(locations => {
          this.locations = locations;
          this.store();
        });
    }
    else {
      this.locations = JSON.parse(localStorage.getItem(this.storageLocationsKey) || '{}');
    }
  }

  public setLocations(locations: Location[]) {
    this.locations = locations;
    this.store();
  }

  public sendLocations(name: string) {
    return this.locationAPI.sendLocations(this.locations, name);
  }

  public fetchDefaultLocations() {
    return this.locationAPI.getDefaultLocations();
  }

  public fetchLocationsById(id: string) {
    return this.locationAPI.getLocationsById(id);
  }

  public isStorageEmpty() {
    return localStorage.getItem(this.storageLocationsKey) == null;
  }

  public store() {
    localStorage.setItem(this.storageLocationsKey, JSON.stringify(this.locations));
  }

  public deleteLocation(locationNumber: number) {
    this.locations = this.locations.filter(location => location.number != locationNumber);
    this.store();
  }

  public addLocation(locationBase: LocationBase) {
    const numbers = this.locations.map(location => location.number);
    this.locations.push(new Location(locationBase, Math.max(...numbers)+1, true));
    this.store();
  }

  public updateLocation(locationNumber: number, locationIsActive: boolean, locationBase: LocationBase) {
    const locationToUpdateIndex = this.locations.findIndex(location => location.number == locationNumber);
    this.locations[locationToUpdateIndex] = new Location(locationBase, locationNumber, locationIsActive);
    this.store();
  }

  public toggleActive(locationName: string) {
    this.locations.filter(location => location.name == locationName).forEach(location => location.isActive = !location.isActive);
    this.store();
  }

  public getAllLocations() {
    return this.locations;
  }

  public getActiveLocations() {
    return this.locations.filter(location => location.isActive);
  }
}
