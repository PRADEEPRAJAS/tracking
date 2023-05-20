import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  constructor(private stateService: StateService) { }
  user: any;
  ngOnInit(): void {
    [this.user] = this.stateService.loginUserDetails;
  }

  logoutMaster() {
    this.stateService.logout();
  }
}
