import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo011casilla} from 'src/app/models/Apo011';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo011casillasService } from 'src/app/services/apo011casillas.service';

@Component({
  selector: 'app-apo011casilla',
  templateUrl: './apo011casilla.component.html',
  styleUrls: ['./apo011casilla.component.css']
})
export class Apo011casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo011casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo011casillasService: Apo011casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo011casillaForm = this.th.group
      ({
        apo011casilla1: ['', Validators.required], 
        apo011casilla2: ['', Validators.required],
        apo011casilla3: ['', Validators.required],
        apo011casilla4: ['', Validators.required],
        apo011casilla5: ['', Validators.required],
        apo011casilla6: ['', Validators.required],
        apo011casilla7: ['', Validators.required],
        apo011casilla8: ['', Validators.required],
        apo011casilla9: ['', Validators.required],
        apo011casilla10: ['', Validators.required],
        apo011casilla11: ['', Validators.required],
        apo011casilla12: ['', Validators.required],
        apo011casilla13: ['', Validators.required],
        apo011casilla14: ['', Validators.required],
        apo011casilla15: ['', Validators.required],
        apo011casilla16:['', Validators.required],
        apo011casilla17: ['', Validators.required],
        apo011casilla18: ['', Validators.required],
        apo011casilla19: ['', Validators.required],
        apo011casilla20: ['', Validators.required],
        apo011casilla21: ['', Validators.required],
        apo011casilla22: ['', Validators.required],
        apo011casilla23: ['', Validators.required],
        apo011casilla24: ['', Validators.required],
        apo011casilla25: ['', Validators.required],
        apo011casilla26: ['', Validators.required],
        apo011casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo011casilla(){
    const APO011CASILLA: Apo011casilla= {
     apo011casilla1: this.apo011casillaForm.get('apo011casilla1')?.value,
     apo011casilla2: this.apo011casillaForm.get('apo011casilla2')?.value, 
     apo011casilla3: this.apo011casillaForm.get('apo011casilla3')?.value,
     apo011casilla4: this.apo011casillaForm.get('apo011casilla4')?.value,
     apo011casilla5: this.apo011casillaForm.get('apo011casilla5')?.value,
     apo011casilla6: this.apo011casillaForm.get('apo011casilla6')?.value, 
     apo011casilla7 :this.apo011casillaForm.get('apo011casilla7')?.value,
     apo011casilla8 :this.apo011casillaForm.get('apo011casilla8')?.value,
     apo011casilla9 :this.apo011casillaForm.get('apo011casilla9')?.value,
     apo011casilla10 :this.apo011casillaForm.get('apo011casilla10')?.value,
     apo011casilla11 :this.apo011casillaForm.get('apo011casilla11')?.value,
     apo011casilla12 :this.apo011casillaForm.get('apo011casilla12')?.value,
     apo011casilla13 :this.apo011casillaForm.get('apo011casilla13')?.value,
     apo011casilla14 :this.apo011casillaForm.get('apo011casilla14')?.value,
     apo011casilla15 :this.apo011casillaForm.get('apo011casilla15')?.value,
     apo011casilla16 :this.apo011casillaForm.get('apo011casilla16')?.value,
     apo011casilla17 :this.apo011casillaForm.get('apo011casilla17')?.value,
     apo011casilla18 :this.apo011casillaForm.get('apo011casilla18')?.value,
     apo011casilla19 :this.apo011casillaForm.get('apo011casilla19')?.value,
     apo011casilla20 :this.apo011casillaForm.get('apo011casilla20')?.value,
     apo011casilla21 :this.apo011casillaForm.get('apo011casilla21')?.value,
     apo011casilla22 :this.apo011casillaForm.get('apo011casilla22')?.value,
     apo011casilla23 :this.apo011casillaForm.get('apo011casilla23')?.value,
     apo011casilla24 :this.apo011casillaForm.get('apo011casilla24')?.value,
     apo011casilla25 :this.apo011casillaForm.get('apo011casilla25')?.value,
     apo011casilla26 :this.apo011casillaForm.get('apo011casilla26')?.value,
     apo011casilla27 :this.apo011casillaForm.get('apo011casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo011casillasService.editarApo011casilla(this.id,APO011CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo011raci']);
      },error => {
        console.log(error);
        this.apo011casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO011CASILLA);
      this._apo011casillasService.guardarApo011casilla(APO011CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo011raci']);
    }, error => {
      console.log(error);
      this.apo011casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo011casillasService.obtenerApo011casilla(this.id).subscribe(data =>{
        this.apo011casillaForm.setValue({
         apo011casilla1: data.apo011casilla1,
         apo011casilla2: data.apo011casilla2,
         apo011casilla3: data.apo011casilla3,
         apo011casilla4: data.apo011casilla4,
         apo011casilla5: data.apo011casilla5,
         apo011casilla6: data.apo011casilla6,
         apo011casilla7: data.apo011casilla7,
         apo011casilla8: data.apo011casilla8,
         apo011casilla9: data.apo011casilla9,
         apo011casilla10: data.apo011casilla10,
         apo011casilla11: data.apo011casilla11,
         apo011casilla12: data.apo011casilla12,
         apo011casilla13: data.apo011casilla13,
         apo011casilla14: data.apo011casilla14,
         apo011casilla15: data.apo011casilla15,
         apo011casilla16: data.apo011casilla16,
         apo011casilla17: data.apo011casilla17,
         apo011casilla18: data.apo011casilla18,
         apo011casilla19: data.apo011casilla19,
         apo011casilla20: data.apo011casilla20,
         apo011casilla21: data.apo011casilla21,
         apo011casilla22: data.apo011casilla22,
         apo011casilla23: data.apo011casilla23,
         apo011casilla24: data.apo011casilla24,
         apo011casilla25: data.apo011casilla25,
         apo011casilla26: data.apo011casilla26,
         apo011casilla27: data.apo011casilla27,

        })
      })
    }
  }
} 



