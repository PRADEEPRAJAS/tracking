import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { developementApi } from 'src/app/constants/tracker.constants';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  masterRegister(obj: any): Observable<any> {
    return this.http.post<any>(`${developementApi}/master`, obj)
  }
}
