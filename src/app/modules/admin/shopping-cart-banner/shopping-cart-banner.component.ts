import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-banner',
  templateUrl: './shopping-cart-banner.component.html',
  styleUrls: ['./shopping-cart-banner.component.scss']
})
export class ShoppingCartBannerComponent {
  selectedDomains: any[] = ['','','',];
  totalPrice: number = 8000;
  
  calculateTotalPrice() {
    this.totalPrice = this.selectedDomains.reduce((total, domain) => total + domain.price, 0);
  }
}
