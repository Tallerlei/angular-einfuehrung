import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const appRoutes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: '', redirectTo:'/books', pathMatch: 'full'},
  { path: 'books/:isbn', component: BookDetailComponent}
];

export const routing = RouterModule.forRoot(appRoutes)
