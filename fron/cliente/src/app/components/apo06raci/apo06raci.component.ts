import { Component, OnInit } from '@angular/core';
import { Apo06casilla } from 'src/app/models/Apo06';
import { Apo06casillasService } from 'src/app/services/apo06casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo06titulo } from 'src/app/models/Apo06';
import { Apo06titulosService } from 'src/app/services/apo06titulos.service';

@Component({
  selector: 'app-apo06raci',
  templateUrl: './apo06raci.component.html',
  styleUrls: ['./apo06raci.component.css']
})
export class Apo06raciComponent implements OnInit {

  apo06titulolistar: Apo06titulo[] = [];    
  apo06casillalistar: Apo06casilla[]= []; 

  constructor(
    private _apo06casillasService : Apo06casillasService,
    private toastr: ToastrService,
    private _apo06titulosService: Apo06titulosService) { }

  ngOnInit(): void {
    this.obtenerApo06casilla();
    this.obtenerApo06titulo();
  }
  obtenerApo06casilla() {
    this._apo06casillasService.getApo06casillas().subscribe(data => {
      console.log(data);
      this.apo06casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo06casilla(id: any) {
    console.log(id,'borrar')
    this._apo06casillasService.eliminarApo06casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo06titulo() {
    this._apo06titulosService.getApo06titulos().subscribe(data => {
      console.log(data);
      this.apo06titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo06titulo(id: any) {
    console.log(id,'borrar')
    this._apo06titulosService.eliminarApo06titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}

