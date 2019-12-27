import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'DurangoSquare';
  lugares = null;
  lat:number = 24.0470502;
  lng:number = -104.6560745;  
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
    });
  }

}