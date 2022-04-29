import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { TablaTres} from './../../models/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TablatresService } from 'src/app/services/tablatres.service';

@Component({
  selector: 'app-crear-tablatres',
  templateUrl: './crear-tablatres.component.html',
  styleUrls: ['./crear-tablatres.component.css']
})
export class CrearTablatresComponent implements OnInit {
  title = 'CREAR TABLA BAI02';
  tablatresForm: FormGroup;
  id: string | null;
  
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _tablatresService: TablatresService,
              private aRouter: ActivatedRoute) { 
    this.tablatresForm = this.th.group({
      BAI02: ['', Validators.required],
      la: ['', Validators.required],
      lb: ['', Validators.required],
      lc: ['', Validators.required],
      ld: ['', Validators.required],
      le: ['', Validators.required],
      lf: ['', Validators.required],
      lg: ['', Validators.required],
      lh: ['', Validators.required],
      li: ['', Validators.required],
      lj: ['', Validators.required],
      lk: ['', Validators.required],
      ll: ['', Validators.required],
      lm: ['', Validators.required],
      ln: ['', Validators.required],
      lo: ['', Validators.required],
      lp: ['', Validators.required],
      lq: ['', Validators.required],
      lr: ['', Validators.required],
      ls: ['', Validators.required],
      lt: ['', Validators.required],
      lu: ['', Validators.required],
      lv: ['', Validators.required],
      lw: ['', Validators.required],
      lx: ['', Validators.required],
      ly: ['', Validators.required],
      lz: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.esEditar();
 }

 agregarTablatres(){
   const TABLATRES: TablaTres= {
    BAI02: this.tablatresForm.get('BAI02')?.value,
    la: this.tablatresForm.get('la')?.value,
    lb: this.tablatresForm.get('lb')?.value,
    lc: this.tablatresForm.get('lc')?.value,
    ld: this.tablatresForm.get('ld')?.value,
    le: this.tablatresForm.get('le')?.value,
    lf: this.tablatresForm.get('lf')?.value,
    lg: this.tablatresForm.get('lg')?.value,
    lh: this.tablatresForm.get('lh')?.value,
    li: this.tablatresForm.get('li')?.value,
    lj: this.tablatresForm.get('lj')?.value,
    lk: this.tablatresForm.get('lk')?.value,
    ll: this.tablatresForm.get('ll')?.value,
    lm: this.tablatresForm.get('lm')?.value,
    ln: this.tablatresForm.get('ln')?.value,
    lo: this.tablatresForm.get('lo')?.value,
    lp: this.tablatresForm.get('lp')?.value,
    lq: this.tablatresForm.get('lq')?.value,
    lr: this.tablatresForm.get('lr')?.value,
    ls: this.tablatresForm.get('ls')?.value,
    lt: this.tablatresForm.get('lt')?.value,
    lu: this.tablatresForm.get('lu')?.value,
    lv: this.tablatresForm.get('lv')?.value,
    lw: this.tablatresForm.get('lw')?.value,
    lx: this.tablatresForm.get('lx')?.value,
    ly: this.tablatresForm.get('ly')?.value,
    lz: this.tablatresForm.get('lz')?.value,
    
   } 

   if(this.id !== null) {
     //editamos el producto ñaño
     this._tablatresService.editarTablatres(this.id, TABLATRES).subscribe(data => {
       this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
       this.router.navigate(['/pagina130']);
     },error => {
       console.log(error);
       this.tablatresForm.reset();
     })
   }else{
     //agregamos el producto ñaño
     console.log(TABLATRES);
     this._tablatresService.guardarTablatres(TABLATRES).subscribe(data => {
      this.toastr.success('Felicidades', 'Registrado exitosamente');
      this.router.navigate(['/pagina130']);
   }, error => {
     console.log(error);
     this.tablatresForm.reset();
   })

 }

 }

 esEditar(){
   if(this.id !== null){
     this.title = 'EDITAR TABLA BAI02';
     this._tablatresService.obtenerTablatres(this.id).subscribe(data =>{
       this.tablatresForm.setValue({
        BAI02: data.BAI02,
        la: data.la,
        lb: data.lb,
        lc: data.lc,
        ld: data.ld,
        le: data.le,
        lf: data.lf,
        lg: data.lg,
        lh: data.lh,
        li: data.li,
        lj: data.lj,
        lk: data.lk,
        ll: data.ll,
        lm: data.lm,
        ln: data.ln,
        lo: data.lo,
        lp: data.lp,
        lq: data.lq,
        lr: data.lr,
        ls: data.ls,
        lt: data.lt,
        lu: data.lu,
        lv: data.lv,
        lw: data.lw,
        lx: data.lx,
        ly: data.ly,
        lz: data.lz,        
       })
     })
   }
 }
 

}