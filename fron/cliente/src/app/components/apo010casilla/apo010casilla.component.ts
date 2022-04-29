import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo010casilla} from 'src/app/models/Apo010';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo010casillasService } from 'src/app/services/apo010casillas.service';

@Component({
  selector: 'app-apo010casilla',
  templateUrl: './apo010casilla.component.html',
  styleUrls: ['./apo010casilla.component.css']
})
export class Apo010casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo010casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo010casillasService: Apo010casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo010casillaForm = this.th.group
      ({
        apo010casilla1: ['', Validators.required], 
        apo010casilla2: ['', Validators.required],
        apo010casilla3: ['', Validators.required],
        apo010casilla4: ['', Validators.required],
        apo010casilla5: ['', Validators.required],
        apo010casilla6: ['', Validators.required],
        apo010casilla7: ['', Validators.required],
        apo010casilla8: ['', Validators.required],
        apo010casilla9: ['', Validators.required],
        apo010casilla10: ['', Validators.required],
        apo010casilla11: ['', Validators.required],
        apo010casilla12: ['', Validators.required],
        apo010casilla13: ['', Validators.required],
        apo010casilla14: ['', Validators.required],
        apo010casilla15: ['', Validators.required],
        apo010casilla16:['', Validators.required],
        apo010casilla17: ['', Validators.required],
        apo010casilla18: ['', Validators.required],
        apo010casilla19: ['', Validators.required],
        apo010casilla20: ['', Validators.required],
        apo010casilla21: ['', Validators.required],
        apo010casilla22: ['', Validators.required],
        apo010casilla23: ['', Validators.required],
        apo010casilla24: ['', Validators.required],
        apo010casilla25: ['', Validators.required],
        apo010casilla26: ['', Validators.required],
        apo010casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo010casilla(){
    const APO010CASILLA: Apo010casilla= {
     apo010casilla1: this.apo010casillaForm.get('apo010casilla1')?.value,
     apo010casilla2: this.apo010casillaForm.get('apo010casilla2')?.value, 
     apo010casilla3: this.apo010casillaForm.get('apo010casilla3')?.value,
     apo010casilla4: this.apo010casillaForm.get('apo010casilla4')?.value,
     apo010casilla5: this.apo010casillaForm.get('apo010casilla5')?.value,
     apo010casilla6: this.apo010casillaForm.get('apo010casilla6')?.value, 
     apo010casilla7 :this.apo010casillaForm.get('apo010casilla7')?.value,
     apo010casilla8 :this.apo010casillaForm.get('apo010casilla8')?.value,
     apo010casilla9 :this.apo010casillaForm.get('apo010casilla9')?.value,
     apo010casilla10 :this.apo010casillaForm.get('apo010casilla10')?.value,
     apo010casilla11 :this.apo010casillaForm.get('apo010casilla11')?.value,
     apo010casilla12 :this.apo010casillaForm.get('apo010casilla12')?.value,
     apo010casilla13 :this.apo010casillaForm.get('apo010casilla13')?.value,
     apo010casilla14 :this.apo010casillaForm.get('apo010casilla14')?.value,
     apo010casilla15 :this.apo010casillaForm.get('apo010casilla15')?.value,
     apo010casilla16 :this.apo010casillaForm.get('apo010casilla16')?.value,
     apo010casilla17 :this.apo010casillaForm.get('apo010casilla17')?.value,
     apo010casilla18 :this.apo010casillaForm.get('apo010casilla18')?.value,
     apo010casilla19 :this.apo010casillaForm.get('apo010casilla19')?.value,
     apo010casilla20 :this.apo010casillaForm.get('apo010casilla20')?.value,
     apo010casilla21 :this.apo010casillaForm.get('apo010casilla21')?.value,
     apo010casilla22 :this.apo010casillaForm.get('apo010casilla22')?.value,
     apo010casilla23 :this.apo010casillaForm.get('apo010casilla23')?.value,
     apo010casilla24 :this.apo010casillaForm.get('apo010casilla24')?.value,
     apo010casilla25 :this.apo010casillaForm.get('apo010casilla25')?.value,
     apo010casilla26 :this.apo010casillaForm.get('apo010casilla26')?.value,
     apo010casilla27 :this.apo010casillaForm.get('apo010casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo010casillasService.editarApo010casilla(this.id,APO010CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo010raci']);
      },error => {
        console.log(error);
        this.apo010casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO010CASILLA);
      this._apo010casillasService.guardarApo010casilla(APO010CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo010raci']);
    }, error => {
      console.log(error);
      this.apo010casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo010casillasService.obtenerApo010casilla(this.id).subscribe(data =>{
        this.apo010casillaForm.setValue({
         apo010casilla1: data.apo010casilla1,
         apo010casilla2: data.apo010casilla2,
         apo010casilla3: data.apo010casilla3,
         apo010casilla4: data.apo010casilla4,
         apo010casilla5: data.apo010casilla5,
         apo010casilla6: data.apo010casilla6,
         apo010casilla7: data.apo010casilla7,
         apo010casilla8: data.apo010casilla8,
         apo010casilla9: data.apo010casilla9,
         apo010casilla10: data.apo010casilla10,
         apo010casilla11: data.apo010casilla11,
         apo010casilla12: data.apo010casilla12,
         apo010casilla13: data.apo010casilla13,
         apo010casilla14: data.apo010casilla14,
         apo010casilla15: data.apo010casilla15,
         apo010casilla16: data.apo010casilla16,
         apo010casilla17: data.apo010casilla17,
         apo010casilla18: data.apo010casilla18,
         apo010casilla19: data.apo010casilla19,
         apo010casilla20: data.apo010casilla20,
         apo010casilla21: data.apo010casilla21,
         apo010casilla22: data.apo010casilla22,
         apo010casilla23: data.apo010casilla23,
         apo010casilla24: data.apo010casilla24,
         apo010casilla25: data.apo010casilla25,
         apo010casilla26: data.apo010casilla26,
         apo010casilla27: data.apo010casilla27,

        })
      })
    }
  }
} 



