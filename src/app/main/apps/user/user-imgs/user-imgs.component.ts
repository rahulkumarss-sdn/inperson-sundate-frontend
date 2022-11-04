import { Component, Input, OnInit } from '@angular/core';
import { CarouselImages } from 'app/main/components/carousel/carousel.component';
import * as snippet from 'app/main/components/carousel/carousel.snippetcode';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-imgs',
  templateUrl: './user-imgs.component.html',
  styleUrls: ['./user-imgs.component.scss']
})
export class UserImgsComponent implements OnInit {

  @Input() userId:string ;
  public userImages:[];
  currentUser: any;
  isViewer: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserMediaById(this.userId);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isViewer=this.currentUser.user.role === 'Viewer';
  }

  getUserMediaById(id) {
    this.userService.getUserImagesById(id).subscribe(response => {
      console.log("response images:: ",response);
      this.userImages = response.user;
    });
  }

  blockImage(id,data) {
    data.blocked = !data.blocked;
    this.userService.changeUserImageStatus(id,data).subscribe(response => {
    });
  }
}
