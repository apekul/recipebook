import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home.component';
import { ProfileComponent } from './Pages/Profile/profile.component';
import { RecipesListComponent } from './Pages/Recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './Pages/Recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'recipes', component: RecipesListComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: '**', redirectTo: 'home' },
];
