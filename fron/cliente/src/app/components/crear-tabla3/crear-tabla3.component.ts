import { Tabla3Service } from './../../services/tabla3.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tabla3 } from './../../models/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-tabla3',
  templateUrl: './crear-tabla3.component.html',
  styleUrls: ['./crear-tabla3.component.css']
})
export class CrearTabla3Component implements OnInit {

  title= 'crear tabla 3';
  tabla3Form: FormGroup;
  id: string|null;

  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _tabla3Service: Tabla3Service,
    private aRouter: ActivatedRoute) {
    this.tabla3Form = this.th.group({
      BAI03: ['', Validators.required],
      tbl1: ['', Validators.required],
      tbl2: ['', Validators.required],
    tbl3: ['', Validators.required],
    tbl4: ['', Validators.required],
    tbl5: ['', Validators.required],
    tbl7: ['', Validators.required],
    tbl8: ['', Validators.required],
    tbl9: ['', Validators.required],
    tbl10: ['', Validators.required],
    tbl11: ['', Validators.required],
    tbl12: ['', Validators.required],
    tbl13: ['', Validators.required],
    tbl14: ['', Validators.required],
    tbl15: ['', Validators.required],
    tbl16: ['', Validators.required],
    tbl17: ['', Validators.required],
    tbl18: ['', Validators.required],
    tbl19: ['', Validators.required],
    tbl20: ['', Validators.required],
    tbl21: ['', Validators.required],
    tbl22: ['', Validators.required],
    tbl23: ['', Validators.required],
    tbl24: ['', Validators.required],
    tbl25: ['', Validators.required],
    tbl26: ['', Validators.required],
    tbl27: ['', Validators.required],
  } )
  this.id = this.aRouter.snapshot.paramMap.get('id');
}

ngOnInit(): void {
 this.esEditar();
}

agregarTabla3(){
 const TABLA3: tabla3= {
  BAI03: this.tabla3Form.get('BAI03')?.value,
  tbl1: this.tabla3Form.get('tbl1')?.value,
  tbl2: this.tabla3Form.get('tbl2')?.value,
  tbl3: this.tabla3Form.get('tbl3')?.value,
   tbl4: this.tabla3Form.get('tbl4')?.value,
   tbl5: this.tabla3Form.get('tbl5')?.value,  
   tbl7: this.tabla3Form.get('tbl7')?.value,
   tbl8: this.tabla3Form.get('tbl8')?.value,
   tbl9: this.tabla3Form.get('tbl9')?.value,
   tbl10: this.tabla3Form.get('tbl10')?.value,
   tbl11: this.tabla3Form.get('tbl11')?.value,
   tbl12: this.tabla3Form.get('tbl12')?.value,
   tbl13: this.tabla3Form.get('tbl13')?.value,
   tbl14: this.tabla3Form.get('tbl14')?.value,
   tbl15: this.tabla3Form.get('tbl15')?.value,
   tbl16: this.tabla3Form.get('tbl16')?.value,
   tbl17: this.tabla3Form.get('tbl17')?.value,
   tbl18: this.tabla3Form.get('tbl18')?.value,
   tbl19: this.tabla3Form.get('tbl19')?.value,
   tbl20: this.tabla3Form.get('tbl20')?.value,
   tbl21: this.tabla3Form.get('tbl21')?.value,
   tbl22: this.tabla3Form.get('tbl22')?.value,
   tbl23: this.tabla3Form.get('tbl23')?.value,
   tbl24: this.tabla3Form.get('tbl24')?.value,
   tbl25: this.tabla3Form.get('tbl25')?.value,
   tbl26: this.tabla3Form.get('tbl26')?.value,
   tbl27: this.tabla3Form.get('tbl27')?.value,
   
 } 

 if(this.id !== null) {
   //editamos el producto ñaño
   this._tabla3Service.editarTabla3(this.id, TABLA3).subscribe(data => {
     this.toastr.success('Tabla actualizado con exito', 'Producto actualizado');
     this.router.navigate(['/pagina134']);
   },error => {
     console.log(error);
     this.tabla3Form.reset();
   })
 }else{
   //agregamos el producto ñaño
   console.log(TABLA3);
   this._tabla3Service.guardarTabla3(TABLA3).subscribe(data => {
    this.toastr.success('Felicidades', 'Registrado exitosamente');
    this.router.navigate(['pagina134']);
 }, error => {
   console.log(error);
   this.tabla3Form.reset();
 })

}


}

esEditar(){
 if(this.id !== null){
   this.title = 'Editar tabla RACI';
   this._tabla3Service.obtenerTabla3(this.id).subscribe(data =>{
     this.tabla3Form.setValue({
      BAI03: data.BAI03, 
      tbl1: data.tbl1,
      tbl2: data.tbl2,
      tbl3: data.tbl3,
       tbl4: data.tbl4,
       tbl5: data.tbl5,
       tbl7: data.tbl7,
       tbl8: data.tbl8,
       tbl9: data.tbl9,
       tbl10: data.tbl10,
       tbl11: data.tbl11,
       tbl12: data.tbl12,
       tbl13: data.tbl13,
       tbl14: data.tbl14,
       tbl15: data.tbl15,
       tbl16: data.tbl16,
       tbl17: data.tbl17,
       tbl18: data.tbl18,
       tbl19: data.tbl19,
       tbl20: data.tbl20,
       tbl21: data.tbl21,
       tbl22: data.tbl22,
       tbl23: data.tbl23,
       tbl24: data.tbl24,
       tbl25: data.tbl25,
       tbl26: data.tbl26,
       tbl27: data.tbl27,
    
     })
   })
 }
}
}
