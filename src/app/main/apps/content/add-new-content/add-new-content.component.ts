import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-add-new-content',
  templateUrl: './add-new-content.component.html',
  styleUrls: ['./add-new-content.component.scss']
})
export class AddNewContentComponent implements OnInit {

  public questionNo;
  public questionName;
  // public options;
  public answer;
  public subQuestions;
  public contentId:String = '';
  public contentType:String = '';
  public contentForm = this.fb.group({
    content_name:[''],
    options: this.fb.array([])
  });

  public faqContentForm = this.fb.group({
    title:[''],
    description:[''],
  });

  get options() {
    return this.contentForm.get('options') as FormArray;
  }
  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _coreSidebarService: CoreSidebarService,private fb:FormBuilder,private faqService:FaqService) {}

  
  ngOnInit(): void {
    this.setDefaultValue();
    this.getContentById();
    this.getFaqContentById();
  }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
   toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    window.location.reload();
  }

  addOptions () {
    let options = this.contentForm.get('options') as FormArray;
    options.push(this.fb.group({option:['']}));
  }

  deleteOptions(index: number) {
    this.options.removeAt(index);
  } 

  setDefaultValue() {
    this.addOptions();
  }
  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
      if(this.contentType === 'Content') {
        if(this.contentId) 
          this.updateContent(form);
        else 
          this.addContent(form);
        } else {
          if(this.contentId) 
            this.updateFaqContent(form);
          else 
            this.addFaqContent(form);
        }
      }
  }

  addContent(form) {
    this.faqService.addContent(form.value).subscribe(res=>{
      window.location.reload();        
    })
  }

  updateContent(form) {
    this.faqService.updateContent(this.contentId,form.value).subscribe(res=>{
      window.location.reload();        
    })
  }

  getContentById() {
    this.faqService.changeContentata.subscribe(data=>{
      this.contentType = data['contentType']
      if(data) {
        this.contentForm.patchValue({
          content_name:data['content_name'],
          options: data['options']
        })
        this.contentId = data['_id'];
        this.setValue(data);
      }
    })
  }

  addFaqContent(form) {
    this.faqService.addFaqContent(form.value).subscribe(res=>{
      window.location.reload();        
    })
  }

  updateFaqContent(form) {
    this.faqService.updateFaqContent(this.contentId,form.value).subscribe(res=>{
      window.location.reload();        
    })
  }

  getFaqContentById() {
    this.faqService.changeFaqContenData.subscribe(data=>{
      this.contentType = data['contentType']
      if(data) {
        this.faqContentForm.patchValue({
          title:data['title'],
          description: data['description']
        })
        this.contentId = data['_id'];
        this.setValue(data) 
      }
    })
  }

  setValue(data) {
    let options = this.contentForm.get('options') as FormArray;
    this.options.removeAt(0);
    if(data['options']) {
      for(let i=0;i<data['options'].length;i++) {
        options.push(this.fb.group({option:data['options'][i].option}));
      }
    }
  }
}
