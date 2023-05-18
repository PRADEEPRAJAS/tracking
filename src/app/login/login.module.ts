import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AdminComponent } from './admin/admin.component';
import { MasterComponent } from './master/master.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    MasterComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    MatTabsModule
  ]
})
export class LoginModule { }
