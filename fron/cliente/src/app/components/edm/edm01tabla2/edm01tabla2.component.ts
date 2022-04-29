import { Component, OnInit } from '@angular/core';
import { Edm01titulo } from 'src/app/models/Edm01';
import { Edm01titulosService } from 'src/app/services/edm01titulo.service';
import { ToastrService } from 'ngx-toastr';
import { Edm01casillas } from 'src/app/models/Edm01';
import { Edm01casillasService } from 'src/app/services/edm01casillas.service';

@Component({
  selector: 'app-edm01tabla2',
  templateUrl: './edm01tabla2.component.html',
  styleUrls: ['./edm01tabla2.component.css']
})
export class Edm01tabla2Component implements OnInit {

  edm01titulolistar: Edm01titulo[] = [];    
  edm01casillaslistar: Edm01casillas[]= []; 

  constructor(
    private _edm01casillasService: Edm01casillasService,
    private toastr: ToastrService,
    private _edm01titulosService:Edm01titulosService) { }

  ngOnInit(): void {

    this.obtenerEdm01casilla();
    this.obtenerEdm01titulo();

  }
  obtenerEdm01casilla() {
    this._edm01casillasService.getEdm01casillas().subscribe(data => {
      console.log(data);
      this.edm01casillaslistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarEdm01casilla(id: any) {
    console.log(id,'borrar')
    this._edm01casillasService.eliminarEdm01casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerEdm01titulo() {
    this._edm01titulosService.getEdm01titulos().subscribe(data => {
      console.log(data);
      this.edm01titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarEdm01titulo(id: any) {
    console.log(id,'borrar')
    this._edm01titulosService.eliminarEdm01titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}
