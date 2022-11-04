import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { setInputValues } from '@angularclass/hmr';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { QuestionnaireDetailsService } from '../../questionnaire-details.service';

@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.scss']
})
export class AddNewQuestionComponent implements OnInit {

  public questionData:any;
  public questionForm = this.fb.group({
    questionNo: ['', [Validators.required, Validators.minLength(1)]],
    question: ['', [Validators.required, Validators.minLength(1)]],
    options:this.fb.array([]),
  });

  constructor(private _coreSidebarService: CoreSidebarService,private questionService:QuestionnaireDetailsService,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.setDefaultValue();
    this.getQuestionDetails();
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  } 

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  addOptions() {
    let options = this.questionForm.get('options') as FormArray;
    options.push(this.fb.group({option:['']}));
  }

  deleteOption(index: number) {
    this.options.removeAt(index);
  } 

  setDefaultValue() {
    this.addOptions();
  }

 
  submit(form) {

    console.log("thissvalue",form.value);
    if (form.valid && (this.questionData && this.questionData._id)) {
      this.questionService.updateQuestionData(this.questionData._id,form.value).subscribe(res=>{
        console.log("res------",res);
        window.location.reload()
      }) 
      this.toggleSidebar('new-user-sidebar');
    }else {

      this.questionService.addQuestion(form.value).subscribe(res=>{
        window.location.reload()
      },error=>{
        alert(error);
      }) 
      this.toggleSidebar('new-user-sidebar');
     
    }
  }

  getQuestionDetails() {
    this.questionService.changeQuestionData.subscribe(res=>{
      if(res) {
        this.questionData = res;
        this.questionForm.patchValue({
          questionNo: res['questionNo'],
          question: res['question'],
          // options:this.questionData['options'],
        })
        this.setValue(res);
      } 
    })
  }

  setValue(data) {
    let options = this.questionForm.get('options') as FormArray;
    this.options.removeAt(0);
    for(let i=0;i<data['options'].length;i++) {
      options.push(this.fb.group({option:data['options'][i].option}));
    }
  }
}
