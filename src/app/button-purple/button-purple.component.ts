import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-purple',
  templateUrl: './button-purple.component.html',
  styleUrls: ['./button-purple.component.scss']
})
export class ButtonPurpleComponent {
  @Input() name: string = '';
}
