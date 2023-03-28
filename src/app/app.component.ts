import { Component } from '@angular/core';
import { GameLink } from './GameLinks';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'game-hub';
  gamesLink: GameLink[] = [];
  selectedGame = "tic-tac-toe"

  constructor(private gamesLinkService: NavigationService) {}

  ngOnInit() {
    this.getGamesLinks();
  }

  getGamesLinks() {
    this.gamesLink = this.gamesLinkService.getGamesLinks();
  }

  getSelectedGame(currentGame: string) {
    this.selectedGame = currentGame;
  }
}
