import { TablaxService } from './../../services/tablax.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Tablax } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-tablax',
  templateUrl: './crear-tablax.component.html',
  styleUrls: ['./crear-tablax.component.css']
})
export class CrearTablaxComponent implements OnInit {

  tablaxForm: FormGroup;
  titulo = 'CREAR MEA02';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _tablaxService: TablaxService,
              private aRouter: ActivatedRoute) {
    this.tablaxForm = this.fb.group({
      xaa: ['', Validators.required],
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
      xz: ['', Validators.required],
      

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarTablax(){
    const TABLAX: Tablax= {
      xaa: this.tablaxForm.get('xaa')?.value,
      xa: this.tablaxForm.get('xa')?.value,
      xb: this.tablaxForm.get('xb')?.value,
      xc: this.tablaxForm.get('xc')?.value,
      xd: this.tablaxForm.get('xd')?.value,
      xe: this.tablaxForm.get('xe')?.value,
      xf: this.tablaxForm.get('xf')?.value,
      xg: this.tablaxForm.get('xg')?.value,
      xh: this.tablaxForm.get('xh')?.value,
      xi: this.tablaxForm.get('xi')?.value,
      xj: this.tablaxForm.get('xj')?.value,
      xk: this.tablaxForm.get('xk')?.value,
      xl: this.tablaxForm.get('xl')?.value,
      xm: this.tablaxForm.get('xm')?.value,
      xn: this.tablaxForm.get('xn')?.value,
      xo: this.tablaxForm.get('xo')?.value,
      xp: this.tablaxForm.get('xp')?.value,
      xq: this.tablaxForm.get('xq')?.value,
      xr: this.tablaxForm.get('xr')?.value,
      xs: this.tablaxForm.get('xs')?.value,
      xt: this.tablaxForm.get('xt')?.value,
      xu: this.tablaxForm.get('xu')?.value,
      xv: this.tablaxForm.get('xv')?.value,
      xw: this.tablaxForm.get('xw')?.value,
      xx: this.tablaxForm.get('xx')?.value,
      xy: this.tablaxForm.get('xy')?.value,
      xz: this.tablaxForm.get('xz')?.value,
      
      
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._tablaxService.editarTablax(this.id, TABLAX).subscribe(data => {
        this.toastr.success('Mea02 actualizado con exito', 'MEA02 actualizado');
        this.router.navigate(['listar-tablax']);
      },error => {
        console.log(error);
        this.tablaxForm.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(TABLAX);
      this._tablaxService.guardarTablax(TABLAX).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['listar-tablax']);
    }, error => {
      console.log(error);
      this.tablaxForm.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar MEA02';
      this._tablaxService.obtenerTablax(this.id).subscribe(data =>{
        this.tablaxForm.setValue({
          xaa: data.xaa,
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
          xz: data.xz,
          
        })
      })
    }
  }

}

