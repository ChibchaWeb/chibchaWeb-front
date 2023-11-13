import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomainsService } from '@service/domains.service';
import { ShoppingService } from '@service/shopping.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchForm: FormGroup;
  isExist:any=null;
  isResult:boolean = false;

  constructor(private fb: FormBuilder,
    private domainsService:DomainsService,
    private shoppingService:ShoppingService) {
    this.searchForm = this.fb.group({
      domain: [''],
    });
  }

  onSubmit() {
    this.isExist = null
    const domain = this.searchForm.get('domain').value;
    this.domainsService.getWhoisInfo(domain).subscribe({
      next:(response)=>{
        this.isResult = true
        if (response) this.isExist = true
        else this.isExist = false
      },
      complete:()=>{
      },
      error:(err)=>{},
    })

  }

  search(){
  }
}
