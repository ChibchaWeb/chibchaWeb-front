import { Component } from '@angular/core';
import tickets from './../../../../assets/js/tickets-list.json'

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent {
  //tickets: number[] = Array.from({ length: 25 }, (_, i) => i + 1);
  tickets: any[] = tickets;

  editTicket(ticket){}
  deleteTicket(ticket){}
}
