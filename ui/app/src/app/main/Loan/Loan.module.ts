import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LOAN_MODULE_DECLARATIONS, LoanRoutingModule} from  './Loan-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LoanRoutingModule
  ],
  declarations: LOAN_MODULE_DECLARATIONS,
  exports: LOAN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoanModule { }