import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/contract.service';

@Component({
  selector: 'app-spotlight-game',
  templateUrl: './spotlight-game.component.html',
  styleUrls: ['./spotlight-game.component.scss']
})
export class SpotlightGameComponent implements OnInit {
  spotlightGame = {
    userID: 'jorge.simondi',
    userName: 'Jorge Simondi',
    price: 'R$ 80,00',
    gameName: 'The Witcher 3: Wild Hunt',
    publisher: 'CD Projekt RED',
  }

  constructor(
    private contractService: ContractService
  ) { }

  ngOnInit(): void {

  }

  send() {
    this.contractService.send('', 80, 1);
  }

}
