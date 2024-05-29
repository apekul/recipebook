import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-fav',
  templateUrl: './user-fav.component.html',
  styleUrl: './user-fav.component.css',
})
export class UserFavComponent {
  faHeart = faHeart;
  constructor(
    private userServices: UserService,
    private router: Router,
  ) {}

  getFavorites() {
    return this.userServices.getFavorites();
  }

  navigateToRecipeDetails(recipe: any) {
    this.router.navigate(['/recipe', recipe.idMeal], {
      state: { recipe: recipe },
    });
  }

  removeFromFavorites(recipe: any) {
    this.userServices.removeFromFavorites(recipe);
  }
}
