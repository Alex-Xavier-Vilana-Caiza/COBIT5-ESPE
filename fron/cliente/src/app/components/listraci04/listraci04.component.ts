import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Raci04Service } from 'src/app/services/raci04.service';
import { Raci04, Racicabe04 } from 'src/app/models/raci04';
import { Racicabe04Service } from 'src/app/services/racicabe04.service';

@Component({
  selector: 'app-listraci04',
  templateUrl: './listraci04.component.html',
  styleUrls: ['./listraci04.component.css']
})
export class Listraci04Component implements OnInit {

  listRaci04: Raci04[] = [];
  listRacicabe04 : Racicabe04 [] = [];

  constructor(private _raci04Services: Raci04Service,
    private _racicabe04Services: Racicabe04Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerRaci04();
    this.obtenerRacicabe04();
  }

  obtenerRaci04() {
    this._raci04Services.getRaci04().subscribe(data => {
      console.log(data);
      this.listRaci04 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRaci04(id: any) {
    this._raci04Services.eliminarRaci04(id).subscribe(data => {
      this.toastr.error('El cuadro raci fue eliminado con exito' ,'Cuadro Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }

  obtenerRacicabe04() {
    this._racicabe04Services.getRacicabe04().subscribe(data => {
      console.log(data);
      this.listRacicabe04 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRacicabe04(id: any) {
    this._racicabe04Services.eliminarRacicabe04(id).subscribe(data => {
      this.toastr.error('La cabecera del raci fue eliminado con exito' ,'Cabecera Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }
}
