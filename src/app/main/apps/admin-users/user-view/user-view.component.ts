import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserViewComponent implements OnInit, OnDestroy {
  // public
  public url = this.router.url;
  public lastValue;
  public data;
  public userId:String = '';

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {Router} router
   * @param {UserViewService} _userViewService
   */
  constructor(private router: Router,private userService:UserService,private route: ActivatedRoute) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')
    this.getUserDetailsById(this.userId);
    this.getQuestionAnswerByUserId(this.userId)
    this.getUserMediaById(this.userId)
  }

  getUserDetailsById(id) {
    this.userService.getUserById(id).subscribe(response => {
      this.data = response.userDetails;
    });
  }

  getQuestionAnswerByUserId(id) {
    this.userService.getQuestionAnswerByUserId(id).subscribe(response => {
      console.log("respoinse----",response);
      
    });
  }

  getUserMediaById(id) {
    this.userService.getUserMediaById(id).subscribe(response => {
      console.log("respoinse----",response);
      
    });
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
