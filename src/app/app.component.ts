import { Component } from '@angular/core';
import { Course } from './interfaces/course.interface';
import { data } from 'src/assets/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'ogilvy';
  courses: Course[] = data.courses;
  
}
