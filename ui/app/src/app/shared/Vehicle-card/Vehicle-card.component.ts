import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Vehicle-card.component.html',
  styleUrls: ['./Vehicle-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Vehicle-card]': 'true'
  }
})

export class VehicleCardComponent {


}