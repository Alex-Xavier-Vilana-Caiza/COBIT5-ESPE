

import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { apoT } from 'src/app/models/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApotsService } from 'src/app/services/crear-apot.service';

@Component({
  selector: 'app-crear-apot',
  templateUrl: './crear-apot.component.html',
  styleUrls: ['./crear-apot.component.css']
})
export class CrearApotComponent implements OnInit {
  title = 'CREAR TABLA EDM02';
  apotForm: FormGroup;
  id: string | null;
  
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _apotsService: ApotsService,
              private aRouter: ActivatedRoute) { 
    this.apotForm = this.th.group({
      APO1: ['', Validators.required],
      ua: ['', Validators.required],
      ub: ['', Validators.required],
      uc: ['', Validators.required],
      ud: ['', Validators.required],
      ue: ['', Validators.required],
      uf: ['', Validators.required],
      ug: ['', Validators.required],
      uh: ['', Validators.required],
      ui: ['', Validators.required],
      uj: ['', Validators.required],
      uk: ['', Validators.required],
      ul: ['', Validators.required],
      um: ['', Validators.required],
      un: ['', Validators.required],
      unn:['', Validators.required],
      uo: ['', Validators.required],
      up: ['', Validators.required],
      uq: ['', Validators.required],
      ur: ['', Validators.required],
      us: ['', Validators.required],
      ut: ['', Validators.required],
      uu: ['', Validators.required],
      uv: ['', Validators.required],
      uw: ['', Validators.required],
      ux: ['', Validators.required],
      uy: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.esEditar();
 }

 agregarApot(){
   const APOT: apoT= {
    APO1: this.apotForm.get('APO1')?.value,
    ua: this.apotForm.get('ua')?.value, 
    ub: this.apotForm.get('ub')?.value,
    uc: this.apotForm.get('uc')?.value,
    ud: this.apotForm.get('ud')?.value,
    ue: this.apotForm.get('ue')?.value,
    uf :this.apotForm.get('uf')?.value,
    ug :this.apotForm.get('ug')?.value,
    uh :this.apotForm.get('uh')?.value,
    ui :this.apotForm.get('ui')?.value,
    uj :this.apotForm.get('uj')?.value,
    uk :this.apotForm.get('uk')?.value,
    ul :this.apotForm.get('ul')?.value,
    um :this.apotForm.get('um')?.value,
    un :this.apotForm.get('un')?.value,
    unn :this.apotForm.get('unn')?.value,
    uo :this.apotForm.get('uo')?.value,
    up :this.apotForm.get('up')?.value,
    uq :this.apotForm.get('uq')?.value,
    ur :this.apotForm.get('ur')?.value,
    us :this.apotForm.get('us')?.value,
    ut :this.apotForm.get('ut')?.value,
    uu :this.apotForm.get('uu')?.value,
    uv :this.apotForm.get('uv')?.value,
    uw :this.apotForm.get('uw')?.value,
    ux :this.apotForm.get('ux')?.value,
    uy :this.apotForm.get('uy')?.value,

    
   } 

   if(this.id !== null) {
     //editamos
     this._apotsService.editarApot(this.id, APOT).subscribe(data => {
       this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
       this.router.navigate(['listar-apo']);
     },error => {
       console.log(error);
       this.apotForm.reset();
     })
   }else{
     //agregamos 
     console.log(APOT);
     this._apotsService.guardarApot(APOT).subscribe(data => {
      this.toastr.success('Felicidades', 'Registrado exitosamente');
      this.router.navigate(['listar-apo']);
   }, error => {
     console.log(error);
     this.apotForm.reset();
   })

 }

 }

 esEditar(){
   if(this.id !== null){
     this.title = 'Editar';
     this._apotsService.obtenerApot(this.id).subscribe(data =>{
       this.apotForm.setValue({
        APO1: data.APO1,
         ua: data.ua,
         ub: data.ub,
         uc: data.uc,
         ud: data.ud,
         ue: data.ue,
         uf: data.uf,
         ug: data.ug,
         uh: data.uh,
         ui: data.ui,
         uj: data.uj,
         uk: data.uk,
         ul: data.ul,
         um: data.um,
         un: data.un,
         unn: data.unn,
         uo: data.uo,
         up: data.up,
         uq: data.uq,
         ur: data.ur,
         us: data.us,
         ut: data.ut,
         uu: data.uu,
         uv: data.uv,
         uw: data.uw,
         ux: data.ux,
         uy: data.uy,


         
       })
     })
   }
 }
 

}


