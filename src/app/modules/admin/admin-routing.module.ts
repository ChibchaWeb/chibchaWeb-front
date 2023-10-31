import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';

const routes: Routes = [
  {
    path: '', component: HomeAdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'tickets' },
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
