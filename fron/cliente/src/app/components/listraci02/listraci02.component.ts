import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Raci02, Racicabe02 } from 'src/app/models/raci02';
import { Raci02Service } from 'src/app/services/raci02.service';
import { Racicabe02Service } from 'src/app/services/racicabe02.service';

@Component({
  selector: 'app-listraci02',
  templateUrl: './listraci02.component.html',
  styleUrls: ['./listraci02.component.css']
})
export class Listraci02Component implements OnInit {
  listRaci02: Raci02[] = [];
  listRacicabe02 : Racicabe02 [] = [];
  constructor(private _raci02Services: Raci02Service,
    private _racicabe02Services: Racicabe02Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerRaci02();
    this.obtenerRacicabe02();
  }
  obtenerRaci02() {
    this._raci02Services.getRaci02().subscribe(data => {
      console.log(data);
      this.listRaci02 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRaci02(id: any) {
    this._raci02Services.eliminarRaci02(id).subscribe(data => {
      this.toastr.error('La matriz raci fue eliminado con exito' ,'Cuadro Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }

  obtenerRacicabe02() {
    this._racicabe02Services.getRacicabe02().subscribe(data => {
      console.log(data);
      this.listRacicabe02 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRacicabe02(id: any) {
    this._racicabe02Services.eliminarRacicabe02(id).subscribe(data => {
      this.toastr.error('La cabecera del raci fue eliminado con exito' ,'Cabecera Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }
}

