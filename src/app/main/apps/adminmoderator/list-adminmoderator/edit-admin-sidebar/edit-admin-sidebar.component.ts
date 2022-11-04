import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { AdminmoderatorModule } from '../../adminmoderator.module';
import { AdminmoderatorService } from '../../adminmoderator.service';


@Component({
  selector: 'app-edit-admin-sidebar',
  templateUrl: './edit-admin-sidebar.component.html',
  styleUrls: ['./edit-admin-sidebar.component.scss']
})
export class EditAdminSidebarComponent implements OnInit {

  public selectRole: any = [
    { name: 'Editor', value: 'Editor' },
    { name: 'Admin', value: 'Admin' },
    { name: 'Viewer', value: 'Viewer' },
  ];

  public selectedRole: string = ""
  public admin: any;

 

  public moderatorForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)
  });


  constructor(private _coreSidebarService: CoreSidebarService, private _adminModeratorService: AdminmoderatorService,) { }

  ngOnInit(): void {
    this.getAdminId();
  }

  toggleEditSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }


   /**
   * Submit
   *
   * @param form
   */
    submit(userData) {
      try {
        this._adminModeratorService.updateAdminData(this.admin._id,userData.value).subscribe(res=>{
          window.location.reload();
          this.toggleEditSidebar('new-user-sidebar');
        })
      } catch (e) {
        console.error(e)
      }
    }


  filterByRole(event) {
    let existingForm = this.moderatorForm.value;
    existingForm.role = event.value;
    this.moderatorForm.patchValue(existingForm);
  }


  getAdminId() {
    this._adminModeratorService.changeAdmin.subscribe(res => {
      this.admin = res
      this.selectedRole=this.admin.role;
      
      this.moderatorForm.patchValue({
        username: this.admin.username,
        email: this.admin.email,
        password: '',
        confirmPassword: '',
        role: this.admin.role,
      });
    });
  }
}
