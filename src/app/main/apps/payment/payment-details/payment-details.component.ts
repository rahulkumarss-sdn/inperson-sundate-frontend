import { Component, OnInit } from '@angular/core';
import { PaymentManagementService } from '../payment-management.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  userPaymentDetails:any;
  constructor(private paymentSrv:PaymentManagementService) { }

  ngOnInit(): void {
    this.getPaymentDetails();
  }

  getPaymentDetails() {
    this.paymentSrv.changePaymentData.subscribe(paymentData => { 
      this.userPaymentDetails = paymentData;
    });
  }
}
