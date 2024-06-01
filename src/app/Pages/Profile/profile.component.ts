import { Component, OnInit } from '@angular/core';
import {
  faBookBookmark,
  faHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  selectedTab: string = 'My Recipes';
  nav = [
    { text: 'My Recipes', icon: faBookBookmark },
    { text: 'Favorites', icon: faHeart },
    { text: 'My Reviews', icon: faStar },
  ];

  ngOnInit() {
    // Get the selected tab from localStorage when the component is initialized
    this.selectedTab = localStorage.getItem('selectedTab') || 'My Recipes';
  }

  onTabChange(tab: string) {
    this.selectedTab = tab;
    localStorage.setItem('selectedTab', tab);
  }
}
