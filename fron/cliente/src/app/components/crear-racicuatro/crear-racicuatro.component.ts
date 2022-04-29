import { Racicuatro } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RacicuatroService } from 'src/app/services/racicuatro.service';

@Component({
  selector: 'app-crear-racicuatro',
  templateUrl: './crear-racicuatro.component.html',
  styleUrls: ['./crear-racicuatro.component.css']
})
export class CrearRacicuatroComponent implements OnInit {

  racicuatroForm: FormGroup;
  titulo = 'Crear tabla';
  id: string | null;
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _racicuatroService: RacicuatroService,
              private aRouter: ActivatedRoute) {
    this.racicuatroForm = this.th.group({
      d1: ['', Validators.required],
      d2: ['', Validators.required],
      d3: ['', Validators.required],
      d4: ['', Validators.required],
      d5: ['', Validators.required],
      d6: ['', Validators.required],
      d7: ['', Validators.required],
      d8: ['', Validators.required],
      d9: ['', Validators.required],
      d10: ['', Validators.required],
      d11: ['', Validators.required],
      d12: ['', Validators.required],
      d13: ['', Validators.required],
      d14: ['', Validators.required],
      d15: ['', Validators.required],
      d16: ['', Validators.required],
      d17: ['', Validators.required],
      d18: ['', Validators.required],
      d19: ['', Validators.required],
      d20: ['', Validators.required],
      d21: ['', Validators.required],
      d22: ['', Validators.required],
      d23: ['', Validators.required],
      d24: ['', Validators.required],
      d25: ['', Validators.required],
      d26: ['', Validators.required],
      d27: ['', Validators.required],
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarRacicuatro(){
    const RACICUATRO: Racicuatro= {
      d1: this.racicuatroForm.get('d1')?.value,
      d2: this.racicuatroForm.get('d2')?.value,
      d3: this.racicuatroForm.get('d3')?.value,
      d4: this.racicuatroForm.get('d4')?.value,
      d5: this.racicuatroForm.get('d5')?.value,
      d6: this.racicuatroForm.get('d6')?.value,
      d7: this.racicuatroForm.get('d7')?.value,
      d8: this.racicuatroForm.get('d8')?.value,
      d9: this.racicuatroForm.get('d9')?.value,
      d10: this.racicuatroForm.get('d10')?.value,
      d11: this.racicuatroForm.get('d11')?.value,
      d12: this.racicuatroForm.get('d12')?.value,
      d13: this.racicuatroForm.get('d13')?.value,
      d14: this.racicuatroForm.get('d14')?.value,
      d15: this.racicuatroForm.get('d15')?.value,
      d16: this.racicuatroForm.get('d16')?.value,
      d17: this.racicuatroForm.get('d17')?.value,
      d18: this.racicuatroForm.get('d18')?.value,
      d19: this.racicuatroForm.get('d19')?.value,
      d20: this.racicuatroForm.get('d20')?.value,
      d21: this.racicuatroForm.get('d21')?.value,
      d22: this.racicuatroForm.get('d22')?.value,
      d23: this.racicuatroForm.get('d23')?.value,
      d24: this.racicuatroForm.get('d24')?.value,
      d25: this.racicuatroForm.get('d25')?.value,
      d26: this.racicuatroForm.get('d26')?.value,
      d27: this.racicuatroForm.get('d27')?.value,
     
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._racicuatroService.editarRacicuatro(this.id, RACICUATRO).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina142']);
      },error => {
        console.log(error);
        this.racicuatroForm.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(RACICUATRO);
      this._racicuatroService.guardarRacicuatro(RACICUATRO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina142']);
    }, error => {
      console.log(error);
      this.racicuatroForm.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._racicuatroService.obtenerRacicuatro(this.id).subscribe(data =>{
        this.racicuatroForm.setValue({
          d1: data.d1,
          d2: data.d2,
          d3: data.d3,
          d4: data.d4,
          d5: data.d5,
          d6: data.d6,
          d7: data.d7,
          d8: data.d8,
          d9: data.d9,
          d10: data.d10,
          d11: data.d11,
          d12: data.d12,
          d13: data.d13,
          d14: data.d14,
          d15: data.d15,
          d16: data.d16,
          d17: data.d17,
          d18: data.d18,
          d19: data.d19,
          d20: data.d20,
          d21: data.d21,
          d22: data.d22,
          d23: data.d23,
          d24: data.d24,
          d25: data.d25,
          d26: data.d26,
          d27: data.d27,
          
        })
      })
    }
  }

}
