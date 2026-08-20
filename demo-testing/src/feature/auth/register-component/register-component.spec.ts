import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register-component';

// configuration Du Mock du service

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  // déclarations des types à utiliser : router , HtmlElement , espion Navigate

  // implémentation des methodes et valeurs pour faciliter les tests

  beforeEach(async () => {
    // configurations des instances déclaré au dessus
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
    }).compileComponents();

    // affectation des valeurs pour nos instances
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // verification de la soumission si valide ou invalide


  // verification de la navigation si valid ou invalide


  // verification du type password ou text après appel du boutton togglePassword()

// =====================================================================================================
  // bonus : ajouter des messages d'erreurs au formulaires et vérifier si ils apparaissent ou pas
});
