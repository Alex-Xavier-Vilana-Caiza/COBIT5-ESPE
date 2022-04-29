import { Component, OnInit } from '@angular/core';
import { Edm05titulo } from 'src/app/models/Edm05';
import { ToastrService } from 'ngx-toastr';
import { Edm05casillas } from 'src/app/models/Edm05';
import { Edm05casillasService } from 'src/app/services/edm05casillas.service';
import { Edm05titulosService } from 'src/app/services/edm05titulo.service';
@Component({
  selector: 'app-edm05tabla2',
  templateUrl: './edm05tabla2.component.html',
  styleUrls: ['./edm05tabla2.component.css']
})
export class Edm05tabla2Component implements OnInit {

  edm05titulolistar: Edm05titulo[] = [];    
  edm05casillaslistar: Edm05casillas[]= []; 

  constructor(private _edm05casillasService: Edm05casillasService,
    private toastr: ToastrService,
    private _edm05titulosService:Edm05titulosService) { }

  ngOnInit(): void {

    this.obtenerEdm05casilla();
    this.obtenerEdm05titulo();

  }
  obtenerEdm05casilla() {
    this._edm05casillasService.getEdm05casillas().subscribe(data => {
      console.log(data);
      this.edm05casillaslistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarEdm05casilla(id: any) {
    console.log(id,'borrar')
    this._edm05casillasService.eliminarEdm05casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerEdm05titulo() {
    this._edm05titulosService.getEdm05titulos().subscribe(data => {
      console.log(data);
      this.edm05titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarEdm05titulo(id: any) {
    console.log(id,'borrar')
    this._edm05titulosService.eliminarEdm05titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}
