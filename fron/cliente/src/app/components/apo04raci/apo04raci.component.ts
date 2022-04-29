import { Component, OnInit } from '@angular/core';
import { Apo04casilla } from 'src/app/models/Apo04';
import { Apo04casillasService } from 'src/app/services/apo04casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo04titulo } from 'src/app/models/Apo04';
import { Apo04titulosService } from 'src/app/services/apo04titulos.service';

@Component({
  selector: 'app-apo04raci',
  templateUrl: './apo04raci.component.html',
  styleUrls: ['./apo04raci.component.css']
})
export class Apo04raciComponent implements OnInit {

  apo04titulolistar: Apo04titulo[] = [];    
  apo04casillalistar: Apo04casilla[]= []; 

  constructor(
    private _apo04casillasService : Apo04casillasService,
    private toastr: ToastrService,
    private _apo04titulosService: Apo04titulosService) { }

  ngOnInit(): void {
    this.obtenerApo04casilla();
    this.obtenerApo04titulo();
  }
  obtenerApo04casilla() {
    this._apo04casillasService.getApo04casillas().subscribe(data => {
      console.log(data);
      this.apo04casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo04casilla(id: any) {
    console.log(id,'borrar')
    this._apo04casillasService.eliminarApo04casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo04titulo() {
    this._apo04titulosService.getApo04titulos().subscribe(data => {
      console.log(data);
      this.apo04titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo04titulo(id: any) {
    console.log(id,'borrar')
    this._apo04titulosService.eliminarApo04titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}


