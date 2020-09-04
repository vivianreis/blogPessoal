import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
    return this.http.post('http://93.188.161.223:9000/usuarios/logar', userLogin)
  }

  cadastrar(user: User){
    return this.http.post('http://93.188.161.223:9000/usuarios/cadastrar', user)
  }

  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null){
      ok = true
    }

    return ok
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null){
      ok = true
    }

    return ok
  }
}