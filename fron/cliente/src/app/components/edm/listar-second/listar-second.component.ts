import { Component, OnInit } from '@angular/core';
import { cabR } from 'src/app/models/producto';
import { SecondsService } from 'src/app/services/second.service';
import { ToastrService } from 'ngx-toastr';
import { Head } from 'src/app/models/producto';
import { HeadService } from 'src/app/services/crear-head.service';

@Component({
  selector: 'app-listar-second',
  templateUrl: './listar-second.component.html',
  styleUrls: ['./listar-second.component.css']
})
export class ListarSecondComponent implements OnInit {

  listSeconds: cabR[] = [];
  listHead:    Head[]= [];
  

  constructor(private _secondService: SecondsService,
              private toastr: ToastrService,
              private _headService:HeadService) { }

  ngOnInit(): void {
    this.obtenerSecond();
    this.obtenerHead();
    
  }

  obtenerSecond() {
    this._secondService.getSeconds().subscribe(data => {
      console.log(data);
      this.listSeconds = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarSecond(id: any) {
    console.log(id,'borrar')
    this._secondService.eliminarSecond(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerHead() {
    this._headService.getHeads().subscribe(data => {
      console.log(data);
      this.listHead = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarHeads(id: any) {
    console.log(id,'borrar')
    this._headService.eliminarHead(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}
