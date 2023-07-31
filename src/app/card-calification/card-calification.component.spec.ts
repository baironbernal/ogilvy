import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCalificationComponent } from './card-calification.component';

describe('CardCalificationComponent', () => {
  let component: CardCalificationComponent;
  let fixture: ComponentFixture<CardCalificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCalificationComponent]
    });
    fixture = TestBed.createComponent(CardCalificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
