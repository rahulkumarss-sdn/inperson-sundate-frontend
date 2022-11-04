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

import { SubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { SubscriptionManagementService } from './subscription-management.service';
import { Subscription_details } from './subscription-management/subscription-details/subscription-details.component'
import { AddNewSubscriptionComponent } from './subscription-management/add-new-subscription/add-new-subscription.component';
// routing
const routes: Routes = [
  {
    path: 'subscription-management',
    component: SubscriptionManagementComponent,
    resolve: {
      uls: SubscriptionManagementService
    },
    data: { animation: 'SubscriptionManagementComponent' }
  },
  {
    path: 'Subscription_details',
    component: Subscription_details,
    // resolve: {
    //   uls: ContentManagementService
    // },
    data: { animation: 'Subscription_details' }
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
  declarations: [SubscriptionManagementComponent,AddNewSubscriptionComponent],
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
  providers: [SubscriptionManagementService, UserEditService]
})
export class SubscriptionModule {}