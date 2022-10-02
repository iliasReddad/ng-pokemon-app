import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon.service';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

const pokemonRoutes : Routes = [
  //route plus specifique en haute
  {path:'edit/pokemon/:id' , component : EditPokemonComponent}, //route avec parametre
  {path:'pokemon/add' , component : AddPokemonComponent}, //route avec parametre
  {path:'pokemons' , component : ListPokemonComponent},
  {path:'pokemon/:id' , component : DetailPokemonComponent}, //route avec parametre

]

 @NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers:[PokemonService]
})
export class PokemonModule { }
