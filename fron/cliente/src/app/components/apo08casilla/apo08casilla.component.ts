import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo08casilla} from 'src/app/models/Apo08';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo08casillasService } from 'src/app/services/apo08casillas.service';

@Component({
  selector: 'app-apo08casilla',
  templateUrl: './apo08casilla.component.html',
  styleUrls: ['./apo08casilla.component.css']
})
export class Apo08casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo08casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo08casillasService: Apo08casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo08casillaForm = this.th.group
      ({
        apo08casilla1: ['', Validators.required], 
        apo08casilla2: ['', Validators.required],
        apo08casilla3: ['', Validators.required],
        apo08casilla4: ['', Validators.required],
        apo08casilla5: ['', Validators.required],
        apo08casilla6: ['', Validators.required],
        apo08casilla7: ['', Validators.required],
        apo08casilla8: ['', Validators.required],
        apo08casilla9: ['', Validators.required],
        apo08casilla10: ['', Validators.required],
        apo08casilla11: ['', Validators.required],
        apo08casilla12: ['', Validators.required],
        apo08casilla13: ['', Validators.required],
        apo08casilla14: ['', Validators.required],
        apo08casilla15: ['', Validators.required],
        apo08casilla16:['', Validators.required],
        apo08casilla17: ['', Validators.required],
        apo08casilla18: ['', Validators.required],
        apo08casilla19: ['', Validators.required],
        apo08casilla20: ['', Validators.required],
        apo08casilla21: ['', Validators.required],
        apo08casilla22: ['', Validators.required],
        apo08casilla23: ['', Validators.required],
        apo08casilla24: ['', Validators.required],
        apo08casilla25: ['', Validators.required],
        apo08casilla26: ['', Validators.required],
        apo08casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo08casilla(){
    const APO08CASILLA: Apo08casilla= {
     apo08casilla1: this.apo08casillaForm.get('apo08casilla1')?.value,
     apo08casilla2: this.apo08casillaForm.get('apo08casilla2')?.value, 
     apo08casilla3: this.apo08casillaForm.get('apo08casilla3')?.value,
     apo08casilla4: this.apo08casillaForm.get('apo08casilla4')?.value,
     apo08casilla5: this.apo08casillaForm.get('apo08casilla5')?.value,
     apo08casilla6: this.apo08casillaForm.get('apo08casilla6')?.value, 
     apo08casilla7 :this.apo08casillaForm.get('apo08casilla7')?.value,
     apo08casilla8 :this.apo08casillaForm.get('apo08casilla8')?.value,
     apo08casilla9 :this.apo08casillaForm.get('apo08casilla9')?.value,
     apo08casilla10 :this.apo08casillaForm.get('apo08casilla10')?.value,
     apo08casilla11 :this.apo08casillaForm.get('apo08casilla11')?.value,
     apo08casilla12 :this.apo08casillaForm.get('apo08casilla12')?.value,
     apo08casilla13 :this.apo08casillaForm.get('apo08casilla13')?.value,
     apo08casilla14 :this.apo08casillaForm.get('apo08casilla14')?.value,
     apo08casilla15 :this.apo08casillaForm.get('apo08casilla15')?.value,
     apo08casilla16 :this.apo08casillaForm.get('apo08casilla16')?.value,
     apo08casilla17 :this.apo08casillaForm.get('apo08casilla17')?.value,
     apo08casilla18 :this.apo08casillaForm.get('apo08casilla18')?.value,
     apo08casilla19 :this.apo08casillaForm.get('apo08casilla19')?.value,
     apo08casilla20 :this.apo08casillaForm.get('apo08casilla20')?.value,
     apo08casilla21 :this.apo08casillaForm.get('apo08casilla21')?.value,
     apo08casilla22 :this.apo08casillaForm.get('apo08casilla22')?.value,
     apo08casilla23 :this.apo08casillaForm.get('apo08casilla23')?.value,
     apo08casilla24 :this.apo08casillaForm.get('apo08casilla24')?.value,
     apo08casilla25 :this.apo08casillaForm.get('apo08casilla25')?.value,
     apo08casilla26 :this.apo08casillaForm.get('apo08casilla26')?.value,
     apo08casilla27 :this.apo08casillaForm.get('apo08casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo08casillasService.editarApo08casilla(this.id,APO08CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo08raci']);
      },error => {
        console.log(error);
        this.apo08casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO08CASILLA);
      this._apo08casillasService.guardarApo08casilla(APO08CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo08raci']);
    }, error => {
      console.log(error);
      this.apo08casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo08casillasService.obtenerApo08casilla(this.id).subscribe(data =>{
        this.apo08casillaForm.setValue({
         apo08casilla1: data.apo08casilla1,
         apo08casilla2: data.apo08casilla2,
         apo08casilla3: data.apo08casilla3,
         apo08casilla4: data.apo08casilla4,
         apo08casilla5: data.apo08casilla5,
         apo08casilla6: data.apo08casilla6,
         apo08casilla7: data.apo08casilla7,
         apo08casilla8: data.apo08casilla8,
         apo08casilla9: data.apo08casilla9,
         apo08casilla10: data.apo08casilla10,
         apo08casilla11: data.apo08casilla11,
         apo08casilla12: data.apo08casilla12,
         apo08casilla13: data.apo08casilla13,
         apo08casilla14: data.apo08casilla14,
         apo08casilla15: data.apo08casilla15,
         apo08casilla16: data.apo08casilla16,
         apo08casilla17: data.apo08casilla17,
         apo08casilla18: data.apo08casilla18,
         apo08casilla19: data.apo08casilla19,
         apo08casilla20: data.apo08casilla20,
         apo08casilla21: data.apo08casilla21,
         apo08casilla22: data.apo08casilla22,
         apo08casilla23: data.apo08casilla23,
         apo08casilla24: data.apo08casilla24,
         apo08casilla25: data.apo08casilla25,
         apo08casilla26: data.apo08casilla26,
         apo08casilla27: data.apo08casilla27,

        })
      })
    }
  }
} 


