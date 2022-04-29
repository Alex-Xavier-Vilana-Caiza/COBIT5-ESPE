import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Head } from 'src/app/models/producto';
import { HeadService } from 'src/app/services/crear-head.service';

@Component({
  selector: 'app-crear-head',
  templateUrl: './crear-head.component.html',
  styleUrls: ['./crear-head.component.css']
})
export class CrearHeadComponent implements OnInit {
  headForm: FormGroup;
  title = 'MODIFICAR RACI';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _headService: HeadService,
              private aRouter: ActivatedRoute) {
    this.headForm = this.fb.group({
      ha: ['', Validators.required],
      hb: ['', Validators.required],
      hc: ['', Validators.required],
      hd: ['', Validators.required],
      he: ['', Validators.required],
      hf: ['', Validators.required],
      hg: ['', Validators.required],
      hh: ['', Validators.required],
      hi: ['', Validators.required],
      hj: ['', Validators.required],
      hk: ['', Validators.required],
      hl: ['', Validators.required],
      hm: ['', Validators.required],
      hn: ['', Validators.required],
      hnn: ['', Validators.required],
      ho: ['', Validators.required],
      hp: ['', Validators.required],
      hq: ['', Validators.required],
      hr: ['', Validators.required],
      hs: ['', Validators.required],
      ht: ['', Validators.required],
      hu: ['', Validators.required],
      hv: ['', Validators.required],
      hw: ['', Validators.required],
      hx: ['', Validators.required],
      hy: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.Edit();
  }

  agregarHead(){
    
    const HEAD: Head = {
      ha: this.headForm.get('ha')?.value,
      hb: this.headForm.get('hb')?.value,
      hc: this.headForm.get('hc')?.value,
      hd: this.headForm.get('hd')?.value,
      he: this.headForm.get('he')?.value,
      hf: this.headForm.get('hf')?.value,
      hg: this.headForm.get('hg')?.value,
      hh: this.headForm.get('hh')?.value,
      hi: this.headForm.get('hi')?.value,
      hj: this.headForm.get('hj')?.value,
      hk: this.headForm.get('hk')?.value,
      hl: this.headForm.get('hl')?.value,
      hm: this.headForm.get('hm')?.value,
      hn: this.headForm.get('hn')?.value,
      hnn: this.headForm.get('hnn')?.value,
      ho: this.headForm.get('ho')?.value,
      hp: this.headForm.get('hp')?.value,
      hq: this.headForm.get('hq')?.value,
      hr: this.headForm.get('hr')?.value,
      hs: this.headForm.get('hs')?.value,
      ht: this.headForm.get('ht')?.value,
      hu: this.headForm.get('hu')?.value,
      hv: this.headForm.get('hv')?.value,
      hw: this.headForm.get('hw')?.value,
      hx: this.headForm.get('hx')?.value,
      hy: this.headForm.get('hy')?.value,
      
    }
    if(this.id !== null) {
      //editamos el producto ñaño
      this._headService.editarHead(this.id, HEAD).subscribe(data => {
        this.toastr.success('RACI actualizado con exito', ' actualizado');
        this.router.navigate(['listar-second']);
      },error => {
        console.log(error);
        this.headForm.reset();
      })
    }else{
    console.log(HEAD);
    this._headService.guardarHead(HEAD).subscribe(data => {
    this.toastr.info('Guardado', 'Registrado exitosamente');
    this.router.navigate(['listar-second']);
    }, error => {
      console.log(error);
      this.headForm.reset();
    })
  }
}
  
  Edit(){
    if(this.id !== null){
      this.title = 'EDITAR RACI';
      this._headService.obtenerHead(this.id).subscribe(data =>{
        this.headForm.setValue({
          ha: data.ha,
          hb: data.hb,
          hc: data.hc,
          hd: data.hd,
          he: data.he,
          hf: data.hf,
          hg: data.hg,
          hh: data.hh,
          hi: data.hi,
          hj: data.hj,
          hk: data.hk,
          hl: data.hl,
          hm: data.hm,
          hn: data.hn,
          hnn: data.hnn,
          ho: data.ho,
          hp: data.hp,
          hq: data.hq,
          hr: data.hr,
          hs: data.hs,
          ht: data.ht,
          hu: data.hu,
          hv: data.hv,
          hw: data.hw,
          hx: data.hx,
          hy: data.hy,
          

          
        })
      })
    }
  }
}

