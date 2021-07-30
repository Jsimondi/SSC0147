import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/contract.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  loggedUser = {
    isLogged: false,
    _id: "r.atakiama",
  }

  constructor(
    private router: Router,
    private contractService: ContractService
  ) { }

  ngOnInit(): void {
  }

  navigateToChromeExtension() {
    window.open('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html');
  }

  connectUser() {
    if (this.loggedUser.isLogged === false) {
      this.loggedUser.isLogged = true;
      this.contractService.connectAccount();
    } else {
      this.loggedUser.isLogged = false;
      this.contractService.disconnectAccount();
    }    
  }

  
}
