import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cabecera6, TablaSeis } from 'src/app/models/producto';
import { Cabecera6Service } from 'src/app/services/cabecera6.service';
import { TablaseisService } from 'src/app/services/tablaseis.service';

@Component({
  selector: 'app-listar-tablaseis',
  templateUrl: './listar-tablaseis.component.html',
  styleUrls: ['./listar-tablaseis.component.css']
})
export class ListarTablaseisComponent implements OnInit {
  
  listTablaseiss: TablaSeis[] = [];
  listCabecera6: Cabecera6[] = [];

  constructor(private _tablaseisService: TablaseisService,
              private toastr: ToastrService,
              private _cabecera6Service: Cabecera6Service) { }

  ngOnInit(): void {
    this.obtenerTablaseiss();
    this.obtenerCabeceras6();
  }

  obtenerTablaseiss() {
    this._tablaseisService.getTablaseiss().subscribe(data => {
      console.log(data);
      this.listTablaseiss = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarTablaseis(id: any) {
    this._tablaseisService.eliminarTablaseis(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
//Cabecera6
obtenerCabeceras6() {
  this._cabecera6Service.getCabeceras6().subscribe(data => {
    console.log(data);
    this.listCabecera6 = data;
  }, error => {
    console.log(error)
  })
}

eliminarCabecera6(id: any) {
  this._cabecera6Service.eliminarCabecera6(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
  }, error =>{
    console.log(error);
  })
}

}
