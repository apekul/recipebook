import { Component, Input } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { categories, areas } from '../../../../../assets/dataObject';
import { FormControl, FormGroup } from '@angular/forms';
import { faXmark, faShrimp } from '@fortawesome/free-solid-svg-icons';
import imageCompression from 'browser-image-compression';
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css',
})
export class RecipeFormComponent {
  @Input() formGroup!: FormGroup;
  @Input() updateToggleForm!: () => void;
  categories = categories;
  areas = areas;
  ingredientCount = 1;
  faXmark = faXmark;
  faShrimp = faShrimp;

  constructor(private userServices: UserService) {}
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

  // Update file image
  async onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      const options = {
        maxSizeMB: 1, // (max file size in MB)
        maxWidthOrHeight: 1920, // compress the image if it's width or height is greater than this value
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.readAsDataURL(compressedFile);

        reader.onload = () => {
          this.formGroup.patchValue({
            strMealThumb: reader.result,
          });
        };
      } catch (error) {
        console.error('Error occurred while compressing the image', error);
      }
    }
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
}
