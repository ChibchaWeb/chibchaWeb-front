import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment'
import { StorageService } from './storage.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
	apiUrl:any = env.host
	headers: HttpHeaders;
	user_id:number = +this.storageService.getUserID()

	constructor(private http: HttpClient, private tokenService:TokenService,
		private storageService:StorageService) {
		this.headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: `Basic ${this.tokenService.getToken()}`,
		});
	}

  getInvoicing(){
    return this.http.get(`${this.apiUrl}/buyouts/${this.user_id}`,{ headers: this.headers })
  }

  putInvoicing(data:any, id){
    return this.http.put(`${this.apiUrl}/buyout/${id}`,data,{ headers: this.headers })
  }

}