import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { CoreCommonModule } from '@core/common.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreSidebarModule } from '@core/components';

import { InvoiceModule } from 'app/main/apps/invoice/invoice.module';

import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionListService } from './question-list.service';
import { AddNewQuestionComponent } from './question-list/add-new-question/add-new-question.component';
import { QuestionnaireDetailsComponent } from './questionnaire-details/questionnaire-details.component';

// routing
const routes: Routes = [
  {
    path: 'questions-list',
    component: QuestionListComponent,
    resolve: {
      uls: QuestionListService
    },
    data: { animation: 'ReportsListComponent' }
  },
  {
    path: 'questionnaire-details/:id',
    component: QuestionnaireDetailsComponent,
    data: { path: 'view/:id', animation: 'QuestionnaireDetailsComponent' }
  },
  // {
  //   path: 'user-edit/:id',
  //   component: UserEditComponent,
  //   resolve: {
  //     ues: UserEditService
  //   },
  //   data: { animation: 'UserEditComponent' }
  // },
];

@NgModule({
  declarations: [QuestionListComponent, AddNewQuestionComponent, QuestionnaireDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,
    CorePipesModule,
    CoreDirectivesModule,
    InvoiceModule,
    CoreSidebarModule
  ],
  providers: [QuestionListService]
})
export class QuestionnaireModule {}
