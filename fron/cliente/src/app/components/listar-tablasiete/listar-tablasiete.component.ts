import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cabecera7, TablaSiete } from 'src/app/models/producto';
import { Cabecera7Service } from 'src/app/services/cabecera7.service';
import { TablasieteService } from 'src/app/services/tablasiete.service';

@Component({
  selector: 'app-listar-tablasiete',
  templateUrl: './listar-tablasiete.component.html',
  styleUrls: ['./listar-tablasiete.component.css']
})
export class ListarTablasieteComponent implements OnInit {
  
  listTablasietes: TablaSiete[] = [];
  listCabecera7: Cabecera7[] = [];

  constructor(private _tablasieteService: TablasieteService,
              private toastr: ToastrService,
              private _cabecera7Service: Cabecera7Service) { }

  ngOnInit(): void {
    this.obtenerTablasietes();
    this.obtenerCabeceras7();
  }

  obtenerTablasietes() {
    this._tablasieteService.getTablasietes().subscribe(data => {
      console.log(data);
      this.listTablasietes = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarTablasiete(id: any) {
    this._tablasieteService.eliminarTablasiete(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
//Cabecera7
obtenerCabeceras7() {
  this._cabecera7Service.getCabeceras7().subscribe(data => {
    console.log(data);
    this.listCabecera7 = data;
  }, error => {
    console.log(error)
  })
}

eliminarCabecera7(id: any) {
  this._cabecera7Service.eliminarCabecera7(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
  }, error =>{
    console.log(error);
  })
}
}
