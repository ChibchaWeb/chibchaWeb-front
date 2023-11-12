import { Component } from '@angular/core';
declare var paypal;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent {
  paymentStatus:any=''
  constructor() { }

  ngOnInit() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '10.00' // Monto del pago
            }
          }]
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then(details => {
          // Pago exitoso, puedes realizar acciones adicionales aquí
          console.log('Pago exitoso', details);
        });
      },
      onError: err => {
        // Manejar errores aquí
        console.error('Error en el pago', err);
      }
    }).render('#paypal-button-container');
  }
}
