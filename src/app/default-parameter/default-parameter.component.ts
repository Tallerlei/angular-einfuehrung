import { Component } from '@angular/core';

@Component({
  selector: 'app-default-parameter',
  templateUrl: './default-parameter.component.html',
  styleUrls: ['./default-parameter.component.css']
})
export class DefaultParameterComponent {
  public text: string;

  constructor() {
    this.defaultParameter();
  }
  defaultParameter(name = "Talle") {
    this.text = name + " created a component";
  }

}
