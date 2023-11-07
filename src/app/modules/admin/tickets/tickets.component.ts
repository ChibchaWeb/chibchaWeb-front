import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  newTicket: any = { title: '', description: '' };
  tickets: any[] = [];
  message:string='';
  //Editor = ClassicEditor;
  predefinedMessage:string=`
  <p>
    Bogotá, noviembre 12 de 2023
    <br/>
    Sr: Paula Andrea Pérez Gómez
    <br/>
    Email: Paula@gmail.com
  </p>
  <br/>
  <p>Asunto:	Respuesta a su radicado SNR2022EE064904.</p>
  <br/>
  <p>
    Respetada Paula Andrea:
    En atención a su requerimiento de Cambio de propietario del dominio <<dominio>>, me permito informarle que el trámite solicitado no procede por las siguientes razones:
  </p>
  `;

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

  loadMessage(){
    this.message = this.predefinedMessage;
  }

  /* onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    this.predefinedMessage = data;
  } */
}
