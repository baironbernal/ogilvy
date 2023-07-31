import { Component, ViewChild } from '@angular/core';
import { KeenSliderInstance } from 'keen-slider';
import KeenSlider from 'keen-slider';
import { data } from 'src/assets/data';
import { Calification } from '../interfaces/calification.interface';

@Component({
  selector: 'app-carousel-califications',
  templateUrl: './carousel-califications.component.html',
  styleUrls: ['./carousel-califications.component.scss']
})
export class CarouselCalificationsComponent {
  @ViewChild("sliderRef") sliderRef:any;
  
  califications: Calification[] = data.califications;

 slider: KeenSliderInstance = null as any;

ngAfterViewInit() {
  this.slider = new KeenSlider(this.sliderRef.nativeElement, {
    loop: true,
    mode: "free",
    slides: { origin: "auto", perView: 4, spacing: 20 },
    range: {
      min: -3,
      max: 3,
    },
  })
}

ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
