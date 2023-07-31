import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCalificationsComponent } from './carousel-califications.component';

describe('CarouselCalificationsComponent', () => {
  let component: CarouselCalificationsComponent;
  let fixture: ComponentFixture<CarouselCalificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselCalificationsComponent]
    });
    fixture = TestBed.createComponent(CarouselCalificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
