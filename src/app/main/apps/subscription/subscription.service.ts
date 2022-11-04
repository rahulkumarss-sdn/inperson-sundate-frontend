import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http:HttpClient) { }
  productDetails = new BehaviorSubject('');
  changeProductDetailsData = this.productDetails.asObservable();

  updateProductDetails(data){
    this.productDetails.next(data);
  }

  addProduct(data) {
    return this.http.post<any>(`${environment.apiUrl}/payment/createProduct`,data)
  }

  updateSubscriptionStatus(id,data) {
    return this.http.post<any>(`${environment.apiUrl}/payment/updatePlanActiveStatus/${id}`,data)
  }

  // addPriceInProduct(id,data) {
  //   return this.http.post<any>(`${environment.apiUrl}/payment/addProductprice/${id}`,data)
  // }
}
