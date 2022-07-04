import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'billy';
  nombreUpper: string = 'BILLY';
  nombreCompleto: string = 'BiLLy AlVEar';
}
