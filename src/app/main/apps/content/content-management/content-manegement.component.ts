import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentManagementService } from '../content.service';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {
 // Public
 public sidebarToggleRef = false;
 public rows;
 public faqData;
 public selectedOption = 10;
 public ColumnMode = ColumnMode;
 public temp = [];
 public previousRoleFilter = '';
 public previousPlanFilter = '';
 public previousStatusFilter = '';
 public faqId:String = '62be9a9a71684bce659039bc'
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
   { name: 'Pending', value: 'Pending' },
   { name: 'Active', value: 'Active' },
   { name: 'Inactive', value: 'Inactive' }
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
   private _contentMngService: ContentManagementService,
   private _coreSidebarService: CoreSidebarService,
   private _coreConfigService: CoreConfigService,
   private faqService:FaqService
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
 toggleSidebar(name,row?): void {
   if(row && row._id) {
    row.contentType = 'Content';
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    this.faqService.updateContentData(row);
   } else {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    this.faqService.updateContentData({contentType:'Content'});
   }
 }

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

 // Lifecycle Hooks
 // -----------------------------------------------------------------------------------------------------
 /**
  * On init
  */
 ngOnInit(): void {
   // Subscribe config change
   this.getContent();
   this.getFaqDataById();
   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   this.isViewer=this.currentUser.user.role === 'Viewer';
  }
  
  getContent() {
   this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
     //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
     if (config.layout.animation === 'zoomIn') {
       setTimeout(() => {
         this._contentMngService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
           this.rows = response;
           this.tempData = this.rows;
         });
       }, 450);
     } else {
       this._contentMngService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
         this.rows = response;
         this.tempData = this.rows;
       });
     }
   });
  }

  getFaqDataById() {
    this.faqService.getFaqDataById(this.faqId).subscribe(res=>{
      this.faqData = res;
    })
  }

  openAddNewContent(name,data?) {
    if(data && data._id) {
      data.contentType = 'FAQ';
      this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
      this.faqService.updateFaqContentData(data);
     } else {
      this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
      this.faqService.updateFaqContentData({contentType:'FAQ'});
     }
  }


  deleteContent(id) {
    this._contentMngService.deleteContent(id).subscribe(res=>{
      window.location.reload()
    })
  }

  deleteFaqContent(id) {
    this.faqService.deleteFaqContent(id).subscribe(res=>{
      window.location.reload()
    })
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
