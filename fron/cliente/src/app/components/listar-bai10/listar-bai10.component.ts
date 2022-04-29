import { Bai10, Cabecerab10 } from './../../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Bai10Service } from 'src/app/services/bai10.service';
import { Cabecerab10Service } from 'src/app/services/cabecerab10.service';

@Component({
  selector: 'app-listar-bai10',
  templateUrl: './listar-bai10.component.html',
  styleUrls: ['./listar-bai10.component.css']
})
export class ListarBai10Component implements OnInit {
  listBai10: Bai10[] = [];
  listCabecerab10: Cabecerab10[] = [];

  constructor(private _bai10Service: Bai10Service,private _cabecerab10Service: Cabecerab10Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerBai10s();
    this.obtenerCabecerasb10();
  }

  obtenerBai10s() {
    this._bai10Service.getBai10s().subscribe(data => {
      console.log(data);
      this.listBai10 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarBai10(id: any) {
    this._bai10Service.eliminarBai10(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //cabecera
 obtenerCabecerasb10() {
  this._cabecerab10Service.getCabecerasb10().subscribe(data => {
    console.log(data);
    this.listCabecerab10 = data;
  }, error => {
    console.log(error)
  })
}

eliminarCabecerab10(id: any) {
  this._cabecerab10Service.eliminarCabecerab10(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
  }, error =>{
    console.log(error);
  })
}

}
