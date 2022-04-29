import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { cabR3 } from 'src/app/models/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ThreesService } from 'src/app/services/three.service';

@Component({
  selector: 'app-crear-three',
  templateUrl: './crear-three.component.html',
  styleUrls: ['./crear-three.component.css']
})
export class CrearThreeComponent implements OnInit {
  title = 'CREAR TABLA EDM03'; 
  threeForm: FormGroup;
  id: string | null;
  
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _threesService: ThreesService,
              private aRouter: ActivatedRoute) { 
    this.threeForm = this.th.group({
      EDM3: ['', Validators.required], 
      pa: ['', Validators.required],
      pb: ['', Validators.required],
      pc: ['', Validators.required],
      pd: ['', Validators.required],
      pe: ['', Validators.required],
      pf: ['', Validators.required],
      pg: ['', Validators.required],
      ph: ['', Validators.required],
      pi: ['', Validators.required],
      pj: ['', Validators.required],
      pk: ['', Validators.required],
      pl: ['', Validators.required],
      pm: ['', Validators.required],
      pn: ['', Validators.required],
      pnn:['', Validators.required],
      po: ['', Validators.required],
      pp: ['', Validators.required],
      pq: ['', Validators.required],
      pr: ['', Validators.required],
      ps: ['', Validators.required],
      pt: ['', Validators.required],
      pu: ['', Validators.required],
      pv: ['', Validators.required],
      pw: ['', Validators.required],
      px: ['', Validators.required],
      py: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.esEditar();
 }

 agregarThree(){
   const THREE: cabR3= {
    EDM3: this.threeForm.get('EDM3')?.value,
    pa: this.threeForm.get('pa')?.value, 
    pb: this.threeForm.get('pb')?.value,
    pc: this.threeForm.get('pc')?.value,
    pd: this.threeForm.get('pd')?.value,
    pe: this.threeForm.get('pe')?.value, 
    pf :this.threeForm.get('pf')?.value,
    pg :this.threeForm.get('pg')?.value,
    ph :this.threeForm.get('ph')?.value,
    pi :this.threeForm.get('pi')?.value,
    pj :this.threeForm.get('pj')?.value,
    pk :this.threeForm.get('pk')?.value,
    pl :this.threeForm.get('pl')?.value,
    pm :this.threeForm.get('pm')?.value,
    pn :this.threeForm.get('pn')?.value,
    pnn :this.threeForm.get('pnn')?.value,
    po :this.threeForm.get('po')?.value,
    pp :this.threeForm.get('pp')?.value,
    pq :this.threeForm.get('pq')?.value,
    pr :this.threeForm.get('pr')?.value,
    ps :this.threeForm.get('ps')?.value,
    pt :this.threeForm.get('pt')?.value,
    pu :this.threeForm.get('pu')?.value,
    pv :this.threeForm.get('pv')?.value,
    pw :this.threeForm.get('pw')?.value,
    px :this.threeForm.get('px')?.value,
    py :this.threeForm.get('py')?.value,

    
   } 

   if(this.id !== null) {
     //editamos 
     this._threesService.editarThree(this.id, THREE).subscribe(data => {
       this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
       this.router.navigate(['listar-three']);
     },error => {
       console.log(error);
       this.threeForm.reset();
     })
   }else{
     //agregamos 
     console.log(THREE);
     this._threesService.guardarThree(THREE).subscribe(data => {
      this.toastr.success('Felicidades', 'Registrado exitosamente');
      this.router.navigate(['listar-three']);
   }, error => {
     console.log(error);
     this.threeForm.reset();
   })

 }

 }

 esEditar(){
   if(this.id !== null){
     this.title = 'Editar Matriz 03';
     this._threesService.obtenerThree(this.id).subscribe(data =>{
       this.threeForm.setValue({
        EDM3: data.EDM3,
        pa: data.pa,
        pb: data.pb,
        pc: data.pc,
        pd: data.pd,
        pe: data.pe,
        pf: data.pf,
        pg: data.pg,
        ph: data.ph,
        pi: data.pi,
        pj: data.pj,
        pk: data.pk,
        pl: data.pl,
        pm: data.pm,
        pn: data.pn,
        pnn: data.pnn,
        po: data.po,
        pp: data.pp,
        pq: data.pq,
        pr: data.pr,
        ps: data.ps,
        pt: data.pt,
        pu: data.pu,
        pv: data.pv,
        pw: data.pw,
        px: data.px,
        py: data.py,


         
       })
     })
   }
 }
 

}
