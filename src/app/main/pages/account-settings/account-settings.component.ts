import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';

import { AccountSettingsService } from 'app/main/pages/account-settings/account-settings.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminmoderatorService } from 'app/main/apps/adminmoderator/adminmoderator.service';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountSettingsComponent implements OnInit, OnDestroy {
  // public
  public contentHeader: object;
  public data: any;
  public birthDateOptions: FlatpickrOptions = {
    altInput: true
  };
  public passwordTextTypeOld = false;
  public passwordTextTypeNew = false;
  public passwordTextTypeRetype = false;
  public avatarImage: string;
  public currentId;

  // private
  private _unsubscribeAll: Subject<any>;
  currentUser: any;
  showMsg: boolean;
  errorMsg: boolean;
  passMatch: boolean = false;
  passFail: boolean;
  success: boolean;
  sucessMsg: string;
  

  /**
   * Constructor
   *
   * @param {AccountSettingsService} _accountSettingsService
   */
  constructor(private _accountSettingsService: AccountSettingsService,private _adminModeratorService:AdminmoderatorService) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Password Text Type Old
   */
  togglePasswordTextTypeOld() {
    this.passwordTextTypeOld = !this.passwordTextTypeOld;
  }

  /**
   * Toggle Password Text Type New
   */
  togglePasswordTextTypeNew() {
    this.passwordTextTypeNew = !this.passwordTextTypeNew;
  }

  /**
   * Toggle Password Text Type Retype
   */
  togglePasswordTextTypeRetype() {
    this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
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

   public moderatorForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    
  });

  
  public passwordForm = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    
  },
  this.mustMatch('password', 'confirmPassword')
  );

  

  ngOnInit() {
    
    

    this._accountSettingsService.onSettingsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
      this.avatarImage = this.data.accountSetting.general.avatar;
    });

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.currentId = this.currentUser.user._id
      this.getByid();
      console.log(this.currentId);

      merge(
        this.passwordForm.get('password').valueChanges,
        this.passwordForm.get('confirmPassword').valueChanges,
       ).pipe(takeUntil(this._unsubscribeAll))
         .subscribe(()=>{
    
          const password = this.passwordForm.get('password');
          const confirmPassword = this.passwordForm.get('confirmPassword');

          console.log(password);
          console.log(confirmPassword);


    
          if (password.value!==confirmPassword.value) {
            this.passMatch = true; 
            console.log(this.passMatch);
          }
         });
      
      
    }

    
    // content header
   
    submit(userData) {
      try {
        
        console.log("ififififi",userData.value);
        this._accountSettingsService.updateAdminData(this.currentId,userData.value).subscribe(res=>{
          window.location.reload();
         
        })
      } catch (e) {
        
        console.error(e)

      }
    }

     mustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
  
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
        }
  
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
        } else {
          matchingControl.setErrors(null);
        }
        return null;
      };
    }

    submitChangePassword(userData) {
      try {
        
        this._accountSettingsService.changePassword(this.currentId,userData.value).subscribe(res=>{
  
         this.success = true;
         this.passFail = false;
         this.sucessMsg = "Password changed successfully";
        },
        (err)=>{

          
          console.log("errrrrrrrr", err)
          this.passFail = true
          this.success = false;
          this.errorMsg = err;

        });
      } catch (e) {
        console.error(e)
       
      }
    }


  getByid(){
    this._accountSettingsService.getProfileDetails(this.currentId).pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
      
      this.moderatorForm.patchValue({
        username: this.data.username,
        email: this.data.email,
        password:this.data.password,
        confirmPassword: this.data.confirmPassword,
        role:this.data.role
        
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
