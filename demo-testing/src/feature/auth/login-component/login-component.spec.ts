import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login-component';
import { vi , type MockInstance } from 'vitest';
import { provideRouter, Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth-service';

// déclaration d'un service mocké
const authServiceMock = {
  // avec comme seule methode login
  login : vi.fn()
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // instance pour espionner et simuler la navigation
  let navigateSpy : MockInstance;
  let router : Router;

  // instance pour accéder au DOM
  let el : HTMLElement;

  // methode pour remplir un champ du formulaire
  const fillInput = (name : string , value : string) => {
    const field = el.querySelector<HTMLInputElement>(`[formControlName="${name}"]`)!;
    field.value = value;
    field.dispatchEvent(new Event('input'))
  }

  // methode pour soumettre le formulaire
  const submitForm = () => {
    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    fixture.detectChanges()
  }


  beforeEach(async () => {

    // configuration du retour de l'appel du service
    // of si on désire retourné un observable
    //authServiceMock.login.mockReturnValue(of({...}))

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      // rend accessible le router de l'application
      providers : [provideRouter([]),
      // configuration de l'utilisation du service mocké
      {provide : AuthService , useValue : authServiceMock}
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    // pour tester la navigation
    router = TestBed.inject(Router)
    navigateSpy = vi.spyOn(router , 'navigateByUrl')

    // pour manipuler le dom
    el = fixture.nativeElement;

    await fixture.whenStable();

    // reinitialise la methode du service mocké 
    authServiceMock.login.mockClear()
  });



// verifie la création du composant ------------------------------------------------------
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // verifie l'éxécution du login ---------------------------------------------------------

  it('should not call Login with invalid form',() => {

    fillInput('email','admin@mail.com')

    submitForm()

    expect(authServiceMock.login).not.toHaveBeenCalled()
  })

  it('should call Login with valid form',() => {
    
    fillInput('email','admin@mail.com')
    fillInput('password','test1234')

    submitForm()

    expect(authServiceMock.login).toHaveBeenCalled()
  })

  // verification de la navigation après soumission du formulaire
  it('should navigate with valid form',()=> {
    fillInput('email','admin@mail.com')
    fillInput('password','test1234')

    submitForm()

    expect(navigateSpy).toHaveBeenCalled()

  })

    it('should navigate to /product with valid form',()=> {
    fillInput('email','admin@mail.com')
    fillInput('password','test1234')

    submitForm()

    expect(navigateSpy).toHaveBeenCalledWith('/product')

  })

  it('should not navigate with invalid form',() => {
    fillInput('email','admin@mail.com')

    submitForm()

    expect(navigateSpy).not.toHaveBeenCalled()
  })



});
