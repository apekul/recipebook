import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { v4 as uuidv4 } from 'uuid';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { categories, areas } from '../../../../assets/dataObject';

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

  constructor(
    private userServices: UserService,
    private fb: FormBuilder,
  ) {
    this.formGroup = this.fb.group({
      idMeal: uuidv4(),
      strMeal: '',
      strCategory: '',
      strArea: '',
      strInstructions: '',
      strIngredient1: '',
      strMeasure1: '',
      strMealThumb: null,
    });
  }

  updateToggleForm() {
    this.toggleForm = !this.toggleForm;
    this.formGroup.reset({
      idMeal: uuidv4(),
      strMeal: '',
      strCategory: '',
      strInstructions: '',
      strIngredient1: '',
      strMeasure1: '',
      strMealThumb: null,
    });
  }

  // get user Recipes
  getRecipes() {
    return this.userServices.getRecipes();
  }

  // add new recipe
  addNewRecipe(recipe: any) {
    this.userServices.addNewRecipe(recipe);
  }

  // Remove recipe
  removeRecipe(recipe: any) {
    this.userServices.removeFromRecipes(recipe);
  }

  // submit form
  submitForm() {
    console.log('form submited', this.formGroup.value);
  }
}
