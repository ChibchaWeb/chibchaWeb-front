import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { TableComponent } from './components/table/table.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ItemDomainComponent } from './components/item-domain/item-domain.component';
import { FilterDomainsComponent } from './components/filter-domains/filter-domains.component';
import { ShoppingCartBannerComponent } from './components/shopping-cart-banner/shopping-cart-banner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarAdminComponent,
    TableComponent,
    ItemDomainComponent,
    FilterDomainsComponent,
    ShoppingCartBannerComponent,
    SidebarComponent,
    CheckoutComponent,
    PaypalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    NavbarAdminComponent,
    TableComponent,
    ItemDomainComponent,
    FilterDomainsComponent,
    ShoppingCartBannerComponent,
    SidebarComponent,
    CheckoutComponent,
    PaypalComponent,
  ]
})
export class SharedModule { }
