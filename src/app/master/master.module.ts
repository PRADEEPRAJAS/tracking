import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';


@NgModule({
  declarations: [
    MasterComponent,
    EmployeeRegisterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
