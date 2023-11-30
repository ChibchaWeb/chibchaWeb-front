import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {
	apiUrl:any = env.host
  headers: HttpHeaders;

  constructor(private http: HttpClient,private tokenService:TokenService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${this.tokenService.getToken()}`,
    });
  }

  getCategories(){
    return this.http.get(`${this.apiUrl}/categories/`, { headers: this.headers })
  }

  postCategories(data:any){
    return this.http.post(`${this.apiUrl}/categories/`, data, { headers: this.headers })
  }

  getDetailsCategories(id:any){
    return this.http.get(`${this.apiUrl}/category/${id}`, { headers: this.headers })
  }

  updateCategories(id:any,payload){
    return this.http.patch(`${this.apiUrl}/category/${id}`,payload, { headers: this.headers })
  }

  deleteCategories(id:any){
    return this.http.delete(`${this.apiUrl}/category/${id}`, { headers: this.headers })
  }

  /** Countries **/

  getCountries(){
    return this.http.get(`${this.apiUrl}/countries/`, { headers: this.headers })
  }

  postCountries(data:any){
    return this.http.post(`${this.apiUrl}/countries/`, data, { headers: this.headers })
  }

  getDetailsCountries(id:any){
    return this.http.get(`${this.apiUrl}/country/${id}`, { headers: this.headers })
  }

  updateCountries(id:any, payload:any){
    return this.http.patch(`${this.apiUrl}/country/${id}`,payload, { headers: this.headers })
  }

  deleteCountries(id:any){
    return this.http.delete(`${this.apiUrl}/country/${id}`, { headers: this.headers })
  }

  /** roles **/

  getRoles(){
    return this.http.get(`${this.apiUrl}/rols/`, { headers: this.headers })
  }

  postRoles(data:any){
    return this.http.post(`${this.apiUrl}/rols/`, data, { headers: this.headers })
  }

  getDetailsRol(id:any){
    return this.http.get(`${this.apiUrl}/rol/${id}`, { headers: this.headers })
  }

  updateRol(id:any,payload:any){
    return this.http.patch(`${this.apiUrl}/rol/${id}`, payload, { headers: this.headers })
  }

  deleteRol(id:any){
    return this.http.delete(`${this.apiUrl}/rol/${id}`, { headers: this.headers })
  }

  /** plans */

  getPlans(){
    return this.http.get(`${this.apiUrl}/plans/`, { headers: this.headers })
  }

  postPlans(data:any){
    return this.http.post(`${this.apiUrl}/plans/`, data, { headers: this.headers })
  }

  getDetailsPlan(id:any){
    return this.http.get(`${this.apiUrl}/plan/${id}`, { headers: this.headers })
  }

  updatePlan(id:any, payload:any){
    return this.http.patch(`${this.apiUrl}/plan/${id}`, payload, { headers: this.headers })
  }

  deletePlan(id:any){
    return this.http.delete(`${this.apiUrl}/plan/${id}`, { headers: this.headers })
  }

  /** Plataforms */

  getPlatforms(){
    return this.http.get(`${this.apiUrl}/platforms/`, { headers: this.headers })
  }

  postPlatforms(data:any){
    return this.http.post(`${this.apiUrl}/platforms/`, data, { headers: this.headers })
  }

  getDetailsPlatform(id:any){
    return this.http.get(`${this.apiUrl}/platform/${id}`, { headers: this.headers })
  }

  updatePlatform(id:any, payload:any){
    return this.http.patch(`${this.apiUrl}/platform/${id}`, payload, { headers: this.headers })
  }

  deletePlatform(id:any){
    return this.http.delete(`${this.apiUrl}/platform/${id}`, { headers: this.headers })
  }
}
