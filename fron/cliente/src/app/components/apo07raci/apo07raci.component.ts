import { Component, OnInit } from '@angular/core';
import { Apo07casilla } from 'src/app/models/Apo07';
import { Apo07casillasService } from 'src/app/services/apo07casillas.service';
import { ToastrService } from 'ngx-toastr';
import { Apo07titulo } from 'src/app/models/Apo07';
import { Apo07titulosService } from 'src/app/services/apo07titulos.service';

@Component({
  selector: 'app-apo07raci',
  templateUrl: './apo07raci.component.html',
  styleUrls: ['./apo07raci.component.css']
})
export class Apo07raciComponent implements OnInit {

  apo07titulolistar: Apo07titulo[] = [];    
  apo07casillalistar: Apo07casilla[]= []; 

  constructor(
    private _apo07casillasService : Apo07casillasService,
    private toastr: ToastrService,
    private _apo07titulosService: Apo07titulosService) { }

  ngOnInit(): void {
    this.obtenerApo07casilla();
    this.obtenerApo07titulo();
  }
  obtenerApo07casilla() {
    this._apo07casillasService.getApo07casillas().subscribe(data => {
      console.log(data);
      this.apo07casillalistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo07casilla(id: any) {
    console.log(id,'borrar')
    this._apo07casillasService.eliminarApo07casilla(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApo07titulo() {
    this._apo07titulosService.getApo07titulos().subscribe(data => {
      console.log(data);
      this.apo07titulolistar = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo07titulo(id: any) {
    console.log(id,'borrar')
    this._apo07titulosService.eliminarApo07titulo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}



