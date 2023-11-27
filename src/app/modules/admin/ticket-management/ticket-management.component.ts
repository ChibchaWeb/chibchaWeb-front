import { Component, Input } from '@angular/core';
import tickets from './../../../../assets/js/tickets-list.json'
import { MatTableDataSource } from '@angular/material/table';
import { TicketsService } from '@service/tickets.service';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent {
  @Input() tickets: any[] = [];
  dataSource:any;
  displayedColumns: string[] = ['id','asunto', 'mensaje', 'estado', 'acciones'];
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5;

  constructor(private ticketsService:TicketsService,){
    this.ticketsService.getTickets().subscribe({
      next:(response)=>{
        console.log(response)
        this.dataSource = response;
      }
    })
  }

  verDetalles(ticket: any) {
  }

  cambiarEstado(ticket: any) {
  }
}
