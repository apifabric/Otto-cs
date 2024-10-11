import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Insurance-new',
  templateUrl: './Insurance-new.component.html',
  styleUrls: ['./Insurance-new.component.scss']
})
export class InsuranceNewComponent {
  @ViewChild("InsuranceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}