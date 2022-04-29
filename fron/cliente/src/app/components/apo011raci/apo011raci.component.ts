import { Component, OnInit } from '@angular/core';
import { Apo011casilla } from 'src/app/models/Apo011';
import { Apo011casillasService } from 'src/app/services/apo011casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo011titulo } from 'src/app/models/Apo011';
import { Apo011titulosService } from 'src/app/services/apo011titulos.service';

@Component({
  selector: 'app-apo011raci',
  templateUrl: './apo011raci.component.html',
  styleUrls: ['./apo011raci.component.css']
})
export class Apo011raciComponent implements OnInit {

  apo011titulolistar: Apo011titulo[] = [];    
  apo011casillalistar: Apo011casilla[]= []; 

  constructor(
    private _apo011casillasService : Apo011casillasService,
    private toastr: ToastrService,
    private _apo011titulosService: Apo011titulosService) { }

  ngOnInit(): void {
    this.obtenerApo011casilla();
    this.obtenerApo011titulo();
  }
  obtenerApo011casilla() {
    this._apo011casillasService.getApo011casillas().subscribe(data => {
      console.log(data);
      this.apo011casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo011casilla(id: any) {
    console.log(id,'borrar')
    this._apo011casillasService.eliminarApo011casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo011titulo() {
    this._apo011titulosService.getApo011titulos().subscribe(data => {
      console.log(data);
      this.apo011titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo011titulo(id: any) {
    console.log(id,'borrar')
    this._apo011titulosService.eliminarApo011titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}




