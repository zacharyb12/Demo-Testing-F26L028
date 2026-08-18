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

  soustraction(){

  }

  division(){

  }

  multiplication(){

  }
}
