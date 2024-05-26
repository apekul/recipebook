import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { ItemDisplayComponent } from '../../Components/item-display/item-display.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ItemDisplayComponent,
    CategoryDisplayComponent,
    NewsletterComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
})
export class HomeModule {}
