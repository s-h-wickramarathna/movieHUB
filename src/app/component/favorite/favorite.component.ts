import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FavoriteCardComponent } from '../favorite-card/favorite-card.component';
import { FavoriteMoviesDTO } from './favoriteMovies.dto';

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

  movieArray: FavoriteMoviesDTO[] = [
    {
      id: 0,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 1,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 3,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 4,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
    {
      id: 2,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    name: 'Fast X',
    date: '2023-05-17',
    },
  ]

}
