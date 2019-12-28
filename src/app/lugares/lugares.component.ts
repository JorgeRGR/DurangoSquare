import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable',[
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000))
    ])
  ]
})
export class LugaresComponent {
  title = 'DurangoSquare';
  state = 'inicial';

  lugares = null;
  lat:number = 24.0470502;
  lng:number = -104.6560745;
  error:string = null;

  animar(){
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  animacionInicia(e){
    //console.log('Iniciado');
    //console.log(e);
  }

  animacionTermina(e){
    //console.log('Terminado');
    //console.log(e);
  }

  constructor(private lugaresService: LugaresService){
    //Para socket
    /*
    lugaresService.getLugares()
      .valueChanges()
      .subscribe((lugares) => {
        //debugger;
        this.lugares = lugares;
      });
      */
    //Para http get
    lugaresService.getLugares().subscribe(lugares =>{
      this.lugares = lugares;
      //El 'me = this' es porque el this dentro de map es diferente del this afuera del map.
      var me = this;
      me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares [key]; });
      this.state = 'final';
    }, error => {
      console.log(error);
      var text =  'Tenemos algo de dificultades, disculpe las molestias. Error: '+error.statusText;
      this.error = text;
      //alert('Tenemos algo de dificultades, disculpe las molestias. Error: '+error.statusText);
    }
    );
  }

}