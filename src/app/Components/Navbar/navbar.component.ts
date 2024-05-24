import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {
  faHome,
  faInfoCircle,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faShrimp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class Navbar implements OnInit {
  currentPage: string = '';
  faShrimp = faShrimp;
  navItems: { name: string; path: string; icon: any }[] = [
    { name: 'Home', path: '/home', icon: faHome },
    { name: 'About', path: '/about', icon: faInfoCircle },
    { name: 'Contact', path: '/contact', icon: faEnvelope },
  ];
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.urlAfterRedirects;
      }
    });
  }
}
