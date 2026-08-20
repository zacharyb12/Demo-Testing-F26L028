import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {

  authService = inject(AuthService)
  fb = inject(FormBuilder)
  router = inject(Router)

  loginForm : FormGroup;


  constructor(){
    this.loginForm = this.fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      this.router.navigateByUrl('/product')
    }
  }
}
