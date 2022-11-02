import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LocationBase} from '../appSettings.module';
import { LocationsManagerService } from '../services/locations-manager/locations-manager.service';

class LocationTile {
  name: string;
  roles: string[];
  backgroundColor: string;
  color: string;
  clicked: boolean;

  constructor(location: LocationBase) {
    this.name = location.name;
    this.roles = location.roles;
    this.backgroundColor = '#333333';
    this.color = 'white';
    this.clicked = false;
  }
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  locations: LocationTile[] = [];

  constructor(private _router: Router, private locationsManager: LocationsManagerService) {}

  ngOnInit(): void {
    this.locations = this.locationsManager.getActiveLocations().map(location => new LocationTile(location));
    this.locations.sort((a, b) => a.name.localeCompare(b.name));
  }

  locationClicked(location: LocationTile) {
    if (location.clicked == false) {
      location.backgroundColor = '#666666';
      location.color = '#999999';
      location.clicked = true;
    }
    else {
      location.backgroundColor = '#333333';
      location.color = 'white';
      location.clicked = false;
    }
  }

  back() {
    this._router.navigate([""]);
  }
}
