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

  addToCart(hosting: any) {
    hosting.inCart = true;
    this.addProduct.emit(hosting)
  }

  removeFromCart(hosting: any) {
    hosting.inCart = false;
    this.removeProduct.emit()
  }

}
