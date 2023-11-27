import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { SearchDomainComponent } from './search-domain/search-domain.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { NameserversComponent } from './nameservers/nameservers.component';
import { BuyRegisterComponent } from './buy-register/buy-register.component';
import { PanelComponent } from './panel/panel.component';
import { ManagmentUsersComponent } from './managment-users/managment-users.component';
import { HostingComponent } from './hosting/hosting.component';
import { TicketsDetailsComponent } from './tickets-details/tickets-details.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { CreditCardManagmentComponent } from './credit-card-managment/credit-card-managment.component';


const routes: Routes = [
  {
    path: '', component: HomeAdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'panel' },
      { path: 'panel', component: PanelComponent, },
      { path: 'search', component: SearchDomainComponent, },
      { path: 'nameservers', component: NameserversComponent, },
      { path: 'cart', component: CartSummaryComponent, },
      { path: 'credit-card-managment', component: CreditCardManagmentComponent, },
      { path: 'add-credit-card', component: CreditCardsComponent, },
      { path: 'hosting', component: HostingComponent, },
      { path: 'tickets', component: TicketsComponent, },
      { path: 'ticket-management', component: TicketManagementComponent, },
      { path: 'ticket-detail/:id', component: TicketsDetailsComponent, },
      { path: 'user-managment', component: ManagmentUsersComponent, },
      { path: 'user-detail/:id', component: UserDetailComponent, },
      { path: 'buy-register', component: BuyRegisterComponent, },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)},
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
