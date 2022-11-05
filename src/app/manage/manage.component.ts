import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocationsManagerService } from '../services/locations-manager/locations-manager.service';
import {Location} from '../services/locations-manager/locations-manager.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { tap } from 'rxjs/operators';


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
    this.dataSource = new MatTableDataSource(this.locationsManager.locations);
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
    if (confirm("Na pewno wczytać domyślne lokalizacje?")) {
      this.locationsManager.fetchDefaultLocations().subscribe(locations => {
        this.locationsManager.setLocations(locations);
        this.dataSource.data = locations;
      });
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

  sendLocations() {
    const dialogRef = this.dialog.open(SaveLocationsNameDialog, {width: '60%', data: null});

    dialogRef.afterClosed().subscribe(name => {
      if (name != null) {
        name = name.trim();
        this.locationsManager.sendLocations(name).pipe(
          tap(
            {
              next: (locationsDto) => {
                this.dialog.open(SaveLocationsDialog, {width: '60%', data: locationsDto.name});
              },
              error: (error) => this.showSaveLocationsErrorDialog()
            }
          )
        ).subscribe();
      }
    });
  }

  showSaveLocationsErrorDialog() {
    const dialogRef = this.dialog.open(ErrorDialog, {width: '60%', data: 'Nie udało się zapisać lokalizacji. Identyfikator już istnieje'});
  }

  showLoadLocationsErrorDialog() {
    const dialogRef = this.dialog.open(ErrorDialog, {width: '60%', data: 'Nie udało się wczytać lokalizacji. Błędny identyfikator'});
  }

  showAddLocationsMessageDialog(locationName: string) {
    const dialogRef = this.dialog.open(ErrorDialog, {width: '60%', data: 'Dodano lokalizację ' + locationName});
  }

  fetchLocations() {
    const dialogRef = this.dialog.open(LoadLocationsDialog, {width: '90%', data: null});

    dialogRef.afterClosed().subscribe((id: string) => {
      if (id == "default") {
        this.locationsManager.fetchDefaultLocations().subscribe(locations => {
          this.locationsManager.setLocations(locations);
          this.dataSource.data = locations;
        });
      }
      else if (id != null) {
        this.locationsManager.fetchLocationsById(id).pipe(
          tap(
            {
              next: (locationsDto) => {
                this.locationsManager.setLocations(JSON.parse(locationsDto.locations));
                this.dataSource.data = JSON.parse(locationsDto.locations);
              },
              error: (error) => this.showLoadLocationsErrorDialog()
            }
          )
        ).subscribe();
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
        this.showAddLocationsMessageDialog(location.name);
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

@Component({
  selector: 'save-locations-dialog',
  templateUrl: 'save-locations-dialog.html',
})
export class SaveLocationsDialog {
  constructor(
    public dialogRef: MatDialogRef<SaveLocationsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'load-locations',
  templateUrl: 'load-locations.html',
})
export class LoadLocationsDialog {
  constructor(
    public dialogRef: MatDialogRef<LoadLocationsDialog>,
    @Inject(MAT_DIALOG_DATA) public id: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDefaultClick(): string {
    return "default";
  }  
}

@Component({
  selector: 'save-locations-name-dialog',
  templateUrl: 'save-locations-name-dialog.html',
})
export class SaveLocationsNameDialog {
  constructor(
    public dialogRef: MatDialogRef<SaveLocationsNameDialog>,
    @Inject(MAT_DIALOG_DATA) public name: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'error-dialog',
  templateUrl: 'error-dialog.html',
})
export class ErrorDialog {
  constructor(
    public dialogRef: MatDialogRef<ErrorDialog>,
    @Inject(MAT_DIALOG_DATA) public message: string,
  ) {}
}