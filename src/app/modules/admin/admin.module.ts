import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeAdminComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SearchDomainComponent } from './search-domain/search-domain.component';
import { ItemDomainComponent } from './item-domain/item-domain.component';
import { FilterDomainsComponent } from './filter-domains/filter-domains.component';
import { ShoppingCartBannerComponent } from './shopping-cart-banner/shopping-cart-banner.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardsOptionsComponent } from './cards-options/cards-options.component';
import { NameserversComponent } from './nameservers/nameservers.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaypalComponent } from './paypal/paypal.component';

@NgModule({
  declarations: [
    HomeAdminComponent,
    TicketsComponent,
    TicketManagementComponent,
    SearchDomainComponent,
    ItemDomainComponent,
    FilterDomainsComponent,
    ShoppingCartBannerComponent,
    CartSummaryComponent,
    SidebarComponent,
    CardsOptionsComponent,
    NameserversComponent,
    CheckoutComponent,
    PaypalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
