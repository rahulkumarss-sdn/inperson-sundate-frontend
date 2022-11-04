import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }

  deleteReportUser(id) {
    return this.http.delete<any>(`${environment.apiUrl}/admin/deleteReport/${id}`);
  }

  blockUser(id,data) {
    return this.http.patch<any>(`${environment.apiUrl}/admin/updateReportById/${id}`,data);
  }

  getAll(page,limit,name) {
    return this.http.get<any>(`${environment.apiUrl}/admin/getAllreports?page=${page}&limit=${limit}&name=${name}`);
    
  }

 
}
