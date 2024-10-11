import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Insurance-card.component.html',
  styleUrls: ['./Insurance-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Insurance-card]': 'true'
  }
})

export class InsuranceCardComponent {


}