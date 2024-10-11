import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleHomeComponent } from './home/Vehicle-home.component';
import { VehicleNewComponent } from './new/Vehicle-new.component';
import { VehicleDetailComponent } from './detail/Vehicle-detail.component';

const routes: Routes = [
  {path: '', component: VehicleHomeComponent},
  { path: 'new', component: VehicleNewComponent },
  { path: ':id', component: VehicleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Vehicle-detail-permissions'
      }
    }
  },{
    path: ':vehicle_id/Appointment', loadChildren: () => import('../Appointment/Appointment.module').then(m => m.AppointmentModule),
    data: {
        oPermission: {
            permissionId: 'Appointment-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/Insurance', loadChildren: () => import('../Insurance/Insurance.module').then(m => m.InsuranceModule),
    data: {
        oPermission: {
            permissionId: 'Insurance-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/Sale', loadChildren: () => import('../Sale/Sale.module').then(m => m.SaleModule),
    data: {
        oPermission: {
            permissionId: 'Sale-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/Service', loadChildren: () => import('../Service/Service.module').then(m => m.ServiceModule),
    data: {
        oPermission: {
            permissionId: 'Service-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/TestDrive', loadChildren: () => import('../TestDrive/TestDrive.module').then(m => m.TestDriveModule),
    data: {
        oPermission: {
            permissionId: 'TestDrive-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/Warranty', loadChildren: () => import('../Warranty/Warranty.module').then(m => m.WarrantyModule),
    data: {
        oPermission: {
            permissionId: 'Warranty-detail-permissions'
        }
    }
}
];

export const VEHICLE_MODULE_DECLARATIONS = [
    VehicleHomeComponent,
    VehicleNewComponent,
    VehicleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }