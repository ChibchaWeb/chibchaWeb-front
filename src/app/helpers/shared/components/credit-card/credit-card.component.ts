import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCardsService } from '@service/credit-cards.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent {
  tarjetaForm: FormGroup;

  constructor(private fb: FormBuilder, private creditCardsService:CreditCardsService) {
    this.tarjetaForm = this.fb.group({
      numeroTarjeta: ['', [Validators.required, this.creditCardsService.validarNumeroTarjeta, Validators.maxLength(16)]],
      nombreTitular: ['', Validators.required],
      fechaVencimiento: ['', [Validators.required, this.validarFechaVencimiento]],
      cvc: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
    });
  }

  validarNumeroTarjeta(control) {
    const numeroTarjeta = control.value;

    // Lógica de validación para identificar el tipo de tarjeta
    // Agrega más casos según sea necesario
    if (/^4/.test(numeroTarjeta)) {
      return null; // Visa
    } else if (/^5[1-5]/.test(numeroTarjeta)) {
      return null; // MasterCard
    } else if (/^3[47]/.test(numeroTarjeta)) {
      return null; // American Express
    } else {
      return { 'tarjetaInvalida': true };
    }
  }

  validarFechaVencimiento(control) {
    const fechaVencimiento = control.value;
    const fechaActual = new Date();

    if (fechaVencimiento) {
      const partesFecha = fechaVencimiento.split('/');
      const mes = parseInt(partesFecha[0], 10);
      const anio = parseInt(partesFecha[1], 10) + 2000;

      if (mes < 1 || mes > 12 || anio < fechaActual.getFullYear() || (anio === fechaActual.getFullYear() && mes < fechaActual.getMonth() + 1)) {
        return { 'fechaInvalida': true };
      }
    }

    return null;
  }

  enviarFormulario() {
    if (this.tarjetaForm.valid) {
      console.log('Formulario válido:', this.tarjetaForm.value);
      // Aquí puedes enviar los datos al servidor o realizar otras operaciones necesarias
    } else {
      console.log('Formulario no válido. Por favor, corrija los errores.');
    }
  }
}
