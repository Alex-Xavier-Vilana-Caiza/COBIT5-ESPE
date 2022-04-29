import { Bai10 } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bai10Service } from 'src/app/services/bai10.service';

@Component({
  selector: 'app-crear-bai10',
  templateUrl: './crear-bai10.component.html',
  styleUrls: ['./crear-bai10.component.css']
})
export class CrearBai10Component implements OnInit {

  bai10Form: FormGroup;
  titulo = 'Crear tabla';
  id: string | null;
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _bai10Service: Bai10Service,
              private aRouter: ActivatedRoute) {
    this.bai10Form = this.th.group({
      z1: ['', Validators.required],
      z2: ['', Validators.required],
      z3: ['', Validators.required],
      z4: ['', Validators.required],
      z5: ['', Validators.required],
      z6: ['', Validators.required],
      z7: ['', Validators.required],
      z8: ['', Validators.required],
      z9: ['', Validators.required],
      z10: ['', Validators.required],
      z11: ['', Validators.required],
      z12: ['', Validators.required],
      z13: ['', Validators.required],
      z14: ['', Validators.required],
      z15: ['', Validators.required],
      z16: ['', Validators.required],
      z17: ['', Validators.required],
      z18: ['', Validators.required],
      z19: ['', Validators.required],
      z20: ['', Validators.required],
      z21: ['', Validators.required],
      z22: ['', Validators.required],
      z23: ['', Validators.required],
      z24: ['', Validators.required],
      z25: ['', Validators.required],
      z26: ['', Validators.required],
      z27: ['', Validators.required],
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarBai10(){
    const Bai10: Bai10= {
      z1: this.bai10Form.get('z1')?.value,
      z2: this.bai10Form.get('z2')?.value,
      z3: this.bai10Form.get('z3')?.value,
      z4: this.bai10Form.get('z4')?.value,
      z5: this.bai10Form.get('z5')?.value,
      z6: this.bai10Form.get('z6')?.value,
      z7: this.bai10Form.get('z7')?.value,
      z8: this.bai10Form.get('z8')?.value,
      z9: this.bai10Form.get('z9')?.value,
      z10: this.bai10Form.get('z10')?.value,
      z11: this.bai10Form.get('z11')?.value,
      z12: this.bai10Form.get('z12')?.value,
      z13: this.bai10Form.get('z13')?.value,
      z14: this.bai10Form.get('z14')?.value,
      z15: this.bai10Form.get('z15')?.value,
      z16: this.bai10Form.get('z16')?.value,
      z17: this.bai10Form.get('z17')?.value,
      z18: this.bai10Form.get('z18')?.value,
      z19: this.bai10Form.get('z19')?.value,
      z20: this.bai10Form.get('z20')?.value,
      z21: this.bai10Form.get('z21')?.value,
      z22: this.bai10Form.get('z22')?.value,
      z23: this.bai10Form.get('z23')?.value,
      z24: this.bai10Form.get('z24')?.value,
      z25: this.bai10Form.get('z25')?.value,
      z26: this.bai10Form.get('z26')?.value,
      z27: this.bai10Form.get('z27')?.value,
     
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._bai10Service.editarBai10(this.id, Bai10).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina167']);
      },error => {
        console.log(error);
        this.bai10Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(Bai10);
      this._bai10Service.guardarBai10(Bai10).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina167']);
    }, error => {
      console.log(error);
      this.bai10Form.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._bai10Service.obtenerBai10(this.id).subscribe(data =>{
        this.bai10Form.setValue({
          z1: data.z1,
          z2: data.z2,
          z3: data.z3,
          z4: data.z4,
          z5: data.z5,
          z6: data.z6,
          z7: data.z7,
          z8: data.z8,
          z9: data.z9,
          z10: data.z10,
          z11: data.z11,
          z12: data.z12,
          z13: data.z13,
          z14: data.z14,
          z15: data.z15,
          z16: data.z16,
          z17: data.z17,
          z18: data.z18,
          z19: data.z19,
          z20: data.z20,
          z21: data.z21,
          z22: data.z22,
          z23: data.z23,
          z24: data.z24,
          z25: data.z25,
          z26: data.z26,
          z27: data.z27,
          
        })
      })
    }
  }

}
