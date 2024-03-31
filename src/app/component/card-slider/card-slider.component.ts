import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-card-slider',
  standalone: true,
  imports: [CardsComponent,],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.css'
})
export class CardSliderComponent {
  currentPosition = 0;
  cardWidth = 285; // Width of each card including margin

  scroll(direction: 'prev' | 'next') {
    const slider = document.querySelector('.slider') as HTMLElement;
    const sliderWidth = slider.offsetWidth;
    const maxScroll = slider.scrollWidth - sliderWidth;

    if (direction === 'prev' && this.currentPosition < 0) {
      this.currentPosition += this.cardWidth;
    } else if (direction === 'next' && this.currentPosition > -maxScroll) {
      this.currentPosition -= this.cardWidth;
    }

    slider.style.transform = `translateX(${this.currentPosition}px)`;
  }
}
