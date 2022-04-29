import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo09casilla} from 'src/app/models/Apo09';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo09casillasService } from 'src/app/services/apo09casillas.service';

@Component({
  selector: 'app-apo09casilla',
  templateUrl: './apo09casilla.component.html',
  styleUrls: ['./apo09casilla.component.css']
})
export class Apo09casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo09casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo09casillasService: Apo09casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo09casillaForm = this.th.group
      ({
        apo09casilla1: ['', Validators.required], 
        apo09casilla2: ['', Validators.required],
        apo09casilla3: ['', Validators.required],
        apo09casilla4: ['', Validators.required],
        apo09casilla5: ['', Validators.required],
        apo09casilla6: ['', Validators.required],
        apo09casilla7: ['', Validators.required],
        apo09casilla8: ['', Validators.required],
        apo09casilla9: ['', Validators.required],
        apo09casilla10: ['', Validators.required],
        apo09casilla11: ['', Validators.required],
        apo09casilla12: ['', Validators.required],
        apo09casilla13: ['', Validators.required],
        apo09casilla14: ['', Validators.required],
        apo09casilla15: ['', Validators.required],
        apo09casilla16:['', Validators.required],
        apo09casilla17: ['', Validators.required],
        apo09casilla18: ['', Validators.required],
        apo09casilla19: ['', Validators.required],
        apo09casilla20: ['', Validators.required],
        apo09casilla21: ['', Validators.required],
        apo09casilla22: ['', Validators.required],
        apo09casilla23: ['', Validators.required],
        apo09casilla24: ['', Validators.required],
        apo09casilla25: ['', Validators.required],
        apo09casilla26: ['', Validators.required],
        apo09casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo09casilla(){
    const APO09CASILLA: Apo09casilla= {
     apo09casilla1: this.apo09casillaForm.get('apo09casilla1')?.value,
     apo09casilla2: this.apo09casillaForm.get('apo09casilla2')?.value, 
     apo09casilla3: this.apo09casillaForm.get('apo09casilla3')?.value,
     apo09casilla4: this.apo09casillaForm.get('apo09casilla4')?.value,
     apo09casilla5: this.apo09casillaForm.get('apo09casilla5')?.value,
     apo09casilla6: this.apo09casillaForm.get('apo09casilla6')?.value, 
     apo09casilla7 :this.apo09casillaForm.get('apo09casilla7')?.value,
     apo09casilla8 :this.apo09casillaForm.get('apo09casilla8')?.value,
     apo09casilla9 :this.apo09casillaForm.get('apo09casilla9')?.value,
     apo09casilla10 :this.apo09casillaForm.get('apo09casilla10')?.value,
     apo09casilla11 :this.apo09casillaForm.get('apo09casilla11')?.value,
     apo09casilla12 :this.apo09casillaForm.get('apo09casilla12')?.value,
     apo09casilla13 :this.apo09casillaForm.get('apo09casilla13')?.value,
     apo09casilla14 :this.apo09casillaForm.get('apo09casilla14')?.value,
     apo09casilla15 :this.apo09casillaForm.get('apo09casilla15')?.value,
     apo09casilla16 :this.apo09casillaForm.get('apo09casilla16')?.value,
     apo09casilla17 :this.apo09casillaForm.get('apo09casilla17')?.value,
     apo09casilla18 :this.apo09casillaForm.get('apo09casilla18')?.value,
     apo09casilla19 :this.apo09casillaForm.get('apo09casilla19')?.value,
     apo09casilla20 :this.apo09casillaForm.get('apo09casilla20')?.value,
     apo09casilla21 :this.apo09casillaForm.get('apo09casilla21')?.value,
     apo09casilla22 :this.apo09casillaForm.get('apo09casilla22')?.value,
     apo09casilla23 :this.apo09casillaForm.get('apo09casilla23')?.value,
     apo09casilla24 :this.apo09casillaForm.get('apo09casilla24')?.value,
     apo09casilla25 :this.apo09casillaForm.get('apo09casilla25')?.value,
     apo09casilla26 :this.apo09casillaForm.get('apo09casilla26')?.value,
     apo09casilla27 :this.apo09casillaForm.get('apo09casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo09casillasService.editarApo09casilla(this.id,APO09CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo09raci']);
      },error => {
        console.log(error);
        this.apo09casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO09CASILLA);
      this._apo09casillasService.guardarApo09casilla(APO09CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo09raci']);
    }, error => {
      console.log(error);
      this.apo09casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo09casillasService.obtenerApo09casilla(this.id).subscribe(data =>{
        this.apo09casillaForm.setValue({
         apo09casilla1: data.apo09casilla1,
         apo09casilla2: data.apo09casilla2,
         apo09casilla3: data.apo09casilla3,
         apo09casilla4: data.apo09casilla4,
         apo09casilla5: data.apo09casilla5,
         apo09casilla6: data.apo09casilla6,
         apo09casilla7: data.apo09casilla7,
         apo09casilla8: data.apo09casilla8,
         apo09casilla9: data.apo09casilla9,
         apo09casilla10: data.apo09casilla10,
         apo09casilla11: data.apo09casilla11,
         apo09casilla12: data.apo09casilla12,
         apo09casilla13: data.apo09casilla13,
         apo09casilla14: data.apo09casilla14,
         apo09casilla15: data.apo09casilla15,
         apo09casilla16: data.apo09casilla16,
         apo09casilla17: data.apo09casilla17,
         apo09casilla18: data.apo09casilla18,
         apo09casilla19: data.apo09casilla19,
         apo09casilla20: data.apo09casilla20,
         apo09casilla21: data.apo09casilla21,
         apo09casilla22: data.apo09casilla22,
         apo09casilla23: data.apo09casilla23,
         apo09casilla24: data.apo09casilla24,
         apo09casilla25: data.apo09casilla25,
         apo09casilla26: data.apo09casilla26,
         apo09casilla27: data.apo09casilla27,

        })
      })
    }
  }
} 



