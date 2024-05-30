import { Component } from '@angular/core';
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
export class ProfileComponent {
  selectedTab: string = 'My Recipes';
  nav = [
    { text: 'My Recipes', icon: faBookBookmark },
    { text: 'Favorites', icon: faHeart },
    { text: 'My Reviews', icon: faStar },
  ];
  onTabChange(tab: string) {
    this.selectedTab = tab;
  }
}
