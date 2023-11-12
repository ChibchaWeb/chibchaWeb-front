import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import domains from './../../../../assets/js/domains-list.json'

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

  constructor(private fb: FormBuilder) {
    this.cartForm = this.fb.group({
      items: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.initItems();
  }

  initItems() {
    const itemsArray = this.cartForm.get('items') as FormArray;
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
    });
  }
  calculateSubtotal(){
    return 34590
  }
}
