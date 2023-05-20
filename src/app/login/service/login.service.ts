import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { developementApi } from 'src/app/constants/tracker.constants';
@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  adminLogin(admin: any): Observable<any> {
    return this.http.get<any>(`${developementApi}/admin?username=${admin.username}&password=${admin.password}`)
  }
  masterLogin(master: any): Observable<any> {
    return this.http.get<any>(`${developementApi}/master?employeeId=${master.employeeId}&&password=${master.password}`)
  }

}
