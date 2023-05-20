import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MasterComponent,
    EmployeeRegisterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MasterModule { }
