import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { SearchDomainComponent } from './search-domain/search-domain.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { NameserversComponent } from './nameservers/nameservers.component';
import { PanelComponent } from './panel/panel.component';
import { ManagmentUsersComponent } from './managment-users/managment-users.component';
import { ExpansionTableComponent } from './expansion-table/expansion-table.component';


const routes: Routes = [
  {
    path: '', component: HomeAdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'panel' },
      { path: 'panel', component: PanelComponent, },
      { path: 'search', component: SearchDomainComponent, },
      { path: 'nameservers', component: NameserversComponent, },
      { path: 'cart', component: CartSummaryComponent, },
      { path: 'tickets', component: TicketsComponent, },
      { path: 'ticket-management', component: TicketManagementComponent, },
      { path: 'user-managment', component: ManagmentUsersComponent, },
      { path: 'user-detail', component: ExpansionTableComponent, },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)},
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
