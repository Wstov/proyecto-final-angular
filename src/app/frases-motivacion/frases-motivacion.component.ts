import { Component } from '@angular/core';
import { MsjMotivacionService } from '../msj-motivacion.service';


@Component({
  selector: 'app-frases-motivacion',
  templateUrl: './frases-motivacion.component.html',
  styleUrls: ['./frases-motivacion.component.css']
})
export class FrasesMotivacionComponent {

  msjRecibido: any;

  constructor(private variableServicio: MsjMotivacionService) {
    variableServicio.obtenerMsj().subscribe((data) => {
      this.msjRecibido = data;
    })
  }

}
