import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  cartShopping: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }

  setCartShopping(msg: any): void {
		this.cartShopping.next(msg);
	}
}
