import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  private cells: string[] = [];
  private turn: string = 'X';
  private gameover = false;
  private winner = null;

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'X';
    this.gameover = false;
    this.winner = null;
  }

  clickHandler(index: number) {
    console.log(index);
    if (!this.gameover) {
      if (this.cells[index] === null) {
        this.cells[index] = this.turn;
        this.checkWinner();
        this.changeTurn();
      }

    }
  }

  changeTurn() {
    if (this.turn === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }

  checkWinner() {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let line of lines) {
      if (this.cells[line[0]] === this.cells[line[1]] && this.cells[line[1]] === this.cells[line[2]] && this.cells[line[0]] !== null) {
        this.gameover = true;
        this.winner = this.cells[line[0]];
        return;
      }
    }

    let occupy = 0;
    this.cells.forEach((e) => { occupy += (e !== null ? 1 : 0) });
    if (occupy === 9) {
      console.log('tie');
      this.gameover = true;
      this.winner = 'tie';
    }
  }
}
