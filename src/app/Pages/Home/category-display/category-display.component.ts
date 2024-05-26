import { Component } from '@angular/core';
import { categories } from '../../../../assets/categories';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrl: './category-display.component.css',
})
export class CategoryDisplayComponent {
  categories = categories;
}
