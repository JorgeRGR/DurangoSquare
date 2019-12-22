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
    lugaresService.getLugares()
      .valueChanges()
      .subscribe((lugares) => {
        //debugger;
        this.lugares = lugares;
      });
  }

}