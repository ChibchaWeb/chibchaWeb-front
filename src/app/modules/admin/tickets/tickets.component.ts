import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

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
  ticketForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ticketForm = this.fb.group({
      id:[null],
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.maxLength(100)]],
      departamento: ['soporte', [Validators.required]],
      servicios: [''],
      prioridad: ['baja', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.maxLength(500)]],
      adjunto: [''],
    });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.ticketForm.patchValue({id: uuidv4()});
      console.log(this.ticketForm.value);
    }
  }
}
