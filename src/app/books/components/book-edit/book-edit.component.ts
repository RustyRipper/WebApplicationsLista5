import {Component} from '@angular/core';
import {Book} from "../../model/book";
import {ActivatedRoute, RouterLink, Router} from "@angular/router";
import {BooksService} from "../../services/books.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'bs-book-edit',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  readonly book: Book;

  constructor(private router: Router, private readonly activatedRoute: ActivatedRoute, private readonly booksService: BooksService) {
    this.book = this.activatedRoute.snapshot.data['book'];
  }

  onSubmit() {
    this.booksService.saveBook(this.book).subscribe({
      next: () => {
        this.router.navigate(['/books']).then(r => {
        })
      }
    });
  }
}
