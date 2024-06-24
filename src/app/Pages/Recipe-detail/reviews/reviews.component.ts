import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent implements OnInit {
  review: any[] = [];
  id: any;
  showForm = false;
  faStar = faStar;
  stars = Array(5).fill(0);

  constructor(
    private userServices: UserService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.review = this.userServices.getReview(this.id);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
