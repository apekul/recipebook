import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  imports: [CommonModule],
})
export class HomeModule {}
