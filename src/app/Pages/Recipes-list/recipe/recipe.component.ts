import { Component, Input } from '@angular/core';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent {
  @Input() recipe: any;
  faStar = faStar;
  faHeart = faHeart;
  stars = Array(5).fill(0);

  getStarColor(index: number, rate: number) {
    return index < rate ? 'rgb(250, 204, 21)' : 'rgb(156, 163, 175)';
  }
}
