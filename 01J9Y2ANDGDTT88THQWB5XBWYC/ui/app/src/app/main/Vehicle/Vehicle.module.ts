import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {VEHICLE_MODULE_DECLARATIONS, VehicleRoutingModule} from  './Vehicle-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    VehicleRoutingModule
  ],
  declarations: VEHICLE_MODULE_DECLARATIONS,
  exports: VEHICLE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VehicleModule { }