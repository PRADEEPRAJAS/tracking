import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { developementApi } from './constants/tracker.constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDomain(): Observable<any> {
    return this.http.get<any>(`${developementApi}/domains`)
  }
  getDesignation(): Observable<[]> {
    return this.http.get<[]>(`${developementApi}/designations`)
  }
}
