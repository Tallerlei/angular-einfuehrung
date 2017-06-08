import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-funtions',
  templateUrl: './arrow-funtions.component.html',
  styleUrls: ['./arrow-funtions.component.css']
})
export class ArrowFuntionsComponent {
  public names = ['Max', 'OmeZ', 'Enrico', 'Talle'];
  constructor() {
    // arrow function
    let arrowFunction = (name) => {
      console.log("Aufstehen " + name, "!")
    };

    // call
    this.callArrowFuntion(arrowFunction);

    // call with other arrow function
    // this.callArrowFuntion((name) => {
    //   console.log('Bist Du noch wach ' + name + '???');
    // })
  }

  public callArrowFuntion(callback) {
    for (let i = 0; i < this.names.length; i++) {
      callback(this.names[i]);
    }
  }


}
