import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	apiUrl:any = env.host

  constructor(private http: HttpClient,) { }

  getUsers(){
    return this.http.get(`${this.apiUrl}/users/`)
  }

  postUsers(data:any){
    return this.http.post(`${this.apiUrl}/users/`, data)
  }

  getUserDetails(id:string){
    return this.http.get(`${this.apiUrl}/users/${id}`)
  }

  updateUser( payload:any,id:string){
    return this.http.patch(`${this.apiUrl}/users/${id}`, payload)
  }

  deleteUser(id:string){
    return this.http.delete(`${this.apiUrl}/users/${id}`)
  }
}
