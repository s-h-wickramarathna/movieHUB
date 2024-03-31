import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { CardsComponent } from '../component/cards/cards.component';
import { CardSliderComponent } from '../component/card-slider/card-slider.component';

@Component({
  selector: 'app-all-films',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    CardsComponent,
    CardSliderComponent,

  ],
  templateUrl: './all-films.component.html',
  styleUrl: './all-films.component.css'
})
export class AllFilmsComponent {
  constructor(private elementRef: ElementRef) { }

  sideMenuHidden() {
    // Catching element by ID
    const sideBar: HTMLElement = this.elementRef.nativeElement.querySelector('#SidBarMain');
    const menuIconBlock: HTMLElement = this.elementRef.nativeElement.querySelector('#menuIconBlock');
    const menuIconHidden: HTMLElement = this.elementRef.nativeElement.querySelector('#menuIconHidden');

    // Modifying CSS styles
    if (sideBar) {
      sideBar.classList.remove('left-0');
      menuIconBlock.classList.remove('hidden');
      menuIconHidden.classList.remove('block');
      sideBar.classList.add('-left-full');
      menuIconBlock.classList.add('block');
      menuIconHidden.classList.add('hidden');
  

    }
  }

  sideMenuBlock() {
    const sideBar: HTMLElement = this.elementRef.nativeElement.querySelector('#SidBarMain');
    const menuIconBlock: HTMLElement = this.elementRef.nativeElement.querySelector('#menuIconBlock');
    const menuIconHidden: HTMLElement = this.elementRef.nativeElement.querySelector('#menuIconHidden');

    // Modifying CSS styles
    if (sideBar) {
      sideBar.classList.remove('-left-full');
      menuIconBlock.classList.remove('block');
      menuIconHidden.classList.remove('hidden');
      sideBar.classList.add('left-0');
      menuIconBlock.classList.add('hidden');
      menuIconHidden.classList.add('block');


    }
  }


}
