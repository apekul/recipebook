import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrl: './user-recipes.component.css',
})
export class UserRecipesComponent {
  constructor(private userServices: UserService) {}

  getRecipes() {
    return this.userServices.getRecipes();
  }

  addNewRecipe(recipe: any) {
    this.userServices.addNewRecipe(recipe);
  }

  removeRecipe(recipe: any) {
    this.userServices.removeFromRecipes(recipe);
  }
}
