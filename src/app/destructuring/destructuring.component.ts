import { Component } from '@angular/core';

@Component({
  selector: 'app-destructuring',
  templateUrl: './destructuring.component.html',
  styleUrls: ['./destructuring.component.css']
})
export class DestructuringComponent {
  public text: string;
  public names = ['Max', 'OmeZ', 'Enrico', 'Talle'];
  public stuff = {length: 20, width: 30, height: 80}
  constructor() {
    let [a, b , c, d] = this.names;
    let {length, width, height} = this.stuff;


    console.log(a);
    console.log(width);
  }


}
