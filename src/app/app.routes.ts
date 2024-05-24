import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home.component';
import { AboutComponent } from './Pages/About/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home' },
];
