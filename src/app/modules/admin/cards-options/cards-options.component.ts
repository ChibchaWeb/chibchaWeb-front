import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-options',
  templateUrl: './cards-options.component.html',
  styleUrls: ['./cards-options.component.scss']
})
export class CardsOptionsComponent {

  cardsList = [
      {
        "dominio": ".com",
        "precio": "$52,500COP",
        "botonDisponible": "Añadir",
        "botonSoporte": "Contactar con Soporte para Comprar"
      },
      {
        "dominio": ".net",
        "precio": "$54,500COP",
        "botonDisponible": "Añadir",
        "botonSoporte": "Contactar con Soporte para Comprar"
      },
      {
        "dominio": ".org",
        "precio": "$49,500COP",
        "botonDisponible": "Añadir",
        "botonSoporte": "Contactar con Soporte para Comprar"
      },
      {
        "dominio": ".co",
        "precio": "$98,500COP",
        "botonDisponible": "Añadir",
        "botonSoporte": "Contactar con Soporte para Comprar"
      },
      {
        "dominio": ".com.co",
        "precio": "$47,500COP",
        "botonDisponible": "Añadir",
        "botonSoporte": "Contactar con Soporte para Comprar"
      }
    ]
}
