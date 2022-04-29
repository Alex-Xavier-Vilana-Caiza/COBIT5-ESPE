import { Component, OnInit } from '@angular/core';
import { Apo013casilla } from 'src/app/models/Apo013';
import { Apo013casillasService } from 'src/app/services/apo013casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo013titulo } from 'src/app/models/Apo013';
import { Apo013titulosService } from 'src/app/services/apo013titulos.service';

@Component({
  selector: 'app-apo013raci',
  templateUrl: './apo013raci.component.html',
  styleUrls: ['./apo013raci.component.css']
})
export class Apo013raciComponent implements OnInit {

  apo013titulolistar: Apo013titulo[] = [];    
  apo013casillalistar: Apo013casilla[]= []; 

  constructor(
    private _apo013casillasService : Apo013casillasService,
    private toastr: ToastrService,
    private _apo013titulosService: Apo013titulosService) { }

  ngOnInit(): void {
    this.obtenerApo013casilla();
    this.obtenerApo013titulo();
  }
  obtenerApo013casilla() {
    this._apo013casillasService.getApo013casillas().subscribe(data => {
      console.log(data);
      this.apo013casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo013casilla(id: any) {
    console.log(id,'borrar')
    this._apo013casillasService.eliminarApo013casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo013titulo() {
    this._apo013titulosService.getApo013titulos().subscribe(data => {
      console.log(data);
      this.apo013titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo013titulo(id: any) {
    console.log(id,'borrar')
    this._apo013titulosService.eliminarApo013titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}




