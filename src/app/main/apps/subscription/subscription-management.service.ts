import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionManagementService {

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

    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getSubscriptions()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get rows
   */
  getSubscriptions(): Promise<any[]> {

    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.apiUrl}/payment/getAllProducts`).subscribe((response: any) => {
        this.rows = response;
        console.log("response subscription", response);
        this.onUserListChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
}