import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo04casilla} from 'src/app/models/Apo04';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo04casillasService } from 'src/app/services/apo04casillas.service';

@Component({
  selector: 'app-apo04casilla',
  templateUrl: './apo04casilla.component.html',
  styleUrls: ['./apo04casilla.component.css']
})
export class Apo04casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo04casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo04casillasService: Apo04casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo04casillaForm = this.th.group
      ({
        apo04casilla1: ['', Validators.required], 
        apo04casilla2: ['', Validators.required],
        apo04casilla3: ['', Validators.required],
        apo04casilla4: ['', Validators.required],
        apo04casilla5: ['', Validators.required],
        apo04casilla6: ['', Validators.required],
        apo04casilla7: ['', Validators.required],
        apo04casilla8: ['', Validators.required],
        apo04casilla9: ['', Validators.required],
        apo04casilla10: ['', Validators.required],
        apo04casilla11: ['', Validators.required],
        apo04casilla12: ['', Validators.required],
        apo04casilla13: ['', Validators.required],
        apo04casilla14: ['', Validators.required],
        apo04casilla15: ['', Validators.required],
        apo04casilla16:['', Validators.required],
        apo04casilla17: ['', Validators.required],
        apo04casilla18: ['', Validators.required],
        apo04casilla19: ['', Validators.required],
        apo04casilla20: ['', Validators.required],
        apo04casilla21: ['', Validators.required],
        apo04casilla22: ['', Validators.required],
        apo04casilla23: ['', Validators.required],
        apo04casilla24: ['', Validators.required],
        apo04casilla25: ['', Validators.required],
        apo04casilla26: ['', Validators.required],
        apo04casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo04casilla(){
    const APO04CASILLA: Apo04casilla= {
     apo04casilla1: this.apo04casillaForm.get('apo04casilla1')?.value,
     apo04casilla2: this.apo04casillaForm.get('apo04casilla2')?.value, 
     apo04casilla3: this.apo04casillaForm.get('apo04casilla3')?.value,
     apo04casilla4: this.apo04casillaForm.get('apo04casilla4')?.value,
     apo04casilla5: this.apo04casillaForm.get('apo04casilla5')?.value,
     apo04casilla6: this.apo04casillaForm.get('apo04casilla6')?.value, 
     apo04casilla7 :this.apo04casillaForm.get('apo04casilla7')?.value,
     apo04casilla8 :this.apo04casillaForm.get('apo04casilla8')?.value,
     apo04casilla9 :this.apo04casillaForm.get('apo04casilla9')?.value,
     apo04casilla10 :this.apo04casillaForm.get('apo04casilla10')?.value,
     apo04casilla11 :this.apo04casillaForm.get('apo04casilla11')?.value,
     apo04casilla12 :this.apo04casillaForm.get('apo04casilla12')?.value,
     apo04casilla13 :this.apo04casillaForm.get('apo04casilla13')?.value,
     apo04casilla14 :this.apo04casillaForm.get('apo04casilla14')?.value,
     apo04casilla15 :this.apo04casillaForm.get('apo04casilla15')?.value,
     apo04casilla16 :this.apo04casillaForm.get('apo04casilla16')?.value,
     apo04casilla17 :this.apo04casillaForm.get('apo04casilla17')?.value,
     apo04casilla18 :this.apo04casillaForm.get('apo04casilla18')?.value,
     apo04casilla19 :this.apo04casillaForm.get('apo04casilla19')?.value,
     apo04casilla20 :this.apo04casillaForm.get('apo04casilla20')?.value,
     apo04casilla21 :this.apo04casillaForm.get('apo04casilla21')?.value,
     apo04casilla22 :this.apo04casillaForm.get('apo04casilla22')?.value,
     apo04casilla23 :this.apo04casillaForm.get('apo04casilla23')?.value,
     apo04casilla24 :this.apo04casillaForm.get('apo04casilla24')?.value,
     apo04casilla25 :this.apo04casillaForm.get('apo04casilla25')?.value,
     apo04casilla26 :this.apo04casillaForm.get('apo04casilla26')?.value,
     apo04casilla27 :this.apo04casillaForm.get('apo04casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo04casillasService.editarApo04casilla(this.id,APO04CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo04raci']);
      },error => {
        console.log(error);
        this.apo04casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO04CASILLA);
      this._apo04casillasService.guardarApo04casilla(APO04CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo04raci']);
    }, error => {
      console.log(error);
      this.apo04casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo04casillasService.obtenerApo04casilla(this.id).subscribe(data =>{
        this.apo04casillaForm.setValue({
         apo04casilla1: data.apo04casilla1,
         apo04casilla2: data.apo04casilla2,
         apo04casilla3: data.apo04casilla3,
         apo04casilla4: data.apo04casilla4,
         apo04casilla5: data.apo04casilla5,
         apo04casilla6: data.apo04casilla6,
         apo04casilla7: data.apo04casilla7,
         apo04casilla8: data.apo04casilla8,
         apo04casilla9: data.apo04casilla9,
         apo04casilla10: data.apo04casilla10,
         apo04casilla11: data.apo04casilla11,
         apo04casilla12: data.apo04casilla12,
         apo04casilla13: data.apo04casilla13,
         apo04casilla14: data.apo04casilla14,
         apo04casilla15: data.apo04casilla15,
         apo04casilla16: data.apo04casilla16,
         apo04casilla17: data.apo04casilla17,
         apo04casilla18: data.apo04casilla18,
         apo04casilla19: data.apo04casilla19,
         apo04casilla20: data.apo04casilla20,
         apo04casilla21: data.apo04casilla21,
         apo04casilla22: data.apo04casilla22,
         apo04casilla23: data.apo04casilla23,
         apo04casilla24: data.apo04casilla24,
         apo04casilla25: data.apo04casilla25,
         apo04casilla26: data.apo04casilla26,
         apo04casilla27: data.apo04casilla27,

        })
      })
    }
  }
} 


