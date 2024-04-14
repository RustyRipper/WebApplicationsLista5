import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
import {Review} from "../model/review";

const booksApiPrefix = '/api/books';
const reviewsApiPrefix = '/api/reviews';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly http: HttpClient) {
  }

  getAllBooks(content: any = ""): Observable<Book[]> {
    return this.http.get<Book[]>(`${booksApiPrefix}?q=${content}`);
  }

  findBookById(id: any): Observable<Book> {
    return this.http.get<Book>(`${booksApiPrefix}/${id}`);
  }

  getAllReviewsForBook(id: any) {
    return this.http.get<Review[]>(`${reviewsApiPrefix}?forBook=${id}`);
  }

  saveBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${booksApiPrefix}/${book.id}`, book);
  }

  saveReview(review: Review): Observable<Review> {
    return this.http.post<Review>(reviewsApiPrefix, review);
  }

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(reviewsApiPrefix)
  }
}
