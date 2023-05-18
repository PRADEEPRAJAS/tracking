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
    if (type === 'admin') {
      this.router.navigateByUrl(type)
      this.stateService.adminStatusToggle(true)
    } else {
      this.router.navigateByUrl('/login')
    }
  }
  title = 'tracker';
}
