import { Component } from '@angular/core';

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
  clientes: string[] = ['Maria', 'José', 'Andres', 'Franciss'];
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
}
