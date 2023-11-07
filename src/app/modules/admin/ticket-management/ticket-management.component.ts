import { Component, Input } from '@angular/core';
import tickets from './../../../../assets/js/tickets-list.json'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent {
  @Input() tickets: any[] = tickets;
  dataSource = new MatTableDataSource(this.tickets);
  displayedColumns: string[] = ['id', 'asunto', 'estado', 'acciones'];
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5;

  verDetalles(ticket: any) {
  }

  cambiarEstado(ticket: any) {
  }
}
