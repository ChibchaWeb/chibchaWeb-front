import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QueriesService } from '@service/queries.service';

@Component({
  selector: 'app-card-hosting',
  templateUrl: './card-hosting.component.html',
  styleUrls: ['./card-hosting.component.scss']
})
export class CardHostingComponent {
  @Input('data') data:any;
  @Output() addProduct = new EventEmitter();
  @Output() removeProduct = new EventEmitter();
  platform:any=[]
  platformSelected:any=1
  discount:number =0.8
  hostingRef:any

  constructor( private queriesService:QueriesService){    
    this.queriesService.getPlatforms().subscribe({
      next:(request)=>{
        this.platform = request
      }
    })
  }

  addToCart(hosting: any) {
    hosting.inCart = true;
    this.hostingRef = JSON.parse(JSON.stringify(hosting));
    let hostingNew = JSON.parse(JSON.stringify(hosting));
    hostingNew = Object.assign(hostingNew, {platform: this.platform} )
    if (hostingNew.platform === 'Linux') hostingNew.currency = hostingNew.currency*this.discount
    if (hostingNew.platform === 'Windows') hostingNew.currency = hostingNew.currency*this.discount
    this.addProduct.emit(hostingNew)
  }

  removeFromCart(hosting: any) {
    hosting = this.hostingRef
    if (hosting.platform === 'Linux') hosting.currency = hosting.currency+((this.discount^(-1) )*hosting.currency )
    hosting.inCart = false;
    this.removeProduct.emit(hosting)
  }

}
