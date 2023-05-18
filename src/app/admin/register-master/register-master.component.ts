import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-register-master',
  templateUrl: './register-master.component.html',
  styleUrls: ['./register-master.component.scss']
})
export class RegisterMasterComponent implements OnInit {
  masterRegister!: FormGroup;
  constructor(private fb: FormBuilder, private adminService: AdminService) { }
  ngOnInit(): void {
    this.masterRegister = this.fb.group({
      employeeId: [''],
      employeeName: [''],
      designation: [''],
      project: [''],
      domain: ['']
    })

  }
  submit() {
    let masterDetails = { ...this.masterRegister.value }
    masterDetails.password = `${masterDetails.employeeId}@Cognizant`
    this.adminService.masterRegister(masterDetails).subscribe({
      next: (res) => {
        alert("Registerd")
      },
      error: (err) => {
        alert(err.message)
      }
    })
  }

}
