import { BAI05, Cabecerab05 } from './../../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Bai05Service } from 'src/app/services/bai05.service';
import { Cabecerab05Service } from 'src/app/services/cabecerab05.service';

@Component({
  selector: 'app-listar-bai05',
  templateUrl: './listar-bai05.component.html',
  styleUrls: ['./listar-bai05.component.css']
})
export class ListarBai05Component implements OnInit {
  listBai05: BAI05[] = [];
  listCabecerab05: Cabecerab05[] = [];

  constructor(private _bai05Service: Bai05Service,private _cabecerab05Service: Cabecerab05Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerBai05s();
    this.obtenerCabecerasb05();
  }

  obtenerBai05s() {
    this._bai05Service.getBai05s().subscribe(data => {
      console.log(data);
      this.listBai05 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarBai05(id: any) {
    this._bai05Service.eliminarBai05(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //cabecera
 obtenerCabecerasb05() {
  this._cabecerab05Service.getCabecerasb05().subscribe(data => {
    console.log(data);
    this.listCabecerab05 = data;
  }, error => {
    console.log(error)
  })
}

eliminarCabecerab05(id: any) {
  this._cabecerab05Service.eliminarCabecerab05(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
  }, error =>{
    console.log(error);
  })
}
}
