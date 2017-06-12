import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular Training';
  hidden: boolean = false;

  public handleEvent(event) {
    console.log(event);
  }
}
