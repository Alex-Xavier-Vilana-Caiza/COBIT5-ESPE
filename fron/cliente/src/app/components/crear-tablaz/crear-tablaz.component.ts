import { Tablaz } from 'src/app/models/producto';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TablazService } from 'src/app/services/tablaz.service';

@Component({
  selector: 'app-crear-tablaz',
  templateUrl: './crear-tablaz.component.html',
  styleUrls: ['./crear-tablaz.component.css']
})
export class CrearTablazComponent implements OnInit {

  tablazForm: FormGroup;
  titulo = 'CREAR MEA01';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _tablazService: TablazService,
              private aRouter: ActivatedRoute) {
    this.tablazForm = this.fb.group({
      zaa: ['', Validators.required],
      za: ['', Validators.required],
      zb: ['', Validators.required],
      zc: ['', Validators.required],
      zd: ['', Validators.required],
      ze: ['', Validators.required],
      zf: ['', Validators.required],
      zg: ['', Validators.required],
      zh: ['', Validators.required],
      zi: ['', Validators.required],
      zj: ['', Validators.required],
      zk: ['', Validators.required],
      zl: ['', Validators.required],
      zm: ['', Validators.required],
      zn: ['', Validators.required],
      zo: ['', Validators.required],
      zp: ['', Validators.required],
      zq: ['', Validators.required],
      zr: ['', Validators.required],
      zs: ['', Validators.required],
      zt: ['', Validators.required],
      zu: ['', Validators.required],
      zv: ['', Validators.required],
      zw: ['', Validators.required],
      zx: ['', Validators.required],
      zy: ['', Validators.required],
      zz: ['', Validators.required],
      

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarTablaz(){
    const TABLAZ: Tablaz= {
      zaa: this.tablazForm.get('zaa')?.value,
      za: this.tablazForm.get('za')?.value,
      zb: this.tablazForm.get('zb')?.value,
      zc: this.tablazForm.get('zc')?.value,
      zd: this.tablazForm.get('zd')?.value,
      ze: this.tablazForm.get('ze')?.value,
      zf: this.tablazForm.get('zf')?.value,
      zg: this.tablazForm.get('zg')?.value,
      zh: this.tablazForm.get('zh')?.value,
      zi: this.tablazForm.get('zi')?.value,
      zj: this.tablazForm.get('zj')?.value,
      zk: this.tablazForm.get('zk')?.value,
      zl: this.tablazForm.get('zl')?.value,
      zm: this.tablazForm.get('zm')?.value,
      zn: this.tablazForm.get('zn')?.value,
      zo: this.tablazForm.get('zo')?.value,
      zp: this.tablazForm.get('zp')?.value,
      zq: this.tablazForm.get('zq')?.value,
      zr: this.tablazForm.get('zr')?.value,
      zs: this.tablazForm.get('zs')?.value,
      zt: this.tablazForm.get('zt')?.value,
      zu: this.tablazForm.get('zu')?.value,
      zv: this.tablazForm.get('zv')?.value,
      zw: this.tablazForm.get('zw')?.value,
      zx: this.tablazForm.get('zx')?.value,
      zy: this.tablazForm.get('zy')?.value,
      zz: this.tablazForm.get('zz')?.value,
      
      
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._tablazService.editarTablaz(this.id, TABLAZ).subscribe(data => {
        this.toastr.success('Mea02 actualizado con exito', 'MEA02 actualizado');
        this.router.navigate(['listar-tablaz']);
      },error => {
        console.log(error);
        this.tablazForm.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(TABLAZ);
      this._tablazService.guardarTablaz(TABLAZ).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['listar-tablaz']);
    }, error => {
      console.log(error);
      this.tablazForm.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'EDITAR RACI MEA01';
      this._tablazService.obtenerTablaz(this.id).subscribe(data =>{
        this.tablazForm.setValue({
          zaa: data.zaa,
          za: data.za,
          zb: data.zb,
          zc: data.zc,
          zd: data.zd,
          ze: data.ze,
          zf: data.zf,
          zg: data.zg,
          zh: data.zh,
          zi: data.zi,
          zj: data.zj,
          zk: data.zk,
          zl: data.zl,
          zm: data.zm,
          zn: data.zn,
          zo: data.zo,
          zp: data.zp,
          zq: data.zq,
          zr: data.zr,
          zs: data.zs,
          zt: data.zt,
          zu: data.zu,
          zv: data.zv,
          zw: data.zw,
          zx: data.zx,
          zy: data.zy,
          zz: data.zz,
          
        })
      })
    }
  }

}

