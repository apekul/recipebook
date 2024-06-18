import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private favorites: any[] = [];
  private recipes: any[] = [];
  // private ratings: { recipeID: any; rating: number }[] = []; // Global ratings
  private userRatings: { recipeID: any; rating: number; comment: string }[] =
    []; // User ratings

  constructor() {
    this.loadState();
  }

  // Load the state from local storage
  loadState() {
    const favorites = localStorage.getItem('favorites');
    const recipes = localStorage.getItem('recipes');
    const userRatings = localStorage.getItem('userRatings');

    if (favorites) this.favorites = JSON.parse(favorites);
    if (recipes) this.recipes = JSON.parse(recipes);
    if (userRatings) this.userRatings = JSON.parse(userRatings);
  }

  // Save the state to local storage
  saveState() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
    localStorage.setItem('userRatings', JSON.stringify(this.userRatings));
  }

  // Add to favorites
  addToFavorites(recipe: any) {
    this.favorites.push(recipe);
    this.saveState();
  }
  // Remove from favorites
  removeFromFavorites(recipe: any) {
    this.favorites = this.favorites.filter(
      (fav) => fav.idMeal !== recipe.idMeal,
    );
    this.saveState();
  }
  // Get favorites
  getFavorites() {
    return this.favorites;
  }

  // Add to new Recipe
  addNewRecipe(recipe: any) {
    this.recipes.push(recipe);
    this.saveState();
  }
  // Remove from Recipes
  removeFromRecipes(idMeal: string) {
    this.recipes = this.recipes.filter((rec) => rec.idMeal !== idMeal);
    this.saveState();
  }
  // Get Recipes
  getRecipes() {
    return this.recipes;
  }

  //  store user ratings
  //  store global ratings
  //  update user ratings with specific id
  //  merger user ratings with global ratings
  //  display global ratings in recipe details
  //  display user ratings in user profile

  // Add/Update rating in userRatings
  addUserRating(recipeID: any, rating: number, comment: string) {
    const existingRating = this.userRatings.find(
      (r) => r.recipeID === recipeID,
    );
    if (existingRating) {
      existingRating.rating = rating;
    } else {
      this.userRatings.push({ recipeID, rating, comment });
    }
    this.saveState();
  }

  getReview(recipeID: any) {
    return this.userRatings.filter((r) => r.recipeID === recipeID);
  }

  // return rating for a specific recipe
  // return userRating for profile page
}
