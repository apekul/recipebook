import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  images = [
    '../../../../assets/Images/hero/cake.jpg',
    '../../../../assets/Images/hero/dumpling.jpg',
    '../../../../assets/Images/hero/taco.jpg',
    '../../../../assets/Images/hero/bowl.jpg',
  ];
  currentImageIndex = 0;

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    }, 10000);
  }
}
