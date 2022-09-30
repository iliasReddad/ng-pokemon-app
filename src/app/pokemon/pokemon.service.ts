import { POKEMONS } from './mock-pokemon-list';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';


// @Injectable({
//   providedIn: 'root' // la meme instance du serivce a traver toute application ( injection de dependance)
// })

@Injectable()
export class PokemonService {

  constructor() { }


  getPokemonList():Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId:number):Pokemon|undefined{
    return POKEMONS.find(pokemon=>pokemon.id ===pokemonId);
  }

  getPokemonTypeList():string[]{
    return [
    'Plante',
    'Feu',
    'Eau',
    'Insecte',
    'Normal',
    'Electrik',
    'Poison',
     'Fée',
    'Vol',
     'Combat',
    'Psy'];
  }

}
