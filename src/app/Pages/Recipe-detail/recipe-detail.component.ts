import { Component, OnInit } from '@angular/core';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;
  ingredients: { name: string; measure: string; img: string }[] = [];
  faStar = faStar;
  faHeart = faHeart;
  stars = Array(5).fill(0);

  constructor() {
    this.recipe = history.state.recipe;
  }

  ngOnInit() {
    if (!this.recipe.strInstructions) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.recipe.idMeal}`,
      )
        .then((res) => res.json())
        .then((data) => {
          this.recipe = data.meals[0];
          this.getIngredients();
        });
    }
  }

  getIngredients() {
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.recipe[`strIngredient${i}`];
      const measure = this.recipe[`strMeasure${i}`];
      const img = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
      if (ingredient && measure) {
        this.ingredients.push({ name: ingredient, measure, img });
      }
    }
  }
}
