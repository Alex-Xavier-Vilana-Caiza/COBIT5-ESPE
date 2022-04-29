import { ToastrService } from 'ngx-toastr';
import { Tablaz, Cabeceraz } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { TablazService } from 'src/app/services/tablaz.service';
import { CabecerazService } from 'src/app/services/cabeceraz.service';

@Component({
  selector: 'app-listar-tablaz',
  templateUrl: './listar-tablaz.component.html',
  styleUrls: ['./listar-tablaz.component.css']
})
export class ListarTablazComponent implements OnInit {

  listTablaz: Tablaz[] = [];
  listCabeceraz: Cabeceraz[] = [];
  

  constructor(private _tablazService: TablazService,
              private toastr: ToastrService,
              private _cabecerazService: CabecerazService
              ) { }

  ngOnInit(): void {
    this.obtenerTablaz();
    this.obtenerCabeceraz();

    
  }

  obtenerTablaz() {
    this._tablazService.getTablazz().subscribe(data => {
      console.log(data);
      this.listTablaz = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarTablaz(id: any) {
    this._tablazService.eliminarTablaz(id).subscribe(data => {
      this.toastr.error('MEA02 eliminado con exito' ,'MEA02 Eliminado');
    }, error =>{
      console.log(error);
    })
  }
  // -------------------------cabeceraz------------------------

  obtenerCabeceraz() {
    this._cabecerazService.getCabecerasz().subscribe(data => {
      console.log(data);
      this.listCabeceraz = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarCabeceraz(id: any) {
    this._cabecerazService.eliminarCabeceraz(id).subscribe(data => {
      this.toastr.error('MEA02 eliminado con exito' ,'MEA02 Eliminado');
    }, error =>{
      console.log(error);
    })
  }

}
