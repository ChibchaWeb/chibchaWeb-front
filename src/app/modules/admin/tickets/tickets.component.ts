import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  newTicket: any = { title: '', description: '' };
  tickets: any[] = [];

  createTicket() {
    if (this.newTicket.title && this.newTicket.description) {
      this.tickets.push(this.newTicket);
      this.newTicket = { title: '', description: '' };
    }
  }
}
