import { ToastrService } from 'ngx-toastr';
import { TablaxService } from './../../services/tablax.service';
import { Component, OnInit } from '@angular/core';
import { Cabecerau, Tablax } from 'src/app/models/producto';
import { CabeceraxService } from 'src/app/services/cabecerax.service';

@Component({
  selector: 'app-listar-tablax',
  templateUrl: './listar-tablax.component.html',
  styleUrls: ['./listar-tablax.component.css']
})
export class ListarTablaxComponent implements OnInit {

  listTablax: Tablax[] = [];
  listCabecerax: Cabecerau[] = [];
  

  constructor(private _tablaxService: TablaxService,
              private toastr: ToastrService,
              private _cabeceraxService: CabeceraxService,
              ) { }

  ngOnInit(): void {
    this.obtenerTablax();
    this.obtenerCabecerax();

    
  }

  obtenerTablax() {
    this._tablaxService.getTablaxx().subscribe(data => {
      console.log(data);
      this.listTablax = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarTablax(id: any) {
    this._tablaxService.eliminarTablax(id).subscribe(data => {
      this.toastr.error('MEA02 eliminado con exito' ,'MEA02 Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  // -------------------------cabecerax------------------------

  obtenerCabecerax() {
    this._cabeceraxService.getCabecerasx().subscribe(data => {
      console.log(data);
      this.listCabecerax = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarCabecerax(id: any) {
    this._cabeceraxService.eliminarCabecerax(id).subscribe(data => {
      this.toastr.error('MEA02 eliminado con exito' ,'MEA02 Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}

