import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Racicabe01 } from 'src/app/models/raci01';
import { Racicabe01Service } from 'src/app/services/racicabe01.service';

@Component({
  selector: 'app-racicabe01',
  templateUrl: './racicabe01.component.html',
  styleUrls: ['./racicabe01.component.css']
})
export class Racicabe01Component implements OnInit {

  racicabe01Form: FormGroup;
  titulo = 'CREAR CABECERA RACI';
  id: string | null;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    private router: Router,
    private _racicabe01Services: Racicabe01Service) {
      this.racicabe01Form = this.fb.group({

      gestion1: ['', Validators.required],
      gestion2: ['', Validators.required],
      gestion3: ['', Validators.required],
      gestion4: ['', Validators.required],
      gestion5: ['', Validators.required],
      gestion6: ['', Validators.required],
      gestion7: ['', Validators.required],
      gestion8: ['', Validators.required],
      gestion9: ['', Validators.required],
      gestion10: ['', Validators.required],
      gestion11: ['', Validators.required],
      gestion12: ['', Validators.required],
      gestion13: ['', Validators.required],
      gestion14: ['', Validators.required],
      gestion15: ['', Validators.required],
      gestion16: ['', Validators.required],
      gestion17: ['', Validators.required],
      gestion18: ['', Validators.required],
      gestion19: ['', Validators.required],
      gestion20: ['', Validators.required],
      gestion21: ['', Validators.required],
      gestion22: ['', Validators.required],
      gestion23: ['', Validators.required],
      gestion24: ['', Validators.required],
      gestion25: ['', Validators.required],
      gestion26: ['', Validators.required],

  

    })
    this.id = this.aRouter.snapshot.paramMap.get('id'); }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarRacicabe01() {

    const RACICABE01: Racicabe01 = {

      gestion1: this.racicabe01Form.get('gestion1')?.value,
      gestion2: this.racicabe01Form.get('gestion2')?.value,
      gestion3: this.racicabe01Form.get('gestion3')?.value,
      gestion4: this.racicabe01Form.get('gestion4')?.value,
      gestion5: this.racicabe01Form.get('gestion5')?.value,
      gestion6: this.racicabe01Form.get('gestion6')?.value,
      gestion7: this.racicabe01Form.get('gestion7')?.value,
      gestion8: this.racicabe01Form.get('gestion8')?.value,
      gestion9: this.racicabe01Form.get('gestion9')?.value,
      gestion10: this.racicabe01Form.get('gestion10')?.value,
      gestion11: this.racicabe01Form.get('gestion11')?.value,
      gestion12: this.racicabe01Form.get('gestion12')?.value,
      gestion13: this.racicabe01Form.get('gestion13')?.value,
      gestion14: this.racicabe01Form.get('gestion14')?.value,
      gestion15: this.racicabe01Form.get('gestion15')?.value,
      gestion16: this.racicabe01Form.get('gestion16')?.value,
      gestion17: this.racicabe01Form.get('gestion17')?.value,
      gestion18: this.racicabe01Form.get('gestion18')?.value,
      gestion19: this.racicabe01Form.get('gestion19')?.value,
      gestion20: this.racicabe01Form.get('gestion20')?.value,
      gestion21: this.racicabe01Form.get('gestion21')?.value,
      gestion22: this.racicabe01Form.get('gestion22')?.value,
      gestion23: this.racicabe01Form.get('gestion23')?.value,
      gestion24: this.racicabe01Form.get('gestion24')?.value,
      gestion25: this.racicabe01Form.get('gestion25')?.value,
      gestion26: this.racicabe01Form.get('gestion26')?.value,
      

    }


    if (this.id !== null) {
      //editamos el raci01 
      this._racicabe01Services.editarRacicabe01(this.id, RACICABE01).subscribe(data => {
        this.toastr.success('El cuadro raci actualizado con exito', ' CUADRO RACI actualizado');
        this.router.navigate(['/listraci01']);
      }, error => {
        console.log(error);
        this.racicabe01Form.reset();
      })
    } else {
      //agregamos el raci01 ñaño
      console.log(RACICABE01);
      this._racicabe01Services.guardarRacicabe01(RACICABE01).subscribe(data => {
        this.toastr.success('Felicidades', 'Registrado exitosamente');
        this.router.navigate(['/listraci01']);
      }, error => {
        console.log(error);
        this.racicabe01Form.reset();
      })

    }

  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Cuadro Raci';
      this._racicabe01Services.obtenerRacicabe01(this.id).subscribe(data => {
        this.racicabe01Form.setValue({
     
          gestion1: data.gestion1,
          gestion2: data.gestion2,
          gestion3: data.gestion3,
          gestion4: data.gestion4,
          gestion5: data.gestion5,
          gestion6: data.gestion6,
          gestion7: data.gestion7,
          gestion8: data.gestion8,
          gestion9: data.gestion9,
          gestion10: data.gestion10,
          gestion11: data.gestion11,
          gestion12: data.gestion12,
          gestion13: data.gestion13,
          gestion14: data.gestion14,
          gestion15: data.gestion15,
          gestion16: data.gestion16,
          gestion17: data.gestion17,
          gestion18: data.gestion18,
          gestion19: data.gestion19,
          gestion20: data.gestion20,
          gestion21: data.gestion21,
          gestion22: data.gestion22,
          gestion23: data.gestion23,
          gestion24: data.gestion24,
          gestion25: data.gestion25,
          gestion26: data.gestion26,


        })
      })
    }
  }

}
