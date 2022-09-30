import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit  {
  pokemonsList : Pokemon[];
  pokemonsSelected : Pokemon|undefined;

  constructor( private pkmservice: PokemonService ,private router : Router) { }


  ngOnInit(): void {
    this.pokemonsList=this.pkmservice.getPokemonList();
  }
  
   goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id]);
   }


  selectPokemon(pokemon: Pokemon ): void{
    console.table(`vous avec cliquer sur le pokemon ${pokemon.name}`);
  }

  selectPokemon2(index: string ): void{
      this.pokemonsSelected = this.pokemonsList.find(pokemon =>  pokemon.id == (+index)+1)
      this.pokemonsSelected ? console.table(`vous avec cliquer sur le pokemon ${this.pokemonsSelected.name}`) : console.log("not found");
  }


}
