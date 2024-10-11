import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CONTACTLOG_MODULE_DECLARATIONS, ContactLogRoutingModule} from  './ContactLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ContactLogRoutingModule
  ],
  declarations: CONTACTLOG_MODULE_DECLARATIONS,
  exports: CONTACTLOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactLogModule { }