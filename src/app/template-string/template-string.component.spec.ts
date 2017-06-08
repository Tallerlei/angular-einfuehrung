import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStringComponent } from './template-string.component';

describe('TemplateStringComponent', () => {
  let component: TemplateStringComponent;
  let fixture: ComponentFixture<TemplateStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
