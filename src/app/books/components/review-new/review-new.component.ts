import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Review} from "../../model/review";
import {Book} from "../../model/book";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'bs-review-new',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './review-new.component.html',
  styleUrl: './review-new.component.scss'
})
export class ReviewNewComponent {
  readonly review: Review;
  readonly book: Book;

  constructor(
    private router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly booksService: BooksService
  ) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.review = {
      id: -1,
      forBook: Number(this.activatedRoute.snapshot.paramMap.get("id")),
      title: "",
      description: "",
      rate: 0
    }
    booksService.getAllReviews().subscribe(
      r => this.review.id = r.length + 1
    )
  }

  onSubmit() {
    this.booksService.saveReview(this.review).subscribe(
      {
        next: () => {
          this.router.navigate([`/books/${this.review.forBook}`]).then(r => {
          })
        }
      }
    );
  }
}
