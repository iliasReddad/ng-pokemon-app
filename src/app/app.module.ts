import { PokemonModule } from './pokemon/pokemon.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent  } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ //classe de vues ( compo , pipe , direc)
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [ 
        //classe necessaire au fonct dy module
    BrowserModule, 
    FormsModule,
    PokemonModule,
    AppRoutingModule,
    
  ],
  providers: [], // fournir un service au module 
  bootstrap: [AppComponent] // le composant racine pour le module racine
})
export class AppModule { }
