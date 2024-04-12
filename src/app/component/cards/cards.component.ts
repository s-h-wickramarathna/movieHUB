import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() Width: string = "w-64";
  @Input() Height: string= "365";
  @Input() id: number | undefined;
  @Input() name: string | undefined;
  @Input() img: string | undefined;
  @Input() date: string | undefined;


}
