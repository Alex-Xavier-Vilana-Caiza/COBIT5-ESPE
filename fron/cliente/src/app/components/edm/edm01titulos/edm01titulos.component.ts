import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Edm01titulo } from 'src/app/models/Edm01';
import { Edm01titulosService } from 'src/app/services/edm01titulo.service';

@Component({
  selector: 'app-edm01titulos',
  templateUrl: './edm01titulos.component.html',
  styleUrls: ['./edm01titulos.component.css']
})
export class Edm01titulosComponent implements OnInit {

  edm01tituloForm: FormGroup;
  title = 'MODIFICAR RACI';
  id: string | null;

  constructor(private edm01group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _edm01titulosService: Edm01titulosService,
    private aRouter: ActivatedRoute) { 
      this.edm01tituloForm = this.edm01group.group({
        edm01titulo1: ['', Validators.required], 
        edm01titulo2: ['', Validators.required],
        edm01titulo3: ['', Validators.required],
        edm01titulo4: ['', Validators.required],
        edm01titulo5: ['', Validators.required],
        edm01titulo6: ['', Validators.required],
        edm01titulo7: ['', Validators.required],
        edm01titulo8: ['', Validators.required],
        edm01titulo9: ['', Validators.required],
        edm01titulo10: ['', Validators.required],
        edm01titulo11: ['', Validators.required],
        edm01titulo12: ['', Validators.required],
        edm01titulo13: ['', Validators.required],
        edm01titulo14: ['', Validators.required],
        edm01titulo15: ['', Validators.required],
        edm01titulo16:['', Validators.required],
        edm01titulo17: ['', Validators.required],
        edm01titulo18: ['', Validators.required],
        edm01titulo19: ['', Validators.required],
        edm01titulo20: ['', Validators.required],
        edm01titulo21: ['', Validators.required],
        edm01titulo22: ['', Validators.required],
        edm01titulo23: ['', Validators.required],
        edm01titulo24: ['', Validators.required],
        edm01titulo25: ['', Validators.required],
        edm01titulo26: ['', Validators.required],
       })
       this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarEdm01titulo(){
    
    const TITULOEDM01: Edm01titulo = {

     edm01titulo1: this.edm01tituloForm.get('edm01titulo1')?.value,
     edm01titulo2: this.edm01tituloForm.get('edm01titulo2')?.value, 
     edm01titulo3: this.edm01tituloForm.get('edm01titulo3')?.value,
     edm01titulo4: this.edm01tituloForm.get('edm01titulo4')?.value,
     edm01titulo5: this.edm01tituloForm.get('edm01titulo5')?.value,
     edm01titulo6: this.edm01tituloForm.get('edm01titulo6')?.value, 
     edm01titulo7 :this.edm01tituloForm.get('edm01titulo7')?.value,
     edm01titulo8 :this.edm01tituloForm.get('edm01titulo8')?.value,
     edm01titulo9 :this.edm01tituloForm.get('edm01titulo9')?.value,
     edm01titulo10 :this.edm01tituloForm.get('edm01titulo10')?.value,
     edm01titulo11 :this.edm01tituloForm.get('edm01titulo11')?.value,
     edm01titulo12 :this.edm01tituloForm.get('edm01titulo12')?.value,
     edm01titulo13 :this.edm01tituloForm.get('edm01titulo13')?.value,
     edm01titulo14 :this.edm01tituloForm.get('edm01titulo14')?.value,
     edm01titulo15 :this.edm01tituloForm.get('edm01titulo15')?.value,
     edm01titulo16 :this.edm01tituloForm.get('edm01titulo16')?.value,
     edm01titulo17 :this.edm01tituloForm.get('edm01titulo17')?.value,
     edm01titulo18 :this.edm01tituloForm.get('edm01titulo18')?.value,
     edm01titulo19 :this.edm01tituloForm.get('edm01titulo19')?.value,
     edm01titulo20 :this.edm01tituloForm.get('edm01titulo20')?.value,
     edm01titulo21 :this.edm01tituloForm.get('edm01titulo21')?.value,
     edm01titulo22 :this.edm01tituloForm.get('edm01titulo22')?.value,
     edm01titulo23 :this.edm01tituloForm.get('edm01titulo23')?.value,
     edm01titulo24 :this.edm01tituloForm.get('edm01titulo24')?.value,
     edm01titulo25 :this.edm01tituloForm.get('edm01titulo25')?.value,
     edm01titulo26 :this.edm01tituloForm.get('edm01titulo26')?.value,
 
    }
    if(this.id !== null) {
     //editamos 
     this._edm01titulosService.editarEdm01titulo(this.id,TITULOEDM01).subscribe(data => {
      this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
      this.router.navigate(['/edm01tabla2']);
    },error => {
      console.log(error);
      this.edm01tituloForm.reset();
    })
  }else{
    //agregamos 
    console.log(TITULOEDM01);
    this._edm01titulosService.guardarEdm01titulo(TITULOEDM01).subscribe(data => {
     this.toastr.success('Felicidades', 'Registrado exitosamente');
     this.router.navigate(['/edm01tabla2']);
  }, error => {
    console.log(error);
    this.edm01tituloForm.reset();
  })
  }
}
  
Edit(){
  if(this.id !== null){
    this.title = 'Editar Matriz 03';
    this._edm01titulosService.obtenerEdm01titulo(this.id).subscribe(data =>{
      this.edm01tituloForm.setValue({
       edm01titulo1: data.edm01titulo1,
       edm01titulo2: data.edm01titulo2,
       edm01titulo3: data.edm01titulo3,
       edm01titulo4: data.edm01titulo4,
       edm01titulo5: data.edm01titulo5,
       edm01titulo6: data.edm01titulo6,
       edm01titulo7: data.edm01titulo7,
       edm01titulo8: data.edm01titulo8,
       edm01titulo9: data.edm01titulo9,
       edm01titulo10: data.edm01titulo10,
       edm01titulo11: data.edm01titulo11,
       edm01titulo12: data.edm01titulo12,
       edm01titulo13: data.edm01titulo13,
       edm01titulo14: data.edm01titulo14,
       edm01titulo15: data.edm01titulo15,
       edm01titulo16: data.edm01titulo16,
       edm01titulo17: data.edm01titulo17,
       edm01titulo18: data.edm01titulo18,
       edm01titulo19: data.edm01titulo19,
       edm01titulo20: data.edm01titulo20,
       edm01titulo21: data.edm01titulo21,
       edm01titulo22: data.edm01titulo22,
       edm01titulo23: data.edm01titulo23,
       edm01titulo24: data.edm01titulo24,
       edm01titulo25: data.edm01titulo25,
       edm01titulo26: data.edm01titulo26,

      })
    })
  }
}
} 
