import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  template: `
  <h2 class="center"> Ajouter un Pokemon </h2>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon" ></app-pokemon-form>
  `,
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit {
  
  pokemon :Pokemon
  constructor() { }

  ngOnInit(): void {
    this.pokemon= new Pokemon();
  }

}
