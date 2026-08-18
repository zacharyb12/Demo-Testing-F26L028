import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTest } from './demo-test';

describe('DemoTest', () => {
  // déclaration de ce qui va être utilisé lors des tests
let component : DemoTest;
let fixture : ComponentFixture<DemoTest>


// le BeforeEach exécute du code ( configuration ou reinitialisation ) avant chaque test
beforeEach( () => {

  // Instanciation du composant de test
  TestBed.configureTestingModule({
    imports : [DemoTest]
  }).compileComponents();

  fixture = TestBed.createComponent(DemoTest);
  component = fixture.componentInstance;

  // Permet de détecter les changement
  fixture.detectChanges()
})
  // AAA

  // ARRANGE : configuration pour le test

  // ACT : execution de ce qui doit être tester

  // ASSERT : verification du resultat
 

  it('addition should return 10', () => {

    // ARRANGE
    let a = 5;
    let b = 5;

    // ACT
    let resultReel = a + b
    let resultExpected = 10;

    // ASSERT
    expect(resultReel).toBe(resultExpected)
    expect(resultReel).toBeGreaterThan(a)
    expect(resultReel).toBeLessThan(100)

   });

   // vérification avec deux valeurs positive
   it('addition should return value A + value B' , () => {

    // ARRANGE 
    let a = 5;
    let b = 5;
    let resultExpected = 10;

    // ACT
    const resultReel = component.addition(a,b)

    // ASSERT
    expect(resultReel).toBe(resultExpected)
   })

   // verification avec une valeur négative
   it('should return correct result with negative value' , () => {

    // ARRANGE
    let a = -5;
    let b = 5;
    let resultExpected = 0;

    // ACT
    const resultReel = component.addition(a,b)


    //ASSERT

    expect(resultReel).toBe(resultExpected)
   })

   // verification si une des valeurs est null
   it('should return error if value is null' , () => {
    // ARRANGE
      let a = null;
      let b = 5;

    // ACT - ASSERT
    // Pour récupérer une erreur il sera nécéssaire de passer la methode dans le assert avec une fonction fleché
    // sinon le code renvoie une erreur réel et fait planter les tests 
      expect(() =>component.addition(a,b)).toThrow('Les deux paramètres sont requis')

   })


   // =========================================================================
   // Soustraction

      // =========================================================================
   // Multiplication

      // =========================================================================
   // Division

});
