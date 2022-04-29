import { Cabecerab09 } from 'src/app/models/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cabecerab09Service } from 'src/app/services/cabecerab09.service';

@Component({
  selector: 'app-crear-cabecerab09',
  templateUrl: './crear-cabecerab09.component.html',
  styleUrls: ['./crear-cabecerab09.component.css']
})
export class CrearCabecerab09Component implements OnInit {
  cabecerab09Form: FormGroup;
  titulo = 'Crear tabla';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cabecerab09Service: Cabecerab09Service,
              private aRouter: ActivatedRoute) {
    this.cabecerab09Form = this.fb.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', Validators.required],
      q6: ['', Validators.required],
      q7: ['', Validators.required],
      q8: ['', Validators.required],
      q9: ['', Validators.required],
      q10: ['', Validators.required],
      q11: ['', Validators.required],
      q12: ['', Validators.required],
      q13: ['', Validators.required],
      q14: ['', Validators.required],
      q15: ['', Validators.required],
      q16: ['', Validators.required],
      q17: ['', Validators.required],
      q18: ['', Validators.required],
      q19: ['', Validators.required],
      q20: ['', Validators.required],
      q21: ['', Validators.required],
      q22: ['', Validators.required],
      q23: ['', Validators.required],
      q24: ['', Validators.required],
      q25: ['', Validators.required],
      q26: ['', Validators.required],
     
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCabecerab09(){
    const CABECERAB09: Cabecerab09= {
      q1: this.cabecerab09Form.get('q1')?.value,
      q2: this.cabecerab09Form.get('q2')?.value,
      q3: this.cabecerab09Form.get('q3')?.value,
      q4: this.cabecerab09Form.get('q4')?.value,
      q5: this.cabecerab09Form.get('q5')?.value,
      q6: this.cabecerab09Form.get('q6')?.value,
      q7: this.cabecerab09Form.get('q7')?.value,
      q8: this.cabecerab09Form.get('q8')?.value,
      q9: this.cabecerab09Form.get('q9')?.value,
      q10: this.cabecerab09Form.get('q10')?.value,
      q11: this.cabecerab09Form.get('q11')?.value,
      q12: this.cabecerab09Form.get('q12')?.value,
      q13: this.cabecerab09Form.get('q13')?.value,
      q14: this.cabecerab09Form.get('q14')?.value,
      q15: this.cabecerab09Form.get('q15')?.value,
      q16: this.cabecerab09Form.get('q16')?.value,
      q17: this.cabecerab09Form.get('q17')?.value,
      q18: this.cabecerab09Form.get('q18')?.value,
      q19: this.cabecerab09Form.get('q19')?.value,
      q20: this.cabecerab09Form.get('q20')?.value,
      q21: this.cabecerab09Form.get('q21')?.value,
      q22: this.cabecerab09Form.get('q22')?.value,
      q23: this.cabecerab09Form.get('q23')?.value,
      q24: this.cabecerab09Form.get('q24')?.value,
      q25: this.cabecerab09Form.get('q25')?.value,
      q26: this.cabecerab09Form.get('q26')?.value,
      
     
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecerab09Service.editarCabecerab09(this.id, CABECERAB09).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina163']);
      },error => {
        console.log(error);
        this.cabecerab09Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(CABECERAB09);
      this._cabecerab09Service.guardarCabecerab09(CABECERAB09).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina163']);
    }, error => {
      console.log(error);
      this.cabecerab09Form.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar cabecera RACI';
      this._cabecerab09Service.obtenerCabecerab09(this.id).subscribe(data =>{
        this.cabecerab09Form.setValue({
          q1: data.q1,
          q2: data.q2,
          q3: data.q3,
          q4: data.q4,
          q5: data.q5,
          q6: data.q6,
          q7: data.q7,
          q8: data.q8,
          q9: data.q9,
          q10: data.q10,
          q11: data.q11,
          q12: data.q12,
          q13: data.q13,
          q14: data.q14,
          q15: data.q15,
          q16: data.q16,
          q17: data.q17,
          q18: data.q18,
          q19: data.q19,
          q20: data.q20,
          q21: data.q21,
          q22: data.q22,
          q23: data.q23,
          q24: data.q24,
          q25: data.q25,
          q26: data.q26,
          
          
        })
      })
    }
  }

}
