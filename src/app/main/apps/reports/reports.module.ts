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

import { UserEditService } from 'app/main/apps/user/user-edit/user-edit.service';

import { ReportsListService } from './reports-list/reports-list.service';
import { ReportsListComponent } from './reports-list/reports-list.component';

// routing
const routes: Routes = [
  {
    path: 'reports-list',
    component: ReportsListComponent,
    resolve: {
      uls: ReportsListService
    },
    data: { animation: 'ReportsListComponent' }
  },
  // {
  //   path: 'report-user-details/:id',
  //   component: ReportUserDetailsComponent,
  // },
  // {
  //   path: 'user-edit/:id',
  //   component: UserEditComponent,
  //   resolve: {
  //     ues: UserEditService
  //   },
  //   data: { animation: 'UserEditComponent' }
  // },
  // {
  //   path: 'user-view',
  //   redirectTo: '/apps/user/user-view/2' // Redirection
  // },
  // {
  //   path: 'user-edit',
  //   redirectTo: '/apps/user/user-edit/2' // Redirection
  // }
];

@NgModule({
  declarations: [ReportsListComponent],
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
  providers: [ReportsListService, UserEditService]
})
export class ReportsModule {}
