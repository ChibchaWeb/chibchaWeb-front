import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { SearchDomainComponent } from './search-domain/search-domain.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { NameserversComponent } from './nameservers/nameservers.component';

const routes: Routes = [
  {
    path: '', component: HomeAdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'search' },
      { path: 'search', component: SearchDomainComponent, },
      { path: 'nameservers', component: NameserversComponent, },
      { path: 'cart', component: CartSummaryComponent, },
      { path: 'tickets', component: TicketsComponent, },
      { path: 'ticket-management', component: TicketManagementComponent, },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)},
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
