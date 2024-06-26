import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  popular = [
    {
      idMeal: '52995',
      strMeal: 'BBQ Pork Sloppy Joes',
      strMealThumb: '../../../../assets/Images/hero/BBQ_Pork_Sloppy_Joes.jpg',
      rate: '4.5',
    },
    {
      idMeal: '53032',
      strMeal: 'Tonkatsu pork',
      strMealThumb: '../../../../assets/Images/hero/Tonkatsu_pork.jpg',
      rate: '4.2',
    },
    {
      idMeal: '52770',
      strMeal: 'Spaghetti Bolognese',
      strMealThumb: '../../../../assets/Images/hero/Spaghetti_Bolognese.jpg',
      rate: '4.7',
    },
    {
      idMeal: '52829',
      strMeal: 'Grilled Mac and Cheese Sandwich',
      strMealThumb:
        '../../../../assets/Images/hero/Grilled_Mac_and_Cheese_Sandwich.jpg',
      rate: '4.0',
    },
  ];

  sweet = [
    {
      idMeal: '52857',
      strMeal: 'Pumpkin Pie',
      strMealThumb: '../../../../assets/Images/hero/Pumpkin_Pie.jpg',
      rate: '4.5',
    },
    {
      idMeal: '52891',
      strMeal: 'Blackberry Fool',
      strMealThumb: '../../../../assets/Images/hero/Blackberry_Fool.jpg',
      rate: '4.2',
    },
    {
      idMeal: '52855',
      strMeal: 'Banana Pancakes',
      strMealThumb: '../../../../assets/Images/hero/Banana_Pancakes.jpg',
      rate: '4.7',
    },
  ];
}
