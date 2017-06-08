import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular Training';
  hidden: boolean = false
  // 1. Schritt
  data = [
    { name: "Luke Skywalker", birth_year: "19BBY", gender: "male" },
    { name: "C-3PO", birth_year: "112BBY", gender: "n/a" },
    { name: "Darth Vader", birth_year: "41.9BBY", gender: "male" }
  ]

  public handleEvent(event) {
    console.log(event);
  }
}
