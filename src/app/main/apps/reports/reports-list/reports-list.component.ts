import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { ReportsListService } from './reports-list.service';
import { ReportsService } from '../reports.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportsListComponent implements OnInit {
  // Public
  public sidebarToggleRef = false;
  public rows;
  public row;
  public total;
  public selectedOption = 5;
  public selectedPage = 1;
  public ColumnMode = ColumnMode;
  public temp = [];
  public previousRoleFilter = '';
  public previousPlanFilter = '';
  public previousStatusFilter = '';

  public previouPageSize;
  public previousPageLimit

  public selectRole: any = [
    { name: 'All', value: '' },
    { name: 'Admin', value: 'Admin' },
    { name: 'Author', value: 'Author' },
    { name: 'Editor', value: 'Editor' },
    { name: 'Maintainer', value: 'Maintainer' },
    { name: 'Subscriber', value: 'Subscriber' }
  ];

  public selectPlan: any = [
    { name: 'All', value: '' },
    { name: 'Basic', value: 'Basic' },
    { name: 'Company', value: 'Company' },
    { name: 'Enterprise', value: 'Enterprise' },
    { name: 'Team', value: 'Team' }
  ];

  public selectStatus: any = [
    { name: 'All', value: '' },
    { name: 'Blocked', value: true },
    { name: 'Unblocked', value: false },

  ];

  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = [];
  public searchValue = '';

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // Private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  public tempfilterData;
  setOffset: number;
  status: any;
  currentUser: any;
  isViewer: boolean;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {UserListService} _userListService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    private _reportListService: ReportsListService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private reportService: ReportsService,
    private userService:UserService
  ) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */
  filterUpdate(event) {
    // Reset ng-select on search

    this.selectedStatus = this.selectStatus[0];

    const val = event.target.value.toLowerCase();

    // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // Update The Rows
    this.rows = temp;
    // Whenever The Filter Changes, Always Go Back To The First Page
    this.table.offset = 0;
  }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  // /**
  //  * Filter By Roles
  //  *
  //  * @param event
  //  */
  // filterByRole(event) {
  //   const filter = event ? event.value : '';
  //   this.previousRoleFilter = filter;
  //   this.temp = this.filterRows(filter, this.previousPlanFilter, this.previousStatusFilter);
  //   this.rows = this.temp;
  // }

  // /**
  //  * Filter By Plan
  //  *
  //  * @param event
  //  */
  // filterByPlan(event) {
  //   const filter = event ? event.value : '';
  //   this.previousPlanFilter = filter;
  //   this.temp = this.filterRows(this.previousRoleFilter, filter, this.previousStatusFilter);
  //   this.rows = this.temp;
  // }

  /**
   * Filter By Status
   *
   * @param event
   */
  filterByStatus(event) {
    const filter = event ? event.value : '';
    console.log(filter);
    this.previousStatusFilter = filter;
    this.temp = this.filterRows(filter);
    this.rows = this.temp;
  }

  /**
   * Filter Rows
   *

   * @param statusFilter
   */
  filterRows(statusFilter): any[] {
    // Reset search on select change
    this.searchValue = '';



    console.log(statusFilter);

    return this.tempData.filter(row => {


      let isPartialStatusMatch = row;


      if (typeof statusFilter === 'boolean') {
        isPartialStatusMatch = row.status === statusFilter;
      }



      return isPartialStatusMatch;
    });
  }

  handlePageChange(event) {
    this.selectedPage = event? event.offset:'';
    this.selectedPage = this.selectedPage + 1;
    console.log(this.selectedPage);
    this.retrievAll();
  }
  handlePagelimitChange(event) {
    this.selectedOption = event.target.value;
    this.selectedPage = 1;
    this.retrievAll();
  }

  handleSearchValue(event){
    this.searchValue = event? event.target.value:'';
    this.selectedPage = 1;
    this.selectedOption = 10;
    this.retrievAll();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe config change
    
    this.retrievAll();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isViewer=this.currentUser.user.role === 'Viewer';

  }

  getAllReports() {
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this._reportListService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
            this.temp = this.rows;
          });
        }, 450);
      } else {
        this._reportListService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.rows = response;
          console.log("response-----", response);

          this.tempData = this.rows;
          this.temp = this.rows;
        });
      }
    });
  }

  retrievAll(){

    
    const params  = this.getRequestParams(this.searchValue,this.selectedPage,this.selectedOption);
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this.reportService.getAll(this.selectedPage,this.selectedOption,this.searchValue).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            console.log("retrieved data",response.length);
            this.rows= response.allReports;
            this.total = response.total;
            this.status = response.allReports.email;
            console.log("this Statys",this.status);
          });
        }, 450);
      } else {
        this.reportService.getAll(this.selectedPage,this.selectedOption,this.searchValue).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          console.log("retrieved data",response);
          this.rows= response.allReports;
          this.total= response.total;
          this.status = response.allReports.email;
          console.log("this Statys",this.status);
          
          
        });
      }
    });
  }

  

  getRequestParams(searchValue,page,limit){
    let params = {};
    if (searchValue) {
      params[`name`] = searchValue;
    }
    if (page) {
      params[`page`] = page ;
    }
    if (limit) {
      params[`limit`] = limit;
    }
    return params;
  }
  

  deleteReportUser(id) {
    this.reportService.deleteReportUser(id).subscribe(response => {
      window.location.reload()
    })
  }

  blockUser(row) {
    console.log("changing status for row :: ", row);
    this.reportService.blockUser(row._id, { status: !row.status }).subscribe(response => {
      window.location.reload()
    }, error => {
      console.log(error);
    })
  }

  changeStatus(row) {
    console.log(row.users[0].isBlocked);
    row.users[0].isBlocked = !row.users[0].isBlocked;
    console.log("row",row.users.isBlocked );
    this.userService.updateStatus(row._id,{isBlocked:row.users[0].isBlocked}).subscribe(res=>{})
   
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
