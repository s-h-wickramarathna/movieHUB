import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css'
})
export class FavoriteCardComponent {
  @Input() Width: string = "w-64";
  @Input() Height: string= "365";
  @Input() id: number | undefined;
  @Input() name: string | undefined;
  @Input() img: string | undefined;

  onRemoveMovie(id: number | undefined){
    alert(id);
  }

}
