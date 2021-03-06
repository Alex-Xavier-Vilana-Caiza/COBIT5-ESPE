import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Raci06Service } from 'src/app/services/raci06.service';
import { Raci06 } from './../../models/raci06';

@Component({
  selector: 'app-raci06',
  templateUrl: './raci06.component.html',
  styleUrls: ['./raci06.component.css']
})
export class Raci06Component implements OnInit {

  raci06Form: FormGroup;
  titulo = 'CREAR CUADRO RACI';
  id: string | null;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    private router: Router,
    private _raci06Services: Raci06Service
  ) {
    this.raci06Form = this.fb.group({
      dss: ['', Validators.required],
      dss1: ['', Validators.required],
      dss2: ['', Validators.required],
      dss3: ['', Validators.required],
      dss4: ['', Validators.required],
      dss5: ['', Validators.required],
      dss6: ['', Validators.required],
      dss7: ['', Validators.required],
      dss8: ['', Validators.required],
      dss9: ['', Validators.required],
      dss10: ['', Validators.required],
      dss11: ['', Validators.required],
      dss12: ['', Validators.required],
      dss13: ['', Validators.required],
      dss14: ['', Validators.required],
      dss15: ['', Validators.required],
      dss16: ['', Validators.required],
      dss17: ['', Validators.required],
      dss18: ['', Validators.required],
      dss19: ['', Validators.required],
      dss20: ['', Validators.required],
      dss21: ['', Validators.required],
      dss22: ['', Validators.required],
      dss23: ['', Validators.required],
      dss24: ['', Validators.required],
      dss25: ['', Validators.required],
      dss26: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarRaci06() {

    const RACI06: Raci06 = {

      dss: this.raci06Form.get('dss')?.value,
      dss1: this.raci06Form.get('dss1')?.value,
      dss2: this.raci06Form.get('dss2')?.value,
      dss3: this.raci06Form.get('dss3')?.value,
      dss4: this.raci06Form.get('dss4')?.value,
      dss5: this.raci06Form.get('dss5')?.value,
      dss6: this.raci06Form.get('dss6')?.value,
      dss7: this.raci06Form.get('dss7')?.value,
      dss8: this.raci06Form.get('dss8')?.value,
      dss9: this.raci06Form.get('dss9')?.value,
      dss10: this.raci06Form.get('dss10')?.value,
      dss11: this.raci06Form.get('dss11')?.value,
      dss12: this.raci06Form.get('dss12')?.value,
      dss13: this.raci06Form.get('dss13')?.value,
      dss14: this.raci06Form.get('dss14')?.value,
      dss15: this.raci06Form.get('dss15')?.value,
      dss16: this.raci06Form.get('dss16')?.value,
      dss17: this.raci06Form.get('dss17')?.value,
      dss18: this.raci06Form.get('dss18')?.value,
      dss19: this.raci06Form.get('dss19')?.value,
      dss20: this.raci06Form.get('dss20')?.value,
      dss21: this.raci06Form.get('dss21')?.value,
      dss22: this.raci06Form.get('dss22')?.value,
      dss23: this.raci06Form.get('dss23')?.value,
      dss24: this.raci06Form.get('dss24')?.value,
      dss25: this.raci06Form.get('dss25')?.value,
      dss26: this.raci06Form.get('dss26')?.value,

    }


    if (this.id !== null) {
      //editamos el raci06 
      this._raci06Services.editarRaci06(this.id, RACI06).subscribe(data => {
        this.toastr.success('El cuadro raci actualizado con exito', ' CUADRO RACI actualizado');
        this.router.navigate(['/listraci06']);
      }, error => {
        console.log(error);
        this.raci06Form.reset();
      })
    } else {
      //agregamos el raci06 ??a??o
      console.log(RACI06);
      this._raci06Services.guardarRaci06(RACI06).subscribe(data => {
        this.toastr.success('Felicidades', 'Registrado exitosamente');
        this.router.navigate(['/listraci06']);
      }, error => {
        console.log(error);
        this.raci06Form.reset();
      })

    }

  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Cuadro Raci';
      this._raci06Services.obtenerRaci06(this.id).subscribe(data => {
        this.raci06Form.setValue({

          dss: data.dss,
          dss1: data.dss1,
          dss2: data.dss2,
          dss3: data.dss3,
          dss4: data.dss4,
          dss5: data.dss5,
          dss6: data.dss6,
          dss7: data.dss7,
          dss8: data.dss8,
          dss9: data.dss9,
          dss10: data.dss10,
          dss11: data.dss11,
          dss12: data.dss12,
          dss13: data.dss13,
          dss14: data.dss14,
          dss15: data.dss15,
          dss16: data.dss16,
          dss17: data.dss17,
          dss18: data.dss18,
          dss19: data.dss19,
          dss20: data.dss20,
          dss21: data.dss21,
          dss22: data.dss22,
          dss23: data.dss23,
          dss24: data.dss24,
          dss25: data.dss25,
          dss26: data.dss26
        })
      })
    }
  }


}
