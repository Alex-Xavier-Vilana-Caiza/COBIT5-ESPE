import { Component, OnInit } from '@angular/core';
import { Apo03casilla } from 'src/app/models/Apo03';
import { Apo03casillasService } from 'src/app/services/apo03casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo03titulo } from 'src/app/models/Apo03';
import { Apo03titulosService } from 'src/app/services/apo03titulos.service';

@Component({
  selector: 'app-apo03raci',
  templateUrl: './apo03raci.component.html',
  styleUrls: ['./apo03raci.component.css']
})
export class Apo03raciComponent implements OnInit {

  apo03titulolistar: Apo03titulo[] = [];    
  apo03casillalistar: Apo03casilla[]= []; 

  constructor(
    private _apo03casillasService : Apo03casillasService,
    private toastr: ToastrService,
    private _apo03titulosService: Apo03titulosService) { }

  ngOnInit(): void {
    this.obtenerApo03casilla();
    this.obtenerApo03titulo();
  }
  obtenerApo03casilla() {
    this._apo03casillasService.getApo03casillas().subscribe(data => {
      console.log(data);
      this.apo03casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo03casilla(id: any) {
    console.log(id,'borrar')
    this._apo03casillasService.eliminarApo03casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo03titulo() {
    this._apo03titulosService.getApo03titulos().subscribe(data => {
      console.log(data);
      this.apo03titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo03titulo(id: any) {
    console.log(id,'borrar')
    this._apo03titulosService.eliminarApo03titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}


