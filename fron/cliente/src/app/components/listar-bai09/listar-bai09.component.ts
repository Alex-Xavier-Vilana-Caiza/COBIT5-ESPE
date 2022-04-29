import { Bai09, Cabecerab09 } from './../../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Bai09Service } from 'src/app/services/bai09.service';
import { Cabecerab09Service } from 'src/app/services/cabecerab09.service';

@Component({
  selector: 'app-listar-bai09',
  templateUrl: './listar-bai09.component.html',
  styleUrls: ['./listar-bai09.component.css']
})
export class ListarBai09Component implements OnInit {
  listBai09: Bai09[] = [];
  listCabecerab09: Cabecerab09[] = [];

  constructor(private _bai09Service: Bai09Service,private _cabecerab09Service: Cabecerab09Service,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerBai09s();
    this.obtenerCabecerasb09();
  }

  obtenerBai09s() {
    this._bai09Service.getBai09s().subscribe(data => {
      console.log(data);
      this.listBai09 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarBai09(id: any) {
    this._bai09Service.eliminarBai09(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //cabecera
 obtenerCabecerasb09() {
  this._cabecerab09Service.getCabecerasb09().subscribe(data => {
    console.log(data);
    this.listCabecerab09 = data;
  }, error => {
    console.log(error)
  })
}

eliminarCabecerab09(id: any) {
  this._cabecerab09Service.eliminarCabecerab09(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
  }, error =>{
    console.log(error);
  })
}

}
