import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionListService {
  public rows: any;
  public onUserListChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onUserListChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  //   console.log("this is working 111");
    
  //   return new Promise<void>((resolve, reject) => {
  //     Promise.all([this.getDataTableRows()]).then(() => {
  //       resolve();
  //     }, reject);
  //   });
  // }

  /**
   * Get rows
   */
  getDataTableRows(){
    console.log("this is working");

    // return new Promise((resolve, reject) => {
    //   // this._httpClient.get('api/questions-data').subscribe((response: any) => {
    //   //   this.rows = response;
    //   //   console.log("row-----",response);
        
    //   //   this.onUserListChanged.next(this.rows);
    //     // resolve(this.rows);
    //   }, reject);
    // });\
    return this._httpClient.get('api/questions-data')
  }
}
