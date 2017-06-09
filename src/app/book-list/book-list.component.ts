import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();
  public books: {}[] = [];
  constructor(
    private bookDataService: BookDataService

  ) {
  }
  ngOnInit() {
    this.bookDataService.getBooks().subscribe((books)=> {
      this.books = books;
    });
  }

  clickEvent(event) {
    this.titleClicked.emit('EventData: ' + event.target.innerText);
  }
}
