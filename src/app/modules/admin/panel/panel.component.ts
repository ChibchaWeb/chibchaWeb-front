import { Component } from '@angular/core';
import { TicketsService } from '@service/tickets.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  searchText: any;
  tokenCount:number=0

  constructor(private ticketsService:TicketsService,){
    this.ticketsService.getTickets().subscribe({
      next:(response)=>{
        this.tokenCount = response['length'];
      }
    })
  }
}
