import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Navbar } from './Components/Navbar/navbar.component';
import { Footer } from './Components/Footer/footer.component';

import { RouterModule } from '@angular/router';
import { HomeModule } from './Pages/Home/home.module';
import { ProfileModule } from './Pages/Profile/profile.module';
import { RecipesListModule } from './Pages/Recipes-list/recipes-list.module';
import { routes } from './app.routes';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeDetailModule } from './Pages/Recipe-detail/recipe-detail.module';

@NgModule({
  declarations: [AppComponent, Navbar, Footer],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
    HomeModule,
    ProfileModule,
    RecipesListModule,
    FontAwesomeModule,
    RecipeDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
