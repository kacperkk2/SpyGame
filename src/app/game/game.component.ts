import { Component, OnInit } from '@angular/core';
import { Card, EngineService } from '../services/engine/engine.service';
import { Router } from '@angular/router';
import { AppSettings } from '../appSettings.module';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(AppSettings.CARD_FADEIN_TIME, style({opacity: 1}))
      ])
    ])
  ]
})
export class GameComponent implements OnInit {
  location: string;
  role: string;
  label: string;
  img: string = "assets/plaza.jpg";
  card: Card | null = null;
  allStates = State;
  state: State = State.EMPTY;

  constructor(private engine: EngineService, private _router: Router) { 
    this.location = "";
    this.role = "";
    this.label = "Pokaż kartę";
  }

  ngOnInit(): void {
  }

  next() {
    if (this.state == State.EMPTY) {
      this.card = this.engine.next();
      this.location = this.card.location;
      this.img = this.getImageForLocation(this.location);
      this.role = this.card.role;
      this.label = "Dalej";
      this.state = State.LOCATION;
    }
    else if (this.state == State.LOCATION) {
      if (this.engine.isNext()) {
        this.label = "Pokaż kartę";
        this.state = State.EMPTY;
      }
      else {
        this.label = "Zakończ";
        this.state = State.FINISHED;
      }
    }
    else if (this.state == State.FINISHED) {
      this._router.navigate([""]);
    }
  }

  back() {
    this._router.navigate(["start"]);
  }

  getImageForLocation(location: string) {
    if (location == "Szpieg") {
      const num = Math.floor(Math.random() * AppSettings.SPY_IMAGES) + 1;
      return AppSettings.IMAGE_FOR_LOCATION[location + num as keyof typeof AppSettings.IMAGE_FOR_LOCATION];
    }
    let img = AppSettings.IMAGE_FOR_LOCATION[this.location as keyof typeof AppSettings.IMAGE_FOR_LOCATION];
    if (img == null) {
      img = AppSettings.IMAGE_FOR_LOCATION["default" as keyof typeof AppSettings.IMAGE_FOR_LOCATION];
    }
    return img;
  }
}

export enum State {
  LOCATION, 
  EMPTY, 
  FINISHED
}