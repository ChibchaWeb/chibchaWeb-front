import { Component } from '@angular/core';
import { ShoppingService } from '@service/shopping.service';

@Component({
  selector: 'app-shopping-cart-banner',
  templateUrl: './shopping-cart-banner.component.html',
  styleUrls: ['./shopping-cart-banner.component.scss']
})
export class ShoppingCartBannerComponent {

  selectedDomains: any[] = [];
  totalPrice: number = 0;

  constructor(private shoppingService:ShoppingService){
    this.shoppingService.cartShopping.subscribe({
      next:(response)=>{
        console.log(response)
        if (response) {
          this.totalPrice = 0
          this.selectedDomains = response
          response.map(el=>{
            this.totalPrice += el.price
          })
        }
      },
      complete:()=>{},
      error:(err)=>{}
    })
  }

  calculateTotalPrice() {
    this.totalPrice = this.selectedDomains.reduce((total, domain) => total + domain.price, 0);
  }
}
