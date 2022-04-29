import { Bai09 } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bai09Service } from 'src/app/services/bai09.service';

@Component({
  selector: 'app-crear-bai09',
  templateUrl: './crear-bai09.component.html',
  styleUrls: ['./crear-bai09.component.css']
})
export class CrearBai09Component implements OnInit {

  bai09Form: FormGroup;
  titulo = 'Crear tabla';
  id: string | null;
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _bai09Service: Bai09Service,
              private aRouter: ActivatedRoute) {
    this.bai09Form = this.th.group({
      i1: ['', Validators.required],
      i2: ['', Validators.required],
      i3: ['', Validators.required],
      i4: ['', Validators.required],
      i5: ['', Validators.required],
      i6: ['', Validators.required],
      i7: ['', Validators.required],
      i8: ['', Validators.required],
      i9: ['', Validators.required],
      i10: ['', Validators.required],
      i11: ['', Validators.required],
      i12: ['', Validators.required],
      i13: ['', Validators.required],
      i14: ['', Validators.required],
      i15: ['', Validators.required],
      i16: ['', Validators.required],
      i17: ['', Validators.required],
      i18: ['', Validators.required],
      i19: ['', Validators.required],
      i20: ['', Validators.required],
      i21: ['', Validators.required],
      i22: ['', Validators.required],
      i23: ['', Validators.required],
      i24: ['', Validators.required],
      i25: ['', Validators.required],
      i26: ['', Validators.required],
      i27: ['', Validators.required],
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarBai09(){
    const BAI09: Bai09= {
      i1: this.bai09Form.get('i1')?.value,
      i2: this.bai09Form.get('i2')?.value,
      i3: this.bai09Form.get('i3')?.value,
      i4: this.bai09Form.get('i4')?.value,
      i5: this.bai09Form.get('i5')?.value,
      i6: this.bai09Form.get('i6')?.value,
      i7: this.bai09Form.get('i7')?.value,
      i8: this.bai09Form.get('i8')?.value,
      i9: this.bai09Form.get('i9')?.value,
      i10: this.bai09Form.get('i10')?.value,
      i11: this.bai09Form.get('i11')?.value,
      i12: this.bai09Form.get('i12')?.value,
      i13: this.bai09Form.get('i13')?.value,
      i14: this.bai09Form.get('i14')?.value,
      i15: this.bai09Form.get('i15')?.value,
      i16: this.bai09Form.get('i16')?.value,
      i17: this.bai09Form.get('i17')?.value,
      i18: this.bai09Form.get('i18')?.value,
      i19: this.bai09Form.get('i19')?.value,
      i20: this.bai09Form.get('i20')?.value,
      i21: this.bai09Form.get('i21')?.value,
      i22: this.bai09Form.get('i22')?.value,
      i23: this.bai09Form.get('i23')?.value,
      i24: this.bai09Form.get('i24')?.value,
      i25: this.bai09Form.get('i25')?.value,
      i26: this.bai09Form.get('i26')?.value,
      i27: this.bai09Form.get('i27')?.value,
     
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._bai09Service.editarBai09(this.id, BAI09).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina163']);
      },error => {
        console.log(error);
        this.bai09Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(BAI09);
      this._bai09Service.guardarBai09(BAI09).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina163']);
    }, error => {
      console.log(error);
      this.bai09Form.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._bai09Service.obtenerBai09(this.id).subscribe(data =>{
        this.bai09Form.setValue({
          i1: data.i1,
          i2: data.i2,
          i3: data.i3,
          i4: data.i4,
          i5: data.i5,
          i6: data.i6,
          i7: data.i7,
          i8: data.i8,
          i9: data.i9,
          i10: data.i10,
          i11: data.i11,
          i12: data.i12,
          i13: data.i13,
          i14: data.i14,
          i15: data.i15,
          i16: data.i16,
          i17: data.i17,
          i18: data.i18,
          i19: data.i19,
          i20: data.i20,
          i21: data.i21,
          i22: data.i22,
          i23: data.i23,
          i24: data.i24,
          i25: data.i25,
          i26: data.i26,
          i27: data.i27,
          
        })
      })
    }
  }
}


