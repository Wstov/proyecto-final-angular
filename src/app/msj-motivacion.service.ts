import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MsjMotivacionService {

  constructor(private msj:HttpClient) { }

  obtenerMsj(){
    const respuesta=this.msj.get("https://api.quotable.io/random");
    return respuesta;
  }
}
