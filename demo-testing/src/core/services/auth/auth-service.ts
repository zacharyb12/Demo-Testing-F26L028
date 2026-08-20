import { Injectable, signal } from '@angular/core';
import { LoginForm, RegisterForm } from '../../../feature/auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

isLogged = signal<boolean>(false)

constructor(){
  if(localStorage.getItem('token')){
    this.isLogged.set(true)
  }
}

login(loginForm : LoginForm){

  this.isLogged.set(true)
  localStorage.setItem('token','token')

}

register(registerForm : RegisterForm){
    this.isLogged.set(true)
  localStorage.setItem('token','token')
}

logout(){
this.isLogged.set(false)
localStorage.removeItem('token')
}

}
