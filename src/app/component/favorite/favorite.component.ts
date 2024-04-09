import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FavoriteCardComponent } from '../favorite-card/favorite-card.component';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    FavoriteCardComponent,
  ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {

}
