import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {
	apiUrl:any = env.host

  constructor(private http: HttpClient,) { }

  getCategories(){
    return this.http.get(`${this.apiUrl}/categories/`)
  }

  postCategories(data:any){
    return this.http.post(`${this.apiUrl}/categories/`, data)
  }

  getDetailsCategories(id:any){
    return this.http.get(`${this.apiUrl}/category/${id}`)
  }

  updateCategories(id:any,payload){
    return this.http.patch(`${this.apiUrl}/category/${id}`,payload)
  }

  deleteCategories(id:any){
    return this.http.delete(`${this.apiUrl}/category/${id}`)
  }

  /** Countries **/

  getCountries(){
    return this.http.get(`${this.apiUrl}/countries/`)
  }

  postCountries(data:any){
    return this.http.post(`${this.apiUrl}/countries/`, data)
  }

  getDetailsCountries(id:any){
    return this.http.get(`${this.apiUrl}/country/${id}`)
  }

  updateCountries(id:any, payload:any){
    return this.http.patch(`${this.apiUrl}/country/${id}`,payload)
  }

  deleteCountries(id:any){
    return this.http.delete(`${this.apiUrl}/country/${id}`)
  }

  /** roles **/

  getRoles(){
    return this.http.get(`${this.apiUrl}/roles/`)
  }

  postRoles(data:any){
    return this.http.post(`${this.apiUrl}/roles/`, data)
  }

  getDetailsRol(id:any){
    return this.http.get(`${this.apiUrl}/rol/${id}`)
  }

  updateRol(id:any,payload:any){
    return this.http.patch(`${this.apiUrl}/rol/${id}`, payload)
  }

  deleteRol(id:any){
    return this.http.delete(`${this.apiUrl}/rol/${id}`)
  }

  /** plans */

  getPlans(){
    return this.http.get(`${this.apiUrl}/plans/`)
  }

  postPlans(data:any){
    return this.http.post(`${this.apiUrl}/plans/`, data)
  }

  getDetailsPlan(id:any){
    return this.http.get(`${this.apiUrl}/plan/${id}`)
  }

  updatePlan(id:any, payload:any){
    return this.http.patch(`${this.apiUrl}/plan/${id}`, payload)
  }

  deletePlan(id:any){
    return this.http.delete(`${this.apiUrl}/plan/${id}`)
  }

  /** Plataforms */

  getPlatforms(){
    return this.http.get(`${this.apiUrl}/platforms/`)
  }

  postPlatforms(data:any){
    return this.http.post(`${this.apiUrl}/platforms/`, data)
  }

  getDetailsPlatform(id:any){
    return this.http.get(`${this.apiUrl}/platform/${id}`)
  }

  updatePlatform(id:any, payload:any){
    return this.http.patch(`${this.apiUrl}/platform/${id}`, payload)
  }

  deletePlatform(id:any){
    return this.http.delete(`${this.apiUrl}/platform/${id}`)
  }
}
