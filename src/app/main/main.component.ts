import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationsManagerService } from '../services/locations-manager/locations-manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _router: Router, private locationsManager: LocationsManagerService) {
  }

  ngOnInit(): void {
  }

  start() {
    this._router.navigate(["start"]);
  }

  list() {
    this._router.navigate(["list"]);
  }

  settings() {
    this._router.navigate(["manage"]);
  }
}
