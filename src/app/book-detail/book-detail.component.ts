import { Component, OnInit } from '@angular/core';

import {RouterModule, ActivatedRoute} from '@angular/router';

import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public book;
  public isbn;
  constructor(
    private route: ActivatedRoute,
    private bookDataService: BookDataService
  ) { }

  ngOnInit() {
    this.route
      .params
      .subscribe((params) => {
        this.bookDataService
          .getBookByISBN(params.isbn)
          .subscribe((book) => this.book = book);
      })

  }

}
