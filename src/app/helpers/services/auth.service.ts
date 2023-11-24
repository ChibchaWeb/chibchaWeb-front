import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from '../../../environments/environment';
import { LoginData, LoginResponse, RegisterData } from '../models/auth.model';
import { switchMap, tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = env.API_URL
  constructor(private http:HttpClient, private tokenService:TokenService) { }

  //{email, password}
  login(data:LoginData):any{
    //return this.http.post<LoginResponse>(`${this.apiUrl}/api/v1/auth/login`,data)
    return this.http.post<LoginResponse>(env.host+'/login/',data)
    .pipe(
      tap(response => {
        this.tokenService.saveToken(response.access_token)
      })
    )
  }

  /*
  {"name":"prueba","email":"prueba@gmail.com","password":"Prueba323","idDocument":"1024356987","documentType":"CC","confirPassword":"Prueba323"}
  {"name":"prueba","email":"prueba@gmail.com","avatar":"https://api.lorem.space/image/face?w=480&h=480&r=7741","id":9,"creationAt":"2023-11-18T21:40:10.000Z","updatedAt":"2023-11-18T21:40:10.000Z"}
  */
  register(data:RegisterData):any{
    //return this.http.post(`${this.apiUrl}/api/v1/auth/register`,data)
    return this.http.post(`${env.host}/create/`,data)
  }

  registerAndLogin(dataRegister:RegisterData){
    return this.register(dataRegister)
    .pipe(
      switchMap(()=>this.login(dataRegister))
    )
  }
}
