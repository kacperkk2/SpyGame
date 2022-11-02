import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocationsManagerService } from '../services/locations-manager/locations-manager.service';
import {Location} from '../services/locations-manager/locations-manager.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface LocationDialog {
  number: number;
  name: string;
  roles: string;
  isActive: boolean;
}

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'actions'];
  dataSource = new MatTableDataSource<Location>([]);

  constructor(private _router: Router, private locationsManager: LocationsManagerService, public dialog: MatDialog) { 
    this.dataSource.data = this.locationsManager.getAllLocations();
  }

  ngOnInit(): void {
  }

  back() {
    this._router.navigate([""]);
  }

  isActive(location: Location) {
    return location.isActive;
  }

  toggleActive(location: Location) {
    this.locationsManager.toggleActive(location.name);
    this.dataSource.data = this.locationsManager.getAllLocations();
  }

  reset() {
    if(confirm("Na pewno wczytać domyślne lokalizacje?")) {
      this.locationsManager.resetLocationsToDefault();
      this.dataSource.data = this.locationsManager.getAllLocations();
    }
  }

  deleteLocation(location: Location) {
    const dialogRef = this.dialog.open(DeleteDialog, {width: '60%', data: location});

    dialogRef.afterClosed().subscribe(locationNumber => {
      if (locationNumber != null) {
        this.locationsManager.deleteLocation(locationNumber);
        this.dataSource.data = this.locationsManager.getAllLocations();
      }
    });
  }

  addLocation() {
    const dialogRef = this.dialog.open(AddDialog, {width: '60%', data: {}});

    dialogRef.afterClosed().subscribe((location: LocationDialog) => {
      if (location != null && location.name != null) {
        let roles: string[] = [];
        if (location.roles != null) {
          roles = location.roles.split(',').map(role => role.trim()).filter(role => role != '');
        }
        this.locationsManager.addLocation({name: location.name, roles: roles});
        this.dataSource.data = this.locationsManager.getAllLocations();
      }
    });
  }

  editLocation(location: LocationDialog) {
    const dialogRef = this.dialog.open(AddDialog, {
      width: '60%', 
      data: {number: location.number, name: location.name, roles: String(location.roles), isActive: location.isActive}
    });

    dialogRef.afterClosed().subscribe((location: LocationDialog) => {
      if (location != null && location.name != null) {
        const roles = location.roles.split(',').map(role => role.trim()).filter(role => role != '');
        this.locationsManager.updateLocation(location.number, location.isActive, {name: location.name, roles: roles});
        this.dataSource.data = this.locationsManager.getAllLocations();
      }
    });
  }

  countActiveLocations() {
    return this.dataSource.data.filter(location => location.isActive).length;
  }
}

@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialog {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public location: Location,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'add-dialog',
  templateUrl: 'add-dialog.html',
})
export class AddDialog {
  constructor(
    public dialogRef: MatDialogRef<AddDialog>,
    @Inject(MAT_DIALOG_DATA) public location: LocationDialog,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}