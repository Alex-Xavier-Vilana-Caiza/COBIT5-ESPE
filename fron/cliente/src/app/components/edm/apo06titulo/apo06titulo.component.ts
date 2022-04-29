import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo06titulo } from 'src/app/models/Apo06';
import { Apo06titulosService } from 'src/app/services/apo06titulos.service';

@Component({
  selector: 'app-apo06titulo',
  templateUrl: './apo06titulo.component.html',
  styleUrls: ['./apo06titulo.component.css']
})
export class Apo06tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo06tituloForm: FormGroup;
  id: string | null;
  constructor(private apo06group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo06titulosService: Apo06titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo06tituloForm = this.apo06group.group
      ({
        apo06titulo1: ['', Validators.required], 
        apo06titulo2: ['', Validators.required],
        apo06titulo3: ['', Validators.required],
        apo06titulo4: ['', Validators.required],
        apo06titulo5: ['', Validators.required],
        apo06titulo6: ['', Validators.required],
        apo06titulo7: ['', Validators.required],
        apo06titulo8: ['', Validators.required],
        apo06titulo9: ['', Validators.required],
        apo06titulo10: ['', Validators.required],
        apo06titulo11: ['', Validators.required],
        apo06titulo12: ['', Validators.required],
        apo06titulo13: ['', Validators.required],
        apo06titulo14: ['', Validators.required],
        apo06titulo15: ['', Validators.required],
        apo06titulo16:['', Validators.required],
        apo06titulo17: ['', Validators.required],
        apo06titulo18: ['', Validators.required],
        apo06titulo19: ['', Validators.required],
        apo06titulo20: ['', Validators.required],
        apo06titulo21: ['', Validators.required],
        apo06titulo22: ['', Validators.required],
        apo06titulo23: ['', Validators.required],
        apo06titulo24: ['', Validators.required],
        apo06titulo25: ['', Validators.required],
        apo06titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo06titulo(){
    const APO06TITULO: Apo06titulo= {
     apo06titulo1: this.apo06tituloForm.get('apo06titulo1')?.value,
     apo06titulo2: this.apo06tituloForm.get('apo06titulo2')?.value, 
     apo06titulo3: this.apo06tituloForm.get('apo06titulo3')?.value,
     apo06titulo4: this.apo06tituloForm.get('apo06titulo4')?.value,
     apo06titulo5: this.apo06tituloForm.get('apo06titulo5')?.value,
     apo06titulo6: this.apo06tituloForm.get('apo06titulo6')?.value, 
     apo06titulo7 :this.apo06tituloForm.get('apo06titulo7')?.value,
     apo06titulo8 :this.apo06tituloForm.get('apo06titulo8')?.value,
     apo06titulo9 :this.apo06tituloForm.get('apo06titulo9')?.value,
     apo06titulo10 :this.apo06tituloForm.get('apo06titulo10')?.value,
     apo06titulo11 :this.apo06tituloForm.get('apo06titulo11')?.value,
     apo06titulo12 :this.apo06tituloForm.get('apo06titulo12')?.value,
     apo06titulo13 :this.apo06tituloForm.get('apo06titulo13')?.value,
     apo06titulo14 :this.apo06tituloForm.get('apo06titulo14')?.value,
     apo06titulo15 :this.apo06tituloForm.get('apo06titulo15')?.value,
     apo06titulo16 :this.apo06tituloForm.get('apo06titulo16')?.value,
     apo06titulo17 :this.apo06tituloForm.get('apo06titulo17')?.value,
     apo06titulo18 :this.apo06tituloForm.get('apo06titulo18')?.value,
     apo06titulo19 :this.apo06tituloForm.get('apo06titulo19')?.value,
     apo06titulo20 :this.apo06tituloForm.get('apo06titulo20')?.value,
     apo06titulo21 :this.apo06tituloForm.get('apo06titulo21')?.value,
     apo06titulo22 :this.apo06tituloForm.get('apo06titulo22')?.value,
     apo06titulo23 :this.apo06tituloForm.get('apo06titulo23')?.value,
     apo06titulo24 :this.apo06tituloForm.get('apo06titulo24')?.value,
     apo06titulo25 :this.apo06tituloForm.get('apo06titulo25')?.value,
     apo06titulo26 :this.apo06tituloForm.get('apo06titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo06titulosService.editarApo06titulo(this.id,APO06TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo06raci']);
      },error => {
        console.log(error);
        this.apo06tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO06TITULO);
      this._apo06titulosService.guardarApo06titulo(APO06TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo06raci']);
    }, error => {
      console.log(error);
      this.apo06tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo06titulosService.obtenerApo06titulo(this.id).subscribe(data =>{
        this.apo06tituloForm.setValue({
         apo06titulo1: data.apo06titulo1,
         apo06titulo2: data.apo06titulo2,
         apo06titulo3: data.apo06titulo3,
         apo06titulo4: data.apo06titulo4,
         apo06titulo5: data.apo06titulo5,
         apo06titulo6: data.apo06titulo6,
         apo06titulo7: data.apo06titulo7,
         apo06titulo8: data.apo06titulo8,
         apo06titulo9: data.apo06titulo9,
         apo06titulo10: data.apo06titulo10,
         apo06titulo11: data.apo06titulo11,
         apo06titulo12: data.apo06titulo12,
         apo06titulo13: data.apo06titulo13,
         apo06titulo14: data.apo06titulo14,
         apo06titulo15: data.apo06titulo15,
         apo06titulo16: data.apo06titulo16,
         apo06titulo17: data.apo06titulo17,
         apo06titulo18: data.apo06titulo18,
         apo06titulo19: data.apo06titulo19,
         apo06titulo20: data.apo06titulo20,
         apo06titulo21: data.apo06titulo21,
         apo06titulo22: data.apo06titulo22,
         apo06titulo23: data.apo06titulo23,
         apo06titulo24: data.apo06titulo24,
         apo06titulo25: data.apo06titulo25,
         apo06titulo26: data.apo06titulo26,

        })
      })
    }
  }
} 
