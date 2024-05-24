import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Navbar } from './Components/Navbar/navbar.component';
import { Footer } from './Components/Footer/footer.component';

import { RouterModule } from '@angular/router';
import { HomeModule } from './Pages/Home/home.module';
import { routes } from './app.routes';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, Navbar, Footer],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
