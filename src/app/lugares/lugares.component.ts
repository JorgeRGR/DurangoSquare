import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'DurangoSquare';
  //any sirve para aceptar cualquier tipo de objeto
  lugares:any = [
    {plan: 'pagado', cercania: 1, distancia: 2, active: true, nombre: 'Florería Gardenia'},
    {plan: 'gratuito', cercania: 2, distancia: 13.2, active: true, nombre: 'Donas la Jessy'},
    {plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: 'Veterinaria el Gato Azul'},
    {plan: 'pagado', cercania: 1, distancia: 1.3, active: false, nombre: 'Sushi sushingada madre'},
    {plan: 'pagado', cercania: 2, distancia: 10, active: true, nombre: 'Hotel Gobernador'},
    {plan: 'gratuito', cercania: 3, distancia: 50, active: false, nombre: 'Liverpool'},
  ];

  lat:number = 24.0470502;
  lng:number = -104.6560745;

  constructor(){
    
  }

}