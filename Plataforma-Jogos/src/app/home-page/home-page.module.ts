import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import { SpotlightGameComponent } from './spotlight-game/spotlight-game.component';
import { GameCatalogComponent } from './game-catalog/game-catalog.component';



@NgModule({
  declarations: [StoreComponent, TopBarComponent, CategoryBarComponent, SpotlightGameComponent, GameCatalogComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
