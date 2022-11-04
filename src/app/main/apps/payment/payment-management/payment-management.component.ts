import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PaymentManagementService } from '../payment-management.service';

@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.component.html',
  styleUrls: ['./payment-management.component.scss']
})
export class PaymentManagementComponent implements OnInit {

  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public temp = [];
  public previousRoleFilter = '';
  public previousPlanFilter = '';
  public previousStatusFilter = '';
  public customerId = ''
  public userPaymentDetails = [];
  public searchValue = '';

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  private tempData = [];
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _paymentMngService: PaymentManagementService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,

  ) {
    this._unsubscribeAll = new Subject();
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.tempData.filter(function (d) {
      return d.fullName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.rows = temp;
    this.table.offset = 0;
  }

  toggleSidebar(name,data): void {
    console.log("toggle", data);
    // this.userPaymentDetails = data;
    this._paymentMngService.updatePayment(data)
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    // this._paymentMngService.getUserSubscriptionDetails(customerId).subscribe(data => {
    //   console.log("data for subscription details :: ", data);
    //   this.userPaymentDetails = data;

    // }, error => {
    //   console.log("error :: ", error);
    // });

  }


  ngOnInit(): void {
    // this.getUserPayments();
    this.getCustomerDetails();
  }

  getUserPayments() {
    this._paymentMngService.getUserPayments().subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    }, error => {
      console.log("error :: ", error);
    });
  }

  getCustomerDetails() {
    this._paymentMngService.getCustomerDetails().subscribe(response => {
      this.rows = response;
      this.rows.map(row => {
        row.country = row.user[0].country;
        row.name = row.user[0].firstname;
        row.currentAmount = row.amount;
        row.amount = row.amount.slice(-3, row.amount.length)
      })
    })
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
