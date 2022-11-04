import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserEditService } from '../../user/user-edit/user-edit.service';
import { ContactusService } from '../contactus.service';
// import { ContentManagementService } from '../content.service';

@Component({
  selector: 'app-contactus-management',
  templateUrl: './contactus-management.component.html',
  styleUrls: ['./contactus-management.component.scss']
})
export class ContactUsComponent implements OnInit {
 // Public
 public url = this.router.url;
 public urlLastValue;
 public rows;
 public currentRow;
 public tempRow;
 public avatarImage: string;
 public contactData:any = [];
 public contactForm = new FormGroup({
  mailingAddress: new FormControl(''),
  description: new FormControl(''),
  corporateAddress: new FormControl(''),
});
 
 @ViewChild('accountForm') accountForm: NgForm;

 public birthDateOptions: FlatpickrOptions = {
   altInput: true
 };

 public selectMultiLanguages = ['English', 'Spanish', 'French', 'Russian', 'German', 'Arabic', 'Sanskrit'];
 public selectMultiLanguagesSelected = [];

 // Private
 private _unsubscribeAll: Subject<any>;
  currentUser: any;
  isViewer: boolean;

 /**
  * Constructor
  *
  * @param {Router} router
  * @param {UserEditService} _userEditService
  */
 constructor(private router: Router, private _userEditService: UserEditService,private contactService:ContactusService) {
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


 // Lifecycle Hooks
 // -----------------------------------------------------------------------------------------------------
 /**
  * On init
  */
 ngOnInit(): void {
  this.getContactDetails();
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  this.isViewer=this.currentUser.user.role === 'Viewer';
 }

 getContactDetails() {
  this.contactService.getContactDetails().subscribe(res=>{
    if(res.length > 0) {
      this.contactData = res[0];
      this.contactForm.patchValue({
        mailingAddress: res[0].mailingAddress,
        description: res[0].description,
        corporateAddress: res[0].corporateAddress,
      })
    }
  })
 }

 submit(contactForm) {
  if(this.contactData._id)
     this.updateContact(contactForm);
  else
     this.saveContact(contactForm);
 }

 saveContact(contactForm) {
  this.contactService.saveContact(contactForm.value).subscribe(res=>{
    this.contactForm.patchValue({
      mailingAddress: res.mailingAddress,
      description: res.description,
      corporateAddress: res.corporateAddress,
    })
  })
 }

 updateContact(contactForm) {
  this.contactService.updateContact(this.contactData._id,contactForm.value).subscribe(res=>{
    // show notification here.
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
