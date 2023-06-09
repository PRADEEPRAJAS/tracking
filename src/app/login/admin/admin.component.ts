import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from 'src/app/state.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminLoginForm!: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private stateService: StateService) { }
  ngOnInit(): void {
    this.adminLoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  submit() {
    this.loginService.adminLogin(this.adminLoginForm.value).subscribe({
      next: (data) => {
        if (data.adminLogin) {
          this.stateService.adminStatusToggle(data.adminLogin)
          this.router.navigateByUrl('/admin')
          localStorage.setItem("loginType", "admin")
        }
      },
      error: (err) => {
        alert(err.message)
      }
    })
  }

}
