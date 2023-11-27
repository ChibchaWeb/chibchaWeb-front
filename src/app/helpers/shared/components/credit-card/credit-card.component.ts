import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent {
  tarjetaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario reactivo
    this.tarjetaForm = this.fb.group({
      numeroTarjeta: ['', [Validators.required, this.validarNumeroTarjeta]],
      // Otros campos del formulario
    });
  }

  // Método para validar el número de tarjeta
  validarNumeroTarjeta(control) {
    const numeroTarjeta = control.value;

    // Realizar la lógica de validación para identificar la tarjeta (Visa, MasterCard, American Express, etc.)
    // Puedes utilizar expresiones regulares u otras técnicas de validación aquí

    // Ejemplo: Visa inicia con '4'
    if (/^4/.test(numeroTarjeta)) {
      return null; // Válido
    } else {
      return { 'tarjetaInvalida': true }; // Inválido
    }
  }

  // Método para enviar el formulario
  enviarFormulario() {
    if (this.tarjetaForm.valid) {
      // Procesar los datos del formulario
      console.log('Formulario válido:', this.tarjetaForm.value);
    } else {
      // Manejar el caso de formulario no válido
      console.log('Formulario no válido. Por favor, corrija los errores.');
    }
  }

}
