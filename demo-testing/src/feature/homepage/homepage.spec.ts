import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage } from './homepage';

describe('Homepage', () => {
  let component: Homepage;
  let fixture: ComponentFixture<Homepage>;
  // déclaration d'une instance HTMLElement pour manipuler le DOM
  let el : HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepage],
    }).compileComponents();

    fixture = TestBed.createComponent(Homepage);
    component = fixture.componentInstance;
    // utilisation de fixture pour instancié l'élément HTML avec le composant de test
    el = fixture.nativeElement
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('hompage should contain h2 with title', () =>{

    expect(el.querySelector('h2')?.textContent).toContain('Demo Angular avec Vitest pour les tests')
  })

  it('homepage should contain 5 <tr>' , () => {

    expect(el.querySelectorAll('tbody tr').length).toBe(5)
  })

});
