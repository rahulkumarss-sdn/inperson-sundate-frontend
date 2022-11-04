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

// import { CountryListService } from './country-list.service';
// import { CountryListComponent } from './country-list/country-list.component';
// import { AddNewComponent } from './country-list/add-new/add-new.component';
import { ContentManagementService } from './content.service';
import { ContentManagementComponent } from './content-management/content-manegement.component';
import { AddNewContentComponent } from './add-new-content/add-new-content.component';
import { Show_content } from './show-detailed-content/show-content.component'
// routing
const routes: Routes = [
  {
    path: 'content-management',
    component: ContentManagementComponent,
    resolve: {
      uls: ContentManagementService
    },
    data: { animation: 'ContentManagementComponent' }
  },
  {
    path: 'show-content',
    component: Show_content,
    // resolve: {
    //   uls: ContentManagementService
    // },
    data: { animation: 'Show_content' }
  },
  // {
  //   path: 'user-view/:id',
  //   component: UserViewComponent,
  //   resolve: {
  //     data: UserViewService,
  //     InvoiceListService
  //   },
  //   data: { path: 'view/:id', animation: 'UserViewComponent' }
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
  declarations: [ContentManagementComponent,AddNewContentComponent,Show_content],
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
  providers: [ContentManagementService,  UserEditService]
})
export class ContentModule {}
