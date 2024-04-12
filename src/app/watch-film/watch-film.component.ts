import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FooterComponent } from '../component/footer/footer.component';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { CardsComponent } from '../component/cards/cards.component';
import { ActivatedRoute } from '@angular/router';
import { WatchMovieDTO } from './watchMovie.dto';
import { DomSanitizer } from '@angular/platform-browser';
import { SimillerMoviesDTO } from './simillerMovies.dto';

@Component({
  selector: 'app-watch-film',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    NavBarComponent,
    CardsComponent,
  ],
  templateUrl: './watch-film.component.html',
  styleUrl: './watch-film.component.css'
})
export class WatchFilmComponent implements OnInit {

  paramId: any;
  private senitizer = inject(DomSanitizer);
  movie: WatchMovieDTO = {
    id: 1,
    img: 'https://images.justwatch.com/poster/305436330/s166/fast-x.webp',
    src: this.senitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/EYmbPYWlyVk?si=wo92kv0a9K6YjWAe'),
    name: 'Fast X1',
    duration: '142 min',
    Released: '2023-05-17',
    status: 'Active',
    description: 'Tenth and final installment of the Fast and Furious franchise.',
    countries: 'United States of America, Japan',
    genre: 'Action, Crime, Thriller',
    cast: 'Vin Diesel, Gal Gadot, Ludacris, Daniela Melchior, Scott Eastwood',
    production: 'Universal Pictures, Original Film, One Race, Perfect Storm Entertainment, Dentsu, RK films',
  }

  simillerMoviesArray: SimillerMoviesDTO[] = [
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
    
   
    
  ]


  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.paramId= id;
  }

  onAddFavorite(id: number){
    alert(id);
  }

}
