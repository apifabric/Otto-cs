import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDriveHomeComponent } from './home/TestDrive-home.component';
import { TestDriveNewComponent } from './new/TestDrive-new.component';
import { TestDriveDetailComponent } from './detail/TestDrive-detail.component';

const routes: Routes = [
  {path: '', component: TestDriveHomeComponent},
  { path: 'new', component: TestDriveNewComponent },
  { path: ':id', component: TestDriveDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TestDrive-detail-permissions'
      }
    }
  }
];

export const TESTDRIVE_MODULE_DECLARATIONS = [
    TestDriveHomeComponent,
    TestDriveNewComponent,
    TestDriveDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDriveRoutingModule { }