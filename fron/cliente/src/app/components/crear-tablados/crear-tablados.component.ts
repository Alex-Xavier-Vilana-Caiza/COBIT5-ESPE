import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { TablaDos } from './../../models/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TabladosService } from 'src/app/services/tablados.service';

@Component({
  selector: 'app-crear-tablados',
  templateUrl: './crear-tablados.component.html',
  styleUrls: ['./crear-tablados.component.css']
})
export class CrearTabladosComponent implements OnInit {
  title = 'CREAR TABLA MEA02';
  tabladosForm: FormGroup;
  id: string | null;
  
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _tabladosService: TabladosService,
              private aRouter: ActivatedRoute) { 
    this.tabladosForm = this.th.group({
      aab: ['', Validators.required],
      ab: ['', Validators.required],
      bb: ['', Validators.required],
      cb: ['', Validators.required],
      db: ['', Validators.required],
      eb: ['', Validators.required],
      fb: ['', Validators.required],
      gb: ['', Validators.required],
      hb: ['', Validators.required],
      ib: ['', Validators.required],
      jb: ['', Validators.required],
      kb: ['', Validators.required],
      lb: ['', Validators.required],
      mb: ['', Validators.required],
      nb: ['', Validators.required],
      ob: ['', Validators.required],
      pb: ['', Validators.required],
      qb: ['', Validators.required],
      rb: ['', Validators.required],
      sb: ['', Validators.required],
      tb: ['', Validators.required],
      ub: ['', Validators.required],
      vb: ['', Validators.required],
      wb: ['', Validators.required],
      xb: ['', Validators.required],
      yb: ['', Validators.required],
      zb: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.esEditar();
 }

 agregarTablados(){
   const TABLADOS: TablaDos= {
    aab: this.tabladosForm.get('aab')?.value,
     ab: this.tabladosForm.get('ab')?.value,
     bb: this.tabladosForm.get('bb')?.value,
     cb: this.tabladosForm.get('cb')?.value,
     db: this.tabladosForm.get('db')?.value,
     eb: this.tabladosForm.get('eb')?.value,
     fb: this.tabladosForm.get('fb')?.value,
     gb: this.tabladosForm.get('gb')?.value,
     hb: this.tabladosForm.get('hb')?.value,
     ib: this.tabladosForm.get('ib')?.value,
     jb: this.tabladosForm.get('jb')?.value,
     kb: this.tabladosForm.get('kb')?.value,
     lb: this.tabladosForm.get('lb')?.value,
     mb: this.tabladosForm.get('mb')?.value,
     nb: this.tabladosForm.get('nb')?.value,
     ob: this.tabladosForm.get('ob')?.value,
     pb: this.tabladosForm.get('pb')?.value,
     qb: this.tabladosForm.get('qb')?.value,
     rb: this.tabladosForm.get('rb')?.value,
     sb: this.tabladosForm.get('sb')?.value,
     tb: this.tabladosForm.get('tb')?.value,
     ub: this.tabladosForm.get('ub')?.value,
     vb: this.tabladosForm.get('vb')?.value,
     wb: this.tabladosForm.get('wb')?.value,
     xb: this.tabladosForm.get('xb')?.value,
     yb: this.tabladosForm.get('yb')?.value,
     zb: this.tabladosForm.get('zb')?.value,
    
   } 

   if(this.id !== null) {
     //editamos el producto ñaño
     this._tabladosService.editarTablados(this.id, TABLADOS).subscribe(data => {
       this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
       this.router.navigate(['listar-tablados']);
     },error => {
       console.log(error);
       this.tabladosForm.reset();
     })
   }else{
     //agregamos el producto ñaño
     console.log(TABLADOS);
     this._tabladosService.guardarTablados(TABLADOS).subscribe(data => {
      this.toastr.success('Felicidades', 'Registrado exitosamente');
      this.router.navigate(['listar-tablados']);
   }, error => {
     console.log(error);
     this.tabladosForm.reset();
   })

 }

 }

 esEditar(){
   if(this.id !== null){
     this.title = 'Editar Producto';
     this._tabladosService.obtenerTablados(this.id).subscribe(data =>{
       this.tabladosForm.setValue({
        aab: data.aab,
         ab: data.ab,
         bb: data.bb,
         cb: data.cb,
         db: data.db,
         eb: data.eb,
         fb: data.fb,
         gb: data.gb,
         hb: data.hb,
         ib: data.ib,
         jb: data.jb,
         kb: data.kb,
         lb: data.lb,
         mb: data.mb,
         nb: data.nb,
         ob: data.ob,
         pb: data.pb,
         qb: data.qb,
         rb: data.rb,
         sb: data.sb,
         tb: data.tb,
         ub: data.ub,
         vb: data.vb,
         wb: data.wb,
         xb: data.xb,
         yb: data.yb,
         zb: data.zb,
         
       })
     })
   }
 }
 

}

