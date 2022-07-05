import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Billy';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'José', 'Andres', 'Francis'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona(){
    if (this.genero === 'masculino') {
      this.nombre = 'Flerida';
      this.genero = 'femenino';
    }else {
      this.nombre = 'Billy';
      this.genero = 'masculino';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Billy',
    edad: 24,
    direccion: 'Guayaquil'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(2000); //1, 2, 3, 4, 5.....

  valorPromesa = new Promise((resolve,reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    },3500);

  });
}
