import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  adminLogin(admin: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/admin?admin=${admin.username}&password=${admin.password}`)
  }

}
