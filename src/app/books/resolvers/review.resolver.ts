import {ResolveFn} from '@angular/router';
import {Review} from "../model/review";
import {inject} from "@angular/core";
import {BooksService} from "../services/books.service";

export const reviewResolver: ResolveFn<Review[]> = (
  route,
  state
) => {
  return inject(BooksService).getAllReviewsForBook(route.paramMap.get('id'));
};
