import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import domains from './../../../../assets/js/domains-list.json'
import { DomainsService } from '@service/domains.service';
import { ShoppingService } from '@service/shopping.service';
const providerImage = [
  {name:".CO", img:'client-1'},
  {name:".com", img:'client-2'},
  {name:".info", img:'client-3'},
  {name:".net", img:'client-4'},
  {name:".online", img:'client-5'},
  {name:".org", img:'client-6'},
  {name:".site", img:'client-7'},
  {name:".store", img:'client-8'},
  {name:".xyz", img:'client-9'}]
const suggestedDomains = ['com', 'co', 'org', 'edu', 'mil', 'net', 'xyz', 'info', 'com.co'];
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
  isDomainExist:any[]=[]
  domains:any[] = []
  newDomainList:any[] = []
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
    this.domains = []
    this.isDomainExist = []
    this.domainExistsInWhois = null
    const searchQuery = this.searchForm.get('searchQuery').value;
    this.domainsService.getWhoisInfo(searchQuery).subscribe({
      next:(response: any) => {
        if (response) {
          this.domainExistsInWhois = response;
          console.log(response,response['domain_name'][0].split('.')[1])
          this.isDomainExist=(response['domain_name'][0])
        }
        let domainName = searchQuery.split('.')[0];
        suggestedDomains.forEach((tld) => {
          let randomPriceIndex = Math.floor(Math.random() * prices.length);
          let randomSubtitleIndex = Math.floor(Math.random() * subtitle.length);
          let randomProvider = Math.floor(Math.random() * providerImage.length);
          console.log(randomProvider)
          this.existingDomains.push({
            name: `${domainName}.${tld}`,
            uso: false,
            price: prices[randomPriceIndex],
            subtitle: subtitle[randomSubtitleIndex],
            inCart: false,
            provider: providerImage[randomProvider]['name'],
            discount: subtitle[randomSubtitleIndex] === "Descuento del 10%" ? 10 : 0,
            providerImage:`/assets/img/clients/${providerImage[randomProvider]['img']}.png`
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
