import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ReportsListService implements Resolve<any> {
  public rows: any;
  public onUserListChanged: BehaviorSubject<any>;
  public params: any;

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
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getAll(this.params)]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get rows
   */
  // getAllReports(): Promise<any[]> {
  //   return new Promise((resolve, reject) => {
  //     this._httpClient.get(`${environment.apiUrl}/admin/getAllreports`).subscribe((response: any) => {
  //       this.rows = response;
  //       this.onUserListChanged.next(this.rows);
  //       resolve(this.rows);
  //     }, reject);
  //   });
  // }

  getAll(params):Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUrl}/admin/reportpage`,{params}).subscribe((response: any)=>{
        this.rows = response;
        this.onUserListChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
}
