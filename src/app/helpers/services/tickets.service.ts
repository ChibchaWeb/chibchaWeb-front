import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { StorageService } from './storage.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
	apiUrl:any = env.host

  constructor(private http: HttpClient,private storageService:StorageService, private tokenService:TokenService) { }

  createTicket(data:any){
    let id = parseInt(this.storageService.getUserID())
    let token = this.tokenService.getToken()
		const auth = btoa(`admin@gmail.com:Administrador#2045`);
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Basic ${this.tokenService.getToken()}`
			//'Authorization': `Bearer ${auth}`
		});
    return this.http.post(`${this.apiUrl}/tickets/`, Object.assign(data, {user_id: id, user_it_id : null}), {headers})
  }

  getTickets(){
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Basic ${this.tokenService.getToken()}`
		});
    return this.http.get(`${this.apiUrl}/tickets/`, {headers})
  }

  getTicket(id:any){
    return this.http.get(`${this.apiUrl}/ticket/${id}`)
  }

  updateTicket(id:any, payload:any){
    return this.http.patch(`${this.apiUrl}/ticket/${id}`, payload)
  }

  deleteTicket(id:any){
    return this.http.delete(`${this.apiUrl}/ticket/${id}`)
  }
}
