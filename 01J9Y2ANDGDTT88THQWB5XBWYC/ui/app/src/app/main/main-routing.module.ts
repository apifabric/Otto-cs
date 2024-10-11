import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Appointment', loadChildren: () => import('./Appointment/Appointment.module').then(m => m.AppointmentModule) },
    
        { path: 'ContactLog', loadChildren: () => import('./ContactLog/ContactLog.module').then(m => m.ContactLogModule) },
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'Insurance', loadChildren: () => import('./Insurance/Insurance.module').then(m => m.InsuranceModule) },
    
        { path: 'Loan', loadChildren: () => import('./Loan/Loan.module').then(m => m.LoanModule) },
    
        { path: 'Part', loadChildren: () => import('./Part/Part.module').then(m => m.PartModule) },
    
        { path: 'Sale', loadChildren: () => import('./Sale/Sale.module').then(m => m.SaleModule) },
    
        { path: 'Service', loadChildren: () => import('./Service/Service.module').then(m => m.ServiceModule) },
    
        { path: 'TestDrive', loadChildren: () => import('./TestDrive/TestDrive.module').then(m => m.TestDriveModule) },
    
        { path: 'Vehicle', loadChildren: () => import('./Vehicle/Vehicle.module').then(m => m.VehicleModule) },
    
        { path: 'Warranty', loadChildren: () => import('./Warranty/Warranty.module').then(m => m.WarrantyModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }