import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from 'src/app/state.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private stateService: StateService
  ) { }
  masterLogin!: FormGroup;
  ngOnInit(): void {
    this.masterLogin = this.fb.group({
      employeeId: [''],
      password: [''],
    });
  }
  login() {
    this.loginService.masterLogin(this.masterLogin.value).subscribe({
      next: (res) => {
        if (res.length === 1) {
          this.stateService.loginUserDetails = res;
          localStorage.setItem('loginUser', JSON.stringify(res));
          localStorage.setItem('loginType', 'master');
          this.stateService.masterStatusToggle(true);
          this.router.navigateByUrl('/master');
        } else {
          alert('Not Found');
        }
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }
}
