import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationsManagerService } from '../services/locations-manager/locations-manager.service';
import {Location} from '../services/locations-manager/locations-manager.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LocationsApiService, LocationDto } from '../services/locations-manager/locations-api.service';
import { tap, map } from 'rxjs/operators';

interface Save {
  name: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource<LocationDto>();

  constructor(private _router: Router, private locationAPI: LocationsApiService, public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.locationAPI.getAllSaves().subscribe(saves => {
      this.dataSource = new MatTableDataSource(saves);
    });
  }

  back() {
    this._router.navigate([""]);
  }

  deleteSave(save: LocationDto) {
    this.locationAPI.deleteSave(save.name).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(locationsSet => locationsSet.name != save.name);
    });
  }
}
