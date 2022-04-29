import { CabeceraDos } from './../../models/producto';
import { ToastrService } from 'ngx-toastr';
import { TabladosService } from './../../services/tablados.service';
import { Component, OnInit } from '@angular/core';
import { TablaDos } from 'src/app/models/producto';
import { CabeceraDosService } from 'src/app/services/cabecera-dos.service';

@Component({
  selector: 'app-listar-tablados',
  templateUrl: './listar-tablados.component.html',
  styleUrls: ['./listar-tablados.component.css']
})
export class ListarTabladosComponent implements OnInit {

  listTablados: TablaDos[] = [];
  listCabecerados: CabeceraDos [] = [];
  

  constructor(private _tabladosService: TabladosService,
              private toastr: ToastrService,
              private _cabeceraService: CabeceraDosService) { }

  ngOnInit(): void {
    this.obtenerTablados();
    this.obtenerCabecerados();
   
  }

  obtenerTablados() {
    this._tabladosService.getTabladoss().subscribe(data => {
      console.log(data);
      this.listTablados = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarTablados(id: any) {
    this._tabladosService.eliminarTablados(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  // -------------CABCERA DOS---------------

  obtenerCabecerados() {
    this._cabeceraService.getCabeceradoss().subscribe(data => {
      console.log(data);
      this. listCabecerados = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarCabecerados(id: any) {
    this._cabeceraService. eliminarCabecerados(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }
 

}
