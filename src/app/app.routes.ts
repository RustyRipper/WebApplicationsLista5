import {Routes} from '@angular/router';
import {BookListComponent} from "./books/components/book-list/book-list.component";
import {bookListResolver} from "./books/resolvers/book-list.resolver";
import {BookDetailsComponent} from "./books/components/book-details/book-details.component";
import {bookDetailsResolver} from "./books/resolvers/book-details.resolver";
import {BookReviewsComponent} from "./books/components/book-reviews/book-reviews.component";
import {reviewResolver} from "./books/resolvers/review.resolver";
import {BookEditComponent} from "./books/components/book-edit/book-edit.component";
import {ReviewNewComponent} from "./books/components/review-new/review-new.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  },
  {
    path: 'books',
    component: BookListComponent,
    resolve: {
      books: bookListResolver
    }
  },
  {
    path: 'books/:id',
    component: BookDetailsComponent,
    resolve: {
      book: bookDetailsResolver,
      reviews: reviewResolver
    }
  },
  {
    path: 'books/:id/reviews',
    component: BookReviewsComponent,
    resolve: {
      reviews: reviewResolver
    }
  },
  {
    path: 'books/:id/edit',
    component: BookEditComponent,
    resolve: {
      book: bookDetailsResolver
    }
  },
  {
    path: 'books/:id/reviews/new',
    component: ReviewNewComponent,
    resolve: {
      book: bookDetailsResolver
    }
  }
];
