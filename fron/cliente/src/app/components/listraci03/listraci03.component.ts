import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Raci03 } from 'src/app/models/raci03';
import { Raci03Service } from 'src/app/services/raci03.service';
import { Racicabe03Service } from 'src/app/services/racicabe03.service';
import { Racicabe03 } from './../../models/raci03';

@Component({
  selector: 'app-listraci03',
  templateUrl: './listraci03.component.html',
  styleUrls: ['./listraci03.component.css']
})
export class Listraci03Component implements OnInit {

  listRaci03: Raci03[] = [];
  listRacicabe03 : Racicabe03 [] = [];
  constructor(private _raci03Services: Raci03Service,
    private _racicabe03Services: Racicabe03Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerRaci03();
    this.obtenerRacicabe03();
  }

  obtenerRaci03() {
    this._raci03Services.getRaci03().subscribe(data => {
      console.log(data);
      this.listRaci03 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRaci03(id: any) {
    this._raci03Services.eliminarRaci03(id).subscribe(data => {
      this.toastr.error('El cuadro raci fue eliminado con exito' ,'Cuadro Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }

  obtenerRacicabe03() {
    this._racicabe03Services.getRacicabe03().subscribe(data => {
      console.log(data);
      this.listRacicabe03 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRacicabe03(id: any) {
    this._racicabe03Services.eliminarRacicabe03(id).subscribe(data => {
      this.toastr.error('La cabecera del raci fue eliminado con exito' ,'Cabecera Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }
}

