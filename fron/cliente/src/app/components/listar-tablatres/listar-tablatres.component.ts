import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cabecera3, TablaTres} from 'src/app/models/producto';
import { Cabecera3Service } from 'src/app/services/cabecera3.service';
import { TablatresService } from 'src/app/services/tablatres.service';

@Component({
  selector: 'app-listar-tablatres',
  templateUrl: './listar-tablatres.component.html',
  styleUrls: ['./listar-tablatres.component.css']
})
export class ListarTablatresComponent implements OnInit {

  listTablatress: TablaTres[] = [];
  listCabecera3: Cabecera3[] = [];

  constructor(private _tablatresService: TablatresService,
              private toastr: ToastrService,
              private _cabecera3Service: Cabecera3Service) { }

  ngOnInit(): void {
    this.obtenerTablatress();
    this.obtenerCabeceras3();
  }

  obtenerTablatress() {
    this._tablatresService.getTablatress().subscribe(data => {
      console.log(data);
      this.listTablatress = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarTablatres(id: any) {
    this._tablatresService.eliminarTablatres(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
//Cabecera3
obtenerCabeceras3() {
  this._cabecera3Service.getCabeceras3().subscribe(data => {
    console.log(data);
    this.listCabecera3 = data;
  }, error => {
    console.log(error)
  })
}

eliminarCabecera3(id: any) {
  this._cabecera3Service.eliminarCabecera3(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
  }, error =>{
    console.log(error);
  })
}
}
