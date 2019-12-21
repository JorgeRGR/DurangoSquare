import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DurangoSquare';
  a = 2;
  b = 3;
  listo = false;
  nombre:string = '';
  apellido:string = '';

  constructor(){
    setTimeout(()=> {
      this.listo=true;
    },3000)
  }

  doSomething(){
    alert('Se hizo algo');
  }

}
