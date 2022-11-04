import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }

  saveContact(data) {
    return this.http.post<any>(`${environment.apiUrl}/admin/postContactusdetails`,data)
  }

  getContactDetails() {
    return this.http.get<any>(`${environment.apiUrl}/admin/getContactusdetails/`)
  }

  updateContact(id,data) {
    return this.http.put<any>(`${environment.apiUrl}/admin/updateContactusdetails/${id}`,data)
  }
}
