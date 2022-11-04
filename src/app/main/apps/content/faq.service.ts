import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }

  content = new BehaviorSubject('');
  changeContentata = this.content.asObservable();

  faqContent = new BehaviorSubject('');
  changeFaqContenData = this.faqContent.asObservable();

  updateContentData(data){
    this.content.next(data);
  }

  updateFaqContentData(data) {
    this.faqContent.next(data);
  }

  getFaqDataById(id) {
    return this.http.get<any>(`${environment.apiUrl}/admin/getFaq/${id}`);
  }

  addContent(data) {
    return this.http.post<any>(`${environment.apiUrl}/admin/registerContent`,data);
  }

  deleteContent(id) {
    return this.http.delete<any>(`${environment.apiUrl}/admin/deleteContent/${id}`);
  }

  updateContent(id,data) {
    return this.http.patch<any>(`${environment.apiUrl}/admin/updatecontent/${id}`,data);
  }

  addFaqContent(data) {
    return this.http.post<any>(`${environment.apiUrl}/admin/postFaq`,data);
  }

  updateFaqContent(id,data) {
    return this.http.patch<any>(`${environment.apiUrl}/admin/updateFaq/${id}`,data);
  }

  deleteFaqContent(id) {
    return this.http.delete<any>(`${environment.apiUrl}/admin/deletefaqContent/${id}`);
  }
}
