import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Edm01casillas} from 'src/app/models/Edm01';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Edm01casillasService } from 'src/app/services/edm01casillas.service';

@Component({
  selector: 'app-edm01casillas',
  templateUrl: './edm01casillas.component.html',
  styleUrls: ['./edm01casillas.component.css']
})
export class Edm01casillasComponent implements OnInit {

  edm01casillaForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;

  constructor(private edm01casillagroup: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _edm01casillasService: Edm01casillasService,
    private aRouter: ActivatedRoute) {
      this.edm01casillaForm = this.edm01casillagroup.group({
        edm01casilla1: ['', Validators.required], 
        edm01casilla2: ['', Validators.required],
        edm01casilla3: ['', Validators.required],
        edm01casilla4: ['', Validators.required],
        edm01casilla5: ['', Validators.required],
        edm01casilla6: ['', Validators.required],
        edm01casilla7: ['', Validators.required],
        edm01casilla8: ['', Validators.required],
        edm01casilla9: ['', Validators.required],
        edm01casilla10: ['', Validators.required],
        edm01casilla11: ['', Validators.required],
        edm01casilla12: ['', Validators.required],
        edm01casilla13: ['', Validators.required],
        edm01casilla14: ['', Validators.required],
        edm01casilla15: ['', Validators.required],
        edm01casilla16:['', Validators.required],
        edm01casilla17: ['', Validators.required],
        edm01casilla18: ['', Validators.required],
        edm01casilla19: ['', Validators.required],
        edm01casilla20: ['', Validators.required],
        edm01casilla21: ['', Validators.required],
        edm01casilla22: ['', Validators.required],
        edm01casilla23: ['', Validators.required],
        edm01casilla24: ['', Validators.required],
        edm01casilla25: ['', Validators.required],
        edm01casilla26: ['', Validators.required],
        edm01casilla27: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
  }
  agregarEdm01casilla(){
    
    const EDM01CASILLAS : Edm01casillas = {
      edm01casilla1: this.edm01casillaForm.get('edm01casilla1')?.value,
     edm01casilla2: this.edm01casillaForm.get('edm01casilla2')?.value, 
     edm01casilla3: this.edm01casillaForm.get('edm01casilla3')?.value,
     edm01casilla4: this.edm01casillaForm.get('edm01casilla4')?.value,
     edm01casilla5: this.edm01casillaForm.get('edm01casilla5')?.value,
     edm01casilla6: this.edm01casillaForm.get('edm01casilla6')?.value, 
     edm01casilla7 :this.edm01casillaForm.get('edm01casilla7')?.value,
     edm01casilla8 :this.edm01casillaForm.get('edm01casilla8')?.value,
     edm01casilla9 :this.edm01casillaForm.get('edm01casilla9')?.value,
     edm01casilla10 :this.edm01casillaForm.get('edm01casilla10')?.value,
     edm01casilla11 :this.edm01casillaForm.get('edm01casilla11')?.value,
     edm01casilla12 :this.edm01casillaForm.get('edm01casilla12')?.value,
     edm01casilla13 :this.edm01casillaForm.get('edm01casilla13')?.value,
     edm01casilla14 :this.edm01casillaForm.get('edm01casilla14')?.value,
     edm01casilla15 :this.edm01casillaForm.get('edm01casilla15')?.value,
     edm01casilla16 :this.edm01casillaForm.get('edm01casilla16')?.value,
     edm01casilla17 :this.edm01casillaForm.get('edm01casilla17')?.value,
     edm01casilla18 :this.edm01casillaForm.get('edm01casilla18')?.value,
     edm01casilla19 :this.edm01casillaForm.get('edm01casilla19')?.value,
     edm01casilla20 :this.edm01casillaForm.get('edm01casilla20')?.value,
     edm01casilla21 :this.edm01casillaForm.get('edm01casilla21')?.value,
     edm01casilla22 :this.edm01casillaForm.get('edm01casilla22')?.value,
     edm01casilla23 :this.edm01casillaForm.get('edm01casilla23')?.value,
     edm01casilla24 :this.edm01casillaForm.get('edm01casilla24')?.value,
     edm01casilla25 :this.edm01casillaForm.get('edm01casilla25')?.value,
     edm01casilla26 :this.edm01casillaForm.get('edm01casilla26')?.value,
     edm01casilla27 :this.edm01casillaForm.get('edm01casilla27')?.value,
    
    }

    if(this.id !== null) {
      //editamos el producto 
      this._edm01casillasService.editarEdm01casilla(this.id, EDM01CASILLAS).subscribe(data => {
        this.toastr.success('Casillas EDM01 actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/edm01tabla1']);
      },error => {
        console.log(error);
        this.edm01casillaForm.reset();
      })
    }else{
    console.log(EDM01CASILLAS);
    this._edm01casillasService.guardarEdm01casilla(EDM01CASILLAS).subscribe(data => {
    this.toastr.info('Felicidades', 'Registrado exitosamente');
    this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.edm01casillaForm.reset();
    })
  }
}
  
  esEditar(){
    if(this.id !== null){
      this.titulo = 'MODIFICAR RACI';
      this._edm01casillasService.obtenerEdm01casilla(this.id).subscribe(data =>{
        this.edm01casillaForm.setValue({
          edm01casilla1: data.edm01casilla1,
         edm01casilla2: data.edm01casilla2,
         edm01casilla3: data.edm01casilla3,
         edm01casilla4: data.edm01casilla4,
         edm01casilla5: data.edm01casilla5,
         edm01casilla6: data.edm01casilla6,
         edm01casilla7: data.edm01casilla7,
         edm01casilla8: data.edm01casilla8,
         edm01casilla9: data.edm01casilla9,
         edm01casilla10: data.edm01casilla10,
         edm01casilla11: data.edm01casilla11,
         edm01casilla12: data.edm01casilla12,
         edm01casilla13: data.edm01casilla13,
         edm01casilla14: data.edm01casilla14,
         edm01casilla15: data.edm01casilla15,
         edm01casilla16: data.edm01casilla16,
         edm01casilla17: data.edm01casilla17,
         edm01casilla18: data.edm01casilla18,
         edm01casilla19: data.edm01casilla19,
         edm01casilla20: data.edm01casilla20,
         edm01casilla21: data.edm01casilla21,
         edm01casilla22: data.edm01casilla22,
         edm01casilla23: data.edm01casilla23,
         edm01casilla24: data.edm01casilla24,
         edm01casilla25: data.edm01casilla25,
         edm01casilla26: data.edm01casilla26,
         edm01casilla27: data.edm01casilla27,

        })
      })
    }
  }
}
