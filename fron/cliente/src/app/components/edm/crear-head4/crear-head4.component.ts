import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Head4 } from 'src/app/models/producto';
import { Head4Service } from 'src/app/services/crear-head4.service';

@Component({
  selector: 'app-crear-head4',
  templateUrl: './crear-head4.component.html',
  styleUrls: ['./crear-head4.component.css']
})
export class CrearHead4Component implements OnInit {
  head4Form: FormGroup;
  title = 'MODIFICAR RACI';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _head4Service: Head4Service,
              private aRouter: ActivatedRoute) {
    this.head4Form = this.fb.group({
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
     lnn: ['', Validators.required],
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
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.Edit();
  }

  agregarHead4(){
    
    const HEAD4: Head4 = {
      la: this.head4Form.get('la')?.value,
      lb: this.head4Form.get('lb')?.value,
      lc: this.head4Form.get('lc')?.value,
      ld: this.head4Form.get('ld')?.value,
      le: this.head4Form.get('le')?.value,
      lf: this.head4Form.get('lf')?.value,
      lg: this.head4Form.get('lg')?.value,
      lh: this.head4Form.get('lh')?.value,
      li: this.head4Form.get('li')?.value,
      lj: this.head4Form.get('lj')?.value,
      lk: this.head4Form.get('lk')?.value,
      ll: this.head4Form.get('ll')?.value,
      lm: this.head4Form.get('lm')?.value,
      ln: this.head4Form.get('ln')?.value,
      lnn: this.head4Form.get('lnn')?.value,
      lo: this.head4Form.get('lo')?.value,
      lp: this.head4Form.get('lp')?.value,
      lq: this.head4Form.get('lq')?.value,
      lr: this.head4Form.get('lr')?.value,
      ls: this.head4Form.get('ls')?.value,
      lt: this.head4Form.get('lt')?.value,
      lu: this.head4Form.get('lu')?.value,
      lv: this.head4Form.get('lv')?.value,
      lw: this.head4Form.get('lw')?.value,
      lx: this.head4Form.get('lx')?.value,
      ly: this.head4Form.get('ly')?.value,
      
    }
    if(this.id !== null) {
      //editamos el producto ñaño
      this._head4Service.editarHead4(this.id, HEAD4).subscribe(data => {
        this.toastr.success('RACI actualizado con exito', ' actualizado');
        this.router.navigate(['listar-four']);
      },error => {
        console.log(error);
        this.head4Form.reset();
      })
    }else{
    console.log(HEAD4);
    this._head4Service.guardarHead4(HEAD4).subscribe(data => {
    this.toastr.info('Guardado', 'Registrado exitosamente');
    this.router.navigate(['listar-four']);
    }, error => {
      console.log(error);
      this.head4Form.reset();
    })
  }
}
  
  Edit(){
    if(this.id !== null){
      this.title = 'EDITAR RACI';
      this._head4Service.obtenerHead4(this.id).subscribe(data =>{
        this.head4Form.setValue({
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
          lnn: data.lnn,
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
           

          
        })
      })
    }
  }
}


