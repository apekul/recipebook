import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

// Components
import { RecipesListComponent } from './recipes-list.component';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  declarations: [RecipesListComponent, RecipeComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class RecipesListModule {}
