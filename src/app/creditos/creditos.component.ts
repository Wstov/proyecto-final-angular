import { Component } from '@angular/core';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent {
  informacion: string[] = ["Desarrollo de páginas web con Angular","mmarinlazo@ucreativa.com","7271-8509",]

  herramientas: string[] = ["HTML","CSS","BOOTSTRAP","ANGULAR","TYPESCRIPT"];

  desplegaInformacion: boolean = false;

  desplegar(): void{
    if(this.desplegaInformacion == true){
      this.desplegaInformacion = false;
    }else{
      this.desplegaInformacion = true
    }
  }

}
