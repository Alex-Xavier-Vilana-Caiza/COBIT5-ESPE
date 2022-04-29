import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Raci05Service } from 'src/app/services/raci05.service';
import { Raci05, Racicabe05 } from 'src/app/models/raci05';
import { Racicabe05Service } from 'src/app/services/racicabe05.service';

@Component({
  selector: 'app-listraci05',
  templateUrl: './listraci05.component.html',
  styleUrls: ['./listraci05.component.css']
})
export class Listraci05Component implements OnInit {

  listRaci05: Raci05[] = [];
  listRacicabe05 : Racicabe05 [] = [];

  constructor(private _raci05Services: Raci05Service,
    private _racicabe05Services: Racicabe05Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerRaci05();
    this.obtenerRacicabe05();
  }

  obtenerRaci05() {
    this._raci05Services.getRaci05().subscribe(data => {
      console.log(data);
      this.listRaci05 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRaci05(id: any) {
    this._raci05Services.eliminarRaci05(id).subscribe(data => {
      this.toastr.error('El cuadro raci fue eliminado con exito' ,'Cuadro Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }

  obtenerRacicabe05() {
    this._racicabe05Services.getRacicabe05().subscribe(data => {
      console.log(data);
      this.listRacicabe05 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRacicabe05(id: any) {
    this._racicabe05Services.eliminarRacicabe05(id).subscribe(data => {
      this.toastr.error('La cabecera del raci fue eliminado con exito' ,'Cabecera Raci Eliminado');
    }, error =>{
      console.log(error);
      
    })
  }
}
