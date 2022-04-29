
import { CabeceraDos } from './../../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { CabeceraDosService } from 'src/app/services/cabecera-dos.service';


@Component({
  selector: 'app-crear-cabecera',
  templateUrl: './cabecera-dos.component.html',

})
export class CrearCabeceraDosComponent implements OnInit {
  cabeceradosForm: FormGroup;
  titl = 'MODIFICAR MEA02';
  id: string | null;
 

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cabeceradosService: CabeceraDosService,
              private aRouter: ActivatedRoute) {
    this.cabeceradosForm = this.fb.group({
      dosa: ['', Validators.required],
      dosb: ['', Validators.required],
      dosc: ['', Validators.required],
      dosd: ['', Validators.required],
      dose: ['', Validators.required],
      dosf: ['', Validators.required],
      dosg: ['', Validators.required],
      dosh: ['', Validators.required],
      dosi: ['', Validators.required],
      dosj: ['', Validators.required],
      dosk: ['', Validators.required],
      dosl: ['', Validators.required],
      dosm: ['', Validators.required],
      dosn: ['', Validators.required],
      doso: ['', Validators.required],
      dosp: ['', Validators.required],
      dosq: ['', Validators.required],
      dosr: ['', Validators.required],
      doss: ['', Validators.required],
      dost: ['', Validators.required],
      dosu: ['', Validators.required],
      dosv: ['', Validators.required],
      dosw: ['', Validators.required],
      dosx: ['', Validators.required],
      dosy: ['', Validators.required],
      dosz: ['', Validators.required],
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.Edit();
  }

  agregarCabecerados(){
    
    const CABECERATWO: CabeceraDos = {
      dosa: this.cabeceradosForm.get('dosa')?.value,
      dosb: this.cabeceradosForm.get('dosb')?.value,
      dosc: this.cabeceradosForm.get('dosc')?.value,
      dosd: this.cabeceradosForm.get('dosd')?.value,
      dose: this.cabeceradosForm.get('dose')?.value,
      dosf: this.cabeceradosForm.get('dosf')?.value,
      dosg: this.cabeceradosForm.get('dosg')?.value,
      dosh: this.cabeceradosForm.get('dosh')?.value,
      dosi: this.cabeceradosForm.get('dosi')?.value,
      dosj: this.cabeceradosForm.get('dosj')?.value,
      dosk: this.cabeceradosForm.get('dosk')?.value,
      dosl: this.cabeceradosForm.get('dosl')?.value,
      dosm: this.cabeceradosForm.get('dosm')?.value,
      dosn: this.cabeceradosForm.get('dosn')?.value,
      doso: this.cabeceradosForm.get('doso')?.value,
      dosp: this.cabeceradosForm.get('dosp')?.value,
      dosq: this.cabeceradosForm.get('dosq')?.value,
      dosr: this.cabeceradosForm.get('dosr')?.value,
      doss: this.cabeceradosForm.get('doss')?.value,
      dost: this.cabeceradosForm.get('dost')?.value,
      dosu: this.cabeceradosForm.get('dosu')?.value,
      dosv: this.cabeceradosForm.get('dosv')?.value,
      dosw: this.cabeceradosForm.get('dosw')?.value,
      dosx: this.cabeceradosForm.get('dosx')?.value,
      dosy: this.cabeceradosForm.get('dosy')?.value,
      dosz: this.cabeceradosForm.get('dosz')?.value,
      
    }
    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabeceradosService.editarCabecerados(this.id, CABECERATWO).subscribe(data => {
        this.toastr.success('RACI actualizado con exito', 'Producto actualizado');
        this.router.navigate(['listar-tablados']);
      },error => {
        console.log(error);
        this.cabeceradosForm.reset();
      })
    }else{
    console.log(CABECERATWO);
    this._cabeceradosService. guardarCabecerados(CABECERATWO).subscribe(data => {
    this.toastr.info('Felicidades', 'Registrado exitosamente');
    this.router.navigate(['listar-tablados']);
    }, error => {
      console.log(error);
      this.cabeceradosForm.reset();
    })
  }
}
  
  Edit(){
    if(this.id !== null){
      this.titl = 'MODIFICAR RACI';
      this._cabeceradosService.obtenerCabecerados(this.id).subscribe(data =>{
        this.cabeceradosForm.setValue({
          dosa: data.dosa,
          dosb: data.dosb,
          dosc: data.dosc,
          dosd: data.dosd,
          dose: data.dose,
          dosf: data.dosf,
          dosg: data.dosg,
          dosh: data.dosh,
          dosi: data.dosi,
          dosj: data.dosj,
          dosk: data.dosk,
          dosl: data.dosl,
          dosm: data.dosm,
          dosn: data.dosn,
          doso: data.doso,
          dosp: data.dosp,
          dosq: data.dosq,
          dosr: data.dosr,
          doss: data.doss,
          dost: data.dost,
          dosu: data.dosu,
          dosv: data.dosv,
          dosw: data.dosw,
          dosx: data.dosx,
          dosy: data.dosy,
          dosz: data.dosz,
        })
      })
    }
  }
  
}
