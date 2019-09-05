import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-showheroes',
  templateUrl: './showheroes.component.html',
  styleUrls: ['./showheroes.component.css']
})
export class ShowheroesComponent implements OnInit {
  heroes:any = {};
  termino:String;
  constructor( 
    private actiavatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {   
    }

  ngOnInit() {
    this.actiavatedRoute.params.subscribe( params=>{
      this.termino = params['name'];
      this.heroes = this._heroesService.buscarHeroes(params['name']);  
    })
  }
}
