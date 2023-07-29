import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-amount',
  templateUrl: './card-amount.component.html',
  styleUrls: ['./card-amount.component.scss']
})
export class CardAmountComponent {

  @Input() number : number = 0;
  @Input() title1 : string ='';
  @Input() title2 : string ='';

}
