import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-video',
  templateUrl: './user-video.component.html',
  styleUrls: ['./user-video.component.scss']
})
export class UserVideoComponent implements OnInit {

  @Input() userId:string ;
  public userVideos:any = [];
  currentUser: any;
  isViewer: boolean;

  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    this.getUserMediaById(this.userId);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isViewer=this.currentUser.user.role === 'Viewer';
  }

  getUserMediaById(id) {
    this.userService.getUserVideosById(id).subscribe(response => {
      this.userVideos = response.user;
    });
  }
  blockVideo(id,data) {
    data.blocked = !data.blocked;
    this.userService.changeUserImageStatus(id,data).subscribe(response => {
    });
  }
}
