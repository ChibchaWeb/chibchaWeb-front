import { Component, Input } from '@angular/core';
import tickets from './../../../../assets/js/tickets-list.json'
import { MatTableDataSource } from '@angular/material/table';
import { TicketsService } from '@service/tickets.service';
import { Router } from '@angular/router';

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

  constructor(private ticketsService:TicketsService,private router: Router){
    this.ticketsService.getTickets().subscribe({
      next:(response)=>{
        console.log(response)
        this.dataSource = response;
      }
    })
  }

  verDetalles(ticket: any) {
    this.router.navigate(['/admin/ticket-detail/', ticket.id]);
  }

  cambiarEstado(ticket: any) {
  }
}
