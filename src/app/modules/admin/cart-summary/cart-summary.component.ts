import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import domains from './../../../../assets/js/domains-list.json'
import { ShoppingService } from '@service/shopping.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent {
  @Input() selectedDomains: any[]=domains;
  cartForm: FormGroup;
  discount:number = 18;
  plan:string = 'Premium'
  productSelected:any = [];
  iva:number=0;
  subtotal:number=0;

  constructor(private fb: FormBuilder,private shoppingService:ShoppingService) {
    this.shoppingService.cartShopping.subscribe({
      next:(response)=>{
        this.productSelected = response
        if (this.productSelected) this.calcImpuestos()
      },
      complete:()=>{},
      error:(err)=>{}
    })
  }

  ngOnInit() {
  }

  initItems() {
    /* const itemsArray = this.cartForm.get('items') as FormArray;
    this.selectedDomains.forEach(domain => {
      itemsArray.push(this.fb.group({
        name: [domain.name],
        provider: [domain.provider],
        years: [1],
        price: [domain.price],
        plan: ['Plan Estándar'],
        discount: [0],
        total: [domain.price],
      }));
    }); */
  }

  calcImpuestos(){
    this.iva = 0
    let subtotal = 0
    this.subtotal = 0
    this.productSelected.map(el =>{
      this.iva += (el.price*0.19)
      subtotal += el.price
    })
    this.subtotal = subtotal - this.iva
  }

}
