import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor() { 
    console.log("mi id"+this.heroe.idx);
  }
  verHeroe(){
    //this.heroeSeleccionado.emit(this.index);
  }

  ngOnInit() {
  }

}
