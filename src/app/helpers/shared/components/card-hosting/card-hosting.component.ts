import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-hosting',
  templateUrl: './card-hosting.component.html',
  styleUrls: ['./card-hosting.component.scss']
})
export class CardHostingComponent {
  @Input('data') data:any;
  @Output() addProduct = new EventEmitter();
  @Output() removeProduct = new EventEmitter();
  platform:any='Windows'
  discount:number =0.8


  addToCart(hosting: any) {
    hosting.inCart = true;
    let hostingNew = JSON.parse(JSON.stringify(hosting));
    hostingNew = Object.assign(hostingNew, {platform: this.platform} )
    if (hostingNew.platform === 'Linux') hostingNew.currency = hostingNew.currency*this.discount
    this.addProduct.emit(hostingNew)
  }

  removeFromCart(hosting: any) {
    hosting.inCart = false;
    this.removeProduct.emit(hosting)
  }

}
