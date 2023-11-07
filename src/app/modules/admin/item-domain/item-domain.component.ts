import { Component, Input } from '@angular/core';
interface Domain {
  name: string;
  price: number;
  subtitle: string;
  inCart: boolean;
}
@Component({
  selector: 'app-item-domain',
  templateUrl: './item-domain.component.html',
  styleUrls: ['./item-domain.component.scss']
})
export class ItemDomainComponent {
  @Input('domain') domain:Domain;
  selectedDomains: Domain[] = [];
  totalPrice: number = 0;
  addToCart(domain: Domain) {
    domain.inCart = true;
    this.selectedDomains.push(domain);
  }

  removeFromCart(domain: Domain) {
    domain.inCart = false;
    this.selectedDomains = this.selectedDomains.filter(d => d !== domain);
  }
}
