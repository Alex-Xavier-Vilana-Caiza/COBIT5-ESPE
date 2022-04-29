import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo05casilla} from 'src/app/models/Apo05';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo05casillasService } from 'src/app/services/apo05casillas.service';

@Component({
  selector: 'app-apo05casilla',
  templateUrl: './apo05casilla.component.html',
  styleUrls: ['./apo05casilla.component.css']
})
export class Apo05casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo05casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo05casillasService: Apo05casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo05casillaForm = this.th.group
      ({
        apo05casilla1: ['', Validators.required], 
        apo05casilla2: ['', Validators.required],
        apo05casilla3: ['', Validators.required],
        apo05casilla4: ['', Validators.required],
        apo05casilla5: ['', Validators.required],
        apo05casilla6: ['', Validators.required],
        apo05casilla7: ['', Validators.required],
        apo05casilla8: ['', Validators.required],
        apo05casilla9: ['', Validators.required],
        apo05casilla10: ['', Validators.required],
        apo05casilla11: ['', Validators.required],
        apo05casilla12: ['', Validators.required],
        apo05casilla13: ['', Validators.required],
        apo05casilla14: ['', Validators.required],
        apo05casilla15: ['', Validators.required],
        apo05casilla16:['', Validators.required],
        apo05casilla17: ['', Validators.required],
        apo05casilla18: ['', Validators.required],
        apo05casilla19: ['', Validators.required],
        apo05casilla20: ['', Validators.required],
        apo05casilla21: ['', Validators.required],
        apo05casilla22: ['', Validators.required],
        apo05casilla23: ['', Validators.required],
        apo05casilla24: ['', Validators.required],
        apo05casilla25: ['', Validators.required],
        apo05casilla26: ['', Validators.required],
        apo05casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo05casilla(){
    const APO05CASILLA: Apo05casilla= {
     apo05casilla1: this.apo05casillaForm.get('apo05casilla1')?.value,
     apo05casilla2: this.apo05casillaForm.get('apo05casilla2')?.value, 
     apo05casilla3: this.apo05casillaForm.get('apo05casilla3')?.value,
     apo05casilla4: this.apo05casillaForm.get('apo05casilla4')?.value,
     apo05casilla5: this.apo05casillaForm.get('apo05casilla5')?.value,
     apo05casilla6: this.apo05casillaForm.get('apo05casilla6')?.value, 
     apo05casilla7 :this.apo05casillaForm.get('apo05casilla7')?.value,
     apo05casilla8 :this.apo05casillaForm.get('apo05casilla8')?.value,
     apo05casilla9 :this.apo05casillaForm.get('apo05casilla9')?.value,
     apo05casilla10 :this.apo05casillaForm.get('apo05casilla10')?.value,
     apo05casilla11 :this.apo05casillaForm.get('apo05casilla11')?.value,
     apo05casilla12 :this.apo05casillaForm.get('apo05casilla12')?.value,
     apo05casilla13 :this.apo05casillaForm.get('apo05casilla13')?.value,
     apo05casilla14 :this.apo05casillaForm.get('apo05casilla14')?.value,
     apo05casilla15 :this.apo05casillaForm.get('apo05casilla15')?.value,
     apo05casilla16 :this.apo05casillaForm.get('apo05casilla16')?.value,
     apo05casilla17 :this.apo05casillaForm.get('apo05casilla17')?.value,
     apo05casilla18 :this.apo05casillaForm.get('apo05casilla18')?.value,
     apo05casilla19 :this.apo05casillaForm.get('apo05casilla19')?.value,
     apo05casilla20 :this.apo05casillaForm.get('apo05casilla20')?.value,
     apo05casilla21 :this.apo05casillaForm.get('apo05casilla21')?.value,
     apo05casilla22 :this.apo05casillaForm.get('apo05casilla22')?.value,
     apo05casilla23 :this.apo05casillaForm.get('apo05casilla23')?.value,
     apo05casilla24 :this.apo05casillaForm.get('apo05casilla24')?.value,
     apo05casilla25 :this.apo05casillaForm.get('apo05casilla25')?.value,
     apo05casilla26 :this.apo05casillaForm.get('apo05casilla26')?.value,
     apo05casilla27 :this.apo05casillaForm.get('apo05casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo05casillasService.editarApo05casilla(this.id,APO05CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo05raci']);
      },error => {
        console.log(error);
        this.apo05casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO05CASILLA);
      this._apo05casillasService.guardarApo05casilla(APO05CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo05raci']);
    }, error => {
      console.log(error);
      this.apo05casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo05casillasService.obtenerApo05casilla(this.id).subscribe(data =>{
        this.apo05casillaForm.setValue({
         apo05casilla1: data.apo05casilla1,
         apo05casilla2: data.apo05casilla2,
         apo05casilla3: data.apo05casilla3,
         apo05casilla4: data.apo05casilla4,
         apo05casilla5: data.apo05casilla5,
         apo05casilla6: data.apo05casilla6,
         apo05casilla7: data.apo05casilla7,
         apo05casilla8: data.apo05casilla8,
         apo05casilla9: data.apo05casilla9,
         apo05casilla10: data.apo05casilla10,
         apo05casilla11: data.apo05casilla11,
         apo05casilla12: data.apo05casilla12,
         apo05casilla13: data.apo05casilla13,
         apo05casilla14: data.apo05casilla14,
         apo05casilla15: data.apo05casilla15,
         apo05casilla16: data.apo05casilla16,
         apo05casilla17: data.apo05casilla17,
         apo05casilla18: data.apo05casilla18,
         apo05casilla19: data.apo05casilla19,
         apo05casilla20: data.apo05casilla20,
         apo05casilla21: data.apo05casilla21,
         apo05casilla22: data.apo05casilla22,
         apo05casilla23: data.apo05casilla23,
         apo05casilla24: data.apo05casilla24,
         apo05casilla25: data.apo05casilla25,
         apo05casilla26: data.apo05casilla25,
         apo05casilla27: data.apo05casilla26,

        })
      })
    }
  }
} 


