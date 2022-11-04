import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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

import { PaymentManagementService } from './payment-management.service';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

// routing
const routes: Routes = [
  {
    path: 'payment-management',
    component: PaymentManagementComponent,
    resolve: {
      uls: PaymentManagementService
    },
    data: { animation: 'PaymentManagementComponent' }
  }
];

@NgModule({
  declarations: [PaymentManagementComponent, PaymentDetailsComponent],
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
  providers: [PaymentManagementService, UserEditService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PaymentModule {}
