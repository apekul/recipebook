import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

// Components
import { ProfileComponent } from './profile.component';
import { UserFavComponent } from './user-fav/user-fav.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserRecipesComponent } from './user-recipes/user-recipes.component';

@NgModule({
  declarations: [
    ProfileComponent,
    UserFavComponent,
    UserReviewsComponent,
    UserRecipesComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
})
export class ProfileModule {}
