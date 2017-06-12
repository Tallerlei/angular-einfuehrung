import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
@Injectable()
export class BookDataService {

  constructor(
    private http: Http
  ) { }

  // public getBooks(): any[] {
  //   return [
  //     {
  //       "title": "Design Patterns",
  //       "isbn": "978-0-20163-361-0",
  //       "author": "Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides"
  //     },
  //     {
  //       "title": "REST und HTTP",
  //       "isbn": "978-3-86490-120-1",
  //       "author": "Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf"
  //     },
  //     {
  //       "title": "Eloquent JavaScript",
  //       "isbn": " 978-1-59327-584-6",
  //       "author": "Marijn Haverbeke"
  //     }
  //   ];
  // }

  public getBooks() {
    return this.http.get('http://bookmonkey-api.angularjs.de/books').map(response => response.json());
  }

  public getBookByISBN(isbn) {    
    return this.http.get('http://bookmonkey-api.angularjs.de/books/' + isbn).map(response => response.json());
  }
}
