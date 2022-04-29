import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Head3 } from 'src/app/models/producto';
import { Head3Service } from 'src/app/services/crear-head3.service';

@Component({
  selector: 'app-crear-head3',
  templateUrl: './crear-head3.component.html',
  styleUrls: ['./crear-head3.component.css']
})
export class CrearHead3Component implements OnInit {
  head3Form: FormGroup;
  title = 'MODIFICAR RACI';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _head3Service: Head3Service,
              private aRouter: ActivatedRoute) {
    this.head3Form = this.fb.group({
     xa: ['', Validators.required],
     xb: ['', Validators.required],
     xc: ['', Validators.required],
     xd: ['', Validators.required],
     xe: ['', Validators.required],
     xf: ['', Validators.required],
     xg: ['', Validators.required],
     xh: ['', Validators.required],
     xi: ['', Validators.required],
     xj: ['', Validators.required],
     xk: ['', Validators.required],
     xl: ['', Validators.required],
     xm: ['', Validators.required],
     xn: ['', Validators.required],
     xnn: ['', Validators.required],
     xo: ['', Validators.required],
     xp: ['', Validators.required],
     xq: ['', Validators.required],
     xr: ['', Validators.required],
     xs: ['', Validators.required],
     xt: ['', Validators.required],
     xu: ['', Validators.required],
     xv: ['', Validators.required],
     xw: ['', Validators.required],
     xx: ['', Validators.required],
     xy: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.Edit();
  }

  agregarHead3(){
    
    const HEAD3: Head3 = {
      xa: this.head3Form.get('xa')?.value,
      xb: this.head3Form.get('xb')?.value,
      xc: this.head3Form.get('xc')?.value,
      xd: this.head3Form.get('xd')?.value,
      xe: this.head3Form.get('xe')?.value,
      xf: this.head3Form.get('xf')?.value,
      xg: this.head3Form.get('xg')?.value,
      xh: this.head3Form.get('xh')?.value,
      xi: this.head3Form.get('xi')?.value,
      xj: this.head3Form.get('xj')?.value,
      xk: this.head3Form.get('xk')?.value,
      xl: this.head3Form.get('xl')?.value,
      xm: this.head3Form.get('xm')?.value,
      xn: this.head3Form.get('xn')?.value,
      xnn: this.head3Form.get('xnn')?.value,
      xo: this.head3Form.get('xo')?.value,
      xp: this.head3Form.get('xp')?.value,
      xq: this.head3Form.get('xq')?.value,
      xr: this.head3Form.get('xr')?.value,
      xs: this.head3Form.get('xs')?.value,
      xt: this.head3Form.get('xt')?.value,
      xu: this.head3Form.get('xu')?.value,
      xv: this.head3Form.get('xv')?.value,
      xw: this.head3Form.get('xw')?.value,
      xx: this.head3Form.get('xx')?.value,
      xy: this.head3Form.get('xy')?.value,
      
    }
    if(this.id !== null) {
      //editamos el producto ñaño
      this._head3Service.editarHead3(this.id, HEAD3).subscribe(data => {
        this.toastr.success('RACI actualizado con exito', ' actualizado');
        this.router.navigate(['listar-three']);
      },error => {
        console.log(error);
        this.head3Form.reset();
      })
    }else{
    console.log(HEAD3);
    this._head3Service.guardarHead3(HEAD3).subscribe(data => {
    this.toastr.info('Guardado', 'Registrado exitosamente');
    this.router.navigate(['listar-three']);
    }, error => {
      console.log(error);
      this.head3Form.reset();
    })
  }
}
  
  Edit(){
    if(this.id !== null){
      this.title = 'EDITAR RACI';
      this._head3Service.obtenerHead3(this.id).subscribe(data =>{
        this.head3Form.setValue({
          xa: data.xa,
          xb: data.xb,
          xc: data.xc,
          xd: data.xd,
          xe: data.xe,
          xf: data.xf,
          xg: data.xg,
          xh: data.xh,
          xi: data.xi,
          xj: data.xj,
          xk: data.xk,
          xl: data.xl,
          xm: data.xm,
          xn: data.xn,
          xnn: data.xnn,
          xo: data.xo,
          xp: data.xp,
          xq: data.xq,
          xr: data.xr,
          xs: data.xs,
          xt: data.xt,
          xu: data.xu,
          xv: data.xv,
          xw: data.xw,
          xx: data.xx,
          xy: data.xy,
           

          
        })
      })
    }
  }
}


