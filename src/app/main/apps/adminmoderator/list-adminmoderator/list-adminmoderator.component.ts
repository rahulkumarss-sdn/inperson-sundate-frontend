import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { ListAdminModerattorService } from './list-admin-moderattor.service';
import { AdminmoderatorService } from '../adminmoderator.service';

@Component({
  selector: 'app-list-adminmoderator',
  templateUrl: './list-adminmoderator.component.html',
  styleUrls: ['./list-adminmoderator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListAdminmoderatorComponent implements OnInit {

  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 5;
  public ColumnMode = ColumnMode;
  public temp = [];
  public previousRoleFilter = '';
  public previousPlanFilter = '';
  public previousStatusFilter = '';
  public key ="new-Admin";

  public selectRole: any = [
    { name: 'All', value: '' },
    { name: 'Admin', value: 'Admin' },
    { name: 'Editor', value: 'Editor' },
    { name: 'Viewer', value: 'Viewer' },
    
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
    { name: 'Pending', value: 'Pending' },
    { name: 'Active', value: 'Active' },
    { name: 'Inactive', value: 'Inactive' }
  ];

  public selectedRole = '';
  public selectedPlan = [];
  public selectedStatus = [];
  public searchValue = '';

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // Private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  total: any;
  public selectedPage =1;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {UserListService} _userListService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    
    private _listAdminModeratorService:ListAdminModerattorService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private _adminModeratorService:AdminmoderatorService
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
    this.selectedRole = this.selectRole[0];
    this.selectedPlan = this.selectPlan[0];
    this.selectedStatus = this.selectStatus[0];

    const val = event.target.value.toLowerCase();

    // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.fullName.toLowerCase().indexOf(val) !== -1 || !val;
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
  toggleSidebar(name,admin?): void {



    if(admin){
      this.key="edit-admin";
      this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
      this._adminModeratorService.updateAdmin(admin);
    }
   else{
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    this.key ="new-Admin";
    
   }
    
  }

  // toggleEditSidebar(name,admin): void {

  //   console.log(name);
  //   console.log(admin);
  //   this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  //   this._adminModeratorService.updateAdmin(admin);
  // }
  /**
   * Filter By Roles
   *
   * @param event
   */
  filterByRole(event) {
    const filter = event ? event.value : '';
    this.previousRoleFilter = filter;
    this.temp = this.filterRows(filter, this.previousPlanFilter, this.previousStatusFilter);
    this.rows = this.temp;
  }

  /**
   * Filter By Plan
   *
   * @param event
   */
  filterByPlan(event) {
    const filter = event ? event.value : '';
    this.previousPlanFilter = filter;
    this.temp = this.filterRows(this.previousRoleFilter, filter, this.previousStatusFilter);
    this.rows = this.temp;
  }

  /**
   * Filter By Status
   *
   * @param event
   */
  filterByStatus(event) {
    const filter = event ? event.value : '';
    this.previousStatusFilter = filter;
    this.temp = this.filterRows(this.previousRoleFilter, this.previousPlanFilter, filter);
    this.rows = this.temp;
  }

  /**
   * Filter Rows
   *
   * @param roleFilter
   * @param planFilter
   * @param statusFilter
   */
  filterRows(roleFilter, planFilter, statusFilter): any[] {
    // Reset search on select change
    this.searchValue = '';

    roleFilter = roleFilter.toLowerCase();
    planFilter = planFilter.toLowerCase();
    statusFilter = statusFilter.toLowerCase();

    return this.tempData.filter(row => {
      const isPartialNameMatch = row.role.toLowerCase().indexOf(roleFilter) !== -1 || !roleFilter;
      const isPartialGenderMatch = row.currentPlan.toLowerCase().indexOf(planFilter) !== -1 || !planFilter;
      const isPartialStatusMatch = row.status.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
      return isPartialNameMatch && isPartialGenderMatch && isPartialStatusMatch;
    });
  }

  handleRoleChange(event) {
    this.selectedRole = event? event.value:'';
    this.selectedPage = 1;
    this.selectedOption = 10;
    
    this.retrievAll();
  }

  handlePageChange(event) {
    this.selectedPage = event? event.offset:'';
    this.selectedPage = this.selectedPage + 1;
    this.selectedRole='';
    console.log(this.selectedPage);
    this.retrievAll();
  }
  handlePagelimitChange(event) {
    this.selectedOption = event.target.value;
    this.selectedPage = 1;
    this.selectedRole='';
    this.retrievAll();
  }

  handleSearchValue(event){
    this.searchValue = event? event.target.value:'';
    this.selectedPage = 1;
    this.selectedOption = 10;
    this.selectedRole='';
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
  }

  getAllModerators() {
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this._listAdminModeratorService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
           console.log(response);
            this.rows = response;
            this.tempData = this.rows;
           
          });
        }, 450);
      } else {
        this._listAdminModeratorService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          console.log(response);
          this.rows = response;
          this.tempData = this.rows;
          
        });
      }
    });
   }


   retrievAll(){
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this._adminModeratorService.getAll(this.selectedPage,this.selectedOption,this.searchValue,this.selectedRole).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            console.log("retrieved admin data",response);
            this.rows= response.admins;
            this.total = response.totalCount;
            
          });
        }, 450);
      } else {
        this._adminModeratorService.getAll(this.selectedPage,this.selectedOption,this.searchValue,this.selectedRole).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          console.log("retrieved admin data",response);
          this.rows= response.admins;
          this.total= response.totalCount;
          
          
        });
      }
    });
  }

   deleteModerator(id,index) {
    this._adminModeratorService.deleteModerator(id).subscribe(res=>{})
    window.location.reload();
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
