import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  loggedUser = {
    _id: "j.simondi",
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToChromeExtension() {
    window.open('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html');
  }

}
