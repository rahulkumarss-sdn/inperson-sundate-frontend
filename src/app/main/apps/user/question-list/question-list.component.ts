import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionListService } from '../question-list.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  public sidebarToggleRef = false;
  public rows = [];
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
 
  public searchValue = '';

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @Input() userId:string; 

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _questionsListService: QuestionListService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private userService:UserService
  ) {
    this._unsubscribeAll = new Subject();
  }


  filterUpdate(event) {

    // const val = event.target.value.toLowerCase();

    // // Filter Our Data
    // const temp = this.tempData.filter(function (d) {
    //   return d.fullName.toLowerCase().indexOf(val) !== -1 || !val;
    // });

    // // Update The Rows
    // this.rows = temp;
    // // Whenever The Filter Changes, Always Go Back To The First Page
    // this.table.offset = 0;
  }


  filterRows(roleFilter, planFilter, statusFilter): any[] {
    // Reset search on select change
    // this.searchValue = '';

    // roleFilter = roleFilter.toLowerCase();
    // planFilter = planFilter.toLowerCase();
    // statusFilter = statusFilter.toLowerCase();

    // return this.tempData.filter(row => {
    //   const isPartialNameMatch = row.role.toLowerCase().indexOf(roleFilter) !== -1 || !roleFilter;
    //   const isPartialGenderMatch = row.currentPlan.toLowerCase().indexOf(planFilter) !== -1 || !planFilter;
    //   const isPartialStatusMatch = row.status.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
    //   return isPartialNameMatch && isPartialGenderMatch && isPartialStatusMatch;
    // });
    return this.rows;
  }

  ngOnInit(): void {
    console.log("rows", this.userId)
    this.getQuestionAnswerByUserId(this.userId);
  }

  getQuestionAnswerByUserId(id) {
    this.userService.getQuestionAnswerByUserId(id).subscribe(response => {
      this.rows = response.data.userResponse;
    });
  }
  
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
