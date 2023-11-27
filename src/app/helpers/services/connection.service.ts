import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

	constructor(private http: HttpClient) { }

  registerUser(data:any){
    return this.http.post(env.host+'create/',data)
  }

  loginUser(data:any){
    return this.http.post(env.host+'login/',data)
  }

  
}