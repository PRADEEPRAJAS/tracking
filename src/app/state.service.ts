import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private router: Router) { }

  loginUserDetails: any;


  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loginStatusObservable: Observable<boolean> = this.loginStatus.asObservable();
  loginStatusToggle(status: boolean) {
    this.loginStatus.next(status)
  }

  adminLoginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  adminStatusLoginObservable: Observable<boolean> = this.adminLoginStatus.asObservable();
  adminStatusToggle(status: boolean) {
    this.loginStatusToggle(status)
    this.adminLoginStatus.next(status)
  }
  masterLoginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  masterStatusLoginObservable: Observable<boolean> = this.masterLoginStatus.asObservable();
  masterStatusToggle(status: boolean) {
    this.loginStatusToggle(status)
    this.masterLoginStatus.next(status)
  }

  logout() {
    localStorage.removeItem('loginType')
    localStorage.removeItem('loginUser')
    this.adminStatusToggle(false);
    this.masterStatusToggle(false);
    this.router.navigateByUrl('/login');
  }
}
