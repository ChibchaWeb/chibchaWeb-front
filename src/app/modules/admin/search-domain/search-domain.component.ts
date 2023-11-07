import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import domains from './../../../../assets/js/domains-list.json'

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

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery: ['']
    });
  }

  onSubmit() {
    // Realizar la búsqueda con 'searchQuery'
    const searchQuery = this.searchForm.get('searchQuery').value;
  }

  ngOnInit() {
  }
}
