import { Cabecerab10 } from 'src/app/models/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cabecerab10Service } from 'src/app/services/cabecerab10.service';

@Component({
  selector: 'app-crear-cabecerab10',
  templateUrl: './crear-cabecerab10.component.html',
  styleUrls: ['./crear-cabecerab10.component.css']
})
export class CrearCabecerab10Component implements OnInit {
  cabecerab10Form: FormGroup;
  titulo = 'Crear tabla';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cabecerab10Service: Cabecerab10Service,
              private aRouter: ActivatedRoute) {
    this.cabecerab10Form = this.fb.group({
      ll1: ['', Validators.required],
      ll2: ['', Validators.required],
      ll3: ['', Validators.required],
      ll4: ['', Validators.required],
      ll5: ['', Validators.required],
      ll6: ['', Validators.required],
      ll7: ['', Validators.required],
      ll8: ['', Validators.required],
      ll9: ['', Validators.required],
      ll10: ['', Validators.required],
      ll11: ['', Validators.required],
      ll12: ['', Validators.required],
      ll13: ['', Validators.required],
      ll14: ['', Validators.required],
      ll15: ['', Validators.required],
      ll16: ['', Validators.required],
      ll17: ['', Validators.required],
      ll18: ['', Validators.required],
      ll19: ['', Validators.required],
      ll20: ['', Validators.required],
      ll21: ['', Validators.required],
      ll22: ['', Validators.required],
      ll23: ['', Validators.required],
      ll24: ['', Validators.required],
      ll25: ['', Validators.required],
      ll26: ['', Validators.required],
     
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCabecerab10(){
    const CABECERAB10: Cabecerab10= {
      ll1: this.cabecerab10Form.get('ll1')?.value,
      ll2: this.cabecerab10Form.get('ll2')?.value,
      ll3: this.cabecerab10Form.get('ll3')?.value,
      ll4: this.cabecerab10Form.get('ll4')?.value,
      ll5: this.cabecerab10Form.get('ll5')?.value,
      ll6: this.cabecerab10Form.get('ll6')?.value,
      ll7: this.cabecerab10Form.get('ll7')?.value,
      ll8: this.cabecerab10Form.get('ll8')?.value,
      ll9: this.cabecerab10Form.get('ll9')?.value,
      ll10: this.cabecerab10Form.get('ll10')?.value,
      ll11: this.cabecerab10Form.get('ll11')?.value,
      ll12: this.cabecerab10Form.get('ll12')?.value,
      ll13: this.cabecerab10Form.get('ll13')?.value,
      ll14: this.cabecerab10Form.get('ll14')?.value,
      ll15: this.cabecerab10Form.get('ll15')?.value,
      ll16: this.cabecerab10Form.get('ll16')?.value,
      ll17: this.cabecerab10Form.get('ll17')?.value,
      ll18: this.cabecerab10Form.get('ll18')?.value,
      ll19: this.cabecerab10Form.get('ll19')?.value,
      ll20: this.cabecerab10Form.get('ll20')?.value,
      ll21: this.cabecerab10Form.get('ll21')?.value,
      ll22: this.cabecerab10Form.get('ll22')?.value,
      ll23: this.cabecerab10Form.get('ll23')?.value,
      ll24: this.cabecerab10Form.get('ll24')?.value,
      ll25: this.cabecerab10Form.get('ll25')?.value,
      ll26: this.cabecerab10Form.get('ll26')?.value,
      
     
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecerab10Service.editarCabecerab10(this.id, CABECERAB10).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina167']);
      },error => {
        console.log(error);
        this.cabecerab10Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(CABECERAB10);
      this._cabecerab10Service.guardarCabecerab10(CABECERAB10).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina167']);
    }, error => {
      console.log(error);
      this.cabecerab10Form.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._cabecerab10Service.obtenerCabecerab10(this.id).subscribe(data =>{
        this.cabecerab10Form.setValue({
          ll1: data.ll1,
          ll2: data.ll2,
          ll3: data.ll3,
          ll4: data.ll4,
          ll5: data.ll5,
          ll6: data.ll6,
          ll7: data.ll7,
          ll8: data.ll8,
          ll9: data.ll9,
          ll10: data.ll10,
          ll11: data.ll11,
          ll12: data.ll12,
          ll13: data.ll13,
          ll14: data.ll14,
          ll15: data.ll15,
          ll16: data.ll16,
          ll17: data.ll17,
          ll18: data.ll18,
          ll19: data.ll19,
          ll20: data.ll20,
          ll21: data.ll21,
          ll22: data.ll22,
          ll23: data.ll23,
          ll24: data.ll24,
          ll25: data.ll25,
          ll26: data.ll26,
          
          
        })
      })
    }
  }

}


