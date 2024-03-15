import { Component } from '@angular/core';
import { CardsComponent } from '../component/cards/cards.component';
import { Router } from '@angular/router';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { FooterComponent } from '../component/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent, 
    CardsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private routes: Router){}
}
