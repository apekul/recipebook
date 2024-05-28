import { Component, Input } from '@angular/core';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}
  getStarColor(index: number, rate: number) {
    return index < rate ? 'rgb(250, 204, 21)' : 'rgb(156, 163, 175)';
  }

  navigateToRecipeDetails() {
    this.router.navigate(['/recipe', this.recipe.idMeal], {
      state: { recipe: this.recipe },
    });
  }

  addToFavorites(idMeal: string) {}
}
