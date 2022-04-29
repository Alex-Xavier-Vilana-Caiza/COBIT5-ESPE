import { Component, OnInit } from '@angular/core';
import { cabR4 } from 'src/app/models/producto';
import { FoursService } from 'src/app/services/four.service';
import { ToastrService } from 'ngx-toastr';
import { Head4 } from 'src/app/models/producto';
import { Head4Service } from 'src/app/services/crear-head4.service';

@Component({ 
  selector: 'app-listar-four',
  templateUrl: './listar-four.component.html',
  styleUrls: ['./listar-four.component.css']
})
export class ListarFourComponent implements OnInit {

  listFour: cabR4[] = [];    
  listHead4:    Head4[]= []; 

  constructor(private _fourService: FoursService,
              private toastr: ToastrService,
              private _head4Service:Head4Service) { }

  ngOnInit(): void {
    this.obtenerFour();
    this.obtenerHead4();
    
  }

  obtenerFour() {
    this._fourService.getFours().subscribe(data => {
      console.log(data);
      this.listFour = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarFour(id: any) {
    console.log(id,'borrar')
    this._fourService.eliminarFour(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerHead4() {
    this._head4Service.getHeads4().subscribe(data => {
      console.log(data);
      this.listHead4 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarHeads4(id: any) {
    console.log(id,'borrar')
    this._head4Service.eliminarHead4(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}