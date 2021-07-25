import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-catalog',
  templateUrl: './game-catalog.component.html',
  styleUrls: ['./game-catalog.component.scss']
})
export class GameCatalogComponent implements OnInit {
  games = [
    {
      name: 'Age of Mythology: Extended Edition',
      src: './assets/aom_redimensionado.jpg',
      userID: 'Bruno Caltabiano',
      price: 'R$ 15,30'
    },
    {
      name: 'Fall Guys',
      src: './assets/fall-guys_redimensionado.jpg',
      userID: 'Caio Balthazar',
      price: 'R$ 28,90'
    },
    {
      name: 'Terraria',
      src: './assets/terraria_redimensionado.jpg',
      userID: 'Ricardo Atakiama',
      price: 'R$ 22,00'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
