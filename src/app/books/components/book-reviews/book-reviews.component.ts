import {Component} from '@angular/core';
import {Review} from "../../model/review";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'bs-book-reviews',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './book-reviews.component.html',
  styleUrl: './book-reviews.component.scss'
})
export class BookReviewsComponent {
  reviews: Review[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.reviews = this.activatedRoute.snapshot.data['reviews'];
  }
}
