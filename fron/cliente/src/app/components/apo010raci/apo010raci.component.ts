import { Component, OnInit } from '@angular/core';
import { Apo010casilla } from 'src/app/models/Apo010';
import { Apo010casillasService } from 'src/app/services/apo010casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo010titulo } from 'src/app/models/Apo010';
import { Apo010titulosService } from 'src/app/services/apo010titulos.service';

@Component({
  selector: 'app-apo010raci',
  templateUrl: './apo010raci.component.html',
  styleUrls: ['./apo010raci.component.css']
})
export class Apo010raciComponent implements OnInit {

  apo010titulolistar: Apo010titulo[] = [];    
  apo010casillalistar: Apo010casilla[]= []; 

  constructor(
    private _apo010casillasService : Apo010casillasService,
    private toastr: ToastrService,
    private _apo010titulosService: Apo010titulosService) { }

  ngOnInit(): void {
    this.obtenerApo010casilla();
    this.obtenerApo010titulo();
  }
  obtenerApo010casilla() {
    this._apo010casillasService.getApo010casillas().subscribe(data => {
      console.log(data);
      this.apo010casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo010casilla(id: any) {
    console.log(id,'borrar')
    this._apo010casillasService.eliminarApo010casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo010titulo() {
    this._apo010titulosService.getApo010titulos().subscribe(data => {
      console.log(data);
      this.apo010titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo010titulo(id: any) {
    console.log(id,'borrar')
    this._apo010titulosService.eliminarApo010titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}




