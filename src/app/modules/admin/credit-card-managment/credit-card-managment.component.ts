import { Component } from '@angular/core';
import { TarjetaCredito } from '@interfaces/TarjetaCredito';
import { CreditCardsService } from '@service/credit-cards.service';

@Component({
  selector: 'app-credit-card-managment',
  templateUrl: './credit-card-managment.component.html',
  styleUrls: ['./credit-card-managment.component.scss']
})
export class CreditCardManagmentComponent {
  tarjetas: TarjetaCredito[] = [
    { id: 1, numero: '1234-5678-9012-3456', nombreTitular: 'John Doe', fechaVencimiento: '12/24', cvc: '123', proveedor: 'Visa' },
    { id: 2, numero: '9876-5432-1098-7654', nombreTitular: 'Jane Doe', fechaVencimiento: '06/23', cvc: '456', proveedor: 'MasterCard' },
  ];

  constructor(
    private creditCardsService:CreditCardsService,
    ){}

  maskCreditCard(creditCardNumber:any):string{
    return this.creditCardsService.maskCreditCard(creditCardNumber)
  }

  eliminarTarjeta(id: number) {
    this.tarjetas = this.tarjetas.filter(tarjeta => tarjeta.id !== id);
  }
}
