import { Component, OnInit } from '@angular/core';
import './custom.css';


@Component({
  selector: 'app-page-not-found',
  template: `
  
  <div class="container">
  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png"/>
  </div>
<section class="error-container">
  <span>4</span>
  <span><span class="screen-reader-text">0</span></span>
  <span>4</span>
</section>

<div class="link-container">
  
<a href="#" class="brand-logo center">HOME</a>
</div>
  `,
  styleUrls: ['custom.css']
})



export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
