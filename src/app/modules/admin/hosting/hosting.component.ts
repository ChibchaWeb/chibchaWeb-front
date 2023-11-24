import { Component, Input } from '@angular/core';
import hostinglist from '@assets/js/hosting.json'
import { ShoppingService } from '@service/shopping.service';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent {
  hostingList: any = hostinglist
  hostingSelected:any[]=[]

  constructor(private shoppingService:ShoppingService){}

  addToCart(hosting:any){
    if (!this.hostingSelected.includes(hosting)) this.hostingSelected.push(hosting)
    this.shoppingService.setCartShopping(Object.assign(this.shoppingService.cartShopping, {hosting:this.hostingSelected}));
  }

  removeToCart(domain:any){
    let index = this.hostingSelected.findIndex(d => d !== domain);
    this.hostingSelected.splice(index,1)
    this.shoppingService.setCartShopping(Object.assign(this.shoppingService.cartShopping, {hosting:this.hostingSelected}));
  }
}
