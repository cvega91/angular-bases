import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>The base is: <strong>{{base}}</strong></h3>
    
    <button (click)=" summatory(-base)">-5</button>
    
    <span> {{counter}} </span>
   
   <button (click)="summatory(base)">+5</button>`,

})
export class CounterComponent{

    title: string = 'Contador App';
    counter: number =10;
    base : number =5;
  
  
   sum(){
     this.counter = this.counter+1;
   }
   subtract(){
     this.counter=this.counter-1;
   }
  
   summatory(counter : number){
     this.counter +=counter;
   }


}