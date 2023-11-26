import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {
	apiUrl:any = env.host

  constructor(private http: HttpClient,) { }

  getDistributors(id:string, ){
    return this.http.get(`${this.apiUrl}/distributors/${id}`)
  }

  postDistributors(id:string, data:any){
    return this.http.post(`${this.apiUrl}/distributors/${id}`, data)
  }
  getDistributorDetails(id:string){
    return this.http.get(`${this.apiUrl}/distributor/${id}`)
  }

  updateDistributor( payload:any,id:string){
    return this.http.patch(`${this.apiUrl}/distributor/${id}`, payload)
  }

  deleteDistributor(id:string){
    return this.http.delete(`${this.apiUrl}/distributor/${id }`)
  }
}
