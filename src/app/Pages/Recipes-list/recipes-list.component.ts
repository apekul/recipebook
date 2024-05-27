import { Component } from '@angular/core';
import { categories, areas } from '../../../assets/dataObject';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent {
  sampleRecipes: any;
  category: string = '';
  area: string = '';
  searchTerm: string = '';

  categories = categories;
  areas = areas;
  itemLimit = 8;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {}

  loadMore() {
    this.itemLimit += 8;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params['category'];

      if (!this.category && !this.area) {
        this.category = 'Chicken';
      }

      this.fetchRecipes();
    });
  }

  fetchRecipes() {
    let url = '';

    // If a search term is provided, use the search URL
    if (this.searchTerm) {
      url =
        'https://www.themealdb.com/api/json/v1/1/search.php?s=' +
        this.searchTerm;
    }

    // If no search term is provided, but a category is selected, use the category filter URL
    else if (this.category) {
      url =
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.category;
    }

    // If no search term and no category is provided, but an area is selected, use the area filter URL
    else if (this.area) {
      url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=' + this.area;
    }

    // If no search term, category, or area is provided, return early
    else {
      return;
    }

    this.http.get(url).subscribe((recipe: any) => {
      this.sampleRecipes = recipe.meals;
    });
  }
}
