import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Raci06Service } from 'src/app/services/raci06.service';
import { Raci06, Racicabe06 } from 'src/app/models/raci06';
import { Racicabe06Service } from 'src/app/services/racicabe06.service';

@Component({
  selector: 'app-listraci06',
  templateUrl: './listraci06.component.html',
  styleUrls: ['./listraci06.component.css']
})
export class Listraci06Component implements OnInit {

  listRaci06: Raci06[] = [];
  listRacicabe06 : Racicabe06 [] = [];

  constructor(private _raci06Services: Raci06Service,
    private _racicabe06Services: Racicabe06Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerRaci06();
    this.obtenerRacicabe06();
  }

  obtenerRaci06() {
    this._raci06Services.getRaci06().subscribe(data => {
      console.log(data);
      this.listRaci06 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRaci06(id: any) {
    this._raci06Services.eliminarRaci06(id).subscribe(data => {
      this.toastr.error('El cuadro raci fue eliminado con exito' ,'Cuadro Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }

  obtenerRacicabe06() {
    this._racicabe06Services.getRacicabe06().subscribe(data => {
      console.log(data);
      this.listRacicabe06 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRacicabe06(id: any) {
    this._racicabe06Services.eliminarRacicabe06(id).subscribe(data => {
      this.toastr.error('La cabecera del raci fue eliminado con exito' ,'Cabecera Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }
}
