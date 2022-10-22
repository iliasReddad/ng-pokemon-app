import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root' // la meme instance du serivce a traver toute application ( injection de dependance)
// })

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient ) { }


  getPokemonList(): Observable<Pokemon[]>{
    //return POKEMONS;
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error,[])) //lever error sans cracher app tab vide)
    )
  }

  private log(response:any){
    console.table(response);
  }

  private handleError(error:Error , errorValue :any){
    console.table(error);
        return of(errorValue);
  }

  getPokemonById(pokemonId:number):Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error,undefined))
    )
  }

  searchPokemonList(term:string):Observable<Pokemon[]>{
    if(term.length<=2){return   of([])}
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error,[]))
    )
  }

  deletePokemonById(pokemonId:number) : Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error,undefined))
    )  }


  addPokemon(pokemon:Pokemon): Observable<Pokemon>{
    const httpOptions = {
      headers : new HttpHeaders({'content-type' :'application/json'})
    };
    return this.http.post<Pokemon>('api/pokemons',pokemon,httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error,null))
    )
  }
  


    
  updatePokemon(pokemon:Pokemon) : Observable<null>{
    const httpOptions = {
      headers : new HttpHeaders({'content-type' :'application/json'})
    };
    return this.http.put('api/pokemons',pokemon,httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error,null))
    )


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
