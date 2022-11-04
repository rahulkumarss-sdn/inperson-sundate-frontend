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

  getUserImagesById(id) {
    return this.http.get<any>(`${environment.apiUrl}/admin/getUserImages/${id}`);
  }

  getUserVideosById(id) {
    return this.http.get<any>(`${environment.apiUrl}/admin/getUserVideos/${id}`);
  }

  deleteUserById(id) {
    return this.http.delete<any>(`${environment.apiUrl}/admin/deleteUser/${id}`);
  }

  updateUserData(id,data) {
    return this.http.put<any>(`${environment.apiUrl}/admin/editUserDetails/${id}`,data);
  }

  changeUserImageStatus(id,data) {
    return this.http.put<any>(`${environment.apiUrl}/admin/blockUserImage/${id}`,data);
  }

  getAll(page,limit,name,status) {
    return this.http.get<any>(`${environment.apiUrl}/admin/getAllUserByPage?page=${page}&limit=${limit}&firstname=${name}&isBlocked=${status}`);
    
  }

  getRegisteredToday(page,limit,name){
    return this.http.get<any>(`${environment.apiUrl}/admin/registeredToday?page=${page}&limit=${limit}&firstname=${name}`);
  }

  getBlockedUsers(page,limit,name){ 
    return this.http.get<any>(`${environment.apiUrl}/admin/getallBlockedusers?page=${page}&limit=${limit}&firstname=${name}`);
  }

  getOnlineUsers(page,limit,name){
    return this.http.get<any>(`${environment.apiUrl}/admin/onlineUsers?page=${page}&limit=${limit}&firstname=${name}`);

  }

  updateStatus(id,data) {
    return this.http.put(`${environment.apiUrl}/admin/updateBlockeduser/${id}`,data);
  }
}
