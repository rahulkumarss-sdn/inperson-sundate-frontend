import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentManagementService {
  public rows: any;
  public paymentDetails: BehaviorSubject<any>;

  payment = new BehaviorSubject('');
  changePaymentData = this.payment.asObservable();

  constructor(private http:HttpClient) {
    // Set the defaults
    this.paymentDetails = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    console.log("this is working 111");
  }

  updatePayment(data){
    this.payment.next(data);
  }

  updatePaymentDetails(data){
    this.paymentDetails.next(data);
  }

  getCustomerDetails() {
    return this.http.get<any>(`${environment.apiUrl}/payment/allCustomerDetails`);
  }

  getUserPayments(){
    return this.http.get<any>(`${environment.apiUrl}/payment/listAllcustomers`);
  }

  getUserSubscriptionDetails(id){
    return this.http.get<any>(`${environment.apiUrl}/payment/getSubscription/${id}`)
  }
}
