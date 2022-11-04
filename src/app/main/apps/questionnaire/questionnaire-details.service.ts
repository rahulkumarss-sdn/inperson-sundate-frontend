import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireDetailsService {

  constructor(private http: HttpClient) { }
  question = new BehaviorSubject('');
  changeQuestionData = this.question.asObservable();

  updateQuestion(data){
    this.question.next(data);
  }

  getQuestionDetailsQNo(questioNo) {
    return this.http.get<any>(`${environment.apiUrl}/admin/getQuestionByNo/${questioNo}`);
  }

  deleteQuestion(id) {
    return this.http.delete<any>(`${environment.apiUrl}/admin/question/${id}`);
  }

  addQuestion(data) {
    return this.http.post<any>(`${environment.apiUrl}/admin/addQuestion`,data);
  }

  updateQuestionData(id,data) {
    console.log("updateQuestionData",id,data);
    return this.http.put<any>(`${environment.apiUrl}/admin/question/${id}`,data);
  }
}
