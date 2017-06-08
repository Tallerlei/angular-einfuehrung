import { Component } from '@angular/core';

@Component({
  selector: 'app-rest-parameters',
  templateUrl: './rest-parameters.component.html',
  styleUrls: ['./rest-parameters.component.css']
})
export class RestParametersComponent {
  public text: string;
  constructor() {
    this.restParameters('OmeZ', 'Enrico', 'Max', 'Talle', 'Kristina', 'Claudia');
  }
  public restParameters(one, two, ...rest) {
    this.text = "Hi " + one + ", hi " + two + " and also welcome: ";
    for(let i = 0; i < rest.length; i++) {
      this.text += rest[i] + " ";
    }
  }
}
