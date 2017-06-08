import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowFuntionsComponent } from './arrow-funtions.component';

describe('ArrowFuntionsComponent', () => {
  let component: ArrowFuntionsComponent;
  let fixture: ComponentFixture<ArrowFuntionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowFuntionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowFuntionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
