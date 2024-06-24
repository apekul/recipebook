import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent implements OnInit {
  review: any[] = []; // User Review
  id: any;
  showForm = false;
  faStar = faStar;
  faPlay = faPlay;
  stars = Array(5).fill(0);

  // Example how totla reviews each rate star
  // every index represents star rate [1,2,3,4,5]
  reviews = [10, 20, 30, 25, 15];
  totalReviews: any = [];

  constructor(
    private userServices: UserService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.review = this.userServices.getReview(this.id);
    this.totalReviews = this.reviews.reduce((acc, curr) => +acc + +curr);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  calculatePercentage(starCount: number): number {
    return this.totalReviews ? (starCount / this.totalReviews) * 100 : 0;
  }
}
