import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Apo012casilla} from 'src/app/models/Apo012';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apo012casillasService } from 'src/app/services/apo012casillas.service';

@Component({
  selector: 'app-apo012casilla',
  templateUrl: './apo012casilla.component.html',
  styleUrls: ['./apo012casilla.component.css']
})
export class Apo012casillaComponent implements OnInit {
  title = 'CREAR TABLA EDM04'; 
  apo012casillaForm: FormGroup;
  id: string | null;
  constructor(private th: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo012casillasService: Apo012casillasService,
    private aRouter: ActivatedRoute) { 
      this.apo012casillaForm = this.th.group
      ({
        apo012casilla1: ['', Validators.required], 
        apo012casilla2: ['', Validators.required],
        apo012casilla3: ['', Validators.required],
        apo012casilla4: ['', Validators.required],
        apo012casilla5: ['', Validators.required],
        apo012casilla6: ['', Validators.required],
        apo012casilla7: ['', Validators.required],
        apo012casilla8: ['', Validators.required],
        apo012casilla9: ['', Validators.required],
        apo012casilla10: ['', Validators.required],
        apo012casilla11: ['', Validators.required],
        apo012casilla12: ['', Validators.required],
        apo012casilla13: ['', Validators.required],
        apo012casilla14: ['', Validators.required],
        apo012casilla15: ['', Validators.required],
        apo012casilla16:['', Validators.required],
        apo012casilla17: ['', Validators.required],
        apo012casilla18: ['', Validators.required],
        apo012casilla19: ['', Validators.required],
        apo012casilla20: ['', Validators.required],
        apo012casilla21: ['', Validators.required],
        apo012casilla22: ['', Validators.required],
        apo012casilla23: ['', Validators.required],
        apo012casilla24: ['', Validators.required],
        apo012casilla25: ['', Validators.required],
        apo012casilla26: ['', Validators.required],
        apo012casilla27: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarApo012casilla(){
    const APO012CASILLA: Apo012casilla= {
     apo012casilla1: this.apo012casillaForm.get('apo012casilla1')?.value,
     apo012casilla2: this.apo012casillaForm.get('apo012casilla2')?.value, 
     apo012casilla3: this.apo012casillaForm.get('apo012casilla3')?.value,
     apo012casilla4: this.apo012casillaForm.get('apo012casilla4')?.value,
     apo012casilla5: this.apo012casillaForm.get('apo012casilla5')?.value,
     apo012casilla6: this.apo012casillaForm.get('apo012casilla6')?.value, 
     apo012casilla7 :this.apo012casillaForm.get('apo012casilla7')?.value,
     apo012casilla8 :this.apo012casillaForm.get('apo012casilla8')?.value,
     apo012casilla9 :this.apo012casillaForm.get('apo012casilla9')?.value,
     apo012casilla10 :this.apo012casillaForm.get('apo012casilla10')?.value,
     apo012casilla11 :this.apo012casillaForm.get('apo012casilla11')?.value,
     apo012casilla12 :this.apo012casillaForm.get('apo012casilla12')?.value,
     apo012casilla13 :this.apo012casillaForm.get('apo012casilla13')?.value,
     apo012casilla14 :this.apo012casillaForm.get('apo012casilla14')?.value,
     apo012casilla15 :this.apo012casillaForm.get('apo012casilla15')?.value,
     apo012casilla16 :this.apo012casillaForm.get('apo012casilla16')?.value,
     apo012casilla17 :this.apo012casillaForm.get('apo012casilla17')?.value,
     apo012casilla18 :this.apo012casillaForm.get('apo012casilla18')?.value,
     apo012casilla19 :this.apo012casillaForm.get('apo012casilla19')?.value,
     apo012casilla20 :this.apo012casillaForm.get('apo012casilla20')?.value,
     apo012casilla21 :this.apo012casillaForm.get('apo012casilla21')?.value,
     apo012casilla22 :this.apo012casillaForm.get('apo012casilla22')?.value,
     apo012casilla23 :this.apo012casillaForm.get('apo012casilla23')?.value,
     apo012casilla24 :this.apo012casillaForm.get('apo012casilla24')?.value,
     apo012casilla25 :this.apo012casillaForm.get('apo012casilla25')?.value,
     apo012casilla26 :this.apo012casillaForm.get('apo012casilla26')?.value,
     apo012casilla27 :this.apo012casillaForm.get('apo012casilla27')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo012casillasService.editarApo012casilla(this.id,APO012CASILLA).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['Apo012raci']);
      },error => {
        console.log(error);
        this.apo012casillaForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO012CASILLA);
      this._apo012casillasService.guardarApo012casilla(APO012CASILLA).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['Apo012raci']);
    }, error => {
      console.log(error);
      this.apo012casillaForm.reset();
    })
 
  }
 
  }
 
  esEditar(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo012casillasService.obtenerApo012casilla(this.id).subscribe(data =>{
        this.apo012casillaForm.setValue({
         apo012casilla1: data.apo012casilla1,
         apo012casilla2: data.apo012casilla2,
         apo012casilla3: data.apo012casilla3,
         apo012casilla4: data.apo012casilla4,
         apo012casilla5: data.apo012casilla5,
         apo012casilla6: data.apo012casilla6,
         apo012casilla7: data.apo012casilla7,
         apo012casilla8: data.apo012casilla8,
         apo012casilla9: data.apo012casilla9,
         apo012casilla10: data.apo012casilla10,
         apo012casilla11: data.apo012casilla11,
         apo012casilla12: data.apo012casilla12,
         apo012casilla13: data.apo012casilla13,
         apo012casilla14: data.apo012casilla14,
         apo012casilla15: data.apo012casilla15,
         apo012casilla16: data.apo012casilla16,
         apo012casilla17: data.apo012casilla17,
         apo012casilla18: data.apo012casilla18,
         apo012casilla19: data.apo012casilla19,
         apo012casilla20: data.apo012casilla20,
         apo012casilla21: data.apo012casilla21,
         apo012casilla22: data.apo012casilla22,
         apo012casilla23: data.apo012casilla23,
         apo012casilla24: data.apo012casilla24,
         apo012casilla25: data.apo012casilla25,
         apo012casilla26: data.apo012casilla26,
         apo012casilla27: data.apo012casilla27,

        })
      })
    }
  }
} 



