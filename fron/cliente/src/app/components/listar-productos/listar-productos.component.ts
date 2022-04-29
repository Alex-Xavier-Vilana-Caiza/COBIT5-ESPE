import { cabecera } from './../../models/producto';
import { CabeceraService } from './../../services/cabecera.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listProductos: Producto[] = [];
  listCabeceras: cabecera[] = [];

  constructor(private _productoService: ProductoService,
              private toastr: ToastrService,
              private _cabeceraService: CabeceraService) { }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerCabeceras();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }

  // ----------------------------------------cabecera--------------------------------

  obtenerCabeceras() {
    this._cabeceraService.getCabeceras().subscribe(data => {
      console.log(data);
      this.listCabeceras = data;
    }, error => {
      console.log(error)
    })
  }

  eliminarCabecera(id: any) {
    this._cabeceraService.eliminarCabecera(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error =>{
      console.log(error);
    })
  }



}
