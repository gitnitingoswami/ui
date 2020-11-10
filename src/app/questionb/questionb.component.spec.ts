import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionbComponent } from './questionb.component';

describe('QuestionbComponent', () => {
  let component: QuestionbComponent;
  let fixture: ComponentFixture<QuestionbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
