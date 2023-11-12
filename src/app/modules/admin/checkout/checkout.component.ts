import { Component, OnInit } from '@angular/core';
declare var EPayco;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  dataCompra: any; // Asegúrate de que el tipo sea correcto
  handlerData: any;
  numeroFactura = '';
  epayco: any;

  constructor() {
    this.epayco = new EPayco({
      apiKey: 'TU_API_KEY',
      privateKey: 'TU_CLAVE_PRIVADA',
    });
  }

  ngOnInit(): void {
    this.handlerData = EPayco.checkout.configure({
      key: '491d6a0b6e992cf924edd8d3d088aff1',
      test: true,
    });
  }

  generarNumeroFactura() {
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = this.padZero(fecha.getMonth() + 1);
    const day = this.padZero(fecha.getDate());
    const hours = this.padZero(fecha.getHours());
    const minutes = this.padZero(fecha.getMinutes());
    const seconds = this.padZero(fecha.getSeconds());
    const numeroFactura = `FACTB${year}${month}${day}${hours}${minutes}${seconds}`;
    this.numeroFactura = numeroFactura;
    return numeroFactura;
  }

  padZero(number: number): string {
    return number.toString().padStart(2, '0');
  }

  openCheckout() {
    // Lógica para abrir el checkout
  }

  bopenCheckout() {
    this.generarNumeroFactura();
    if (this.numeroFactura) {
      this.handlerData.open({
        name: this.dataCompra.checkout.name,
        description: this.dataCompra.checkout.description,
        invoice: this.numeroFactura,
        currency: 'cop',
        amount: this.dataCompra.checkout.amount,
        tax_base: this.dataCompra.checkout.tax_base,
        tax: this.dataCompra.checkout.tax,
        country: this.dataCompra.checkout.country,
        lang: this.dataCompra.checkout.lang,
        external: false,
        extra1: this.dataCompra.checkout.extra1,
        extra2: this.dataCompra.checkout.extra2,
        extra3: this.dataCompra.checkout.extra3,
        confirmation: this.dataCompra.checkout.confirmation,
        response: 'https://google.com/response/',
        name_billing: this.dataCompra.checkout.billingName,
        address_billing: this.dataCompra.checkout.billingAddress,
        type_doc_billing: this.dataCompra.checkout.billingDocType,
        number_doc_billing: this.dataCompra.checkout.billingDocNumber,
        mobilephone_billing: this.dataCompra.checkout.billingMobilePhone
      });
      localStorage.setItem('SETDATACOMPRA', JSON.stringify(this.dataCompra));
    }
  }

  onConfirmationResponse(responseData: any) {
    console.log('Confirmation response:', responseData);
    alert('Compra realizada con éxito: ' + responseData);
    window.location.href = responseData;
  }

  onPaymentResponse(responseData: any): string {
    console.log('Confirmation response:', responseData);
    alert('Response: Compra realizada con éxito: ' + responseData);
    return 'localhost:3001/pasarela/';
  }

  renderCheckout() {
    const ePaycoForm = document.getElementById('ePaycoForm');
    const ePaycoScript = document.createElement('script');
    ePaycoScript.setAttribute('src', 'https://checkout.epayco.co/checkout.js');
    ePaycoScript.setAttribute('data-epayco-key', '491d6a0b6e992cf924edd8d3d088aff1');
    ePaycoScript.setAttribute('data-epayco-amount', this.dataCompra.checkout.amount);
    ePaycoScript.setAttribute('data-epayco-name', this.dataCompra.checkout.name);
    ePaycoScript.setAttribute('data-epayco-description', this.dataCompra.checkout.description);
    ePaycoScript.setAttribute('data-epayco-invoice', this.numeroFactura);
    ePaycoScript.setAttribute('data-epayco-currency', 'cop');
    ePaycoScript.setAttribute('data-epayco-country', 'CO');
    ePaycoScript.setAttribute('data-epayco-test', 'true');
    ePaycoScript.setAttribute('class', 'epayco-button');
    ePaycoScript.setAttribute('data-epayco-external', 'true');
    ePaycoScript.setAttribute('data-epayco-extra1', this.dataCompra.checkout.extra1);
    ePaycoScript.setAttribute('data-epayco-extra2', this.dataCompra.checkout.extra2);
    ePaycoScript.setAttribute('data-epayco-extra3', this.dataCompra.checkout.extra3);
    ePaycoScript.setAttribute('data-epayco-response', this.dataCompra.checkout.response + 'user/experiencias/response/');
    ePaycoForm.appendChild(ePaycoScript);
  }
}