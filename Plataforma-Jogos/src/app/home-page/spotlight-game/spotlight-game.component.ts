import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotlight-game',
  templateUrl: './spotlight-game.component.html',
  styleUrls: ['./spotlight-game.component.scss']
})
export class SpotlightGameComponent implements OnInit {
  spotlightGame = {
    userID: 'ricardo.atakiama',
    userName: 'Ricardo Atakiama',
    price: 'R$ 80,00',
    gameName: 'The Witcher 3: Wild Hunt',
    publisher: 'CD Projekt RED',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
