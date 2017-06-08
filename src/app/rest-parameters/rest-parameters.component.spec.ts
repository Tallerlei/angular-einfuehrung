import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestParametersComponent } from './rest-parameters.component';

describe('RestParametersComponent', () => {
  let component: RestParametersComponent;
  let fixture: ComponentFixture<RestParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
