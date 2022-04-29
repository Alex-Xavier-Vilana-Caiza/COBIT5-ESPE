import { CabecerazService } from './../../services/cabeceraz.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cabeceraz } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-cabeceraz',
  templateUrl: './crear-cabeceraz.component.html',
  styleUrls: ['./crear-cabeceraz.component.css']
})
export class CrearCabecerazComponent implements OnInit {

  cabecerazForm: FormGroup;
  title = 'MODIFICAR CABECERA RACI MEA01';
  id: string | null;


  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cabecerazService: CabecerazService,
              private aRouter: ActivatedRoute,
            ) {
    this.cabecerazForm = this.fb.group({
      ka: ['', Validators.required],
      kb: ['', Validators.required],
      kc: ['', Validators.required],
      kd: ['', Validators.required],
      ke: ['', Validators.required],
      kf: ['', Validators.required],
      kg: ['', Validators.required],
      kh: ['', Validators.required],
      ki: ['', Validators.required],
      kj: ['', Validators.required],
      kk: ['', Validators.required],
      kl: ['', Validators.required],
      km: ['', Validators.required],
      kn: ['', Validators.required],
      ko: ['', Validators.required],
      kp: ['', Validators.required],
      kq: ['', Validators.required],
      kr: ['', Validators.required],
      ks: ['', Validators.required],
      kt: ['', Validators.required],
      ku: ['', Validators.required],
      kv: ['', Validators.required],
      kw: ['', Validators.required],
      kx: ['', Validators.required],
      ky: ['', Validators.required],
      kz: ['', Validators.required],

  
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
}

  ngOnInit(): void {
    this.Edit();
  }

  agregarCabeceraz(){

    const CABECERAZ: Cabeceraz = {
      ka: this.cabecerazForm.get('ka')?.value,
      kb: this.cabecerazForm.get('kb')?.value,
      kc: this.cabecerazForm.get('kc')?.value,
      kd: this.cabecerazForm.get('kd')?.value,
      ke: this.cabecerazForm.get('ke')?.value,
      kf: this.cabecerazForm.get('kf')?.value,
      kg: this.cabecerazForm.get('kg')?.value,
      kh: this.cabecerazForm.get('kh')?.value,
      ki: this.cabecerazForm.get('ki')?.value,
      kj: this.cabecerazForm.get('kj')?.value,
      kk: this.cabecerazForm.get('kk')?.value,
      kl: this.cabecerazForm.get('kl')?.value,
      km: this.cabecerazForm.get('km')?.value,
      kn: this.cabecerazForm.get('kn')?.value,
      ko: this.cabecerazForm.get('ko')?.value,
      kp: this.cabecerazForm.get('kp')?.value,
      kq: this.cabecerazForm.get('kq')?.value,
      kr: this.cabecerazForm.get('kr')?.value,
      ks: this.cabecerazForm.get('ks')?.value,
      kt: this.cabecerazForm.get('kt')?.value,
      ku: this.cabecerazForm.get('ku')?.value,
      kv: this.cabecerazForm.get('kv')?.value,
      kw: this.cabecerazForm.get('kw')?.value,
      kx: this.cabecerazForm.get('kx')?.value,
      ky: this.cabecerazForm.get('ky')?.value,
      kz: this.cabecerazForm.get('kz')?.value,

    

    }
    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecerazService.editarCabeceraz(this.id, CABECERAZ).subscribe(data => {
        this.toastr.success('RACI actualizado con exito', 'Producto actualizado');
        this.router.navigate(['listar-tablaz']);
      },error => {
        console.log(error);
        this.cabecerazForm.reset();
      })
    }else{
    console.log(CABECERAZ);
    this._cabecerazService.guardarCabeceraz(CABECERAZ).subscribe(data => {
    this.toastr.info('Felicidades', 'Registrado exitosamente');
    this.router.navigate(['listar-tablaz']);
    }, error => {
      console.log(error);
      this.cabecerazForm.reset();
    })
  }
}

  Edit(){
    if(this.id !== null){
      this.title = 'MODIFICAR CABECERA RACI MEA01';
      this._cabecerazService.obtenerCabeceraz(this.id).subscribe(data =>{
        this.cabecerazForm.setValue({
          ka: data.ka,
          kb: data.kb,
          kc: data.kc,
          kd: data.kd,
          ke: data.ke,
          kf: data.kf,
          kg: data.kg,
          kh: data.kh,
          ki: data.ki,
          kj: data.kj,
          kk: data.kk,
          kl: data.kl,
          km: data.km,
          kn: data.kn,
          ko: data.ko,
          kp: data.kp,
          kq: data.kq,
          kr: data.kr,
          ks: data.ks,
          kt: data.kt,
          ku: data.ku,
          kv: data.kv,
          kw: data.kw,
          kx: data.kx,
          ky: data.ky,
          kz: data.kz,

        })
      })
    }
  }

}

