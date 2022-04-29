import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo06casilla} from 'src/app/models/Apo06';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo06casillasService } from 'src/app/services/apo06casillas.service';

@Component({
  selector: 'app-apo06casilla',
  templateUrl: './apo06casilla.component.html',
  styleUrls: ['./apo06casilla.component.css']
})
export class Apo06casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo06casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo06casillasService: Apo06casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo06casillaForm = this.th.group
      ({
        apo06casilla1: ['', Validators.required], 
        apo06casilla2: ['', Validators.required],
        apo06casilla3: ['', Validators.required],
        apo06casilla4: ['', Validators.required],
        apo06casilla5: ['', Validators.required],
        apo06casilla6: ['', Validators.required],
        apo06casilla7: ['', Validators.required],
        apo06casilla8: ['', Validators.required],
        apo06casilla9: ['', Validators.required],
        apo06casilla10: ['', Validators.required],
        apo06casilla11: ['', Validators.required],
        apo06casilla12: ['', Validators.required],
        apo06casilla13: ['', Validators.required],
        apo06casilla14: ['', Validators.required],
        apo06casilla15: ['', Validators.required],
        apo06casilla16:['', Validators.required],
        apo06casilla17: ['', Validators.required],
        apo06casilla18: ['', Validators.required],
        apo06casilla19: ['', Validators.required],
        apo06casilla20: ['', Validators.required],
        apo06casilla21: ['', Validators.required],
        apo06casilla22: ['', Validators.required],
        apo06casilla23: ['', Validators.required],
        apo06casilla24: ['', Validators.required],
        apo06casilla25: ['', Validators.required],
        apo06casilla26: ['', Validators.required],
        apo06casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo06casilla(){
    const APO06CASILLA: Apo06casilla= {
     apo06casilla1: this.apo06casillaForm.get('apo06casilla1')?.value,
     apo06casilla2: this.apo06casillaForm.get('apo06casilla2')?.value, 
     apo06casilla3: this.apo06casillaForm.get('apo06casilla3')?.value,
     apo06casilla4: this.apo06casillaForm.get('apo06casilla4')?.value,
     apo06casilla5: this.apo06casillaForm.get('apo06casilla5')?.value,
     apo06casilla6: this.apo06casillaForm.get('apo06casilla6')?.value, 
     apo06casilla7 :this.apo06casillaForm.get('apo06casilla7')?.value,
     apo06casilla8 :this.apo06casillaForm.get('apo06casilla8')?.value,
     apo06casilla9 :this.apo06casillaForm.get('apo06casilla9')?.value,
     apo06casilla10 :this.apo06casillaForm.get('apo06casilla10')?.value,
     apo06casilla11 :this.apo06casillaForm.get('apo06casilla11')?.value,
     apo06casilla12 :this.apo06casillaForm.get('apo06casilla12')?.value,
     apo06casilla13 :this.apo06casillaForm.get('apo06casilla13')?.value,
     apo06casilla14 :this.apo06casillaForm.get('apo06casilla14')?.value,
     apo06casilla15 :this.apo06casillaForm.get('apo06casilla15')?.value,
     apo06casilla16 :this.apo06casillaForm.get('apo06casilla16')?.value,
     apo06casilla17 :this.apo06casillaForm.get('apo06casilla17')?.value,
     apo06casilla18 :this.apo06casillaForm.get('apo06casilla18')?.value,
     apo06casilla19 :this.apo06casillaForm.get('apo06casilla19')?.value,
     apo06casilla20 :this.apo06casillaForm.get('apo06casilla20')?.value,
     apo06casilla21 :this.apo06casillaForm.get('apo06casilla21')?.value,
     apo06casilla22 :this.apo06casillaForm.get('apo06casilla22')?.value,
     apo06casilla23 :this.apo06casillaForm.get('apo06casilla23')?.value,
     apo06casilla24 :this.apo06casillaForm.get('apo06casilla24')?.value,
     apo06casilla25 :this.apo06casillaForm.get('apo06casilla25')?.value,
     apo06casilla26 :this.apo06casillaForm.get('apo06casilla26')?.value,
     apo06casilla27 :this.apo06casillaForm.get('apo06casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo06casillasService.editarApo06casilla(this.id,APO06CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo06raci']);
      },error => {
        console.log(error);
        this.apo06casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO06CASILLA);
      this._apo06casillasService.guardarApo06casilla(APO06CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo06raci']);
    }, error => {
      console.log(error);
      this.apo06casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo06casillasService.obtenerApo06casilla(this.id).subscribe(data =>{
        this.apo06casillaForm.setValue({
         apo06casilla1: data.apo06casilla1,
         apo06casilla2: data.apo06casilla2,
         apo06casilla3: data.apo06casilla3,
         apo06casilla4: data.apo06casilla4,
         apo06casilla5: data.apo06casilla5,
         apo06casilla6: data.apo06casilla6,
         apo06casilla7: data.apo06casilla7,
         apo06casilla8: data.apo06casilla8,
         apo06casilla9: data.apo06casilla9,
         apo06casilla10: data.apo06casilla10,
         apo06casilla11: data.apo06casilla11,
         apo06casilla12: data.apo06casilla12,
         apo06casilla13: data.apo06casilla13,
         apo06casilla14: data.apo06casilla14,
         apo06casilla15: data.apo06casilla15,
         apo06casilla16: data.apo06casilla16,
         apo06casilla17: data.apo06casilla17,
         apo06casilla18: data.apo06casilla18,
         apo06casilla19: data.apo06casilla19,
         apo06casilla20: data.apo06casilla20,
         apo06casilla21: data.apo06casilla21,
         apo06casilla22: data.apo06casilla22,
         apo06casilla23: data.apo06casilla23,
         apo06casilla24: data.apo06casilla24,
         apo06casilla25: data.apo06casilla25,
         apo06casilla26: data.apo06casilla26,
         apo06casilla27: data.apo06casilla27,

        })
      })
    }
  }
} 
