import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { TableComponent } from './components/table/table.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarAdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CKEditorModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    NavbarAdminComponent,
    CKEditorModule,
  ]
})
export class SharedModule { }
