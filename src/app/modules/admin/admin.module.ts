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
import { ManagmentUsersComponent } from './managment-users/managment-users.component';
import { HostingComponent } from './hosting/hosting.component';
import { ExpansionTableComponent } from './expansion-table/expansion-table.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeAdminComponent,
    TicketsComponent,
    TicketManagementComponent,
    SearchDomainComponent,
    CartSummaryComponent,
    CardsOptionsComponent,
    NameserversComponent,
    ExpansionTableComponent,
    
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
    ManagmentUsersComponent,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  bootstrap: [ExpansionTableComponent]

})
export class AdminModule { }
