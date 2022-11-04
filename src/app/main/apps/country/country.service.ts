import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _httpClient:HttpClient) { }

  deleteCountry(id) {
    return this._httpClient.delete(`${environment.apiUrl}/admin/deleteCountry/${id}`);
  }

  addCountry(data) {
    return this._httpClient.post(`${environment.apiUrl}/admin/countries/`,data);
  }

  updateCountryStatus(id,data) {
    return this._httpClient.put(`${environment.apiUrl}/admin/updateStatus/${id}`,data);
  }

  getAll(page,limit,name,status) {
    return this._httpClient.get<any>(`${environment.apiUrl}/admin/getAllCountry?page=${page}&limit=${limit}&countryName=${name}&status=${status}`);
    
  }

  uploadCountries(data){
    return this._httpClient.post(`${environment.apiUrl}/admin/uploadCountryFile`,data);
  }

}
