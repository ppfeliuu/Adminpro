import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progreso1: number = 0;
  progreso2: number = 0;

  get getProcentaje1() {
    return `${this.progreso1}%`;
  }

  get getProcentaje2() {
    return `${this.progreso2}%`;
  }

  cambioValorChild(valor: number) {
    console.log(valor);
  }
}
