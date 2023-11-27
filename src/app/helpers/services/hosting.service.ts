import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HostingService {
	apiUrl:any = env.host

  constructor(private http: HttpClient,) { }

  getHostings(id:string, ){
    return this.http.get(`${this.apiUrl}/hostings/${id}`)
  }

  postHostings(id:string, data:any){
    return this.http.post(`${this.apiUrl}/hostings/${id}`, data)
  }

  /* getHosting(){
    return this.http.get(`${this.apiUrl}/hostings/`)
  }

  postHosting(data:any){
    return this.http.post(`${this.apiUrl}/hostings/`, data)
  }*/

  getHostingDetails(id:string){
    return this.http.get(`${this.apiUrl}/hosting/${id}`)
  }

  updateHosting( payload:any,id:string){
    return this.http.patch(`${this.apiUrl}/hosting/${id}`, payload)
  }

  deleteHosting(id:string){
    return this.http.delete(`${this.apiUrl}/hosting/${id }`)
  }
}
