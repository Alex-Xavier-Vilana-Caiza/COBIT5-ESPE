import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TablaSeis } from 'src/app/models/producto';
import { TablaseisService } from 'src/app/services/tablaseis.service';

@Component({
  selector: 'app-crear-tablaseis',
  templateUrl: './crear-tablaseis.component.html',
  styleUrls: ['./crear-tablaseis.component.css']
})
export class CrearTablaseisComponent implements OnInit {

  title = 'CREAR TABLA BAI06';
  tablaseisForm: FormGroup;
  id: string | null;
  
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _tablaseisService: TablaseisService,
              private aRouter: ActivatedRoute) { 
    this.tablaseisForm = this.th.group({
      BAI06: ['', Validators.required],
      qa: ['', Validators.required],
      qb: ['', Validators.required],
      qc: ['', Validators.required],
      qd: ['', Validators.required],
      qe: ['', Validators.required],
      qf: ['', Validators.required],
      qg: ['', Validators.required],
      qh: ['', Validators.required],
      qi: ['', Validators.required],
      qj: ['', Validators.required],
      qk: ['', Validators.required],
      ql: ['', Validators.required],
      qm: ['', Validators.required],
      qn: ['', Validators.required],
      qo: ['', Validators.required],
      qp: ['', Validators.required],
      qq: ['', Validators.required],
      qr: ['', Validators.required],
      qs: ['', Validators.required],
      qt: ['', Validators.required],
      qu: ['', Validators.required],
      qv: ['', Validators.required],
      qw: ['', Validators.required],
      qx: ['', Validators.required],
      qy: ['', Validators.required],
      qz: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.esEditar();
 }

 agregarTablaseis(){
   const TABLASEIS: TablaSeis= {
    BAI06: this.tablaseisForm.get('BAI06')?.value,
    qa: this.tablaseisForm.get('qa')?.value,
    qb: this.tablaseisForm.get('qb')?.value,
    qc: this.tablaseisForm.get('qc')?.value,
    qd: this.tablaseisForm.get('qd')?.value,
    qe: this.tablaseisForm.get('qe')?.value,
    qf: this.tablaseisForm.get('qf')?.value,
    qg: this.tablaseisForm.get('qg')?.value,
    qh: this.tablaseisForm.get('qh')?.value,
    qi: this.tablaseisForm.get('qi')?.value,
    qj: this.tablaseisForm.get('qj')?.value,
    qk: this.tablaseisForm.get('qk')?.value,
    ql: this.tablaseisForm.get('ql')?.value,
    qm: this.tablaseisForm.get('qm')?.value,
    qn: this.tablaseisForm.get('qn')?.value,
    qo: this.tablaseisForm.get('qo')?.value,
    qp: this.tablaseisForm.get('qp')?.value,
    qq: this.tablaseisForm.get('qq')?.value,
    qr: this.tablaseisForm.get('qr')?.value,
    qs: this.tablaseisForm.get('qs')?.value,
    qt: this.tablaseisForm.get('qt')?.value,
    qu: this.tablaseisForm.get('qu')?.value,
    qv: this.tablaseisForm.get('qv')?.value,
    qw: this.tablaseisForm.get('qw')?.value,
    qx: this.tablaseisForm.get('qx')?.value,
    qy: this.tablaseisForm.get('qy')?.value,
    qz: this.tablaseisForm.get('qz')?.value,
    
   } 

   if(this.id !== null) {
     //editamos el producto ñaño
     this._tablaseisService.editarTablaseis(this.id, TABLASEIS).subscribe(data => {
       this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
       this.router.navigate(['/pagina149']);
     },error => {
       console.log(error);
       this.tablaseisForm.reset();
     })
   }else{
     //agregamos el producto ñaño
     console.log(TABLASEIS);
     this._tablaseisService.guardarTablaseis(TABLASEIS).subscribe(data => {
      this.toastr.success('Felicidades', 'Registrado exitosamente');
      this.router.navigate(['/pagina149']);
   }, error => {
     console.log(error);
     this.tablaseisForm.reset();
   })

 }

 }

 esEditar(){
   if(this.id !== null){
     this.title = 'EDITAR TABLA BAI06';
     this._tablaseisService.obtenerTablaseis(this.id).subscribe(data =>{
       this.tablaseisForm.setValue({
        BAI06: data.BAI06,
        qa: data.qa,
        qb: data.qb,
        qc: data.qc,
        qd: data.qd,
        qe: data.qe,
        qf: data.qf,
        qg: data.qg,
        qh: data.qh,
        qi: data.qi,
        qj: data.qj,
        qk: data.qk,
        ql: data.ql,
        qm: data.qm,
        qn: data.qn,
        qo: data.qo,
        qp: data.qp,
        qq: data.qq,
        qr: data.qr,
        qs: data.qs,
        qt: data.qt,
        qu: data.qu,
        qv: data.qv,
        qw: data.qw,
        qx: data.qx,
        qy: data.qy,
        qz: data.qz,        
       })
     })
   }
 }

}
