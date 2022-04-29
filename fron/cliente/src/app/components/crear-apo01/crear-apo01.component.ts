import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo } from 'src/app/models/producto';
import { ApoService } from 'src/app/services/crear-apo.service';

@Component({
  selector: 'app-crear-apo01',
  templateUrl: './crear-apo01.component.html',
  styleUrls: ['./crear-apo01.component.css']
})
export class CrearApoComponent implements OnInit {
  apoForm: FormGroup;
  title = 'MODIFICAR RACI';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _apoService: ApoService,
              private aRouter: ActivatedRoute) {
    this.apoForm = this.fb.group({
      wa: ['', Validators.required],
      wb: ['', Validators.required],
      wc: ['', Validators.required],
      wd: ['', Validators.required],
      we: ['', Validators.required],
      wf: ['', Validators.required],
      wg: ['', Validators.required],
      wh: ['', Validators.required],
      wi: ['', Validators.required],
      wj: ['', Validators.required],
      wk: ['', Validators.required],
      wl: ['', Validators.required],
      wm: ['', Validators.required],
      wn: ['', Validators.required],
      wnn: ['', Validators.required],
      wo: ['', Validators.required],
      wp: ['', Validators.required],
      wq: ['', Validators.required],
      wr: ['', Validators.required],
      ws: ['', Validators.required],
      wt: ['', Validators.required],
      wu: ['', Validators.required],
      wv: ['', Validators.required],
      ww: ['', Validators.required],
      wx: ['', Validators.required],
      wy: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.Edit();
  }

  agregarApo(){
    
    const APO: Apo = {
     wa: this.apoForm.get('wa')?.value,
     wb: this.apoForm.get('wb')?.value,
     wc: this.apoForm.get('wc')?.value,
     wd: this.apoForm.get('wd')?.value,
     we: this.apoForm.get('we')?.value,
     wf: this.apoForm.get('wf')?.value,
     wg: this.apoForm.get('wg')?.value,
     wh: this.apoForm.get('wh')?.value,
     wi: this.apoForm.get('wi')?.value,
     wj: this.apoForm.get('wj')?.value,
     wk: this.apoForm.get('wk')?.value,
     wl: this.apoForm.get('wl')?.value,
     wm: this.apoForm.get('wm')?.value,
     wn: this.apoForm.get('wn')?.value,
     wnn: this.apoForm.get('wnn')?.value,
     wo: this.apoForm.get('wo')?.value,
     wp: this.apoForm.get('wp')?.value,
     wq: this.apoForm.get('wq')?.value,
     wr: this.apoForm.get('wr')?.value,
     ws: this.apoForm.get('ws')?.value,
     wt: this.apoForm.get('wt')?.value,
     wu: this.apoForm.get('wu')?.value,
     wv: this.apoForm.get('wv')?.value,
     ww: this.apoForm.get('ww')?.value,
     wx: this.apoForm.get('wx')?.value,
     wy: this.apoForm.get('wy')?.value,
      
    }
    if(this.id !== null) {
      //editamos el producto ñaño
      this._apoService.editarApo(this.id, APO).subscribe(data => {
        this.toastr.success('RACI actualizado con exito', ' actualizado');
        this.router.navigate(['listar-apo']);
      },error => {
        console.log(error);
        this.apoForm.reset();
      })
    }else{
    console.log(APO);
    this._apoService.guardarApo(APO).subscribe(data => {
    this.toastr.info('Guardado', 'Registrado exitosamente');
    this.router.navigate(['listar-apo']);
    }, error => {
      console.log(error);
      this.apoForm.reset();
    })
  }
}
  
  Edit(){
    if(this.id !== null){
      this.title = 'EDITAR RACI';
      this._apoService.obtenerApo(this.id).subscribe(data =>{
        this.apoForm.setValue({
          wa: data.wa,
          wb: data.wb,
          wc: data.wc,
          wd: data.wd,
          we: data.we,
          wf: data.wf,
          wg: data.wg,
          wh: data.wh,
          wi: data.wi,
          wj: data.wj,
          wk: data.wk,
          wl: data.wl,
          wm: data.wm,
          wn: data.wn,
          wnn: data.wnn,
          wo: data.wo,
          wp: data.wp,
          wq: data.wq,
          wr: data.wr,
          ws: data.ws,
          wt: data.wt,
          wu: data.wu,
          wv: data.wv,
          ww: data.ww,
          wx: data.wx,
          wy: data.wy,
          

          
        })
      })
    }
  }
}


