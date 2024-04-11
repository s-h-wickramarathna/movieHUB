import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoviesDTO } from './movies.dto';

@Component({
  selector: 'app-admin-manage-movies',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './admin-manage-movies.component.html',
  styleUrl: './admin-manage-movies.component.css'
})
export class AdminManageMoviesComponent {

  moviesArray: MoviesDTO[] = [
    
    {id: 1, img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp', name: 'Fast X1', duration: '142 min', Released: '2023-05-17', status: 'Active', description: '', countries: '', genre: '', cast: '', production: ''},
    {id: 2, img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp', name: 'Fast X1', duration: '142 min', Released: '2023-05-17', status: 'Active', description: '', countries: '', genre: '', cast: '', production: ''},
    {id: 3, img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp', name: 'Fast X2', duration: '142 min', Released: '2023-05-17', status: 'Active', description: '', countries: '', genre: '', cast: '', production: ''},
    {id: 4, img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp', name: 'Fast X3', duration: '142 min', Released: '2023-05-17', status: 'Active', description: '', countries: '', genre: '', cast: '', production: ''},
    {id: 5, img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp', name: 'Fast X4', duration: '142 min', Released: '2023-05-17', status: 'Active', description: '', countries: '', genre: '', cast: '', production: ''},
  
  ]

}
