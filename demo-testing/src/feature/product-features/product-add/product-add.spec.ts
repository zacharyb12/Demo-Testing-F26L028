import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdd } from './product-add';
import {vi, type MockInstance } from 'vitest';
import { of, throwError } from 'rxjs';
import { provideRouter, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product/product-service';

const productServiceMock = {
  create : vi.fn()
}

describe('ProductAdd', () => {
  let component: ProductAdd;
  let fixture: ComponentFixture<ProductAdd>;
  let navigateSpy : MockInstance;
  let el : HTMLElement;

  // valeur qui peut être utilisé pour les vérifications dans tout les tests
  const product = {
    name : "Clavier",
    description : "Clavier mécanique",
    price : 49,
    quantity : 10,
    image : "https://example.com/clavier.jpg"
  }

  // permet de remplir une partie du formulaire avec le nom du formControlName
  const fillInput = (name : string,value : string) => {
    const field = el.querySelector<HTMLInputElement | HTMLTextAreaElement>(
      `[formControlName="${name}"]`
    )!;
    field.value = value;
    field.dispatchEvent(new Event('input'))
  }

  // remplir tout le formulaire avec des informations valides 
  const FillValidForm = () => {
    fillInput('name' , 'Clavier');
    fillInput('description' , 'Clavier mécanique');
    fillInput('price' , '49');
    fillInput('quantity' , '10');
    fillInput('image' , 'https://example.com/clavier.jpg');
  }

  // exécute la soumission du formulaire
  const submitForm = () => {
    el.querySelector('form')!.dispatchEvent(new Event('submit'))
    fixture.detectChanges()
  }

  beforeEach(async () => {

    productServiceMock.create.mockReturnValue(of({id : 1}))

    await TestBed.configureTestingModule({
      imports: [ProductAdd],
      providers : [provideRouter([]),
      {provide : ProductService , useValue : productServiceMock}
    ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAdd);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    navigateSpy = vi.spyOn(TestBed.inject(Router), 'navigateByUrl')
    await fixture.whenStable();

    productServiceMock.create.mockClear()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // verification de l'image présente dans le formulaire-------------------------
  it('should have image if input image is not empty', ()=>{
    expect(el.querySelector('img')).toBeNull()
  })

  it('should show image preview when field is filled' , () => {
    fillInput('image','https://example.com/clavier.jpg')
    fixture.detectChanges()

    const img = el.querySelector('img')

    expect(img?.src).toBe('https://example.com/clavier.jpg')

  })

// Test du service ( Mock )

it('should call create with form values on Submit',()=>{
  FillValidForm()
  submitForm()
  expect(productServiceMock.create).toHaveBeenCalledWith(product)
})

it('shoult not call service when form is invalid',()=>{
  fillInput('name','Clavier')
  fixture.detectChanges()
  submitForm()

  expect(productServiceMock.create).not.toHaveBeenCalled()

})


// test de la navigation après l'appel su service reussi

  it('should navigate to /product after add product',()=> {

    // ACT
    FillValidForm()
    submitForm()

    // ASSERT
    expect(navigateSpy).toHaveBeenCalledWith('/product')

  })

  // test du message d'erreur afficher après une arreur lors de l'ajout
  it('should show error and not navigate when create fails',()=> {
    productServiceMock.create.mockReturnValue(throwError(() => new Error('500')))

    FillValidForm()
    submitForm()

    expect(navigateSpy).not.toHaveBeenCalled()
    expect(el.textContent).toContain("L'ajout à échoué")

  })
});
