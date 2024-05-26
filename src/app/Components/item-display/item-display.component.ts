import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrl: './item-display.component.css',
})
export class ItemDisplayComponent {
  @Input() items: { id: string; name: string; img: string; rate: string }[] =
    [];
  @Input() title: string = '';
  faStar = faStar;
  stars = Array(5).fill(0);

  getStarColor(index: number, rate: number) {
    return index < rate ? 'rgb(250, 204, 21)' : 'rgb(156, 163, 175)';
  }
}
