import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuescComponent } from './quesc.component';

describe('QuescComponent', () => {
  let component: QuescComponent;
  let fixture: ComponentFixture<QuescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
