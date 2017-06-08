import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DefaultParameterComponent } from './default-parameter/default-parameter.component';
import { RestParametersComponent } from './rest-parameters/rest-parameters.component';
import { ArrowFuntionsComponent } from './arrow-funtions/arrow-funtions.component';
import { TemplateStringComponent } from './template-string/template-string.component';
import { ClassesComponent } from './classes/classes.component';
import { DestructuringComponent } from './destructuring/destructuring.component';
import { BookListComponent } from './book-list/book-list.component';

import { BookDataService } from './shared/book-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultParameterComponent,
    RestParametersComponent,
    ArrowFuntionsComponent,
    TemplateStringComponent,
    ClassesComponent,
    DestructuringComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BookDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
