import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { v4 as uuidv4 } from 'uuid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { categories, areas } from '../../../../assets/dataObject';
import { faTrash, faShrimp } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrl: './user-recipes.component.css',
})
export class UserRecipesComponent {
  formGroup: FormGroup;
  toggleForm = false;
  categories = categories;
  areas = areas;
  ingredientCount = 1;
  faTrash = faTrash;
  faShrimp = faShrimp;

  constructor(
    private userServices: UserService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.formGroup = this.fb.group({
      idMeal: uuidv4(),
      strMeal: ['', Validators.required],
      strCategory: '',
      strArea: '',
      strInstructions: ['', Validators.required],
      strMealThumb: null,
      strIngredient1: ['', Validators.required],
      strMeasure1: ['', Validators.required],
    });
  }

  updateToggleForm() {
    this.toggleForm = !this.toggleForm;
    this.formGroup.reset({
      idMeal: uuidv4(),
      strMeal: '',
      strCategory: '',
      strArea: '',
      strInstructions: '',
      strMealThumb: null,
    });
    this.ingredientCount = 1;
  }

  // get user Recipes
  getRecipes() {
    return this.userServices.getRecipes();
  }

  // Remove recipe
  removeRecipe(idMeal: 'string') {
    this.userServices.removeFromRecipes(idMeal);
  }

  navigateToRecipeDetails(recipe: any) {
    this.router.navigate(['/recipe', recipe.idMeal], {
      state: { recipe: recipe },
    });
  }
}
