import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent implements OnInit {
  categories = [
    'Recomendados',
    'Ofertas',
    'Notícias'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
