import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ContactLog-card.component.html',
  styleUrls: ['./ContactLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ContactLog-card]': 'true'
  }
})

export class ContactLogCardComponent {


}