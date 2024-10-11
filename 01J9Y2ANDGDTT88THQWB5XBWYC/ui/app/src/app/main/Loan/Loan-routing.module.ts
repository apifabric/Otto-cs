import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanHomeComponent } from './home/Loan-home.component';
import { LoanNewComponent } from './new/Loan-new.component';
import { LoanDetailComponent } from './detail/Loan-detail.component';

const routes: Routes = [
  {path: '', component: LoanHomeComponent},
  { path: 'new', component: LoanNewComponent },
  { path: ':id', component: LoanDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Loan-detail-permissions'
      }
    }
  }
];

export const LOAN_MODULE_DECLARATIONS = [
    LoanHomeComponent,
    LoanNewComponent,
    LoanDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }