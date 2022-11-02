import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { ManageComponent } from './manage/manage.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'start', component: StartComponent },
  { path: 'game', component: GameComponent },
  { path: 'list', component: ListComponent },
  { path: 'manage', component: ManageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }