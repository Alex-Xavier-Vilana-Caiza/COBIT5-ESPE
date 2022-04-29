import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cabecera1, TablaUno } from 'src/app/models/producto';
import { Cabecera1Service } from 'src/app/services/cabecera1.service';
import { TablaunoService } from 'src/app/services/tablauno.service';

@Component({
  selector: 'app-listar-tablauno',
  templateUrl: './listar-tablauno.component.html',
  styleUrls: ['./listar-tablauno.component.css']
})
export class ListarTablaunoComponent implements OnInit {

  listTablaunos: TablaUno[] = [];
  listCabecera1: Cabecera1[] = [];

  constructor(private _tablaunoService: TablaunoService,
              private toastr: ToastrService,
              private _cabecera1Service: Cabecera1Service) {      }

  ngOnInit(): void {
    this.obtenerTablaunos();
    this.obtenerCabeceras1();
  }

  obtenerTablaunos() {
    this._tablaunoService.getTablaunos().subscribe(data => {
      console.log(data);
      this.listTablaunos = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarTablauno(id: any) {
    this._tablaunoService.eliminarTablauno(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
//Cabecera1
    obtenerCabeceras1() {
    this._cabecera1Service.getCabeceras1().subscribe(data => {
      console.log(data);
      this.listCabecera1 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarCabecera1(id: any) {
    this._cabecera1Service.eliminarCabecera1(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
}
