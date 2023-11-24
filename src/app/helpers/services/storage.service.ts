import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveRol(rol:string){
    localStorage.setItem('rol', rol);
  }

  getRol(){
    const rol = localStorage.getItem('rol')
    return rol;
  }

  removeRol(){
    localStorage.removeItem('rol')
  }

  saveUser(user:string){
    localStorage.setItem('user', user);
  }

  getUser(){
    const user = localStorage.getItem('user')
    return user;
  }

  removeUser(){
    localStorage.removeItem('user')
  }
}
