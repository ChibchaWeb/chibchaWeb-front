import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {

  constructor() { }
  validarNumeroTarjeta(numeroTarjeta: string): boolean {
    // Eliminar espacios en blanco y guiones de la cadena
    const numeroLimpio = String(numeroTarjeta).replace(/\s+/g, '').replace(/-/g, '');

    // Comprobar si la cadena contiene solo números
    if (!/^[0-9]+$/.test(numeroLimpio)) {
      return false;
    }

    // Comprobar si la tarjeta es de Visa, MasterCard, American Express, etc.
    if (!this.validarProveedorTarjeta(numeroLimpio)) {
      return false;
    }

    // Aplicar el algoritmo de Luhn (módulo 10)
    return this.validarAlgoritmoLuhn(numeroLimpio);
  }

  private validarProveedorTarjeta(numeroTarjeta: string): boolean {
    // Comprobar patrones para diferentes proveedores de tarjetas
    if (/^4/.test(numeroTarjeta)) {
      return true; // Visa
    } else if (/^5[1-5]/.test(numeroTarjeta)) {
      return true; // MasterCard
    } else if (/^3[47]/.test(numeroTarjeta)) {
      return true; // American Express
    } // Agregar más casos según sea necesario

    return false;
  }

  private validarAlgoritmoLuhn(numeroTarjeta: string): boolean {
    let suma = 0;
    let doble = false;

    for (let i = numeroTarjeta.length - 1; i >= 0; i--) {
      let digito = parseInt(numeroTarjeta.charAt(i), 10);

      if (doble) {
        digito *= 2;
        if (digito > 9) {
          digito -= 9;
        }
      }

      suma += digito;
      doble = !doble;
    }

    return suma % 10 === 0;
  }

  maskCreditCard(creditCard: string): string {
    if (creditCard && creditCard.length >= 4) {
      const lastFourDigits = creditCard.slice(-4);
      const maskedCreditCard = '*'.repeat(creditCard.length - 4) + lastFourDigits;
      return maskedCreditCard
    }
    return creditCard;
  }
}
