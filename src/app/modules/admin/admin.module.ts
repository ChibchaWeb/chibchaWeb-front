import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeAdminComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SearchDomainComponent } from './search-domain/search-domain.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CardsOptionsComponent } from '../../helpers/shared/components/cards-options/cards-options.component';
import { NameserversComponent } from './nameservers/nameservers.component';
import { DashboardRoutingModule } from '@modules/dashboard/dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeAdminComponent,
    TicketsComponent,
    TicketManagementComponent,
    SearchDomainComponent,
    CartSummaryComponent,
    CardsOptionsComponent,
    NameserversComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DashboardRoutingModule,
  ]
})
export class AdminModule { }
