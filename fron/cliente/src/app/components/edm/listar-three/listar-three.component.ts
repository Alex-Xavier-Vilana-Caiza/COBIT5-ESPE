import { Component, OnInit } from '@angular/core';
import { cabR3 } from 'src/app/models/producto';
import { ThreesService } from 'src/app/services/three.service';
import { ToastrService } from 'ngx-toastr';
import { Head3 } from 'src/app/models/producto';
import { Head3Service } from 'src/app/services/crear-head3.service';

@Component({ 
  selector: 'app-listar-three',
  templateUrl: './listar-three.component.html',
  styleUrls: ['./listar-three.component.css']
})
export class ListarThreeComponent implements OnInit {

  listThrees: cabR3[] = [];    
  listHead3:    Head3[]= []; 

  constructor(private _threeService: ThreesService,
              private toastr: ToastrService,
              private _head3Service:Head3Service) { }

  ngOnInit(): void {
    this.obtenerThree();
    this.obtenerHead3();
    
  }

  obtenerThree() {
    this._threeService.getThrees().subscribe(data => {
      console.log(data);
      this.listThrees = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarThree(id: any) {
    console.log(id,'borrar')
    this._threeService.eliminarThree(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  //////////////////head
  obtenerHead3() {
    this._head3Service.getHeads3().subscribe(data => {
      console.log(data);
      this.listHead3 = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarHeads3(id: any) {
    console.log(id,'borrar')
    this._head3Service.eliminarHead3(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}

