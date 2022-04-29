import { Racicuatro,Cabecerab04 } from 'src/app/models/producto';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { RacicuatroService } from 'src/app/services/racicuatro.service';
import { Cabecerab04Service } from 'src/app/services/cabecerab04.service';

@Component({
  selector: 'app-listar-racicuatro',
  templateUrl: './listar-racicuatro.component.html',
  styleUrls: ['./listar-racicuatro.component.css']
})
export class ListarRacicuatroComponent implements OnInit {
  listRacicuatro: Racicuatro[] = [];
  listCabecerab04: Cabecerab04[] = [];

  constructor(private _racicuatroService: RacicuatroService,private _cabecerab04Service: Cabecerab04Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerRacicuatros();
    this.obtenerCabecerasb04();
  }

  obtenerRacicuatros() {
    this._racicuatroService.getRacicuatros().subscribe(data => {
      console.log(data);
      this.listRacicuatro = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarRacicuatro(id: any) {
    this._racicuatroService.eliminarRacicuatro(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //cabecera
 obtenerCabecerasb04() {
  this._cabecerab04Service.getCabecerasb04().subscribe(data => {
    console.log(data);
    this.listCabecerab04 = data;
  }, error => {
    console.log(error)
  })
}

eliminarCabecerab04(id: any) {
  this._cabecerab04Service.eliminarCabecerab04(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
  }, error =>{
    console.log(error);
  })
}
}
