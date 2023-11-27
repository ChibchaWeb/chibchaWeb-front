import { Component } from '@angular/core';
import { StorageService } from '@service/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls:[ './menu.component.scss']
})
export class MenuComponent {
  username:string='Anónimo'

  constructor(private storageService:StorageService){
    this.username = this.storageService.getUser()
  }
}
