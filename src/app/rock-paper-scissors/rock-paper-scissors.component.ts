import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.scss']
})
export class RockPaperScissorsComponent implements OnInit {
  playerOptions?: 'rock' | 'paper' | 'scissors';
  computerOptions?: 'rock' | 'paper' | 'scissors';
  playerWins = 0;
  draws = 0;
  computerWins = 0;
  constructor() { }

  ngOnInit(): void {
  }
  playerPick(pick: string) {
    if(pick == "rock"){
      this.playerOptions = "rock"
    }
    if(pick == "paper"){
      this.playerOptions = "paper"
    }
    if(pick == "scissors"){
      this.playerOptions = "scissors"
    }
    this.computerPick();
    this.getResults();
  }

  computerPick() {
    let randomPick = Math.floor(Math.random() * 3);
    if(randomPick == 0){
      this.computerOptions = 'rock';
    }
    if(randomPick == 1){
      this.computerOptions = 'paper';
    }
    if(randomPick == 2){
      this.computerOptions = 'scissors';
    }
  }

  getResults() {
    if(this.playerOptions == this.computerOptions){
      this.draws += 1;
    }
    if(this.playerOptions == 'paper' && this.computerOptions == 'rock' ||
    this.playerOptions == 'rock' && this.computerOptions == 'scissors'||
    this.playerOptions == 'scissors' && this.computerOptions == 'paper' )
    {
      this.playerWins += 1;
    }
    if(this.playerOptions == 'paper' && this.computerOptions == 'scissors' ||
    this.playerOptions == 'rock' && this.computerOptions == 'paper'||
    this.playerOptions == 'scissors' && this.computerOptions == 'rock' )
    {
      this.computerWins += 1;
    }
  }
}
