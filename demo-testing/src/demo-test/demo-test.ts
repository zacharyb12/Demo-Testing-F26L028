import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-test',
  imports: [],
  templateUrl: './demo-test.html',
  styleUrl: './demo-test.css',
})
export class DemoTest {

  addition(a : any , b : any){
  if(a == null || b == null){
      throw new Error('Les deux paramètres sont requis')
    }
    return a + b
  }

  soustraction(a : number , b : number){
    
    return a - b;
  }

  
  multiplication(a : number , b : number){
    return a * b;
  }

  division( a : number , b : number){
    if(b == 0){
      throw new RangeError('Division par zéro impossible')
    }

    return a / b;
  }
}
