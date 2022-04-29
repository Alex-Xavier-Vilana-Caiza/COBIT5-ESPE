import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TablaSiete } from 'src/app/models/producto';
import { TablasieteService } from 'src/app/services/tablasiete.service';

@Component({
  selector: 'app-crear-tablasiete',
  templateUrl: './crear-tablasiete.component.html',
  styleUrls: ['./crear-tablasiete.component.css']
})
export class CrearTablasieteComponent implements OnInit {
  title = 'CREAR TABLA BAI07';
  tablasieteForm: FormGroup;
  id: string | null;
  
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _tablasieteService: TablasieteService,
              private aRouter: ActivatedRoute) { 
    this.tablasieteForm = this.th.group({
      BAI07: ['', Validators.required],
      oa: ['', Validators.required],
      ob: ['', Validators.required],
      oc: ['', Validators.required],
      od: ['', Validators.required],
      oe: ['', Validators.required],
      of: ['', Validators.required],
      og: ['', Validators.required],
      oh: ['', Validators.required],
      oi: ['', Validators.required],
      oj: ['', Validators.required],
      ok: ['', Validators.required],
      ol: ['', Validators.required],
      om: ['', Validators.required],
      on: ['', Validators.required],
      oo: ['', Validators.required],
      op: ['', Validators.required],
      oq: ['', Validators.required],
      or: ['', Validators.required],
      os: ['', Validators.required],
      ot: ['', Validators.required],
      ou: ['', Validators.required],
      ov: ['', Validators.required],
      ow: ['', Validators.required],
      ox: ['', Validators.required],
      oy: ['', Validators.required],
      oz: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.esEditar();
 }

 agregarTablasiete(){
   const TABLASIETE: TablaSiete= {
    BAI07: this.tablasieteForm.get('BAI07')?.value,
    oa: this.tablasieteForm.get('oa')?.value,
    ob: this.tablasieteForm.get('ob')?.value,
    oc: this.tablasieteForm.get('oc')?.value,
    od: this.tablasieteForm.get('od')?.value,
    oe: this.tablasieteForm.get('oe')?.value,
    of: this.tablasieteForm.get('of')?.value,
    og: this.tablasieteForm.get('og')?.value,
    oh: this.tablasieteForm.get('oh')?.value,
    oi: this.tablasieteForm.get('oi')?.value,
    oj: this.tablasieteForm.get('oj')?.value,
    ok: this.tablasieteForm.get('ok')?.value,
    ol: this.tablasieteForm.get('ol')?.value,
    om: this.tablasieteForm.get('om')?.value,
    on: this.tablasieteForm.get('on')?.value,
    oo: this.tablasieteForm.get('oo')?.value,
    op: this.tablasieteForm.get('op')?.value,
    oq: this.tablasieteForm.get('oq')?.value,
    or: this.tablasieteForm.get('or')?.value,
    os: this.tablasieteForm.get('os')?.value,
    ot: this.tablasieteForm.get('ot')?.value,
    ou: this.tablasieteForm.get('ou')?.value,
    ov: this.tablasieteForm.get('ov')?.value,
    ow: this.tablasieteForm.get('ow')?.value,
    ox: this.tablasieteForm.get('ox')?.value,
    oy: this.tablasieteForm.get('oy')?.value,
    oz: this.tablasieteForm.get('oz')?.value,
    
   } 

   if(this.id !== null) {
     //editamos el producto ñaño
     this._tablasieteService.editarTablasiete(this.id, TABLASIETE).subscribe(data => {
       this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
       this.router.navigate(['/pagina154']);
     },error => {
       console.log(error);
       this.tablasieteForm.reset();
     })
   }else{
     //agregamos el producto ñaño
     console.log(TABLASIETE);
     this._tablasieteService.guardarTablasiete(TABLASIETE).subscribe(data => {
      this.toastr.success('Felicidades', 'Registrado exitosamente');
      this.router.navigate(['/pagina154']);
   }, error => {
     console.log(error);
     this.tablasieteForm.reset();
   })

 }

 }

 esEditar(){
   if(this.id !== null){
     this.title = 'EDITAR TABLA BAI07';
     this._tablasieteService.obtenerTablasiete(this.id).subscribe(data =>{
       this.tablasieteForm.setValue({
        BAI07: data.BAI07,
        oa: data.oa,
        ob: data.ob,
        oc: data.oc,
        od: data.od,
        oe: data.oe,
        of: data.of,
        og: data.og,
        oh: data.oh,
        oi: data.oi,
        oj: data.oj,
        ok: data.ok,
        ol: data.ol,
        om: data.om,
        on: data.on,
        oo: data.oo,
        op: data.op,
        oq: data.oq,
        or: data.or,
        os: data.os,
        ot: data.ot,
        ou: data.ou,
        ov: data.ov,
        ow: data.ow,
        ox: data.ox,
        oy: data.oy,
        oz: data.oz,        
       })
     })
   }
 }

}
