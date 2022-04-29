import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo07casilla} from 'src/app/models/Apo07';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo07casillasService } from 'src/app/services/apo07casillas.service';

@Component({
  selector: 'app-apo07casilla',
  templateUrl: './apo07casilla.component.html',
  styleUrls: ['./apo07casilla.component.css']
})
export class Apo07casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo07casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo07casillasService: Apo07casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo07casillaForm = this.th.group
      ({
        apo07casilla1: ['', Validators.required], 
        apo07casilla2: ['', Validators.required],
        apo07casilla3: ['', Validators.required],
        apo07casilla4: ['', Validators.required],
        apo07casilla5: ['', Validators.required],
        apo07casilla6: ['', Validators.required],
        apo07casilla7: ['', Validators.required],
        apo07casilla8: ['', Validators.required],
        apo07casilla9: ['', Validators.required],
        apo07casilla10: ['', Validators.required],
        apo07casilla11: ['', Validators.required],
        apo07casilla12: ['', Validators.required],
        apo07casilla13: ['', Validators.required],
        apo07casilla14: ['', Validators.required],
        apo07casilla15: ['', Validators.required],
        apo07casilla16:['', Validators.required],
        apo07casilla17: ['', Validators.required],
        apo07casilla18: ['', Validators.required],
        apo07casilla19: ['', Validators.required],
        apo07casilla20: ['', Validators.required],
        apo07casilla21: ['', Validators.required],
        apo07casilla22: ['', Validators.required],
        apo07casilla23: ['', Validators.required],
        apo07casilla24: ['', Validators.required],
        apo07casilla25: ['', Validators.required],
        apo07casilla26: ['', Validators.required],
        apo07casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo07casilla(){
    const APO07CASILLA: Apo07casilla= {
     apo07casilla1: this.apo07casillaForm.get('apo07casilla1')?.value,
     apo07casilla2: this.apo07casillaForm.get('apo07casilla2')?.value, 
     apo07casilla3: this.apo07casillaForm.get('apo07casilla3')?.value,
     apo07casilla4: this.apo07casillaForm.get('apo07casilla4')?.value,
     apo07casilla5: this.apo07casillaForm.get('apo07casilla5')?.value,
     apo07casilla6: this.apo07casillaForm.get('apo07casilla6')?.value, 
     apo07casilla7 :this.apo07casillaForm.get('apo07casilla7')?.value,
     apo07casilla8 :this.apo07casillaForm.get('apo07casilla8')?.value,
     apo07casilla9 :this.apo07casillaForm.get('apo07casilla9')?.value,
     apo07casilla10 :this.apo07casillaForm.get('apo07casilla10')?.value,
     apo07casilla11 :this.apo07casillaForm.get('apo07casilla11')?.value,
     apo07casilla12 :this.apo07casillaForm.get('apo07casilla12')?.value,
     apo07casilla13 :this.apo07casillaForm.get('apo07casilla13')?.value,
     apo07casilla14 :this.apo07casillaForm.get('apo07casilla14')?.value,
     apo07casilla15 :this.apo07casillaForm.get('apo07casilla15')?.value,
     apo07casilla16 :this.apo07casillaForm.get('apo07casilla16')?.value,
     apo07casilla17 :this.apo07casillaForm.get('apo07casilla17')?.value,
     apo07casilla18 :this.apo07casillaForm.get('apo07casilla18')?.value,
     apo07casilla19 :this.apo07casillaForm.get('apo07casilla19')?.value,
     apo07casilla20 :this.apo07casillaForm.get('apo07casilla20')?.value,
     apo07casilla21 :this.apo07casillaForm.get('apo07casilla21')?.value,
     apo07casilla22 :this.apo07casillaForm.get('apo07casilla22')?.value,
     apo07casilla23 :this.apo07casillaForm.get('apo07casilla23')?.value,
     apo07casilla24 :this.apo07casillaForm.get('apo07casilla24')?.value,
     apo07casilla25 :this.apo07casillaForm.get('apo07casilla25')?.value,
     apo07casilla26 :this.apo07casillaForm.get('apo07casilla26')?.value,
     apo07casilla27 :this.apo07casillaForm.get('apo07casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo07casillasService.editarApo07casilla(this.id,APO07CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo07raci']);
      },error => {
        console.log(error);
        this.apo07casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO07CASILLA);
      this._apo07casillasService.guardarApo07casilla(APO07CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo07raci']);
    }, error => {
      console.log(error);
      this.apo07casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo07casillasService.obtenerApo07casilla(this.id).subscribe(data =>{
        this.apo07casillaForm.setValue({
         apo07casilla1: data.apo07casilla1,
         apo07casilla2: data.apo07casilla2,
         apo07casilla3: data.apo07casilla3,
         apo07casilla4: data.apo07casilla4,
         apo07casilla5: data.apo07casilla5,
         apo07casilla6: data.apo07casilla6,
         apo07casilla7: data.apo07casilla7,
         apo07casilla8: data.apo07casilla8,
         apo07casilla9: data.apo07casilla9,
         apo07casilla10: data.apo07casilla10,
         apo07casilla11: data.apo07casilla11,
         apo07casilla12: data.apo07casilla12,
         apo07casilla13: data.apo07casilla13,
         apo07casilla14: data.apo07casilla14,
         apo07casilla15: data.apo07casilla15,
         apo07casilla16: data.apo07casilla16,
         apo07casilla17: data.apo07casilla17,
         apo07casilla18: data.apo07casilla18,
         apo07casilla19: data.apo07casilla19,
         apo07casilla20: data.apo07casilla20,
         apo07casilla21: data.apo07casilla21,
         apo07casilla22: data.apo07casilla22,
         apo07casilla23: data.apo07casilla23,
         apo07casilla24: data.apo07casilla24,
         apo07casilla25: data.apo07casilla25,
         apo07casilla26: data.apo07casilla26,
         apo07casilla27: data.apo07casilla27,

        })
      })
    }
  }
} 


