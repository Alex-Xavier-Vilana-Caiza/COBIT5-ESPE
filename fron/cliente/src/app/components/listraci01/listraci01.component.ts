import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Raci01, Racicabe01 } from 'src/app/models/raci01';
import { Raci01Service } from 'src/app/services/raci01.service';
import { Racicabe01Service } from 'src/app/services/racicabe01.service';

@Component({
  selector: 'app-listraci01',
  templateUrl: './listraci01.component.html',
  styleUrls: ['./listraci01.component.css']
})
export class Listraci01Component implements OnInit {

  listRaci01: Raci01[] = [];
  listRacicabe01 : Racicabe01 [] = [];

  constructor(private _raci01Services: Raci01Service,
    private _racicabe01Services: Racicabe01Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerRaci01();
    this.obtenerRacicabe01();
  }

  obtenerRaci01() {
    this._raci01Services.getRaci01().subscribe(data => {
      console.log(data);
      this.listRaci01 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRaci01(id: any) {
    this._raci01Services.eliminarRaci01(id).subscribe(data => {
      this.toastr.error('El cuadro raci fue eliminado con exito' ,'Cuadro Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }

  obtenerRacicabe01() {
    this._racicabe01Services.getRacicabe01().subscribe(data => {
      console.log(data);
      this.listRacicabe01 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRacicabe01(id: any) {
    this._racicabe01Services.eliminarRacicabe01(id).subscribe(data => {
      this.toastr.error('La cabecera del raci fue eliminado con exito' ,'Cabecera Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }
}
