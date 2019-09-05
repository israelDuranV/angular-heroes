import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  
  heroe:any = {};
  empresa:String;
  constructor( private actiavatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
    ) { 

    this.actiavatedRoute.params.subscribe( params=>{
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
    })
  }

  ngOnInit() {
  }
}
