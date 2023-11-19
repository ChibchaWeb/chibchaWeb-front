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
import { PanelComponent } from '@modules/admin/panel/panel.component';
import { MenuComponent } from './components/menu/menu.component';
import { RecuadroComponent } from './components/recuadro/recuadro.component';
import { CuadrosComponent } from './components/cuadros/cuadros.component';
import { ChartComponent } from './components/chart/chart.component';
import { CheckDomainComponent } from './components/check-domain/check-domain.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardHostingComponent } from './components/card-hosting/card-hosting.component';

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
    PanelComponent,
    MenuComponent,
    RecuadroComponent,
    CuadrosComponent,
    ChartComponent,
    CheckDomainComponent,
    ButtonComponent,
    CardHostingComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
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
    PanelComponent,
    MenuComponent,
    RecuadroComponent,
    CuadrosComponent,
    ChartComponent,
    CheckDomainComponent,
    ButtonComponent,
    CardHostingComponent,
  ]
})
export class SharedModule { }
