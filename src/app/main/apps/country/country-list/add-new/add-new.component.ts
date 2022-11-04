import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CountryService } from '../../country.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  public questionNo;
  public questionName;
  public options;
  public answer;
  public subQuestions;

  public countryForm = new FormGroup({
    countryName: new FormControl(''),
    countryCode: new FormControl(''),
    status: new FormControl(false),
  });
  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _coreSidebarService: CoreSidebarService,private countryService:CountryService) {}

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
  submit(form) {
    if (form.valid) {
      this.countryService.addCountry(form.value).subscribe(res=>{
        this.toggleSidebar('new-user-sidebar');
        window.location.reload()
      })
    }
  }

  ngOnInit(): void {}
}
