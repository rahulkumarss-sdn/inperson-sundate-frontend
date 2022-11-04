import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { error } from 'console';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountryListService } from '../country-list.service';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  // Public
  public sidebarToggleRef = false;
  public isViewer;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public temp = [];
  public previousRoleFilter = '';
  public previousPlanFilter = '';
  public previousStatusFilter = '';

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
    { name: 'Unblock', value: false },

  ];

  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = '';
  public searchValue = '';

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // Private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  selectedPage: any;
  total: any;
  currentUser: any;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {UserListService} _userListService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    private _countryListService: CountryListService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private countryService: CountryService
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
      return d.countryName.toLowerCase().indexOf(val) !== -1 || !val;
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

  //  /**
  //   * Filter By Roles
  //   *
  //   * @param event
  //   */
  //  filterByRole(event) {
  //    const filter = event ? event.value : '';
  //    this.previousRoleFilter = filter;
  //    this.temp = this.filterRows(filter, this.previousPlanFilter, this.previousStatusFilter);
  //    this.rows = this.temp;
  //  }

  //  /**
  //   * Filter By Plan
  //   *
  //   * @param event
  //   */
  //  filterByPlan(event) {
  //    const filter = event ? event.value : '';
  //    this.previousPlanFilter = filter;
  //    this.temp = this.filterRows(this.previousRoleFilter, filter, this.previousStatusFilter);
  //    this.rows = this.temp;
  //  }

  /**
   * Filter By Status
   *
   * @param event
   */
  filterByStatus(event) {
    const filter = event ? event.value : '';
    this.temp = this.filterRows(filter);
    this.rows = this.temp;
  }

  /**
   * Filter Rows
   *
   * @param roleFilter
   * @param planFilter
   * @param statusFilter
   */
  filterRows(statusFilter): any[] {
    // Reset search on select change
    this.searchValue = '';



    return this.tempData.filter(row => {

      let isPartialStatusMatch = row;


      if (typeof statusFilter === 'boolean') {
        isPartialStatusMatch = row.status === statusFilter;
      }



      return isPartialStatusMatch;
    });
  }

  handleStatusChange(event) {

    this.selectedStatus = event ? event.value : '';
    console.log("uuuu", this.selectedStatus);
    this.selectedPage = 1;
    this.retrievAll();
  }
  handlePageChange(event) {
    this.selectedPage = event ? event.offset : '';
    this.selectedPage = this.selectedPage + 1;
    this.selectedStatus = '';
    console.log(this.selectedPage);
    this.retrievAll();
  }
  handlePagelimitChange(event) {
    this.selectedOption = event.target.value;
    this.selectedPage = 1;
    this.selectedStatus = '';
    this.retrievAll();
  }

  handleSearchValue(event) {
    this.searchValue = event ? event.target.value : '';
    this.selectedPage = 1;
    this.selectedOption = 10;
    this.selectedStatus = '';
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
    this.isViewer = this.currentUser.user.role === 'Viewer';

  }


  getAllCountries() {
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this._countryListService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
          });
        }, 450);
      } else {
        this._countryListService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.rows = response;
          this.tempData = this.rows;
        });
      }
    });
  }

  retrievAll() {
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this.countryService.getAll(this.selectedPage, this.selectedOption, this.searchValue, this.selectedStatus).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            console.log("retrieved data", response.length);
            this.rows = response.countries;
            this.total = response.totalCount;

          });
        }, 450);
      } else {
        this.countryService.getAll(this.selectedPage, this.selectedOption, this.searchValue, this.selectedStatus).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          console.log("retrieved data", response);
          this.rows = response.countries;
          this.total = response.totalCount;


        });
      }
    });
  }


  deleteCountry(id, index) {

    console.log("id------------------->",id);
    console.log("index------------------->",index);
    this.countryService.deleteCountry(id).subscribe({
      next: data => {
        console.log("deleted");
      },
        error: error => {

          window.location.reload();
        }
      }
    );

  }

  changeStatus(row) {
    row.status = !row.status;
    console.log("row", row);
    this.countryService.updateCountryStatus(row._id, { status: row.status }).subscribe(res => { })
  }

  fileInputChange(fileInputEvent: Event & { target: HTMLInputElement }) {
    if (fileInputEvent.target.files && fileInputEvent.target.files.length) {
      const file = fileInputEvent.target.files[0];
      const formData = new FormData();
      formData.append('allCountries', file);


      this.countryService.uploadCountries(formData).subscribe((response) => {
        alert('Uploaded Successfully');
        console.log(response);
      },
        (err) => {
          alert('Error while uploading');
          console.log(err);
        }
      );

    }
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
