import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">
      edit {{pokemon?.name}}    </h2>

        <p *ngIf="pokemon" class="center">
        <img [src] ="pokemon.picture">
        </p>
        <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon" ></app-pokemon-form>
`,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon : Pokemon|undefined;

  constructor(private pkmservice: PokemonService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    const pokemonId :string|null = this.route.snapshot.paramMap.get('id');
    pokemonId ?  this.pkmservice.getPokemonById(+pokemonId).subscribe((pkmn)=> this.pokemon = pkmn) : this.pokemon =undefined;  
  }

}
