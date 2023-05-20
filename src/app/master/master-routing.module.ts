import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { MasterComponent } from './master.component';

const routes: Routes = [{ path: '', component: MasterComponent },
{ path: 'registerEmployee', component: EmployeeRegisterComponent, outlet: 'register' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
