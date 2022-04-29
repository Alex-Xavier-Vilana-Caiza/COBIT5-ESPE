import { Cabecerab03 } from 'src/app/models/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cabecerab03Service } from 'src/app/services/cabecerab03.service';

@Component({
  selector: 'app-crear-cabecerab03',
  templateUrl: './crear-cabecerab03.component.html',
  styleUrls: ['./crear-cabecerab03.component.css']
})
export class CrearCabecerab03Component implements OnInit {
  cabecerab03Form: FormGroup;
  titulo = 'Crear tabla BAI03';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cabecerab03Service: Cabecerab03Service,
              private aRouter: ActivatedRoute) {
    this.cabecerab03Form = this.fb.group({
      cab1: ['', Validators.required],
      cab2: ['', Validators.required],
      cab3: ['', Validators.required],
      cab4: ['', Validators.required],
      cab5: ['', Validators.required],
      cab6: ['', Validators.required],
      cab7: ['', Validators.required],
      cab8: ['', Validators.required],
      cab9: ['', Validators.required],
      cab10: ['', Validators.required],
      cab11: ['', Validators.required],
      cab12: ['', Validators.required],
      cab13: ['', Validators.required],
      cab14: ['', Validators.required],
      cab15: ['', Validators.required],
      cab16: ['', Validators.required],
      cab17: ['', Validators.required],
      cab18: ['', Validators.required],
      cab19: ['', Validators.required],
      cab20: ['', Validators.required],
      cab21: ['', Validators.required],
      cab22: ['', Validators.required],
      cab23: ['', Validators.required],
      cab24: ['', Validators.required],
      cab25: ['', Validators.required],
      cab26: ['', Validators.required],
     
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCabecerab03(){
    const CABECERAB03: Cabecerab03= {
      cab1: this.cabecerab03Form.get('cab1')?.value,
      cab2: this.cabecerab03Form.get('cab2')?.value,
      cab3: this.cabecerab03Form.get('cab3')?.value,
      cab4: this.cabecerab03Form.get('cab4')?.value,
      cab5: this.cabecerab03Form.get('cab5')?.value,
      cab6: this.cabecerab03Form.get('cab6')?.value,
      cab7: this.cabecerab03Form.get('cab7')?.value,
      cab8: this.cabecerab03Form.get('cab8')?.value,
      cab9: this.cabecerab03Form.get('cab9')?.value,
      cab10: this.cabecerab03Form.get('cab10')?.value,
      cab11: this.cabecerab03Form.get('cab11')?.value,
      cab12: this.cabecerab03Form.get('cab12')?.value,
      cab13: this.cabecerab03Form.get('cab13')?.value,
      cab14: this.cabecerab03Form.get('cab14')?.value,
      cab15: this.cabecerab03Form.get('cab15')?.value,
      cab16: this.cabecerab03Form.get('cab16')?.value,
      cab17: this.cabecerab03Form.get('cab17')?.value,
      cab18: this.cabecerab03Form.get('cab18')?.value,
      cab19: this.cabecerab03Form.get('cab19')?.value,
      cab20: this.cabecerab03Form.get('cab20')?.value,
      cab21: this.cabecerab03Form.get('cab21')?.value,
      cab22: this.cabecerab03Form.get('cab22')?.value,
      cab23: this.cabecerab03Form.get('cab23')?.value,
      cab24: this.cabecerab03Form.get('cab24')?.value,
      cab25: this.cabecerab03Form.get('cab25')?.value,
      cab26: this.cabecerab03Form.get('cab26')?.value,
      
     
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecerab03Service.editarCabecerab03(this.id, CABECERAB03).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina134']);
      },error => {
        console.log(error);
        this.cabecerab03Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(CABECERAB03);
      this._cabecerab03Service.guardarCabecerab03(CABECERAB03).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina134']);
    }, error => {
      console.log(error);
      this.cabecerab03Form.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._cabecerab03Service.obtenerCabecerab03(this.id).subscribe(data =>{
        this.cabecerab03Form.setValue({
          cab1: data.cab1,
          cab2: data.cab2,
          cab3: data.cab3,
          cab4: data.cab4,
          cab5: data.cab5,
          cab6: data.cab6,
          cab7: data.cab7,
          cab8: data.cab8,
          cab9: data.cab9,
          cab10: data.cab10,
          cab11: data.cab11,
          cab12: data.cab12,
          cab13: data.cab13,
          cab14: data.cab14,
          cab15: data.cab15,
          cab16: data.cab16,
          cab17: data.cab17,
          cab18: data.cab18,
          cab19: data.cab19,
          cab20: data.cab20,
          cab21: data.cab21,
          cab22: data.cab22,
          cab23: data.cab23,
          cab24: data.cab24,
          cab25: data.cab25,
          cab26: data.cab26,
          
          
        })
      })
    }
  }
}
