import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminmoderatorModule } from '../../adminmoderator.module';
import { AdminmoderatorService } from '../../adminmoderator.service';

@Component({
  selector: 'app-new-admin-sidebar',
  templateUrl: './new-admin-sidebar.component.html',
  
})
export class NewAdminSidebarComponent implements OnInit {
  
  public selectRole: any = [
    { name: 'Editor', value: 'Editor' },
    { name: 'Admin', value: 'Admin' },
    { name: 'Viewer', value: 'Viewer' },
  ];

  private _unsubscribeAll: Subject<any>;
  public selectedRole:string = ""

  public moderatorForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    role : new FormControl('Moderator', Validators.required)
  });
  isErr: boolean;
  errorMsg: any;
  passMatch: boolean;


  constructor(private _coreSidebarService: CoreSidebarService,private _adminModeratorService:AdminmoderatorService,) { }
  
  ngOnInit(): void {
    
    
   

  }

  

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }


   submit(form) {
    console.log(form.value)
    if (form.valid) {
      this._adminModeratorService.addModerator(form.value).subscribe((res)=>{
        
        this.toggleSidebar('new-user-sidebar');
        window.location.reload();
        
      },error=>{
        console.log("error creating user",error)
        this.isErr = true;
        console.log(this.isErr);
       
        
      });
    }
  }


  filterByRole(event){
    let existingForm = this.moderatorForm.value;
    existingForm.role = event.value;
    this.moderatorForm.patchValue(existingForm);
  }

 
}
