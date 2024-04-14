import {Component} from '@angular/core';
import {Book} from "../../model/book";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Review} from "../../model/review";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'bs-book-details',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  readonly book: Book;
  readonly reviews: Review[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.reviews = this.activatedRoute.snapshot.data['reviews'];
  }
}
