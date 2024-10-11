import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Loan-new',
  templateUrl: './Loan-new.component.html',
  styleUrls: ['./Loan-new.component.scss']
})
export class LoanNewComponent {
  @ViewChild("LoanForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}