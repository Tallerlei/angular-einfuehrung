import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {

  constructor() {
    let smallBall = new AnyObjectClass('ball', 'small');
    smallBall.whatIsIt();

    // let foot = new AnyObjectClass('foot');
    // foot.whatIsIt();
    //
    // let riesigerKeks = new AnyObjectClass('cookie', 'giant');
    // console.log(riesigerKeks.size);
    //
    // let vwKaefer = new Car("VW", "decent");
    // vwKaefer.whatIsIt()
  }

}

// Basis Klasse mit gettern und settern
class AnyObjectClass {
  _size: string;
  _type: string;
  constructor(type = 'something', size = 'average') {
    this._type = type;
    this._size = size;
  }

  set type(value) {
    this._type = value;
  }
  get type() {
    return this._type;
  }
  set size(value) {
    this._size = value;
  }
  get size() {
    return `It is a ${this._size}`;
  }
  whatIsIt() {
    console.log(this.size + ' sized ' + this.type + '!');
  }

}

// Erweiterte Klasse
class Car extends AnyObjectClass {
  public _brand: string;
  public _power: string;
  constructor(brand = 'unknown', power = 'not much', type = 'car', size = 'big') {
    super(type, size);
    this._brand = brand;
    this._power = power;
  }

  whatIsIt() {
    console.log("Of course it is a car and it is a " + this._brand + " with " + this._power + " power.")
  }



}
