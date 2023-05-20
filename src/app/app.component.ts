import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private stateService: StateService) { }
  ngOnInit(): void {
    let type = localStorage.getItem('loginType')
    let loginUser = localStorage.getItem('loginUser')
    if (type === 'admin') {
      this.stateService.adminStatusToggle(true);
      this.router.navigateByUrl(type)
    } else if (type === "master") {
      this.stateService.loginUserDetails = loginUser ? JSON.parse(loginUser) : null
      this.stateService.masterStatusToggle(true);
      this.router.navigateByUrl(type)
    } else {
      this.router.navigateByUrl('/login')
    }
  }
  title = 'tracker';
}
