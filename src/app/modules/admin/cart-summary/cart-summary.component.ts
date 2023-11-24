import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import domains from './../../../../assets/js/domains-list.json'
import { ShoppingService } from '@service/shopping.service';
import { DomainsService } from '@service/domains.service';

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
  hostingSelected:any = [];
  iva:number=0;
  subtotal:number=0;
  jsonXML:any;
  response:any;

  constructor(private fb: FormBuilder,private shoppingService:ShoppingService, private domainsService:DomainsService) {
    this.shoppingService.cartShopping.subscribe({
      next:(response)=>{
        this.jsonXML = Object.assign({domainList:response.domainList,hosting:response.hosting})
        this.response = response
        if (response.domainList) this.productSelected = response.domainList
        if (response.hosting) this.hostingSelected = response.hosting
        if (this.productSelected) this.calcImpuestos()
      },
      complete:()=>{},
      error:(err)=>{}
    })
  }

  ngOnInit() {
  }

  calcImpuestos(){
    this.iva = 0
    let subtotal = 0
    this.subtotal = 0
    if (this.productSelected) {
      this.productSelected.map(el =>{
        subtotal += el['costDomain']*(1-(el.discount/100))
      })
    }
    if (this.hostingSelected) {
      this.hostingSelected.map(el =>{
        subtotal += el.currency
      })
    }
    this.iva = subtotal*0.19
    this.subtotal = subtotal
    console.log(this.iva, this.subtotal)
  }

  payment(){
    this.productSelected.map(el =>{
      console.log(el)
      this.domainsService.buyDomain(el).subscribe({
        next:(response)=>{
          console.log(response)
        },
        complete:()=>{},
        error:(err) =>{
          console.log(err)},
      })
    })
  }

}
