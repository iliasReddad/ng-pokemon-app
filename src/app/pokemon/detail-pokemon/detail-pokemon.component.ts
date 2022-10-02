import { PokemonService } from './../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
 
  pokemon : Pokemon|undefined;
  

  constructor( private pkmservice: PokemonService , private route : ActivatedRoute , private router : Router) { }
  
  ngOnInit(): void {
    const pokemonId :string|null = this.route.snapshot.paramMap.get('id');
    pokemonId ?  this.pkmservice.getPokemonById(+pokemonId).subscribe((pkmn)=> this.pokemon = pkmn) : this.pokemon =undefined;  
  }

  goBack(){
    this.router.navigateByUrl('/pokemons');
  }

  gotToEdit(pokemon :Pokemon){
    this.router.navigate(['/edit/pokemon',pokemon.id]);
  }
}
