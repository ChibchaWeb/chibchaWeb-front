import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { StorageService } from './storage.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	apiUrl:any = env.host

  headers: HttpHeaders;

  constructor(private http: HttpClient,private storageService:StorageService, private tokenService:TokenService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${this.tokenService.getToken()}`,
    });
  }

  getUsers(){
    return this.http.get(`${this.apiUrl}/users/`, { headers: this.headers })
  }

  postUsers(data:any){
    return this.http.post(`${this.apiUrl}/users/`, data, { headers: this.headers })
  }

  getUserDetails(id:any){
    return this.http.get(`${this.apiUrl}/users/${id}`, { headers: this.headers })
  }

  updateUser( payload:any,id:string){
    return this.http.patch(`${this.apiUrl}/users/${id}`, payload, { headers: this.headers })
  }

  deleteUser(id:string){
    return this.http.delete(`${this.apiUrl}/users/${id}`, { headers: this.headers })
  }

}
