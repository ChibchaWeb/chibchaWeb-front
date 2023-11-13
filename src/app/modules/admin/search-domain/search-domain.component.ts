import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import domains from './../../../../assets/js/domains-list.json'
import { DomainsService } from '@service/domains.service';
import { ShoppingService } from '@service/shopping.service';
const suggestedDomains = ['com', 'co', 'org', 'edu', 'mil', 'net', 'xyz', 'info'];
const prices =[52500,54500,49500,98500,47500]
const subtitle =["Únicamente el primer año con un plazo de 2 años","Por el primer año","Oferta especial","Descuento del 10%"]

@Component({
  selector: 'app-search-domain',
  templateUrl: './search-domain.component.html',
  styleUrls: ['./search-domain.component.scss']
})
export class SearchDomainComponent {
  searchForm: FormGroup;
  activeTab: string = 'resultados';
  domains:any[] = domains
  newDomainList:any[] = domains
  domainSelected:any[]=[]
  listdomains: any = [];
  existingDomains: any[] = [];
  domainExistsInWhois:any=null;

  constructor(private fb: FormBuilder,
  private domainsService:DomainsService,
  private shoppingService:ShoppingService) {
    this.searchForm = this.fb.group({
      searchQuery: ['']
    });
    this.shoppingService.cartShopping.subscribe({
      next:(response)=>{
        this.newDomainList = response
      },
      complete:()=>{},
      error:(err)=>{}
    })
  }

  onSubmit() {
    this.domainExistsInWhois = null
    const searchQuery = this.searchForm.get('searchQuery').value;
    this.domainsService.getWhoisInfo(searchQuery).subscribe({
      next:(response: any) => {
        if (response) this.domainExistsInWhois = response;
        let domainName = searchQuery.split('.')[0];
        suggestedDomains.forEach((tld) => {
          let randomPriceIndex = Math.floor(Math.random() * prices.length);
          let randomSubtitleIndex = Math.floor(Math.random() * subtitle.length);
          this.existingDomains.push({
            name: `${domainName}.${tld}`,
            uso: false,
            price: prices[randomPriceIndex],
            subtitle: subtitle[randomSubtitleIndex],
            inCart: false,
            provider: ".CO",
            discount: subtitle[randomSubtitleIndex] === "Descuento del 10%" ? 10 : 0,
            providerImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/DotCO_logo.svg/1200px-DotCO_logo.svg.png"
        });
        });
        if (this.domainExistsInWhois) {
          const existingDomain = this.existingDomains.find((d) => d.dominio === searchQuery);
          if (existingDomain) existingDomain.uso = true;
        }
      },
      complete:()=>{
        this.domains = this.existingDomains;
        console.log(this.domains)
      },
      error:(err)=>{}
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
