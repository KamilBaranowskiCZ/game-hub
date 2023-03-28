import { Component, OnInit } from '@angular/core';
import { Board } from './Board';
import { Player } from './Player';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements OnInit {
  player1: Player = {
    name: 'Player One',
    symbol: 'X',
    points: 0,
  };
  player2: Player = {
    name: 'Player Two',
    symbol: 'O',
    points: 0,
  };
  board: Board = {
    fields: [null, null, null, 
      null, null, null, 
      null, null, null],
  };
  activePlayer: Player = this.player1;
  winConditions = false;
  draws = 0;

  constructor() {}

  ngOnInit(): void {}

  changePlayer() {
    if(this.activePlayer == this.player1)
    {
      this.activePlayer = this.player2;
    }
    else{this.activePlayer = this.player1;}
  }

  checkResult() 
  {
    if(this.board.fields[0] == this.activePlayer.symbol &&
      this.board.fields[1] == this.activePlayer.symbol &&
      this.board.fields[2] == this.activePlayer.symbol)
      {
      this.winConditions = true;
    }
    if(this.board.fields[3] == this.activePlayer.symbol &&
      this.board.fields[4] == this.activePlayer.symbol &&
      this.board.fields[5] == this.activePlayer.symbol)
      {
      this.winConditions = true;
    }
    if(this.board.fields[6] == this.activePlayer.symbol &&
      this.board.fields[7] == this.activePlayer.symbol &&
      this.board.fields[8] == this.activePlayer.symbol)
      {
      this.winConditions = true;
    }
    if(this.board.fields[0] == this.activePlayer.symbol &&
      this.board.fields[3] == this.activePlayer.symbol &&
      this.board.fields[6] == this.activePlayer.symbol)
      {
      this.winConditions = true;
    }
    if(this.board.fields[1] == this.activePlayer.symbol &&
      this.board.fields[4] == this.activePlayer.symbol &&
      this.board.fields[7] == this.activePlayer.symbol)
      {
      this.winConditions = true;
    }
    if(this.board.fields[2] == this.activePlayer.symbol &&
      this.board.fields[5] == this.activePlayer.symbol &&
      this.board.fields[8] == this.activePlayer.symbol)
      {
      this.winConditions = true;
    }
    if(this.board.fields[0] == this.activePlayer.symbol &&
      this.board.fields[4] == this.activePlayer.symbol &&
      this.board.fields[8] == this.activePlayer.symbol)
      {
      this.winConditions = true;
    }
    if(this.board.fields[2] == this.activePlayer.symbol &&
      this.board.fields[4] == this.activePlayer.symbol &&
      this.board.fields[6] == this.activePlayer.symbol)
      {
      this.winConditions = true;
    }
  }

  nextGame() {
    this.board.fields = [null, null, null, 
      null, null, null, 
      null, null, null];
    this.winConditions = false;
  }

  playerMove(fieldNumber: number) 
  {
    if(this.board.fields[fieldNumber]){
      return
    }
    this.board.fields[fieldNumber] = this.activePlayer.symbol;
    this.checkResult();
    if(this.winConditions){
      this.activePlayer.points += 1;
      setTimeout(() => {
        this.nextGame();
      }, 0);
    }
    if(!this.board.fields.includes(null) && !this.winConditions){
      this.draws += 1;
      setTimeout(() => {
        this.nextGame();
      }, 0);
    }
    this.changePlayer();
  }
}
  