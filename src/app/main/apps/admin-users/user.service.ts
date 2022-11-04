import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  user = new BehaviorSubject('');
  changeUser = this.user.asObservable();

  updateUser(data){
    this.user.next(data);
  }

  getUserById(id) {
    return this.http.get<any>(`${environment.apiUrl}/admin/getUserById/${id}`);
  }

  getQuestionAnswerByUserId(id) {
    return this.http.get<any>(`${environment.apiUrl}/user/answer/${id}`);
  }

  getUserMediaById(id) {
    return this.http.get<any>(`${environment.apiUrl}/admin/getUserFiles/${id}`);
  }

  deleteUserById(id) {
    return this.http.delete<any>(`${environment.apiUrl}/admin/deleteUser/${id}`);
  }

  updateUserData(id,data) {
    return this.http.put<any>(`${environment.apiUrl}/admin/editUserDetails/${id}`,data);
  }

  

}
