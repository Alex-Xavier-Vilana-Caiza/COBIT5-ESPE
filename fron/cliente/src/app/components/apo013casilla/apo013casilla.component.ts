import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo013casilla} from 'src/app/models/Apo013';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo013casillasService } from 'src/app/services/apo013casillas.service';

@Component({
  selector: 'app-apo013casilla',
  templateUrl: './apo013casilla.component.html',
  styleUrls: ['./apo013casilla.component.css']
})
export class Apo013casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo013casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo013casillasService: Apo013casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo013casillaForm = this.th.group
      ({
        apo013casilla1: ['', Validators.required], 
        apo013casilla2: ['', Validators.required],
        apo013casilla3: ['', Validators.required],
        apo013casilla4: ['', Validators.required],
        apo013casilla5: ['', Validators.required],
        apo013casilla6: ['', Validators.required],
        apo013casilla7: ['', Validators.required],
        apo013casilla8: ['', Validators.required],
        apo013casilla9: ['', Validators.required],
        apo013casilla10: ['', Validators.required],
        apo013casilla11: ['', Validators.required],
        apo013casilla12: ['', Validators.required],
        apo013casilla13: ['', Validators.required],
        apo013casilla14: ['', Validators.required],
        apo013casilla15: ['', Validators.required],
        apo013casilla16:['', Validators.required],
        apo013casilla17: ['', Validators.required],
        apo013casilla18: ['', Validators.required],
        apo013casilla19: ['', Validators.required],
        apo013casilla20: ['', Validators.required],
        apo013casilla21: ['', Validators.required],
        apo013casilla22: ['', Validators.required],
        apo013casilla23: ['', Validators.required],
        apo013casilla24: ['', Validators.required],
        apo013casilla25: ['', Validators.required],
        apo013casilla26: ['', Validators.required],
        apo013casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo013casilla(){
    const APO013CASILLA: Apo013casilla= {
     apo013casilla1: this.apo013casillaForm.get('apo013casilla1')?.value,
     apo013casilla2: this.apo013casillaForm.get('apo013casilla2')?.value, 
     apo013casilla3: this.apo013casillaForm.get('apo013casilla3')?.value,
     apo013casilla4: this.apo013casillaForm.get('apo013casilla4')?.value,
     apo013casilla5: this.apo013casillaForm.get('apo013casilla5')?.value,
     apo013casilla6: this.apo013casillaForm.get('apo013casilla6')?.value, 
     apo013casilla7 :this.apo013casillaForm.get('apo013casilla7')?.value,
     apo013casilla8 :this.apo013casillaForm.get('apo013casilla8')?.value,
     apo013casilla9 :this.apo013casillaForm.get('apo013casilla9')?.value,
     apo013casilla10 :this.apo013casillaForm.get('apo013casilla10')?.value,
     apo013casilla11 :this.apo013casillaForm.get('apo013casilla11')?.value,
     apo013casilla12 :this.apo013casillaForm.get('apo013casilla12')?.value,
     apo013casilla13 :this.apo013casillaForm.get('apo013casilla13')?.value,
     apo013casilla14 :this.apo013casillaForm.get('apo013casilla14')?.value,
     apo013casilla15 :this.apo013casillaForm.get('apo013casilla15')?.value,
     apo013casilla16 :this.apo013casillaForm.get('apo013casilla16')?.value,
     apo013casilla17 :this.apo013casillaForm.get('apo013casilla17')?.value,
     apo013casilla18 :this.apo013casillaForm.get('apo013casilla18')?.value,
     apo013casilla19 :this.apo013casillaForm.get('apo013casilla19')?.value,
     apo013casilla20 :this.apo013casillaForm.get('apo013casilla20')?.value,
     apo013casilla21 :this.apo013casillaForm.get('apo013casilla21')?.value,
     apo013casilla22 :this.apo013casillaForm.get('apo013casilla22')?.value,
     apo013casilla23 :this.apo013casillaForm.get('apo013casilla23')?.value,
     apo013casilla24 :this.apo013casillaForm.get('apo013casilla24')?.value,
     apo013casilla25 :this.apo013casillaForm.get('apo013casilla25')?.value,
     apo013casilla26 :this.apo013casillaForm.get('apo013casilla26')?.value,
     apo013casilla27 :this.apo013casillaForm.get('apo013casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo013casillasService.editarApo013casilla(this.id,APO013CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo013raci']);
      },error => {
        console.log(error);
        this.apo013casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO013CASILLA);
      this._apo013casillasService.guardarApo013casilla(APO013CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo013raci']);
    }, error => {
      console.log(error);
      this.apo013casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo013casillasService.obtenerApo013casilla(this.id).subscribe(data =>{
        this.apo013casillaForm.setValue({
         apo013casilla1: data.apo013casilla1,
         apo013casilla2: data.apo013casilla2,
         apo013casilla3: data.apo013casilla3,
         apo013casilla4: data.apo013casilla4,
         apo013casilla5: data.apo013casilla5,
         apo013casilla6: data.apo013casilla6,
         apo013casilla7: data.apo013casilla7,
         apo013casilla8: data.apo013casilla8,
         apo013casilla9: data.apo013casilla9,
         apo013casilla10: data.apo013casilla10,
         apo013casilla11: data.apo013casilla11,
         apo013casilla12: data.apo013casilla12,
         apo013casilla13: data.apo013casilla13,
         apo013casilla14: data.apo013casilla14,
         apo013casilla15: data.apo013casilla15,
         apo013casilla16: data.apo013casilla16,
         apo013casilla17: data.apo013casilla17,
         apo013casilla18: data.apo013casilla18,
         apo013casilla19: data.apo013casilla19,
         apo013casilla20: data.apo013casilla20,
         apo013casilla21: data.apo013casilla21,
         apo013casilla22: data.apo013casilla22,
         apo013casilla23: data.apo013casilla23,
         apo013casilla24: data.apo013casilla24,
         apo013casilla25: data.apo013casilla25,
         apo013casilla26: data.apo013casilla26,
         apo013casilla27: data.apo013casilla27,

        })
      })
    }
  }
} 



