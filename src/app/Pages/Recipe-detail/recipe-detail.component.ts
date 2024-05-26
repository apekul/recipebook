import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  itemId = '';
  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];
    this.itemId = id;
  }
}
