import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardListService {

  constructor(private http:HttpClient) { }
  getTodaysRegisteredUser() {
    return this.http.get<any>(`${environment.apiUrl}/admin/registeredToday/`);
  }
}
