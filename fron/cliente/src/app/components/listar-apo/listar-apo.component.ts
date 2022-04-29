


import { Component, OnInit } from '@angular/core';
import { Apo } from 'src/app/models/producto';
import { ApoService } from 'src/app/services/crear-apo.service';
import { ToastrService } from 'ngx-toastr';
import { apoT } from 'src/app/models/producto';
import { ApotsService } from 'src/app/services/crear-apot.service';


@Component({
  selector: 'app-listar-apo',
  templateUrl: './listar-apo.component.html',
  styleUrls: ['./listar-apo.component.css']
})
export class ListarApoComponent implements OnInit {

  listApo: Apo[] = [];
  listApot: apoT[]= [];
  

  constructor(private _apoService: ApoService,
              private toastr: ToastrService,
              private _apotService:ApotsService) { }

  ngOnInit(): void {
    this.obtenerApo();
    this.obtenerApot();
    
  }

  obtenerApo() {
    this._apoService.getApos().subscribe(data => {
      console.log(data);
      this.listApo = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApo(id: any) {
    console.log(id,'borrar')
    this._apoService.eliminarApo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerApot() {
    this._apotService.getApots().subscribe(data => {
      console.log(data);
      this.listApot = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarApots(id: any) {
    console.log(id,'borrar')
    this._apotService.eliminarApot(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}


