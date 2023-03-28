import { Injectable } from '@angular/core';
import { GameLink } from './GameLinks';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private gamesLinks: GameLink[] = [
    { name: 'Tic Tac Toe', link: 'tic-tac-toe' },
    { name: 'Rock Paper Scissors', link: 'rock-paper-scissors' },
  ];
  constructor() {}

  getGamesLinks() {
    return this.gamesLinks;
  }
}
