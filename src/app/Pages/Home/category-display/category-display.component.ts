import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from '../../../../assets/dataObject';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrl: './category-display.component.css',
})
export class CategoryDisplayComponent {
  categories = categories;

  constructor(private router: Router) {}

  onCategoryClick(category: string) {
    this.router.navigate(['/recipes', { category: category }]);
  }
}
