import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

// Components
import { RecipeDetailComponent } from './recipe-detail.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [RecipeDetailComponent, ReviewsComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule, ReactiveFormsModule],
})
export class RecipeDetailModule {}
