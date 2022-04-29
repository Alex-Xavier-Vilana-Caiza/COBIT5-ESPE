import { BAI05 } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bai05Service } from 'src/app/services/bai05.service';

@Component({
  selector: 'app-crear-bai05',
  templateUrl: './crear-bai05.component.html',
  styleUrls: ['./crear-bai05.component.css']
})
export class CrearBai05Component implements OnInit {

  bai05Form: FormGroup;
  titulo = 'Crear tabla';
  id: string | null;
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _bai05Service: Bai05Service,
              private aRouter: ActivatedRoute) {
    this.bai05Form = this.th.group({
      b1: ['', Validators.required],
      b2: ['', Validators.required],
      b3: ['', Validators.required],
      b4: ['', Validators.required],
      b5: ['', Validators.required],
      b6: ['', Validators.required],
      b7: ['', Validators.required],
      b8: ['', Validators.required],
      b9: ['', Validators.required],
      b10: ['', Validators.required],
      b11: ['', Validators.required],
      b12: ['', Validators.required],
      b13: ['', Validators.required],
      b14: ['', Validators.required],
      b15: ['', Validators.required],
      b16: ['', Validators.required],
      b17: ['', Validators.required],
      b18: ['', Validators.required],
      b19: ['', Validators.required],
      b20: ['', Validators.required],
      b21: ['', Validators.required],
      b22: ['', Validators.required],
      b23: ['', Validators.required],
      b24: ['', Validators.required],
      b25: ['', Validators.required],
      b26: ['', Validators.required],
      b27: ['', Validators.required],
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarBai05(){
    const BAI05: BAI05= {
      b1: this.bai05Form.get('b1')?.value,
      b2: this.bai05Form.get('b2')?.value,
      b3: this.bai05Form.get('b3')?.value,
      b4: this.bai05Form.get('b4')?.value,
      b5: this.bai05Form.get('b5')?.value,
      b6: this.bai05Form.get('b6')?.value,
      b7: this.bai05Form.get('b7')?.value,
      b8: this.bai05Form.get('b8')?.value,
      b9: this.bai05Form.get('b9')?.value,
      b10: this.bai05Form.get('b10')?.value,
      b11: this.bai05Form.get('b11')?.value,
      b12: this.bai05Form.get('b12')?.value,
      b13: this.bai05Form.get('b13')?.value,
      b14: this.bai05Form.get('b14')?.value,
      b15: this.bai05Form.get('b15')?.value,
      b16: this.bai05Form.get('b16')?.value,
      b17: this.bai05Form.get('b17')?.value,
      b18: this.bai05Form.get('b18')?.value,
      b19: this.bai05Form.get('b19')?.value,
      b20: this.bai05Form.get('b20')?.value,
      b21: this.bai05Form.get('b21')?.value,
      b22: this.bai05Form.get('b22')?.value,
      b23: this.bai05Form.get('b23')?.value,
      b24: this.bai05Form.get('b24')?.value,
      b25: this.bai05Form.get('b25')?.value,
      b26: this.bai05Form.get('b26')?.value,
      b27: this.bai05Form.get('b27')?.value,
     
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._bai05Service.editarBai05(this.id, BAI05).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina146']);
      },error => {
        console.log(error);
        this.bai05Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(BAI05);
      this._bai05Service.guardarBai05(BAI05).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina146']);
    }, error => {
      console.log(error);
      this.bai05Form.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._bai05Service.obtenerBai05(this.id).subscribe(data =>{
        this.bai05Form.setValue({
          b1: data.b1,
          b2: data.b2,
          b3: data.b3,
          b4: data.b4,
          b5: data.b5,
          b6: data.b6,
          b7: data.b7,
          b8: data.b8,
          b9: data.b9,
          b10: data.b10,
          b11: data.b11,
          b12: data.b12,
          b13: data.b13,
          b14: data.b14,
          b15: data.b15,
          b16: data.b16,
          b17: data.b17,
          b18: data.b18,
          b19: data.b19,
          b20: data.b20,
          b21: data.b21,
          b22: data.b22,
          b23: data.b23,
          b24: data.b24,
          b25: data.b25,
          b26: data.b26,
          b27: data.b27,
          
        })
      })
    }
  }
}
