import { Component, DOCUMENT, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [ReactiveFormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {

  fb = inject(FormBuilder)
  authService = inject(AuthService)
  router = inject(Router)

  registerForm : FormGroup;

  constructor(){
    this.registerForm = this.fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]],
      name : ['',[Validators.required]]
    })
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value)
      this.router.navigateByUrl('/product')
    }
  }

  toggleValueShowPassword(){
    const inputPassword = document.querySelector('[formControlName="password"]') as HTMLInputElement

    if(inputPassword){
      inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password'
    }
  }
}
