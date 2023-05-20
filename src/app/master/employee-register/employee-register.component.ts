import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DataService } from 'src/app/data.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, public dataService: DataService) {

  }
  matcher = new MyErrorStateMatcher();
  domains: [] | undefined;
  designations: [] | undefined;
  employeeDetails!: FormGroup;
  ngOnInit(): void {
    this.dataService.getDomain().subscribe({
      next: (data) => {
        this.domains = data;
      },
      error: (err) => {
        alert(err.message)
      }
    })
    this.dataService.getDesignation().subscribe({
      next: (data) => {
        this.designations = data;
      },
      error: (err) => {
        alert(err.message)
      }
    })

    this.employeeDetails = this.fb.group({
      employeeName: ['', Validators.required],
      employeeId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      domain: ['', Validators.required],
      designation: ['', Validators.required]
    })

  }
  get employeeName() {
    return this.employeeDetails.controls['employeeName']
  }
  get employeeId() {
    return this.employeeDetails.controls['employeeId']
  }
  get email() {
    return this.employeeDetails.controls['email']
  }
  get domain() {
    return this.employeeDetails.controls['domain']
  }
  get designation() {
    return this.employeeDetails.controls['designation']
  }
  submit() { }
}
