import { Component } from '@angular/core';

@Component({
  selector: 'app-template-string',
  templateUrl: './template-string.component.html',
  styleUrls: ['./template-string.component.css']
})
export class TemplateStringComponent {
  public name: string = 'Angular';
  public templateString = `

  Hi
  My
  Name
  is:
  ${this.name}


  `
  public htmlTemplateString = `
  <b>Hi</b>
  <h1>My</h1>
  Name
  is:
  <i>${this.name}</i>
  `
  constructor() { }


}
