import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cabecera8, TablaOcho} from 'src/app/models/producto';
import { Cabecera8Service } from 'src/app/services/cabecera8.service';
import { TablaochoService } from 'src/app/services/tablaocho.service';

@Component({
  selector: 'app-listar-tablaocho',
  templateUrl: './listar-tablaocho.component.html',
  styleUrls: ['./listar-tablaocho.component.css']
})
export class ListarTablaochoComponent implements OnInit {

  listTablaochos: TablaOcho[] = [];
  listCabecera8: Cabecera8[] = [];

  constructor(private _tablaochoService: TablaochoService,
              private toastr: ToastrService,
              private _cabecera8Service: Cabecera8Service) { }

  ngOnInit(): void {
    this.obtenerTablaochos();
    this.obtenerCabeceras8();
  }

  obtenerTablaochos() {
    this._tablaochoService.getTablaochos().subscribe(data => {
      console.log(data);
      this.listTablaochos = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarTablaocho(id: any) {
    this._tablaochoService.eliminarTablaocho(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
//Cabecera8
obtenerCabeceras8() {
  this._cabecera8Service.getCabeceras8().subscribe(data => {
    console.log(data);
    this.listCabecera8 = data;
  }, error => {
    console.log(error)
  })
}

eliminarCabecera8(id: any) {
  this._cabecera8Service.eliminarCabecera8(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
  }, error =>{
    console.log(error);
  })
}

}
