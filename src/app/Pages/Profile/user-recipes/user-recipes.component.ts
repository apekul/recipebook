import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { v4 as uuidv4 } from 'uuid';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { categories, areas } from '../../../../assets/dataObject';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
  faXmark = faXmark;

  constructor(
    private userServices: UserService,
    private fb: FormBuilder,
  ) {
    this.formGroup = this.fb.group({
      idMeal: uuidv4(),
      strMeal: ['', Validators.required],
      strCategory: '',
      strArea: '',
      strInstructions: '',
      strMealThumb: null,
      strIngredient1: '',
      strMeasure1: '',
    });
  }
  addIngredient() {
    this.ingredientCount++;
    this.formGroup.addControl(
      `strIngredient${this.ingredientCount}`,
      new FormControl(''),
    );
    this.formGroup.addControl(
      `strMeasure${this.ingredientCount}`,
      new FormControl(''),
    );
  }

  removeIngredient(index: number) {
    // Shift up all the ingredients and measures after the one removed
    for (let i = index; i < this.ingredientCount - 1; i++) {
      this.formGroup.controls[`strIngredient${i + 1}`].setValue(
        this.formGroup.controls[`strIngredient${i + 2}`].value,
      );
      this.formGroup.controls[`strMeasure${i + 1}`].setValue(
        this.formGroup.controls[`strMeasure${i + 2}`].value,
      );
    }

    // Remove the last ingredient and measure
    this.formGroup.removeControl(`strIngredient${this.ingredientCount}`);
    this.formGroup.removeControl(`strMeasure${this.ingredientCount}`);

    // Decrease the ingredient count
    this.ingredientCount--;
  }

  updateToggleForm() {
    this.toggleForm = !this.toggleForm;
    this.formGroup.reset({
      idMeal: uuidv4(),
      strMeal: '',
      strCategory: '',
      strInstructions: '',
      strMealThumb: null,
    });
    this.ingredientCount = 1;
  }

  // get user Recipes
  getRecipes() {
    return this.userServices.getRecipes();
  }

  // Update file image
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formGroup.patchValue({
          strMealThumb: reader.result,
        });
      };
    }
  }

  // Remove recipe
  removeRecipe(idMeal: 'string') {
    this.userServices.removeFromRecipes(idMeal);
  }

  // submit form
  submitForm() {
    if (this.formGroup.invalid) {
      // If the form is invalid, mark all controls as touched so that the error messages are displayed
      this.formGroup.markAllAsTouched();
      return;
    }
    this.userServices.addNewRecipe(this.formGroup.value);
    this.updateToggleForm();
  }
}
