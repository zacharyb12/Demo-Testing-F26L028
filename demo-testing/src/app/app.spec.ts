import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';

describe('App', () => {
let fixture : ComponentFixture<App>;
let app : App;
let elGlobal : HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers : [provideRouter([])]
    }).compileComponents();
    
    fixture = TestBed.createComponent(App)
    app = fixture.componentInstance;
    elGlobal = fixture.nativeElement

    fixture.detectChanges()
    
  });


  it('should create the App' , () => {
    expect(app).toBeTruthy()
  })
  
  it('app should contain balise navbar',()=> {
    // si un élément n'est utilisé qu'une seule fois on le récupère dans le test
    const el : HTMLElement = fixture.nativeElement

    expect(el.querySelector('app-navbar')).toBeTruthy()
  })

  it('app should contain balise router-outlet',()=> {
    expect(elGlobal.querySelector('router-outlet')).toBeTruthy()
  })

});
