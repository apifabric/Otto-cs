import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './home/Customer-home.component';
import { CustomerNewComponent } from './new/Customer-new.component';
import { CustomerDetailComponent } from './detail/Customer-detail.component';

const routes: Routes = [
  {path: '', component: CustomerHomeComponent},
  { path: 'new', component: CustomerNewComponent },
  { path: ':id', component: CustomerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Customer-detail-permissions'
      }
    }
  },{
    path: ':customer_id/Appointment', loadChildren: () => import('../Appointment/Appointment.module').then(m => m.AppointmentModule),
    data: {
        oPermission: {
            permissionId: 'Appointment-detail-permissions'
        }
    }
},{
    path: ':customer_id/ContactLog', loadChildren: () => import('../ContactLog/ContactLog.module').then(m => m.ContactLogModule),
    data: {
        oPermission: {
            permissionId: 'ContactLog-detail-permissions'
        }
    }
},{
    path: ':customer_id/Loan', loadChildren: () => import('../Loan/Loan.module').then(m => m.LoanModule),
    data: {
        oPermission: {
            permissionId: 'Loan-detail-permissions'
        }
    }
},{
    path: ':customer_id/Sale', loadChildren: () => import('../Sale/Sale.module').then(m => m.SaleModule),
    data: {
        oPermission: {
            permissionId: 'Sale-detail-permissions'
        }
    }
},{
    path: ':customer_id/TestDrive', loadChildren: () => import('../TestDrive/TestDrive.module').then(m => m.TestDriveModule),
    data: {
        oPermission: {
            permissionId: 'TestDrive-detail-permissions'
        }
    }
}
];

export const CUSTOMER_MODULE_DECLARATIONS = [
    CustomerHomeComponent,
    CustomerNewComponent,
    CustomerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }