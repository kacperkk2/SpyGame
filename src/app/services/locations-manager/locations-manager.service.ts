import { Injectable } from '@angular/core';
import { AppSettings, LocationBase } from 'src/app/appSettings.module';

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
  storageKey: string = "locations";

  constructor() {
    this.locations = this.initLocations();
    if (this.isStorageEmpty()) {
      this.store();
    }
    this.locations = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  }

  initLocations() {
    const locationsBase = Object.assign([], AppSettings.LOCATIONS_AND_ROLES);
    return locationsBase.map((locationBase, index) => new Location(locationBase, index, true));
  }

  public isStorageEmpty() {
    return localStorage.getItem(this.storageKey) == null;
  }

  public store() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.locations));
  }

  public resetLocationsToDefault() {
    this.locations = this.initLocations();
    this.store();
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
