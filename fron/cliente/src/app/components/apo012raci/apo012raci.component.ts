import { Component, OnInit } from '@angular/core';
import { Apo012casilla } from 'src/app/models/Apo012';
import { Apo012casillasService } from 'src/app/services/apo012casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo012titulo } from 'src/app/models/Apo012';
import { Apo012titulosService } from 'src/app/services/apo012titulos.service';

@Component({
  selector: 'app-apo012raci',
  templateUrl: './apo012raci.component.html',
  styleUrls: ['./apo012raci.component.css']
})
export class Apo012raciComponent implements OnInit {

  apo012titulolistar: Apo012titulo[] = [];    
  apo012casillalistar: Apo012casilla[]= []; 

  constructor(
    private _apo012casillasService : Apo012casillasService,
    private toastr: ToastrService,
    private _apo012titulosService: Apo012titulosService) { }

  ngOnInit(): void {
    this.obtenerApo012casilla();
    this.obtenerApo012titulo();
  }
  obtenerApo012casilla() {
    this._apo012casillasService.getApo012casillas().subscribe(data => {
      console.log(data);
      this.apo012casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo012casilla(id: any) {
    console.log(id,'borrar')
    this._apo012casillasService.eliminarApo012casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo012titulo() {
    this._apo012titulosService.getApo012titulos().subscribe(data => {
      console.log(data);
      this.apo012titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo012titulo(id: any) {
    console.log(id,'borrar')
    this._apo012titulosService.eliminarApo012titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}




