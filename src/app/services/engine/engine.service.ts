import { Injectable } from '@angular/core';
import { LocationsManagerService } from '../locations-manager/locations-manager.service';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  players: number = 0;
  useRoles = true;

  current: number = 0;
  rolesIterator: number = 0;
  cards: Card[] = [];
  spyPlayer: number = 0;

  constructor(private locationsManager: LocationsManagerService) { }

  next() {
    const card = this.cards[this.current];
    this.current++;
    return card;
  }

  isNext() {
    return this.current < this.cards.length;
  }

  prepare(players: number, spies: number, useRoles: boolean) {
    this.cards = [];
    this.rolesIterator = 0;
    this.current = 0;
    this.players = players;
    this.useRoles = useRoles;
    const allLocations = this.locationsManager.getActiveLocations();
    const choosenLocation = allLocations[Math.floor(Math.random() * allLocations.length)];
    var possibleRoles = choosenLocation.roles;
    possibleRoles = this.shuffle(possibleRoles);

    for (let i = 0; i < spies; i++) {
      const card = new Card();
      card.location = "Szpieg";
      this.cards.push(card);
    }

    for (let i = spies; i < players; i++) {
      const card = new Card();
      card.location = choosenLocation.name;
      if (useRoles && this.rolesIterator < possibleRoles.length) {
        card.role = possibleRoles[this.rolesIterator];
        this.rolesIterator++;
      }
      this.cards.push(card);
    }

    this.cards = this.shuffle(this.cards);
    console.log(this.cards);
  }

  shuffle(array: any[]) {
    var m = array.length, t, i;
 
    while (m) {    
     i = Math.floor(Math.random() * m--);
     t = array[m];
     array[m] = array[i];
     array[i] = t;
    }
 
   return array;
 }
}

export class Card {
  location: string = '';
  role: string = '';
}