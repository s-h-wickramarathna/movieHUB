import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../component/footer/footer.component';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { CardsComponent } from '../component/cards/cards.component';

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
export class WatchFilmComponent {

}
