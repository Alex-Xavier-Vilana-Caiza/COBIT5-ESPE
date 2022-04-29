import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { TablaUno } from './../../models/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TablaunoService } from 'src/app/services/tablauno.service';

@Component({
  selector: 'app-crear-tablauno',
  templateUrl: './crear-tablauno.component.html',
  styleUrls: ['./crear-tablauno.component.css']
})
export class CrearTablaunoComponent implements OnInit {
  title = 'CREAR TABLA BAI01';
  tablaunoForm: FormGroup;
  id: string | null;
  
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _tablaunoService: TablaunoService,
              private aRouter: ActivatedRoute) { 
    this.tablaunoForm = this.th.group({
      BAI: ['', Validators.required],
      na: ['', Validators.required],
      nb: ['', Validators.required],
      nc: ['', Validators.required],
      nd: ['', Validators.required],
      ne: ['', Validators.required],
      nf: ['', Validators.required],
      ng: ['', Validators.required],
      nh: ['', Validators.required],
      ni: ['', Validators.required],
      nj: ['', Validators.required],
      nk: ['', Validators.required],
      nl: ['', Validators.required],
      nm: ['', Validators.required],
      nn: ['', Validators.required],
      no: ['', Validators.required],
      np: ['', Validators.required],
      nq: ['', Validators.required],
      nr: ['', Validators.required],
      ns: ['', Validators.required],
      nt: ['', Validators.required],
      nu: ['', Validators.required],
      nv: ['', Validators.required],
      nw: ['', Validators.required],
      nx: ['', Validators.required],
      ny: ['', Validators.required],
      nz: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.esEditar();
 }

 agregarTablauno(){
   const TABLAUNO: TablaUno= {
     BAI: this.tablaunoForm.get('BAI')?.value,
     na: this.tablaunoForm.get('na')?.value,
     nb: this.tablaunoForm.get('nb')?.value,
     nc: this.tablaunoForm.get('nc')?.value,
     nd: this.tablaunoForm.get('nd')?.value,
     ne: this.tablaunoForm.get('ne')?.value,
     nf: this.tablaunoForm.get('nf')?.value,
     ng: this.tablaunoForm.get('ng')?.value,
     nh: this.tablaunoForm.get('nh')?.value,
     ni: this.tablaunoForm.get('ni')?.value,
     nj: this.tablaunoForm.get('nj')?.value,
     nk: this.tablaunoForm.get('nk')?.value,
     nl: this.tablaunoForm.get('nl')?.value,
     nm: this.tablaunoForm.get('nm')?.value,
     nn: this.tablaunoForm.get('nn')?.value,
     no: this.tablaunoForm.get('no')?.value,
     np: this.tablaunoForm.get('np')?.value,
     nq: this.tablaunoForm.get('nq')?.value,
     nr: this.tablaunoForm.get('nr')?.value,
     ns: this.tablaunoForm.get('ns')?.value,
     nt: this.tablaunoForm.get('nt')?.value,
     nu: this.tablaunoForm.get('nu')?.value,
     nv: this.tablaunoForm.get('nv')?.value,
     nw: this.tablaunoForm.get('nw')?.value,
     nx: this.tablaunoForm.get('nx')?.value,
     ny: this.tablaunoForm.get('ny')?.value,
     nz: this.tablaunoForm.get('nz')?.value, 
   } 

   if(this.id !== null) {
     //editamos el producto ñaño
     this._tablaunoService.editarTablauno(this.id, TABLAUNO).subscribe(data => {
       this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
       this.router.navigate(['listar-tablauno']);
     },error => {
       console.log(error);
       this.tablaunoForm.reset();
     })
   }else{
     //agregamos el producto ñaño
     console.log(TABLAUNO);
     this._tablaunoService.guardarTablauno(TABLAUNO).subscribe(data => {
      this.toastr.success('Felicidades', 'Registrado exitosamente');
      this.router.navigate(['listar-tablauno']);
   }, error => {
     console.log(error);
     this.tablaunoForm.reset();
   })

 }

 }

 esEditar(){
   if(this.id !== null){
     this.title = 'EDITAR TABLA BAI01';
     this._tablaunoService.obtenerTablauno(this.id).subscribe(data =>{
       this.tablaunoForm.setValue({
         BAI: data.BAI,
         na: data.na,
         nb: data.nb,
         nc: data.nc,
         nd: data.nd,
         ne: data.ne,
         nf: data.nf,
         ng: data.ng,
         nh: data.nh,
         ni: data.ni,
         nj: data.nj,
         nk: data.nk,
         nl: data.nl,
         nm: data.nm,
         nn: data.nn,
         no: data.no,
         np: data.np,
         nq: data.nq,
         nr: data.nr,
         ns: data.ns,
         nt: data.nt,
         nu: data.nu,
         nv: data.nv,
         nw: data.nw,
         nx: data.nx,
         ny: data.ny,
         nz: data.nz,
       })
     })
   }
 }
 

}