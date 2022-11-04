import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { UserListService } from 'app/main/apps/user/user-list/user-list.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-online',
  templateUrl: './user-online.component.html',
  styleUrls: ['./user-online.component.scss']
})
export class UserOnlineComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public selectedPage;
  
  public ColumnMode = ColumnMode;
  public temp = [];
  public previousRoleFilter = '';
  public previousPlanFilter = '';
  public previousStatusFilter = '';


  public selectPlan: any = [
    { name: 'All', value: '' },
    { name: 'Free', value: 'Free' },
    { name: 'Normal', value: 'Normal' },
    { name: 'Ultimate', value: 'Ultimate' }
  ];

  public selectStatus: any = [
    { name: 'All', value: '' },
    { name: 'Pending', value: 'Pending' },
    { name: 'Active', value: 'Active' },
    { name: 'Inactive', value: 'Inactive' }
  ];

  public selectedPlan = [];
  public selectedStatus = [];
  public searchValue = '';

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // Private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  total: any;
  currentUser: any;
  isViewer: boolean;

  constructor(
    private _userListService: UserListService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private userService:UserService
  ) {
    this._unsubscribeAll = new Subject();
  }


  filterUpdate(event) {
    // Reset ng-select on search
    // this.selectedPlan = this.selectPlan[0];
    this.selectedStatus = this.selectStatus[0];

    const val = event.target.value.toLowerCase();

    // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.firstname.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // Update The Rows
    this.rows = temp;
    // Whenever The Filter Changes, Always Go Back To The First Page
    this.table.offset = 0;
  }


  toggleSidebar(name,user): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    this.userService.updateUser(user)
  }


  // filterByPlan(event) {
  //   const filter = event ? event.value : '';
  //   this.previousPlanFilter = filter;
  //   this.temp = this.filterRows(this.previousRoleFilter, filter, this.previousStatusFilter);
  //   this.rows = this.temp;
  // }


  filterByStatus(event) {
    const filter = event ? event.value : '';
    this.temp = this.filterRows(filter);
    this.rows = this.temp;
  }


  filterRows(statusFilter): any[] {
    // Reset search on select change
    this.searchValue = '';

    
    statusFilter = statusFilter.toLowerCase();

    return this.tempData.filter(row => {
      
      const isPartialStatusMatch = row.status.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
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



  ngOnInit(): void {
    // Subscribe config change
    this.retrievAll();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isViewer=this.currentUser.user.role === 'Viewer';
  }

  getAllUsers() {
        this._userListService.onUserListChanged.subscribe(response => {
          console.log("response: ", response);
          this.rows = response;
          this.tempData = this.rows;
        });
  }


  retrievAll(){
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this.userService.getOnlineUsers(this.selectedPage,this.selectedOption,this.searchValue).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            console.log("retrieved data",response.length);
            this.rows= response.getUsers;
            this.total = response.total;
            
          });
        }, 450);
      } else {
        this.userService.getOnlineUsers(this.selectedPage,this.selectedOption,this.searchValue).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          console.log("retrieved data",response);
          this.rows= response.getUsers;
          this.total= response.total;
          
          
        });
      }
    });
  }


  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  async deleteUserById(id,index) {
    await this.userService.deleteUserById(id).subscribe(response => {

    },
    (error)=>{
      window.location.reload();
    });
  }

  
}