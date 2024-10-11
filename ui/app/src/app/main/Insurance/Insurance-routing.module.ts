import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceHomeComponent } from './home/Insurance-home.component';
import { InsuranceNewComponent } from './new/Insurance-new.component';
import { InsuranceDetailComponent } from './detail/Insurance-detail.component';

const routes: Routes = [
  {path: '', component: InsuranceHomeComponent},
  { path: 'new', component: InsuranceNewComponent },
  { path: ':id', component: InsuranceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Insurance-detail-permissions'
      }
    }
  }
];

export const INSURANCE_MODULE_DECLARATIONS = [
    InsuranceHomeComponent,
    InsuranceNewComponent,
    InsuranceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { }