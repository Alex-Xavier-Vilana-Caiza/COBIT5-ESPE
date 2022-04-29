import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Edm05titulo } from 'src/app/models/Edm05';
import { Edm05titulosService } from 'src/app/services/edm05titulo.service';

@Component({
  selector: 'app-edm05titulos',
  templateUrl: './edm05titulos.component.html',
  styleUrls: ['./edm05titulos.component.css']
})
export class Edm05titulosComponent implements OnInit {

  edm05tituloForm: FormGroup;
  title = 'MODIFICAR RACI';
  id: string | null;

  constructor(private edm05group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _edm05titulosService: Edm05titulosService,
    private aRouter: ActivatedRoute) { 
      this.edm05tituloForm = this.edm05group.group({
        edm05titulo1: ['', Validators.required], 
        edm05titulo2: ['', Validators.required],
        edm05titulo3: ['', Validators.required],
        edm05titulo4: ['', Validators.required],
        edm05titulo5: ['', Validators.required],
        edm05titulo6: ['', Validators.required],
        edm05titulo7: ['', Validators.required],
        edm05titulo8: ['', Validators.required],
        edm05titulo9: ['', Validators.required],
        edm05titulo10: ['', Validators.required],
        edm05titulo11: ['', Validators.required],
        edm05titulo12: ['', Validators.required],
        edm05titulo13: ['', Validators.required],
        edm05titulo14: ['', Validators.required],
        edm05titulo15: ['', Validators.required],
        edm05titulo16:['', Validators.required],
        edm05titulo17: ['', Validators.required],
        edm05titulo18: ['', Validators.required],
        edm05titulo19: ['', Validators.required],
        edm05titulo20: ['', Validators.required],
        edm05titulo21: ['', Validators.required],
        edm05titulo22: ['', Validators.required],
        edm05titulo23: ['', Validators.required],
        edm05titulo24: ['', Validators.required],
        edm05titulo25: ['', Validators.required],
        edm05titulo26: ['', Validators.required],
       })
       this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarEdm05titulo(){
    
    const TITULOEDM05: Edm05titulo = {

      edm05titulo1: this.edm05tituloForm.get('edm05titulo1')?.value,
     edm05titulo2: this.edm05tituloForm.get('edm05titulo2')?.value, 
     edm05titulo3: this.edm05tituloForm.get('edm05titulo3')?.value,
     edm05titulo4: this.edm05tituloForm.get('edm05titulo4')?.value,
     edm05titulo5: this.edm05tituloForm.get('edm05titulo5')?.value,
     edm05titulo6: this.edm05tituloForm.get('edm05titulo6')?.value, 
     edm05titulo7 :this.edm05tituloForm.get('edm05titulo7')?.value,
     edm05titulo8 :this.edm05tituloForm.get('edm05titulo8')?.value,
     edm05titulo9 :this.edm05tituloForm.get('edm05titulo9')?.value,
     edm05titulo10 :this.edm05tituloForm.get('edm05titulo10')?.value,
     edm05titulo11 :this.edm05tituloForm.get('edm05titulo11')?.value,
     edm05titulo12 :this.edm05tituloForm.get('edm05titulo12')?.value,
     edm05titulo13 :this.edm05tituloForm.get('edm05titulo13')?.value,
     edm05titulo14 :this.edm05tituloForm.get('edm05titulo14')?.value,
     edm05titulo15 :this.edm05tituloForm.get('edm05titulo15')?.value,
     edm05titulo16 :this.edm05tituloForm.get('edm05titulo16')?.value,
     edm05titulo17 :this.edm05tituloForm.get('edm05titulo17')?.value,
     edm05titulo18 :this.edm05tituloForm.get('edm05titulo18')?.value,
     edm05titulo19 :this.edm05tituloForm.get('edm05titulo19')?.value,
     edm05titulo20 :this.edm05tituloForm.get('edm05titulo20')?.value,
     edm05titulo21 :this.edm05tituloForm.get('edm05titulo21')?.value,
     edm05titulo22 :this.edm05tituloForm.get('edm05titulo22')?.value,
     edm05titulo23 :this.edm05tituloForm.get('edm05titulo23')?.value,
     edm05titulo24 :this.edm05tituloForm.get('edm05titulo24')?.value,
     edm05titulo25 :this.edm05tituloForm.get('edm05titulo25')?.value,
     edm05titulo26 :this.edm05tituloForm.get('edm05titulo26')?.value,
 
    }
    if(this.id !== null) {
      //editamos el producto 
      this._edm05titulosService.editarEdm05titulo(this.id, TITULOEDM05).subscribe(data => {
        this.toastr.success('RACI EDM05 actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/']);
      },error => {
        console.log(error);
        this.edm05tituloForm.reset();
      })
    }else{
    console.log(TITULOEDM05);
    this._edm05titulosService.guardarEdm05titulo(TITULOEDM05).subscribe(data => {
    this.toastr.info('Felicidades', 'Registrado exitosamente');
    this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.edm05tituloForm.reset();
    })
  }
}
  
  Edit(){
    if(this.id !== null){
      this.title = 'MODIFICAR RACI';
      this._edm05titulosService.obtenerEdm05titulo(this.id).subscribe(data =>{
        this.edm05tituloForm.setValue({
          edm05titulo1: data.edm05titulo1,
       edm05titulo2: data.edm05titulo2,
       edm05titulo3: data.edm05titulo3,
       edm05titulo4: data.edm05titulo4,
       edm05titulo5: data.edm05titulo5,
       edm05titulo6: data.edm05titulo6,
       edm05titulo7: data.edm05titulo7,
       edm05titulo8: data.edm05titulo8,
       edm05titulo9: data.edm05titulo9,
       edm05titulo10: data.edm05titulo10,
       edm05titulo11: data.edm05titulo11,
       edm05titulo12: data.edm05titulo12,
       edm05titulo13: data.edm05titulo13,
       edm05titulo14: data.edm05titulo14,
       edm05titulo15: data.edm05titulo15,
       edm05titulo16: data.edm05titulo16,
       edm05titulo17: data.edm05titulo17,
       edm05titulo18: data.edm05titulo18,
       edm05titulo19: data.edm05titulo19,
       edm05titulo20: data.edm05titulo20,
       edm05titulo21: data.edm05titulo21,
       edm05titulo22: data.edm05titulo22,
       edm05titulo23: data.edm05titulo23,
       edm05titulo24: data.edm05titulo24,
       edm05titulo25: data.edm05titulo25,
       edm05titulo26: data.edm05titulo26,
        })
      })
    }
  }
}
