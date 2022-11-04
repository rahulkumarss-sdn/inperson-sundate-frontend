import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminmoderatorService {

  constructor(private _httpClient:HttpClient) { }
  admin = new BehaviorSubject('');
  changeAdmin = this.admin.asObservable();

  updateAdmin(data){
    this.admin.next(data);
  }
  
  deleteModerator(id) {
    return this._httpClient.delete(`${environment.apiUrl}/admin/deletemoderators/${id}`);
  }

  addModerator(data) {
    return this._httpClient.post(`${environment.apiUrl}/admin/`,data);
  }

  getAll(page,limit,name,role){
    return this._httpClient.get<any>(`${environment.apiUrl}/admin/getAllmoderators?page=${page}&limit=${limit}&username=${name}&role=${role}`);

  }

  updateAdminData(id,data){
    return this._httpClient.patch(`${environment.apiUrl}/admin/edituser/${id}`,data);
  }
}
