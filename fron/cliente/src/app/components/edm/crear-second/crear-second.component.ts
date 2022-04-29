import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { cabR } from 'src/app/models/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SecondsService } from 'src/app/services/second.service';

@Component({
  selector: 'app-crear-second',
  templateUrl: './crear-second.component.html',
  styleUrls: ['./crear-second.component.css']
})
export class CrearSecondComponent implements OnInit {
  title = 'CREAR TABLA EDM02';
  secondForm: FormGroup;
  id: string | null;
  
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _SecondsService: SecondsService,
              private aRouter: ActivatedRoute) { 
    this.secondForm = this.th.group({
      EDM: ['', Validators.required],
      ma: ['', Validators.required],
      mb: ['', Validators.required],
      mc: ['', Validators.required],
      md: ['', Validators.required],
      me: ['', Validators.required],
      mf: ['', Validators.required],
      mg: ['', Validators.required],
      mh: ['', Validators.required],
      mi: ['', Validators.required],
      mj: ['', Validators.required],
      mk: ['', Validators.required],
      ml: ['', Validators.required],
      mm: ['', Validators.required],
      mn: ['', Validators.required],
      mnn:['', Validators.required],
      mo: ['', Validators.required],
      mp: ['', Validators.required],
      mq: ['', Validators.required],
      mr: ['', Validators.required],
      ms: ['', Validators.required],
      mt: ['', Validators.required],
      mu: ['', Validators.required],
      mv: ['', Validators.required],
      mw: ['', Validators.required],
      mx: ['', Validators.required],
      my: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.esEditar();
 }

 agregarSecond(){
   const SECOND: cabR= {
    EDM: this.secondForm.get('EDM')?.value,
    ma: this.secondForm.get('ma')?.value, 
    mb: this.secondForm.get('mb')?.value,
    mc: this.secondForm.get('mc')?.value,
    md: this.secondForm.get('md')?.value,
    me: this.secondForm.get('me')?.value,
    mf :this.secondForm.get('mf')?.value,
    mg :this.secondForm.get('mg')?.value,
    mh :this.secondForm.get('mh')?.value,
    mi :this.secondForm.get('mi')?.value,
    mj :this.secondForm.get('mj')?.value,
    mk :this.secondForm.get('mk')?.value,
    ml :this.secondForm.get('ml')?.value,
    mm :this.secondForm.get('mm')?.value,
    mn :this.secondForm.get('mn')?.value,
    mnn :this.secondForm.get('mnn')?.value,
    mo :this.secondForm.get('mo')?.value,
    mp :this.secondForm.get('mp')?.value,
    mq :this.secondForm.get('mq')?.value,
    mr :this.secondForm.get('mr')?.value,
    ms :this.secondForm.get('ms')?.value,
    mt :this.secondForm.get('mt')?.value,
    mu :this.secondForm.get('mu')?.value,
    mv :this.secondForm.get('mv')?.value,
    mw :this.secondForm.get('mw')?.value,
    mx :this.secondForm.get('mx')?.value,
    my :this.secondForm.get('my')?.value,

    
   } 

   if(this.id !== null) {
     //editamos el producto 
     this._SecondsService.editarSecond(this.id, SECOND).subscribe(data => {
       this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
       this.router.navigate(['listar-second']);
     },error => {
       console.log(error);
       this.secondForm.reset();
     })
   }else{
     //agregamos el producto 
     console.log(SECOND);
     this._SecondsService.guardarSecond(SECOND).subscribe(data => {
      this.toastr.success('Felicidades', 'Registrado exitosamente');
      this.router.navigate(['listar-second']);
   }, error => {
     console.log(error);
     this.secondForm.reset();
   })

 }

 }

 esEditar(){
   if(this.id !== null){
     this.title = 'Editar Producto';
     this._SecondsService.obtenerSecond(this.id).subscribe(data =>{
       this.secondForm.setValue({
        EDM: data.EDM,
         ma: data.ma,
         mb: data.mb,
         mc: data.mc,
         md: data.md,
         me: data.me,
         mf: data.mf,
         mg: data.mg,
         mh: data.mh,
         mi: data.mi,
         mj: data.mj,
         mk: data.mk,
         ml: data.ml,
         mm: data.mm,
         mn: data.mn,
         mnn: data.mnn,
         mo: data.mo,
         mp: data.mp,
         mq: data.mq,
         mr: data.mr,
         ms: data.ms,
         mt: data.mt,
         mu: data.mu,
         mv: data.mv,
         mw: data.mw,
         mx: data.mx,
         my: data.my,


         
       })
     })
   }
 }
 

}
