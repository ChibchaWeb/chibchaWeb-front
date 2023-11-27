import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '@service/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  response:any = {}

  constructor(private route: ActivatedRoute,private usersService:UsersService,
    private router: Router){  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const idUser = params['id'];
        console.log('Parámetro 1:', idUser);
        this.getUserDetail(idUser)
    });
  }

  getUserDetail(idUser:number){
    this.usersService.getUserDetails(idUser).subscribe({
      next:(response)=>{
        this.response = response
      }
    })
  }

  maskCreditCard(creditCard: string): string {
    if (creditCard && creditCard.length >= 4) {
      // Obtén los últimos 4 dígitos
      const lastFourDigits = creditCard.slice(-4);
      const maskedCreditCard = '*'.repeat(creditCard.length - 4) + lastFourDigits;
      return maskedCreditCard;
    }
    return creditCard;
  }
}
