import { CabeceraxService } from './../../services/cabecerax.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cabecerau } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-cabecerax',
  templateUrl: './crear-cabecerax.component.html',
  styleUrls: ['./crear-cabecerax.component.css']
})
export class CrearCabeceraxComponent implements OnInit {

  cabeceraxForm: FormGroup;
  title = 'MODIFICAR CABECERA MEA02';
  id: string | null;


  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cabeceraxService: CabeceraxService,
              private aRouter: ActivatedRoute) {
    this.cabeceraxForm = this.fb.group({
      ua: ['', Validators.required],
      ub: ['', Validators.required],
      uc: ['', Validators.required],
      ud: ['', Validators.required],
      ue: ['', Validators.required],
      uf: ['', Validators.required],
      ug: ['', Validators.required],
      uh: ['', Validators.required],
      ui: ['', Validators.required],
      uj: ['', Validators.required],
      uk: ['', Validators.required],
      ul: ['', Validators.required],
      um: ['', Validators.required],
      un: ['', Validators.required],
      uo: ['', Validators.required],
      up: ['', Validators.required],
      uq: ['', Validators.required],
      ur: ['', Validators.required],
      us: ['', Validators.required],
      ut: ['', Validators.required],
      uu: ['', Validators.required],
      uv: ['', Validators.required],
      uw: ['', Validators.required],
      ux: ['', Validators.required],
      uy: ['', Validators.required],
      uz: ['', Validators.required],

  
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
}

  ngOnInit(): void {
    this.Edit();
  }

  agregarCabecerax(){

    const CABECERAX: Cabecerau = {
      ua: this.cabeceraxForm.get('ua')?.value,
      ub: this.cabeceraxForm.get('ub')?.value,
      uc: this.cabeceraxForm.get('uc')?.value,
      ud: this.cabeceraxForm.get('ud')?.value,
      ue: this.cabeceraxForm.get('ue')?.value,
      uf: this.cabeceraxForm.get('uf')?.value,
      ug: this.cabeceraxForm.get('ug')?.value,
      uh: this.cabeceraxForm.get('uh')?.value,
      ui: this.cabeceraxForm.get('ui')?.value,
      uj: this.cabeceraxForm.get('uj')?.value,
      uk: this.cabeceraxForm.get('uk')?.value,
      ul: this.cabeceraxForm.get('ul')?.value,
      um: this.cabeceraxForm.get('um')?.value,
      un: this.cabeceraxForm.get('un')?.value,
      uo: this.cabeceraxForm.get('uo')?.value,
      up: this.cabeceraxForm.get('up')?.value,
      uq: this.cabeceraxForm.get('uq')?.value,
      ur: this.cabeceraxForm.get('ur')?.value,
      us: this.cabeceraxForm.get('us')?.value,
      ut: this.cabeceraxForm.get('ut')?.value,
      uu: this.cabeceraxForm.get('uu')?.value,
      uv: this.cabeceraxForm.get('uv')?.value,
      uw: this.cabeceraxForm.get('uw')?.value,
      ux: this.cabeceraxForm.get('ux')?.value,
      uy: this.cabeceraxForm.get('uy')?.value,
      uz: this.cabeceraxForm.get('uz')?.value,

    

    }
    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabeceraxService.editarCabecerax(this.id, CABECERAX).subscribe(data => {
        this.toastr.success('RACI actualizado con exito', 'Producto actualizado');
        this.router.navigate(['listar-tablax']);
      },error => {
        console.log(error);
        this.cabeceraxForm.reset();
      })
    }else{
    console.log(CABECERAX);
    this._cabeceraxService.guardarCabecerax(CABECERAX).subscribe(data => {
    this.toastr.info('Felicidades', 'Registrado exitosamente');
    this.router.navigate(['listar-tablax']);
    }, error => {
      console.log(error);
      this.cabeceraxForm.reset();
    })
  }
}

  Edit(){
    if(this.id !== null){
      this.title = 'MODIFICAR RACI';
      this._cabeceraxService.obtenerCabecerax(this.id).subscribe(data =>{
        this.cabeceraxForm.setValue({
          ua: data.ua,
          ub: data.ub,
          uc: data.uc,
          ud: data.ud,
          ue: data.ue,
          uf: data.uf,
          ug: data.ug,
          uh: data.uh,
          ui: data.ui,
          uj: data.uj,
          uk: data.uk,
          ul: data.ul,
          um: data.um,
          un: data.un,
          uo: data.uo,
          up: data.up,
          uq: data.uq,
          ur: data.ur,
          us: data.us,
          ut: data.ut,
          uu: data.uu,
          uv: data.uv,
          uw: data.uw,
          ux: data.ux,
          uy: data.uy,
          uz: data.uz,

        })
      })
    }
  }

}

