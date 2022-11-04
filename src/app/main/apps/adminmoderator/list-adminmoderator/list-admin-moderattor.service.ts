import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ListAdminModerattorService implements Resolve<any> {
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
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    
    console.log("Okayy");
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getAllModerators()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get rows
   */
  // getDataTableRows(): Promise<any[]> {
  //   console.log("this is working");

  //   return new Promise((resolve, reject) => {
  //     this._httpClient.get('api/users-data').subscribe((response: any) => {
  //       this.rows = response;
  //       console.log("row-----",response);
        
  //       this.onUserListChanged.next(this.rows);
  //       resolve(this.rows);
  //     }, reject);
  //   });
  // }


  getAllModerators(): Promise<any[]> {

    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUrl}/admin/getAllmoderators`).subscribe((response: any) => {
        console.log(response);
        this.rows = response;
        this.onUserListChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
}


