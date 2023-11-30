import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {
	apiUrl:any = env.host
  headers: HttpHeaders;

  constructor(private http: HttpClient,private tokenService:TokenService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${this.tokenService.getToken()}`,
    });}

  getDistributors(){
    return this.http.get(`${this.apiUrl}/distributors/`, { headers: this.headers })
  }

  postDistributors(id:string, data:any){
    return this.http.post(`${this.apiUrl}/distributors/${id}`, data, { headers: this.headers })
  }
  getDistributorDetails(id:string){
    return this.http.get(`${this.apiUrl}/distributor/${id}`, { headers: this.headers })
  }

  updateDistributor( payload:any,id:string){
    return this.http.patch(`${this.apiUrl}/distributor/${id}`, payload, { headers: this.headers })
  }

  deleteDistributor(id:string){
    return this.http.delete(`${this.apiUrl}/distributor/${id }`, { headers: this.headers })
  }
}
