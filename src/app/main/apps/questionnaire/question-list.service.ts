import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionListService {
  
  public rows: any;
  public questionList: BehaviorSubject<any>;

 
  constructor(private _httpClient: HttpClient) {
    this.questionList = new BehaviorSubject({});
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getAllQuestions()]).then(() => {
        resolve();
      }, reject);
    });
  }


  getAllQuestions(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUrl}/admin/getAllQuestion`).subscribe((response: any) => {
        resolve(response);
      });
    });
  }
}
