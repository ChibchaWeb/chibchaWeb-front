import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import domains from './../../../../assets/js/domains-list.json'
import { DomainsService } from '@service/domains.service';
import { ShoppingService } from '@service/shopping.service';

@Component({
  selector: 'app-search-domain',
  templateUrl: './search-domain.component.html',
  styleUrls: ['./search-domain.component.scss']
})
export class SearchDomainComponent {
  searchForm: FormGroup;
  activeTab: string = 'resultados';
  domains:any[] = domains
  newDomainList:any[]=domains
  domainSelected:any[]=[]
  listdomains:any

  constructor(private fb: FormBuilder,
  private domainsService:DomainsService,
  private shoppingService:ShoppingService) {
    this.searchForm = this.fb.group({
      searchQuery: ['']
    });
    this.shoppingService.cartShopping.subscribe({
      next:(response)=>{
        //this.newDomainList = response
      },
      complete:()=>{},
      error:(err)=>{}
    })
  }

  onSubmit() {
    const searchQuery = this.searchForm.get('searchQuery').value;
    this.domainsService.getNameCom(searchQuery).subscribe((response: any) => {
      this.listdomains = response
    })
  }

  ngOnInit() {
  }

  addToCart(domain:any){
    if (!this.domainSelected.includes(domain)) this.domainSelected.push(domain)
    this.shoppingService.setCartShopping(this.domainSelected);
  }

  removeToCart(domain:any){
    let index = this.domainSelected.findIndex(d => d !== domain);
    this.domainSelected.splice(index,1)
    this.shoppingService.setCartShopping(this.domainSelected);
  }
}
