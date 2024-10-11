import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactLogHomeComponent } from './home/ContactLog-home.component';
import { ContactLogNewComponent } from './new/ContactLog-new.component';
import { ContactLogDetailComponent } from './detail/ContactLog-detail.component';

const routes: Routes = [
  {path: '', component: ContactLogHomeComponent},
  { path: 'new', component: ContactLogNewComponent },
  { path: ':id', component: ContactLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ContactLog-detail-permissions'
      }
    }
  }
];

export const CONTACTLOG_MODULE_DECLARATIONS = [
    ContactLogHomeComponent,
    ContactLogNewComponent,
    ContactLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactLogRoutingModule { }