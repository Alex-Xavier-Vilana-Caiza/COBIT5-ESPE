import { Component, OnInit } from '@angular/core';
import { Apo08casilla } from 'src/app/models/Apo08';
import { Apo08casillasService } from 'src/app/services/apo08casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo08titulo } from 'src/app/models/Apo08';
import { Apo08titulosService } from 'src/app/services/apo08titulos.service';

@Component({
  selector: 'app-apo08raci',
  templateUrl: './apo08raci.component.html',
  styleUrls: ['./apo08raci.component.css']
})
export class Apo08raciComponent implements OnInit {

  apo08titulolistar: Apo08titulo[] = [];    
  apo08casillalistar: Apo08casilla[]= []; 

  constructor(
    private _apo08casillasService : Apo08casillasService,
    private toastr: ToastrService,
    private _apo08titulosService: Apo08titulosService) { }

  ngOnInit(): void {
    this.obtenerApo08casilla();
    this.obtenerApo08titulo();
  }
  obtenerApo08casilla() {
    this._apo08casillasService.getApo08casillas().subscribe(data => {
      console.log(data);
      this.apo08casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo08casilla(id: any) {
    console.log(id,'borrar')
    this._apo08casillasService.eliminarApo08casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo08titulo() {
    this._apo08titulosService.getApo08titulos().subscribe(data => {
      console.log(data);
      this.apo08titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo08titulo(id: any) {
    console.log(id,'borrar')
    this._apo08titulosService.eliminarApo08titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}




