import {Component} from '@angular/core';
import {Book} from '../../model/book';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {BooksService} from "../../services/books.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, switchMap} from "rxjs";

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule]
})
export class BookListComponent {

  books: Book[];
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private readonly activatedRoute: ActivatedRoute, private readonly bookService: BooksService) {
    this.books = this.activatedRoute.snapshot.data['books'];

    this.searchForm = this.fb.group({
      searchQuery: ['']
    });

    this.searchForm.get('searchQuery')?.valueChanges.pipe(
      debounceTime(200),
      switchMap(query => this.bookService.getAllBooks(query))
    ).subscribe((books: any[]) => {
      this.books = books;
    });
  }
}
