import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { StartComponent } from './start/start.component';
import {MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ManageComponent, DeleteDialog, AddDialog, SaveLocationsDialog, LoadLocationsDialog, ErrorDialog, SaveLocationsNameDialog } from './manage/manage.component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartComponent,
    GameComponent,
    ListComponent,
    ManageComponent,
    DeleteDialog,
    AddDialog,
    SaveLocationsDialog,
    LoadLocationsDialog,
    ErrorDialog,
    SaveLocationsNameDialog,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    FlexLayoutModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
