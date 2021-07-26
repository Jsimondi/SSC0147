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
    _id: "j.simondi",
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
      // this.contractService.connectAccount();
      this.contractService.createOrganization(
        42, 
        '0x9F887c41362d8f190B1288937961d09f0D20Fcc6',
        'metamask',
        '0xa71aE4F58bcdf47e61c29F50Ba00F341D9CFAAdf'
      )
    // tokenAdress: 'ETH'
      // this.contractService.getOrganization();
    } else {
      this.loggedUser.isLogged = false;
      this.contractService.disconnectAccount();
    }    
  }

  
}
