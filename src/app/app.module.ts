import { CommonModule } from '@angular/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent  } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from './in-memory-data.service';
import{HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'

@NgModule({
  declarations: [ //classe de vues ( compo , pipe , direc)
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [ 
        //classe necessaire au fonct dy module
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation : false } ),
    PokemonModule,
    AppRoutingModule,
    
  ],
  providers: [], // fournir un service au module 
  bootstrap: [AppComponent] // le composant racine pour le module racine
})
export class AppModule { }
