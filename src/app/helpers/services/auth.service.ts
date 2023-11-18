import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = env.API_URL
  constructor(private http:HttpClient) { }

  //{email, password}
  login(data:any){
    return this.http.post(`${this.apiUrl}/api/v1/auth/login`,data)
  }
}
