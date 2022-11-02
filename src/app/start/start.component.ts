import { Component, OnInit } from '@angular/core';
import { EngineService } from '../services/engine/engine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  useRoles: boolean = true;
  players: number = 3;
  spies: number = 1;

  constructor(private engine: EngineService, private _router: Router) { }

  ngOnInit(): void {
  }

  changeValue(value: boolean) {
    this.useRoles = !value;
  }
  
  setParameters() {
    this.engine.prepare(this.players, this.spies, this.useRoles);
    this._router.navigate(["game"])
  }
  
  back() {
    this._router.navigate([""])
  }
}
