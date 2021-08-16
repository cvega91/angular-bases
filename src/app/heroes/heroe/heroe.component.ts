import { Component } from "@angular/core";

@Component({
    selector:"app-heroe",
    templateUrl:"heroe.component.html",
    styleUrls: ['heroe.component.css']
    
})
export class HeroeComponent{

    name: string ="IronMan";
    age: number=45;

    getName(): string {
        return `${this.name} - ${this.age}`;
    }
    getNameUpperCase(): string {
        return this.name.toUpperCase();
    }

    nameChange(): void {

        if(this.name=="Spiderman"){
            this.name="IronMan"
        
        }else{
            this.name = 'Spiderman';
        }

      

    }
    



}