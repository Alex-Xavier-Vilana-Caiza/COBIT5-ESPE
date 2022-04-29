import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cabecera7 } from 'src/app/models/producto';
import { Cabecera7Service } from 'src/app/services/cabecera7.service';

@Component({
  selector: 'app-crear-cabecera7',
  templateUrl: './crear-cabecera7.component.html',
  styleUrls: ['./crear-cabecera7.component.css']
})
export class CrearCabecera7Component implements OnInit {
  cabecera7Form: FormGroup;
  titulo = 'EDITAR CABECERA BAI07';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _cabecera7Service: Cabecera7Service,
    private aRouter: ActivatedRoute) { this.cabecera7Form = this.fb.group({
      dda: ['', Validators.required],
      ddb: ['', Validators.required],
      ddc: ['', Validators.required],
      ddd: ['', Validators.required],
      dde: ['', Validators.required],
      ddf: ['', Validators.required],
      ddg: ['', Validators.required],
      ddh: ['', Validators.required],
      ddi: ['', Validators.required],
      ddj: ['', Validators.required],
      ddk: ['', Validators.required],
      ddl: ['', Validators.required],
      ddm: ['', Validators.required],
      ddn: ['', Validators.required],
      ddo: ['', Validators.required],
      ddp: ['', Validators.required],
      ddq: ['', Validators.required],
      ddr: ['', Validators.required],
      dds: ['', Validators.required],
      ddt: ['', Validators.required],
      ddu: ['', Validators.required],
      ddv: ['', Validators.required],
      ddw: ['', Validators.required],
      ddx: ['', Validators.required],
      ddy: ['', Validators.required],
      ddz: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id'); }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarCabecera7(){
    const Cabecera7: Cabecera7= {
      dda: this.cabecera7Form.get('dda')?.value,
      ddb: this.cabecera7Form.get('ddb')?.value,
      ddc: this.cabecera7Form.get('ddc')?.value,
      ddd: this.cabecera7Form.get('ddd')?.value,
      dde: this.cabecera7Form.get('dde')?.value,
      ddf: this.cabecera7Form.get('ddf')?.value,
      ddg: this.cabecera7Form.get('ddg')?.value,
      ddh: this.cabecera7Form.get('ddh')?.value,
      ddi: this.cabecera7Form.get('ddi')?.value,
      ddj: this.cabecera7Form.get('ddj')?.value,
      ddk: this.cabecera7Form.get('ddk')?.value,
      ddl: this.cabecera7Form.get('ddl')?.value,
      ddm: this.cabecera7Form.get('ddm')?.value,
      ddn: this.cabecera7Form.get('ddn')?.value,
      ddo: this.cabecera7Form.get('ddo')?.value,
      ddp: this.cabecera7Form.get('ddp')?.value,
      ddq: this.cabecera7Form.get('ddq')?.value,
      ddr: this.cabecera7Form.get('ddr')?.value,
      dds: this.cabecera7Form.get('dds')?.value,
      ddt: this.cabecera7Form.get('ddt')?.value,
      ddu: this.cabecera7Form.get('ddu')?.value,
      ddv: this.cabecera7Form.get('ddv')?.value,
      ddw: this.cabecera7Form.get('ddw')?.value,
      ddx: this.cabecera7Form.get('ddx')?.value,
      ddy: this.cabecera7Form.get('ddy')?.value,
      ddz: this.cabecera7Form.get('ddz')?.value,
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecera7Service.editarCabecera7(this.id, Cabecera7).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina154']);
      },error => {
        console.log(error);
        this.cabecera7Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(Cabecera7);
      this._cabecera7Service.guardarCabecera7(Cabecera7).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina154']);
    }, error => {
      console.log(error);
      this.cabecera7Form.reset();
    })

  }

  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'EDITAR CABECERA BAI07';
      this._cabecera7Service.obtenerCabecera7(this.id).subscribe(data =>{
        this.cabecera7Form.setValue({
          dda: data.dda,
          ddb: data.ddb,
          ddc: data.ddc,
          ddd: data.ddd,
          dde: data.dde,
          ddf: data.ddf,
          ddg: data.ddg,
          ddh: data.ddh,
          ddi: data.ddi,
          ddj: data.ddj,
          ddk: data.ddk,
          ddl: data.ddl,
          ddm: data.ddm,
          ddn: data.ddn,
          ddo: data.ddo,
          ddp: data.ddp,
          ddq: data.ddq,
          ddr: data.ddr,
          dds: data.dds,
          ddt: data.ddt,
          ddu: data.ddu,
          ddv: data.ddv,
          ddw: data.ddw,
          ddx: data.ddx,
          ddy: data.ddy,
          ddz: data.ddz,
        })
      })
    }
  }
}
