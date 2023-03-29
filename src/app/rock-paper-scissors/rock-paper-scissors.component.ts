import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.scss']
})
export class RockPaperScissorsComponent {
  playerOptions?: 'rock' | 'paper' | 'scissors';
  computerOptions?: 'rock' | 'paper' | 'scissors';
  playerWins = 0;
  draws = 0;
  computerWins = 0;

  playerPick(pick: 'rock' | 'paper' | 'scissors') {
    this.playerOptions = pick;
    this.computerPick();
    this.getResults();
  }

  computerPick() {
    const randomPick = Math.floor(Math.random() * 3);
    switch(randomPick) {
      case 0:
        this.computerOptions = 'rock';
        break;
      case 1:
        this.computerOptions = 'paper';
        break;
      case 2:
        this.computerOptions = 'scissors';
        break;
    }
  }

  getResults() {
    if(this.playerOptions == this.computerOptions){
      this.draws += 1;
    }
    if(this.playerOptions == 'paper' && this.computerOptions == 'rock' ||
    this.playerOptions == 'rock' && this.computerOptions == 'scissors'||
    this.playerOptions == 'scissors' && this.computerOptions == 'paper' ){
      this.playerWins += 1;
    }
    if(this.playerOptions == 'paper' && this.computerOptions == 'scissors' ||
    this.playerOptions == 'rock' && this.computerOptions == 'paper'||
    this.playerOptions == 'scissors' && this.computerOptions == 'rock' ){
      this.computerWins += 1;
    }
  }
}
