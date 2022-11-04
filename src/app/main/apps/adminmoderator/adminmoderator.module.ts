import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAdminmoderatorComponent } from './list-adminmoderator/list-adminmoderator.component';
import { NewAdminSidebarComponent } from './list-adminmoderator/new-admin-sidebar/new-admin-sidebar.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule } from '@core/components';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { InvoiceModule } from '../invoice/invoice.module';
import { ListAdminModerattorService } from './list-adminmoderator/list-admin-moderattor.service';
import { EditAdminSidebarComponent } from './list-adminmoderator/edit-admin-sidebar/edit-admin-sidebar.component';
import { AdminmoderatorService } from './adminmoderator.service';

// routing
const routes: Routes = [
  {
    path: 'adminModerator-list',
    component: ListAdminmoderatorComponent,
    resolve: {
      uls: ListAdminModerattorService
    },
    data: { animation: 'ListAdminmoderatorComponent' }
  },

  {
    path: 'admin-edit/:id',
    component: EditAdminSidebarComponent,
    resolve: {
      ues: AdminmoderatorService
    },
    data: { animation: 'EditAdminSidebarComponent' }
  }

];

@NgModule({
  declarations: [
    ListAdminmoderatorComponent,
    NewAdminSidebarComponent,
    EditAdminSidebarComponent
  ],
  imports: [
    CommonModule,
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
    CoreSidebarModule,
    ContentHeaderModule, 
    CardSnippetModule
  ],
  providers:[ListAdminModerattorService]
})
export class AdminmoderatorModule { }
