import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-new-user-sidebar',
  templateUrl: './new-user-sidebar.component.html'
})
export class NewUserSidebarComponent implements OnInit {
  public fullname;
  public username;
  public email;
  public user:any = {}

  public userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    contactNo: new FormControl('')
  });
  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _coreSidebarService: CoreSidebarService,private userService:UserService) {}

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(userData) {
    try {
      this.userService.updateUserData(this.user._id,userData.value).subscribe(res=>{
        window.location.reload();
        this.toggleSidebar('new-user-sidebar');
      })
    } catch (e) {
      console.error(e)
    }
  }

  ngOnInit(): void {
    this.getUserId()
  }

  getUserId() {
    this.userService.changeUser.subscribe(res=>{
      this.user = res
      this.userForm.patchValue({
        firstName:this.user.firstname,
        lastName: this.user.lastname,
        email: this.user.email,
        contactNo: this.user.contactNo
      });
    });
  }
}
