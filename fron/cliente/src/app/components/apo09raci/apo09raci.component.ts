import { Component, OnInit } from '@angular/core';
import { Apo09casilla } from 'src/app/models/Apo09';
import { Apo09casillasService } from 'src/app/services/apo09casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo09titulo } from 'src/app/models/Apo09';
import { Apo09titulosService } from 'src/app/services/apo09titulos.service';

@Component({
  selector: 'app-apo09raci',
  templateUrl: './apo09raci.component.html',
  styleUrls: ['./apo09raci.component.css']
})
export class Apo09raciComponent implements OnInit {

  apo09titulolistar: Apo09titulo[] = [];    
  apo09casillalistar: Apo09casilla[]= []; 

  constructor(
    private _apo09casillasService : Apo09casillasService,
    private toastr: ToastrService,
    private _apo09titulosService: Apo09titulosService) { }

  ngOnInit(): void {
    this.obtenerApo09casilla();
    this.obtenerApo09titulo();
  }
  obtenerApo09casilla() {
    this._apo09casillasService.getApo09casillas().subscribe(data => {
      console.log(data);
      this.apo09casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo09casilla(id: any) {
    console.log(id,'borrar')
    this._apo09casillasService.eliminarApo09casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo09titulo() {
    this._apo09titulosService.getApo09titulos().subscribe(data => {
      console.log(data);
      this.apo09titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo09titulo(id: any) {
    console.log(id,'borrar')
    this._apo09titulosService.eliminarApo09titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}




