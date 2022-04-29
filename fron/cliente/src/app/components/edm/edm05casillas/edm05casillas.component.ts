import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Edm05casillas} from 'src/app/models/Edm05';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Edm05casillasService } from 'src/app/services/edm05casillas.service';

@Component({
  selector: 'app-edm05casillas',
  templateUrl: './edm05casillas.component.html',
  styleUrls: ['./edm05casillas.component.css']
})
export class Edm05casillasComponent implements OnInit {

  edm05casillaForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;

  constructor(private edm05casillagroup: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _edm05casillasService: Edm05casillasService,
    private aRouter: ActivatedRoute) {
      this.edm05casillaForm = this.edm05casillagroup.group({
        edm05casilla1: ['', Validators.required], 
        edm05casilla2: ['', Validators.required],
        edm05casilla3: ['', Validators.required],
        edm05casilla4: ['', Validators.required],
        edm05casilla5: ['', Validators.required],
        edm05casilla6: ['', Validators.required],
        edm05casilla7: ['', Validators.required],
        edm05casilla8: ['', Validators.required],
        edm05casilla9: ['', Validators.required],
        edm05casilla10: ['', Validators.required],
        edm05casilla11: ['', Validators.required],
        edm05casilla12: ['', Validators.required],
        edm05casilla13: ['', Validators.required],
        edm05casilla14: ['', Validators.required],
        edm05casilla15: ['', Validators.required],
        edm05casilla16:['', Validators.required],
        edm05casilla17: ['', Validators.required],
        edm05casilla18: ['', Validators.required],
        edm05casilla19: ['', Validators.required],
        edm05casilla20: ['', Validators.required],
        edm05casilla21: ['', Validators.required],
        edm05casilla22: ['', Validators.required],
        edm05casilla23: ['', Validators.required],
        edm05casilla24: ['', Validators.required],
        edm05casilla25: ['', Validators.required],
        edm05casilla26: ['', Validators.required],
        edm05casilla27: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.Edit();
  }
  agregarEdm05casilla(){
    
    const EDM05CASILLAS : Edm05casillas = {
      edm05casilla1: this.edm05casillaForm.get('edm05casilla1')?.value,
     edm05casilla2: this.edm05casillaForm.get('edm05casilla2')?.value, 
     edm05casilla3: this.edm05casillaForm.get('edm05casilla3')?.value,
     edm05casilla4: this.edm05casillaForm.get('edm05casilla4')?.value,
     edm05casilla5: this.edm05casillaForm.get('edm05casilla5')?.value,
     edm05casilla6: this.edm05casillaForm.get('edm05casilla6')?.value, 
     edm05casilla7 :this.edm05casillaForm.get('edm05casilla7')?.value,
     edm05casilla8 :this.edm05casillaForm.get('edm05casilla8')?.value,
     edm05casilla9 :this.edm05casillaForm.get('edm05casilla9')?.value,
     edm05casilla10 :this.edm05casillaForm.get('edm05casilla10')?.value,
     edm05casilla11 :this.edm05casillaForm.get('edm05casilla11')?.value,
     edm05casilla12 :this.edm05casillaForm.get('edm05casilla12')?.value,
     edm05casilla13 :this.edm05casillaForm.get('edm05casilla13')?.value,
     edm05casilla14 :this.edm05casillaForm.get('edm05casilla14')?.value,
     edm05casilla15 :this.edm05casillaForm.get('edm05casilla15')?.value,
     edm05casilla16 :this.edm05casillaForm.get('edm05casilla16')?.value,
     edm05casilla17 :this.edm05casillaForm.get('edm05casilla17')?.value,
     edm05casilla18 :this.edm05casillaForm.get('edm05casilla18')?.value,
     edm05casilla19 :this.edm05casillaForm.get('edm05casilla19')?.value,
     edm05casilla20 :this.edm05casillaForm.get('edm05casilla20')?.value,
     edm05casilla21 :this.edm05casillaForm.get('edm05casilla21')?.value,
     edm05casilla22 :this.edm05casillaForm.get('edm05casilla22')?.value,
     edm05casilla23 :this.edm05casillaForm.get('edm05casilla23')?.value,
     edm05casilla24 :this.edm05casillaForm.get('edm05casilla24')?.value,
     edm05casilla25 :this.edm05casillaForm.get('edm05casilla25')?.value,
     edm05casilla26 :this.edm05casillaForm.get('edm05casilla26')?.value,
     edm05casilla27 :this.edm05casillaForm.get('edm05casilla27')?.value,
    }
    if(this.id !== null) {
      //editamos el producto 
      this._edm05casillasService.editarEdm05casilla(this.id, EDM05CASILLAS).subscribe(data => {
        this.toastr.success('Casillas EDM05 actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/edm05tabla1']);
      },error => {
        console.log(error);
        this.edm05casillaForm.reset();
      })
    }else{
    console.log(EDM05CASILLAS);
    this._edm05casillasService.guardarEdm05casilla(EDM05CASILLAS).subscribe(data => {
    this.toastr.info('Felicidades', 'Registrado exitosamente');
    this.router.navigate(['/edm05tabla1']);
    }, error => {
      console.log(error);
      this.edm05casillaForm.reset();
    })
  }
}
  
  Edit(){
    if(this.id !== null){
      this.titulo = 'MODIFICAR RACI';
      this._edm05casillasService.obtenerEdm05casilla(this.id).subscribe(data =>{
        this.edm05casillaForm.setValue({
          edm05casilla1: data.edm05casilla1,
          edm05casilla2: data.edm05casilla2,
          edm05casilla3: data.edm05casilla3,
          edm05casilla4: data.edm05casilla4,
          edm05casilla5: data.edm05casilla5,
          edm05casilla6: data.edm05casilla6,
          edm05casilla7: data.edm05casilla7,
          edm05casilla8: data.edm05casilla8,
          edm05casilla9: data.edm05casilla9,
          edm05casilla10: data.edm05casilla10,
          edm05casilla11: data.edm05casilla11,
          edm05casilla12: data.edm05casilla12,
          edm05casilla13: data.edm05casilla13,
          edm05casilla14: data.edm05casilla14,
          edm05casilla15: data.edm05casilla15,
          edm05casilla16: data.edm05casilla16,
          edm05casilla17: data.edm05casilla17,
          edm05casilla18: data.edm05casilla18,
          edm05casilla19: data.edm05casilla19,
          edm05casilla20: data.edm05casilla20,
          edm05casilla21: data.edm05casilla21,
          edm05casilla22: data.edm05casilla22,
          edm05casilla23: data.edm05casilla23,
          edm05casilla24: data.edm05casilla24,
          edm05casilla25: data.edm05casilla25,
          edm05casilla26: data.edm05casilla26,
          edm05casilla27: data.edm05casilla27,
        })
      })
    }
  }
}
