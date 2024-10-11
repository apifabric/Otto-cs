import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INSURANCE_MODULE_DECLARATIONS, InsuranceRoutingModule} from  './Insurance-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InsuranceRoutingModule
  ],
  declarations: INSURANCE_MODULE_DECLARATIONS,
  exports: INSURANCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InsuranceModule { }