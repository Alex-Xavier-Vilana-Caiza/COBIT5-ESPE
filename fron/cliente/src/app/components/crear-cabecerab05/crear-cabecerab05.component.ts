import { Cabecerab05 } from 'src/app/models/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cabecerab05Service } from 'src/app/services/cabecerab05.service';

@Component({
  selector: 'app-crear-cabecerab05',
  templateUrl: './crear-cabecerab05.component.html',
  styleUrls: ['./crear-cabecerab05.component.css']
})
export class CrearCabecerab05Component implements OnInit {
  cabecerab05Form: FormGroup;
  titulo = 'Crear tabla';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cabecerab05Service: Cabecerab05Service,
              private aRouter: ActivatedRoute) {
    this.cabecerab05Form = this.fb.group({
      m1: ['', Validators.required],
      m2: ['', Validators.required],
      m3: ['', Validators.required],
      m4: ['', Validators.required],
      m5: ['', Validators.required],
      m6: ['', Validators.required],
      m7: ['', Validators.required],
      m8: ['', Validators.required],
      m9: ['', Validators.required],
      m10: ['', Validators.required],
      m11: ['', Validators.required],
      m12: ['', Validators.required],
      m13: ['', Validators.required],
      m14: ['', Validators.required],
      m15: ['', Validators.required],
      m16: ['', Validators.required],
      m17: ['', Validators.required],
      m18: ['', Validators.required],
      m19: ['', Validators.required],
      m20: ['', Validators.required],
      m21: ['', Validators.required],
      m22: ['', Validators.required],
      m23: ['', Validators.required],
      m24: ['', Validators.required],
      m25: ['', Validators.required],
      m26: ['', Validators.required],
     
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCabecerab05(){
    const CABECERAB05: Cabecerab05= {
      m1: this.cabecerab05Form.get('m1')?.value,
      m2: this.cabecerab05Form.get('m2')?.value,
      m3: this.cabecerab05Form.get('m3')?.value,
      m4: this.cabecerab05Form.get('m4')?.value,
      m5: this.cabecerab05Form.get('m5')?.value,
      m6: this.cabecerab05Form.get('m6')?.value,
      m7: this.cabecerab05Form.get('m7')?.value,
      m8: this.cabecerab05Form.get('m8')?.value,
      m9: this.cabecerab05Form.get('m9')?.value,
      m10: this.cabecerab05Form.get('m10')?.value,
      m11: this.cabecerab05Form.get('m11')?.value,
      m12: this.cabecerab05Form.get('m12')?.value,
      m13: this.cabecerab05Form.get('m13')?.value,
      m14: this.cabecerab05Form.get('m14')?.value,
      m15: this.cabecerab05Form.get('m15')?.value,
      m16: this.cabecerab05Form.get('m16')?.value,
      m17: this.cabecerab05Form.get('m17')?.value,
      m18: this.cabecerab05Form.get('m18')?.value,
      m19: this.cabecerab05Form.get('m19')?.value,
      m20: this.cabecerab05Form.get('m20')?.value,
      m21: this.cabecerab05Form.get('m21')?.value,
      m22: this.cabecerab05Form.get('m22')?.value,
      m23: this.cabecerab05Form.get('m23')?.value,
      m24: this.cabecerab05Form.get('m24')?.value,
      m25: this.cabecerab05Form.get('m25')?.value,
      m26: this.cabecerab05Form.get('m26')?.value,
      
     
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecerab05Service.editarCabecerab05(this.id, CABECERAB05).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina146']);
      },error => {
        console.log(error);
        this.cabecerab05Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(CABECERAB05);
      this._cabecerab05Service.guardarCabecerab05(CABECERAB05).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina146']);
    }, error => {
      console.log(error);
      this.cabecerab05Form.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._cabecerab05Service.obtenerCabecerab05(this.id).subscribe(data =>{
        this.cabecerab05Form.setValue({
          m1: data.m1,
          m2: data.m2,
          m3: data.m3,
          m4: data.m4,
          m5: data.m5,
          m6: data.m6,
          m7: data.m7,
          m8: data.m8,
          m9: data.m9,
          m10: data.m10,
          m11: data.m11,
          m12: data.m12,
          m13: data.m13,
          m14: data.m14,
          m15: data.m15,
          m16: data.m16,
          m17: data.m17,
          m18: data.m18,
          m19: data.m19,
          m20: data.m20,
          m21: data.m21,
          m22: data.m22,
          m23: data.m23,
          m24: data.m24,
          m25: data.m25,
          m26: data.m26,
          
          
        })
      })
    }
  }
}
