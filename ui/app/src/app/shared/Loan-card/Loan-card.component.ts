import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Loan-card.component.html',
  styleUrls: ['./Loan-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Loan-card]': 'true'
  }
})

export class LoanCardComponent {


}