import { Component, Input } from '@angular/core';
import { Calification } from '../interfaces/calification.interface';

@Component({
  selector: 'app-card-calification',
  templateUrl: './card-calification.component.html',
  styleUrls: ['./card-calification.component.scss']
})
export class CardCalificationComponent {
  @Input() calification: Calification = {
    comment: '',
    name: '',
    url_image : ''
  }
}
