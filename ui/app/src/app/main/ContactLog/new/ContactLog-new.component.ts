import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ContactLog-new',
  templateUrl: './ContactLog-new.component.html',
  styleUrls: ['./ContactLog-new.component.scss']
})
export class ContactLogNewComponent {
  @ViewChild("ContactLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}