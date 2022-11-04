import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserEditService } from '../../../user/user-edit/user-edit.service';
// import { ContentManagementService } from '../content.service';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.scss']
})
export class Subscription_details implements OnInit {
 // Public
 public url = this.router.url;
 public urlLastValue;
 public rows;
 public currentRow;
 public tempRow;
 public avatarImage: string;

 @ViewChild('accountForm') accountForm: NgForm;

 public birthDateOptions: FlatpickrOptions = {
   altInput: true
 };

 public selectMultiLanguages = ['English', 'Spanish', 'French', 'Russian', 'German', 'Arabic', 'Sanskrit'];
 public selectMultiLanguagesSelected = [];

 // Private
 private _unsubscribeAll: Subject<any>;

 /**
  * Constructor
  *
  * @param {Router} router
  * @param {UserEditService} _userEditService
  */
 constructor(private router: Router, private _userEditService: UserEditService) {
   this._unsubscribeAll = new Subject();
   this.urlLastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
 }

 // Public Methods
 // -----------------------------------------------------------------------------------------------------

 /**
  * Reset Form With Default Values
  */
 resetFormWithDefaultValues() {
   this.accountForm.resetForm(this.tempRow);
 }

 /**
  * Upload Image
  *
  * @param event
  */
 uploadImage(event: any) {
   if (event.target.files && event.target.files[0]) {
     let reader = new FileReader();

     reader.onload = (event: any) => {
       this.avatarImage = event.target.result;
     };

     reader.readAsDataURL(event.target.files[0]);
   }
 }

 /**
  * Submit
  *
  * @param form
  */
 submit(form) {
   if (form.valid) {
     console.log('Submitted...!');
   }
 }

 // Lifecycle Hooks
 // -----------------------------------------------------------------------------------------------------
 /**
  * On init
  */
 ngOnInit(): void {
   this._userEditService.onUserEditChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
     this.rows = response;
     this.rows.map(row => {
       if (row.id == this.urlLastValue) {
         this.currentRow = row;
         this.avatarImage = this.currentRow.avatar;
        //  this.tempRow = cloneDeep(row);
       }
     });
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
