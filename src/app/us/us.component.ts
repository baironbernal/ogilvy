import { Component, Input } from '@angular/core';
import { Us } from '../interfaces/us.interface';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent {
  @Input() us: Us = {
    button_name: '',
    description: '', 
    img: '',
    items: [],
    title: '',
    title_purple: ''
  }
}
