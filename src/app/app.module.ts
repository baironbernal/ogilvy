import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CardCourseComponent } from './card-course/card-course.component';
import { ButtonPurpleComponent } from './button-purple/button-purple.component';
import { CardAmountComponent } from './card-amount/card-amount.component';
import { CarouselCalificationsComponent } from './carousel-califications/carousel-califications.component';
import { CardCalificationComponent } from './card-calification/card-calification.component';
import { UsComponent } from './us/us.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FormComponent,
    FooterComponent,
    ButtonComponent,
    CardProfileComponent,
    CardCourseComponent,
    ButtonPurpleComponent,
    CardAmountComponent,
    
    CarouselCalificationsComponent,
         CardCalificationComponent,
         UsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
