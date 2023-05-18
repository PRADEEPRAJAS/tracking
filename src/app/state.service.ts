import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  loginStatus: boolean = false;

  adminLoginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  adminStatusLoginObservable: Observable<boolean> = this.adminLoginStatus.asObservable();
  adminStatusToggle(status: boolean) {
    this.loginStatus = status;
    this.adminLoginStatus.next(status)
  }
}
