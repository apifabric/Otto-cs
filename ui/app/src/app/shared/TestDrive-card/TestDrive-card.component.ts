import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TestDrive-card.component.html',
  styleUrls: ['./TestDrive-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TestDrive-card]': 'true'
  }
})

export class TestDriveCardComponent {


}