import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { CardsComponent } from '../component/cards/cards.component';

@Component({
  selector: 'app-all-films',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    CardsComponent,
  
  ],
  templateUrl: './all-films.component.html',
  styleUrl: './all-films.component.css'
})
export class AllFilmsComponent {

}
