import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {
  faHome,
  faUser,
  faBookBookmark,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faShrimp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class Navbar implements OnInit, AfterViewInit {
  currentPage: string = '';
  faShrimp = faShrimp;
  faBars = faBars;
  faXmark = faXmark;
  isNavOpen = false; // for mobile
  navItems: { name: string; path: string; icon: any }[] = [
    { name: 'Home', path: '/home', icon: faHome },
    { name: 'Recipes', path: '/recipes', icon: faBookBookmark },
    { name: 'Profile', path: '/profile', icon: faUser },
  ];

  @ViewChild('navbar') navbar!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.urlAfterRedirects;
      }
    });
  }

  ngAfterViewInit() {
    this.onWindowScroll(); // call onWindowScroll initially to set the class if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 150) {
      this.navbar.nativeElement.classList.add('fixed-nav');
    } else {
      this.navbar.nativeElement.classList.remove('fixed-nav');
    }
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  navigate(path: string, event: Event) {
    if (this.router.url === path) {
      event.preventDefault();
    } else {
      this.router.navigate([path]);
    }
  }
}
