import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { cabR4} from 'src/app/models/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FoursService } from 'src/app/services/four.service';

@Component({
  selector: 'app-crear-four',
  templateUrl: './crear-four.component.html',
  styleUrls: ['./crear-four.component.css']
})
export class CrearFourComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  fourForm: FormGroup;
  id: string | null;
  
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _foursService: FoursService,
              private aRouter: ActivatedRoute) { 
    this.fourForm = this.th.group({
      EDM4: ['', Validators.required], 
      da: ['', Validators.required],
      db: ['', Validators.required],
      dc: ['', Validators.required],
      dd: ['', Validators.required],
      de: ['', Validators.required],
      df: ['', Validators.required],
      dg: ['', Validators.required],
      dh: ['', Validators.required],
      di: ['', Validators.required],
      dj: ['', Validators.required],
      dk: ['', Validators.required],
      dl: ['', Validators.required],
      dm: ['', Validators.required],
      dn: ['', Validators.required],
      dnn:['', Validators.required],
      so: ['', Validators.required],
      dp: ['', Validators.required],
      dq: ['', Validators.required],
      dr: ['', Validators.required],
      ds: ['', Validators.required],
      dt: ['', Validators.required],
      du: ['', Validators.required],
      dv: ['', Validators.required],
      dw: ['', Validators.required],
      dx: ['', Validators.required],
      dy: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.esEditar();
 }

 agregarFour(){
   const FOUR: cabR4= {
    EDM4: this.fourForm.get('EDM4')?.value,
    da: this.fourForm.get('da')?.value, 
    db: this.fourForm.get('db')?.value,
    dc: this.fourForm.get('dc')?.value,
    dd: this.fourForm.get('dd')?.value,
    de: this.fourForm.get('de')?.value, 
    df :this.fourForm.get('df')?.value,
    dg :this.fourForm.get('dg')?.value,
    dh :this.fourForm.get('dh')?.value,
    di :this.fourForm.get('di')?.value,
    dj :this.fourForm.get('dj')?.value,
    dk :this.fourForm.get('dk')?.value,
    dl :this.fourForm.get('dl')?.value,
    dm :this.fourForm.get('dm')?.value,
    dn :this.fourForm.get('dn')?.value,
    dnn :this.fourForm.get('dnn')?.value,
    so :this.fourForm.get('so')?.value,
    dp :this.fourForm.get('dp')?.value,
    dq :this.fourForm.get('dq')?.value,
    dr :this.fourForm.get('dr')?.value,
    ds :this.fourForm.get('ds')?.value,
    dt :this.fourForm.get('dt')?.value,
    du :this.fourForm.get('du')?.value,
    dv :this.fourForm.get('dv')?.value,
    dw :this.fourForm.get('dw')?.value,
    dx :this.fourForm.get('dx')?.value,
    dy :this.fourForm.get('dy')?.value,

    
   } 

   if(this.id !== null) {
     //editamos 
     this._foursService.editarFour(this.id,FOUR).subscribe(data => {
       this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
       this.router.navigate(['listra-four']);
     },error => {
       console.log(error);
       this.fourForm.reset();
     })
   }else{
     //agregamos 
     console.log(FOUR);
     this._foursService.guardarFour(FOUR).subscribe(data => {
      this.toastr.success('Felicidades', 'Registrado exitosamente');
      this.router.navigate(['listar-four']);
   }, error => {
     console.log(error);
     this.fourForm.reset();
   })

 }

 }

 esEditar(){
   if(this.id !== null){
     this.title = 'Editar Matriz 03';
     this._foursService.obtenerFour(this.id).subscribe(data =>{
       this.fourForm.setValue({
        EDM4: data.EDM4,
        da: data.da,
        db: data.db,
        dc: data.dc,
        dd: data.dd,
        de: data.de,
        df: data.df,
        dg: data.dg,
        dh: data.dh,
        di: data.di,
        dj: data.dj,
        dk: data.dk,
        dl: data.dl,
        dm: data.dm,
        dn: data.dn,
        dnn: data.dnn,
        so: data.so,
        dp: data.dp,
        dq: data.dq,
        dr: data.dr,
        ds: data.ds,
        dt: data.dt,
        du: data.du,
        dv: data.dv,
        dw: data.dw,
        dx: data.dx,
        dy: data.dy,


         
       })
     })
   }
 }
 

}

