import { Component, Input } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent {
  @Input() course: Course = {
    id:1,
    name: '',
    description: '',
    buttonName: 'READ MORE'
  }
}
