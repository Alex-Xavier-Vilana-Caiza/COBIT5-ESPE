import { Component, OnInit } from '@angular/core';
import { Apo05casilla } from 'src/app/models/Apo05';
import { Apo05casillasService } from 'src/app/services/apo05casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo05titulo } from 'src/app/models/Apo05';
import { Apo05titulosService } from 'src/app/services/apo05titulos.service';

@Component({
  selector: 'app-apo05raci',
  templateUrl: './apo05raci.component.html',
  styleUrls: ['./apo05raci.component.css']
})
export class Apo05raciComponent implements OnInit {

  apo05titulolistar: Apo05titulo[] = [];    
  apo05casillalistar: Apo05casilla[]= []; 

  constructor(
    private _apo05casillasService : Apo05casillasService,
    private toastr: ToastrService,
    private _apo05titulosService: Apo05titulosService) { }

  ngOnInit(): void {
    this.obtenerApo05casilla();
    this.obtenerApo05titulo();
  }
  obtenerApo05casilla() {
    this._apo05casillasService.getApo05casillas().subscribe(data => {
      console.log(data);
      this.apo05casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo05casilla(id: any) {
    console.log(id,'borrar')
    this._apo05casillasService.eliminarApo05casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo05titulo() {
    this._apo05titulosService.getApo05titulos().subscribe(data => {
      console.log(data);
      this.apo05titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo05titulo(id: any) {
    console.log(id,'borrar')
    this._apo05titulosService.eliminarApo05titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}


