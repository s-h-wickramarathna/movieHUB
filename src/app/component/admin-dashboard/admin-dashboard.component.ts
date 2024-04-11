import { Component } from '@angular/core';
import { MostLikeMoviesDTO } from './most-Liked_movies.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  allUsers: number = 200;
  activeUsers: number = 200;
  allMovies: number = 200;
  activeMovies: number = 200;

  MoviesArray: MostLikeMoviesDTO[] = [
    { id: 1, img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp', name: 'Fast X1', duration:'142 min', Released:'2023-05-17', status:'Active' },
    { id: 1, img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp', name: 'Fast X2', duration:'142 min', Released:'2023-05-17', status:'Active' },
    { id: 1, img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp', name: 'Fast X3', duration:'142 min', Released:'2023-05-17', status:'Active' },
    { id: 1, img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp', name: 'Fast X4', duration:'142 min', Released:'2023-05-17', status:'Active' },
    { id: 1, img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp', name: 'Fast X5', duration:'142 min', Released:'2023-05-17', status:'Active' },
  ]

}
