import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo03casilla} from 'src/app/models/Apo03';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo03casillasService } from 'src/app/services/apo03casillas.service';

@Component({
  selector: 'app-apo03casilla',
  templateUrl: './apo03casilla.component.html',
  styleUrls: ['./apo03casilla.component.css']
})
export class Apo03casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo03casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo03casillasService: Apo03casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo03casillaForm = this.th.group
      ({
        apo03casilla1: ['', Validators.required], 
        apo03casilla2: ['', Validators.required],
        apo03casilla3: ['', Validators.required],
        apo03casilla4: ['', Validators.required],
        apo03casilla5: ['', Validators.required],
        apo03casilla6: ['', Validators.required],
        apo03casilla7: ['', Validators.required],
        apo03casilla8: ['', Validators.required],
        apo03casilla9: ['', Validators.required],
        apo03casilla10: ['', Validators.required],
        apo03casilla11: ['', Validators.required],
        apo03casilla12: ['', Validators.required],
        apo03casilla13: ['', Validators.required],
        apo03casilla14: ['', Validators.required],
        apo03casilla15: ['', Validators.required],
        apo03casilla16:['', Validators.required],
        apo03casilla17: ['', Validators.required],
        apo03casilla18: ['', Validators.required],
        apo03casilla19: ['', Validators.required],
        apo03casilla20: ['', Validators.required],
        apo03casilla21: ['', Validators.required],
        apo03casilla22: ['', Validators.required],
        apo03casilla23: ['', Validators.required],
        apo03casilla24: ['', Validators.required],
        apo03casilla25: ['', Validators.required],
        apo03casilla26: ['', Validators.required],
        apo03casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo03casilla(){
    const APO03CASILLA: Apo03casilla= {
     apo03casilla1: this.apo03casillaForm.get('apo03casilla1')?.value,
     apo03casilla2: this.apo03casillaForm.get('apo03casilla2')?.value, 
     apo03casilla3: this.apo03casillaForm.get('apo03casilla3')?.value,
     apo03casilla4: this.apo03casillaForm.get('apo03casilla4')?.value,
     apo03casilla5: this.apo03casillaForm.get('apo03casilla5')?.value,
     apo03casilla6: this.apo03casillaForm.get('apo03casilla6')?.value, 
     apo03casilla7 :this.apo03casillaForm.get('apo03casilla7')?.value,
     apo03casilla8 :this.apo03casillaForm.get('apo03casilla8')?.value,
     apo03casilla9 :this.apo03casillaForm.get('apo03casilla9')?.value,
     apo03casilla10 :this.apo03casillaForm.get('apo03casilla10')?.value,
     apo03casilla11 :this.apo03casillaForm.get('apo03casilla11')?.value,
     apo03casilla12 :this.apo03casillaForm.get('apo03casilla12')?.value,
     apo03casilla13 :this.apo03casillaForm.get('apo03casilla13')?.value,
     apo03casilla14 :this.apo03casillaForm.get('apo03casilla14')?.value,
     apo03casilla15 :this.apo03casillaForm.get('apo03casilla15')?.value,
     apo03casilla16 :this.apo03casillaForm.get('apo03casilla16')?.value,
     apo03casilla17 :this.apo03casillaForm.get('apo03casilla17')?.value,
     apo03casilla18 :this.apo03casillaForm.get('apo03casilla18')?.value,
     apo03casilla19 :this.apo03casillaForm.get('apo03casilla19')?.value,
     apo03casilla20 :this.apo03casillaForm.get('apo03casilla20')?.value,
     apo03casilla21 :this.apo03casillaForm.get('apo03casilla21')?.value,
     apo03casilla22 :this.apo03casillaForm.get('apo03casilla22')?.value,
     apo03casilla23 :this.apo03casillaForm.get('apo03casilla23')?.value,
     apo03casilla24 :this.apo03casillaForm.get('apo03casilla24')?.value,
     apo03casilla25 :this.apo03casillaForm.get('apo03casilla25')?.value,
     apo03casilla26 :this.apo03casillaForm.get('apo03casilla26')?.value,
     apo03casilla27 :this.apo03casillaForm.get('apo03casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo03casillasService.editarApo03casilla(this.id,APO03CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo03raci']);
      },error => {
        console.log(error);
        this.apo03casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO03CASILLA);
      this._apo03casillasService.guardarApo03casilla(APO03CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo03raci']);
    }, error => {
      console.log(error);
      this.apo03casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo03casillasService.obtenerApo03casilla(this.id).subscribe(data =>{
        this.apo03casillaForm.setValue({
         apo03casilla1: data.apo03casilla1,
         apo03casilla2: data.apo03casilla2,
         apo03casilla3: data.apo03casilla3,
         apo03casilla4: data.apo03casilla4,
         apo03casilla5: data.apo03casilla5,
         apo03casilla6: data.apo03casilla6,
         apo03casilla7: data.apo03casilla7,
         apo03casilla8: data.apo03casilla8,
         apo03casilla9: data.apo03casilla9,
         apo03casilla10: data.apo03casilla10,
         apo03casilla11: data.apo03casilla11,
         apo03casilla12: data.apo03casilla12,
         apo03casilla13: data.apo03casilla13,
         apo03casilla14: data.apo03casilla14,
         apo03casilla15: data.apo03casilla15,
         apo03casilla16: data.apo03casilla16,
         apo03casilla17: data.apo03casilla17,
         apo03casilla18: data.apo03casilla18,
         apo03casilla19: data.apo03casilla19,
         apo03casilla20: data.apo03casilla20,
         apo03casilla21: data.apo03casilla21,
         apo03casilla22: data.apo03casilla22,
         apo03casilla23: data.apo03casilla23,
         apo03casilla24: data.apo03casilla24,
         apo03casilla25: data.apo03casilla25,
         apo03casilla26: data.apo03casilla26,
         apo03casilla27: data.apo03casilla27,

        })
      })
    }
  }
} 


