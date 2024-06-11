import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-fav',
  templateUrl: './user-fav.component.html',
  styleUrl: './user-fav.component.css',
})
export class UserFavComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  faHeart = faHeart;
  favorites: any[] = [];
  filteredFavorites: any[] = [];

  constructor(
    private userServices: UserService,
    private router: Router,
  ) {
    this.favorites = this.getFavorites();
    this.filteredFavorites = this.favorites;
  }

  getFavorites() {
    return this.userServices.getFavorites();
  }

  filterFavorites() {
    const searchTerm = this.searchInput.nativeElement.value;
    if (!searchTerm) {
      this.filteredFavorites = this.favorites;
    } else {
      this.filteredFavorites = this.favorites.filter((favorite) =>
        favorite.strMeal.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
  }

  navigateToRecipeDetails(recipe: any) {
    this.router.navigate(['/recipe', recipe.idMeal], {
      state: { recipe: recipe },
    });
  }

  removeFromFavorites(recipe: any) {
    this.userServices.removeFromFavorites(recipe);
    this.favorites = this.userServices.getFavorites();
    this.filteredFavorites = this.favorites;
  }
}
