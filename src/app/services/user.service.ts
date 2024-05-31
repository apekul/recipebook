import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private favorites: any[] = [];
  private recipes: any[] = [];
  private ratings: { recipe: any; rating: number }[] = [];

  constructor() {
    this.loadState();
  }

  // Load the state from local storage
  loadState() {
    const favorites = localStorage.getItem('favorites');
    const recipes = localStorage.getItem('recipes');
    const ratings = localStorage.getItem('ratings');

    if (favorites) this.favorites = JSON.parse(favorites);
    if (recipes) this.recipes = JSON.parse(recipes);
    if (ratings) this.ratings = JSON.parse(ratings);
  }

  // Save the state to local storage
  saveState() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
    localStorage.setItem('ratings', JSON.stringify(this.ratings));
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

  // Add/Update rate to Recipe
  addRating(recipe: any, rating: number) {
    const existingRating = this.ratings.find(
      (r) => r.recipe.idMeal === recipe.idMeal,
    );
    if (existingRating) {
      existingRating.rating = rating;
    } else {
      this.ratings.push({ recipe, rating });
    }
    this.saveState();
  }
}
