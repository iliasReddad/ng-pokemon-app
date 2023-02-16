import { Router } from '@angular/router';
import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls : ['./pokemon-form-component.css']
})
export class PokemonFormComponent implements OnInit {
  
  isAddForm : boolean ;
  
  @Input() pokemon : Pokemon ; //injecter depuis d'autre component
  types: string[];

  constructor(private pokemonService : PokemonService , private router: Router) { }

  ngOnInit(): void {
    //pokemonTypeList
    //s/sssd
  this.types = this.pokemonService.getPokemonTypeList();
  this.isAddForm=this.router.url.includes('add');
  
  }
   

  hasType(type : string) : boolean{
    return this.pokemon.types.includes(type) ;
  }


  selectType($event : Event  /* cocher ou decocher */, type:string){
    const isChecked = ($event.target as HTMLInputElement).checked;
    
    isChecked ? this.pokemon.types.push(type) :  this.types.splice( this.pokemon.types.indexOf(type) , 1) 
    

  }

  onSubmit(){

    this.isAddForm 
    ? this.pokemonService.addPokemon(this.pokemon).subscribe((PKM)=> this.router.navigate(['/pokemon',PKM.id]))
    : this.pokemonService.updatePokemon(this.pokemon).subscribe(() => this.router.navigate(['/pokemon',this.pokemon.id]) );
  }



   isTypesValid(type : string) : boolean{
     let length = this.pokemon.types.length;

     if (length == 1 && this.hasType(type)) {   // en moins un type
       return false;
     }

     if (length > 2 && !this.hasType(type)) {
       return false;
     }

     return true;

  }


}
