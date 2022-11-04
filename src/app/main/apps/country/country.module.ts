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

import { CountryListService } from './country-list.service';
import { CountryListComponent } from './country-list/country-list.component';
import { AddNewComponent } from './country-list/add-new/add-new.component';

// routing
const routes: Routes = [
  {
    path: 'country-list',
    component: CountryListComponent,
    resolve: {
      uls: CountryListService
    },
    data: { animation: 'CountryListComponent' }
  },
];

@NgModule({
  declarations: [CountryListComponent, AddNewComponent],
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
  providers: [CountryListService, UserEditService]
})
export class CountryModule {}
