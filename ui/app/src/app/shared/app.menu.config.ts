import { MenuRootItem } from 'ontimize-web-ngx';

import { AppointmentCardComponent } from './Appointment-card/Appointment-card.component';

import { ContactLogCardComponent } from './ContactLog-card/ContactLog-card.component';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { InsuranceCardComponent } from './Insurance-card/Insurance-card.component';

import { LoanCardComponent } from './Loan-card/Loan-card.component';

import { PartCardComponent } from './Part-card/Part-card.component';

import { SaleCardComponent } from './Sale-card/Sale-card.component';

import { ServiceCardComponent } from './Service-card/Service-card.component';

import { TestDriveCardComponent } from './TestDrive-card/TestDrive-card.component';

import { VehicleCardComponent } from './Vehicle-card/Vehicle-card.component';

import { WarrantyCardComponent } from './Warranty-card/Warranty-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Appointment', name: 'APPOINTMENT', icon: 'view_list', route: '/main/Appointment' }
    
        ,{ id: 'ContactLog', name: 'CONTACTLOG', icon: 'view_list', route: '/main/ContactLog' }
    
        ,{ id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'Insurance', name: 'INSURANCE', icon: 'view_list', route: '/main/Insurance' }
    
        ,{ id: 'Loan', name: 'LOAN', icon: 'view_list', route: '/main/Loan' }
    
        ,{ id: 'Part', name: 'PART', icon: 'view_list', route: '/main/Part' }
    
        ,{ id: 'Sale', name: 'SALE', icon: 'view_list', route: '/main/Sale' }
    
        ,{ id: 'Service', name: 'SERVICE', icon: 'view_list', route: '/main/Service' }
    
        ,{ id: 'TestDrive', name: 'TESTDRIVE', icon: 'view_list', route: '/main/TestDrive' }
    
        ,{ id: 'Vehicle', name: 'VEHICLE', icon: 'view_list', route: '/main/Vehicle' }
    
        ,{ id: 'Warranty', name: 'WARRANTY', icon: 'view_list', route: '/main/Warranty' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AppointmentCardComponent

    ,ContactLogCardComponent

    ,CustomerCardComponent

    ,EmployeeCardComponent

    ,InsuranceCardComponent

    ,LoanCardComponent

    ,PartCardComponent

    ,SaleCardComponent

    ,ServiceCardComponent

    ,TestDriveCardComponent

    ,VehicleCardComponent

    ,WarrantyCardComponent

];