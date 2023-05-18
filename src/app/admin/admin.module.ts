import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegisterMasterComponent } from './register-master/register-master.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    RegisterMasterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatTabsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
