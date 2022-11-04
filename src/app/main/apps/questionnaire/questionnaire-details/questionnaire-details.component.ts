import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireDetailsService } from '../questionnaire-details.service';

@Component({
  selector: 'app-questionnaire-details',
  templateUrl: './questionnaire-details.component.html',
  styleUrls: ['./questionnaire-details.component.scss']
})
export class QuestionnaireDetailsComponent implements OnInit {

  public questionNo:String = '';
  public questionDetails:any;
  constructor(private questionDetailsSrv:QuestionnaireDetailsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.questionNo = this.route.snapshot.paramMap.get('id');
    this.getQuestionDetailsQNo(this.questionNo)

  }

  getQuestionDetailsQNo(qNo) {
    this.questionDetailsSrv.getQuestionDetailsQNo(qNo).subscribe(res=>{
      console.log("res----",res[0]);
      this.questionDetails = res[0]
    })
  }
}
