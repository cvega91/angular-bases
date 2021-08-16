import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string []=['Spiderman',"Ironman", "hulk", "thor"]
  deletedHero: string ="";
  constructor() { }

  ngOnInit(): void {
  }

  deleteHeroe(){
    this.deletedHero = this.heroes.shift() || '';
  }

}
