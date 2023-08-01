import { Component, ViewChild } from '@angular/core';
import { KeenSliderInstance } from 'keen-slider';
import KeenSlider from 'keen-slider';
import { data } from 'src/assets/data';
import { Calification } from '../interfaces/calification.interface';

@Component({
  selector: 'app-carousel-califications',
  templateUrl: './carousel-califications.component.html',
  styleUrls: ['./carousel-califications.component.scss',]
})
export class CarouselCalificationsComponent {
  @ViewChild("sliderRef") sliderRef:any;
  
  califications: Calification[] = data.califications;

 slider: KeenSliderInstance = null as any;

ngAfterViewInit() {
  this.slider = new KeenSlider(this.sliderRef.nativeElement, {
    loop: true,
    mode: "free",
    initial: 2,
    slides: { origin: "center", perView: 3 },
   
  })
}

ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
