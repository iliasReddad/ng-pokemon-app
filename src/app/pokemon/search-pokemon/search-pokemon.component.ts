import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
  searchItems = new Subject<string>(); //construire flux données dans le temps  
  pokemons$ :  Observable<Pokemon[]>; //$ :observable //consomable seulement
 
  constructor(private router : Router , private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchItems.pipe(
      debounceTime(300), //attendre 300ms avant de lancer la recherche
      distinctUntilChanged(), // ignorer les valeurs identiques
      switchMap((term)=>this.pokemonService.searchPokemonList(term))


    )
  }

  search(term :string){
      this.searchItems.next(term); // pousser les valeur dans le tab searsh
    
  }

  gotoDetail(pokemon:Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);

  }

}
