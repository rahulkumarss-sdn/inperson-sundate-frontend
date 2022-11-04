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
  public userId: String = '';
  public plans: object[] = [
    { name: 'Free', value: 'Free' },
    { name: 'Normal', value: 'Normal' },
    { name: 'Ultimate', value: 'Ultimate' }
  ]
  public user_answers = [];

  private _unsubscribeAll: Subject<any>;
  currentUser: any;
  isViewer: boolean;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {
    this._unsubscribeAll = new Subject();
    this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')
    this.getUserDetailsById(this.userId);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isViewer = this.currentUser.user.role === 'Viewer';
  }

  getUserDetailsById(id) {
    this.userService.getUserById(id).subscribe(response => {
      this.data = response.userDetails;
      console.log("user111 ", response);
    });
  }

  changeStatus(data) {
    data.isBlocked = !data.isBlocked;
    console.log("row", data.isBlocked);
    this.userService.updateStatus(data._id, { isBlocked: data.isBlocked }).subscribe(res => { })

  }

  async deleteUserById(id, index) {
    await this.userService.deleteUserById(id).subscribe(response => {

    },
      (error) => {
                this.router.navigate(['/apps/user/user-list']);

      });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
