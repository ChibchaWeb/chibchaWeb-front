import { Component } from '@angular/core';
import { TokenService } from '@service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isTokenExist;

  constructor(private tokenService:TokenService){
    this.isTokenExist = this.tokenService.getToken()
  }
}
