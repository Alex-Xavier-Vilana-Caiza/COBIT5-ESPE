import { ToastrService } from 'ngx-toastr';
import { Tabla3Service } from './../../services/tabla3.service';
import { Cabecerab03Service } from 'src/app/services/cabecerab03.service';
import { tabla3, Cabecerab03 } from './../../models/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tabla3',
  templateUrl: './listar-tabla3.component.html',
  styleUrls: ['./listar-tabla3.component.css']
})
export class ListarTabla3Component implements OnInit {
  listTabla3: tabla3[] = [];
  listCabecerasb03: Cabecerab03[] = [];
  constructor(private _tabla3Service: Tabla3Service, private _cabecerab03Service: Cabecerab03Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerTablas3();
    this.obtenerCabecerasb03();
  }

  obtenerTablas3() {
    this._tabla3Service.getTablas33().subscribe(data => {
      console.log(data);
      this.listTabla3 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarTabla3(id: any) {
    this._tabla3Service.eliminarTabla3(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
 //cabecera
 obtenerCabecerasb03() {
  this._cabecerab03Service.getCabecerasb03().subscribe(data => {
    console.log(data);
    this.listCabecerasb03 = data;
  }, error => {
    console.log(error)
  })
}

eliminarCabecerab03(id: any) {
  this._cabecerab03Service.eliminarCabecerab03(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
  }, error =>{
    console.log(error);
  })
}



}
