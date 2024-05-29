import { Component, Input } from '@angular/core';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

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

  constructor(
    private router: Router,
    private userServices: UserService,
  ) {}

  getStarColor(index: number, rate: number) {
    return index < rate ? 'rgb(250, 204, 21)' : 'rgb(156, 163, 175)';
  }

  navigateToRecipeDetails() {
    this.router.navigate(['/recipe', this.recipe.idMeal], {
      state: { recipe: this.recipe },
    });
  }

  // add/remove from favorites
  addToFavorites() {
    const favorites = this.userServices.getFavorites();
    if (favorites.some((fav) => fav.idMeal === this.recipe.idMeal)) {
      // If the recipe is already a favorite, remove it
      this.userServices.removeFromFavorites(this.recipe);
    } else {
      // If the recipe is not a favorite, add it
      this.userServices.addToFavorites(this.recipe);
    }
  }

  // Check if the recipe is in the favorites
  checkIfFav() {
    const favourites = this.userServices.getFavorites();
    return favourites.some((fav) => fav.idMeal === this.recipe.idMeal);
  }
}
