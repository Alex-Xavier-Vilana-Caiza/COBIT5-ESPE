import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cabecera1 } from 'src/app/models/producto';
import { Cabecera1Service } from 'src/app/services/cabecera1.service';

@Component({
  selector: 'app-crear-cabecera1',
  templateUrl: './crear-cabecera1.component.html',
  styleUrls: ['./crear-cabecera1.component.css']
})
export class CrearCabecera1Component implements OnInit {
  cabecera1Form: FormGroup;
  titulo = 'BAI01';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _cabecera1Service: Cabecera1Service,
    private aRouter: ActivatedRoute) { this.cabecera1Form = this.fb.group({
      ja: ['', Validators.required],
      jb: ['', Validators.required],
      jc: ['', Validators.required],
      jd: ['', Validators.required],
      je: ['', Validators.required],
      jf: ['', Validators.required],
      jg: ['', Validators.required],
      jh: ['', Validators.required],
      ji: ['', Validators.required],
      jj: ['', Validators.required],
      jk: ['', Validators.required],
      jl: ['', Validators.required],
      jm: ['', Validators.required],
      jn: ['', Validators.required],
      jo: ['', Validators.required],
      jp: ['', Validators.required],
      jq: ['', Validators.required],
      jr: ['', Validators.required],
      js: ['', Validators.required],
      jt: ['', Validators.required],
      ju: ['', Validators.required],
      jv: ['', Validators.required],
      jw: ['', Validators.required],
      jx: ['', Validators.required],
      jy: ['', Validators.required],
      jz: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id'); }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarCabecera1(){
    const Cabecera1: Cabecera1= {
      ja: this.cabecera1Form.get('ja')?.value,
      jb: this.cabecera1Form.get('jb')?.value,
      jc: this.cabecera1Form.get('jc')?.value,
      jd: this.cabecera1Form.get('jd')?.value,
      je: this.cabecera1Form.get('je')?.value,
      jf: this.cabecera1Form.get('jf')?.value,
      jg: this.cabecera1Form.get('jg')?.value,
      jh: this.cabecera1Form.get('jh')?.value,
      ji: this.cabecera1Form.get('ji')?.value,
      jj: this.cabecera1Form.get('jj')?.value,
      jk: this.cabecera1Form.get('jk')?.value,
      jl: this.cabecera1Form.get('jl')?.value,
      jm: this.cabecera1Form.get('jm')?.value,
      jn: this.cabecera1Form.get('jn')?.value,
      jo: this.cabecera1Form.get('jo')?.value,
      jp: this.cabecera1Form.get('jp')?.value,
      jq: this.cabecera1Form.get('jq')?.value,
      jr: this.cabecera1Form.get('jr')?.value,
      js: this.cabecera1Form.get('js')?.value,
      jt: this.cabecera1Form.get('jt')?.value,
      ju: this.cabecera1Form.get('ju')?.value,
      jv: this.cabecera1Form.get('jv')?.value,
      jw: this.cabecera1Form.get('jw')?.value,
      jx: this.cabecera1Form.get('jx')?.value,
      jy: this.cabecera1Form.get('jy')?.value,
      jz: this.cabecera1Form.get('jz')?.value,
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecera1Service.editarCabecera1(this.id, Cabecera1).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina120']);
      },error => {
        console.log(error);
        this.cabecera1Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(Cabecera1);
      this._cabecera1Service.guardarCabecera1(Cabecera1).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina120']);
    }, error => {
      console.log(error);
      this.cabecera1Form.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Cabecera RACI';
      this._cabecera1Service.obtenerCabecera1(this.id).subscribe(data =>{
        this.cabecera1Form.setValue({
          ja: data.ja,
          jb: data.jb,
          jc: data.jc,
          jd: data.jd,
          je: data.je,
          jf: data.jf,
          jg: data.jg,
          jh: data.jh,
          ji: data.ji,
          jj: data.jj,
          jk: data.jk,
          jl: data.jl,
          jm: data.jm,
          jn: data.jn,
          jo: data.jo,
          jp: data.jp,
          jq: data.jq,
          jr: data.jr,
          js: data.js,
          jt: data.jt,
          ju: data.ju,
          jv: data.jv,
          jw: data.jw,
          jx: data.jx,
          jy: data.jy,
          jz: data.jz,
        })
      })
    }
  }

}
