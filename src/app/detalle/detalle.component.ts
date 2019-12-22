import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {

  lugares:any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 2, active: true, nombre: 'Florería Gardenia', description: 'Descripción del negocio.'},
    {id: 2, plan: 'gratuito', cercania: 2, distancia: 13.2, active: true, nombre: 'Donas la Jessy', description: 'Descripción del negocio.'},
    {id: 3, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: 'Veterinaria el Gato Azul', description: 'Descripción del negocio.'},
    {id: 4, plan: 'pagado', cercania: 1, distancia: 1.3, active: false, nombre: 'Sushi sushingada madre', description: 'Descripción del negocio.'},
    {id: 5, plan: 'pagado', cercania: 2, distancia: 10, active: true, nombre: 'Hotel Gobernador', description: 'Descripción del negocio.'},
    {id: 6, plan: 'gratuito', cercania: 3, distancia: 50, active: false, nombre: 'Liverpool', description: 'Descripción del negocio.'},
  ];
  id = null;
  lugar:any = {};

  buscarLugar(){
    return this.lugares.filter((lugar) => {
      return lugar.id == this.id
    })[0] || null;
  }
  
  constructor(private route:ActivatedRoute){
    //console.log(this.route.snapshot.params['id']);
    //console.log(this.route.queryParams);
    //console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    //console.log(this.buscarLugar())
    this.lugar = this.buscarLugar();
  }
}