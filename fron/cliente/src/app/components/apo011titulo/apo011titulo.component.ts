import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo011titulo } from 'src/app/models/Apo011';
import { Apo011titulosService } from 'src/app/services/apo011titulos.service';

@Component({
  selector: 'app-apo011titulo',
  templateUrl: './apo011titulo.component.html',
  styleUrls: ['./apo011titulo.component.css']
})
export class Apo011tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo011tituloForm: FormGroup;
  id: string | null;
  constructor(private apo011group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo011titulosService: Apo011titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo011tituloForm = this.apo011group.group
      ({
        apo011titulo1: ['', Validators.required], 
        apo011titulo2: ['', Validators.required],
        apo011titulo3: ['', Validators.required],
        apo011titulo4: ['', Validators.required],
        apo011titulo5: ['', Validators.required],
        apo011titulo6: ['', Validators.required],
        apo011titulo7: ['', Validators.required],
        apo011titulo8: ['', Validators.required],
        apo011titulo9: ['', Validators.required],
        apo011titulo10: ['', Validators.required],
        apo011titulo11: ['', Validators.required],
        apo011titulo12: ['', Validators.required],
        apo011titulo13: ['', Validators.required],
        apo011titulo14: ['', Validators.required],
        apo011titulo15: ['', Validators.required],
        apo011titulo16:['', Validators.required],
        apo011titulo17: ['', Validators.required],
        apo011titulo18: ['', Validators.required],
        apo011titulo19: ['', Validators.required],
        apo011titulo20: ['', Validators.required],
        apo011titulo21: ['', Validators.required],
        apo011titulo22: ['', Validators.required],
        apo011titulo23: ['', Validators.required],
        apo011titulo24: ['', Validators.required],
        apo011titulo25: ['', Validators.required],
        apo011titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo011titulo(){
    const APO011TITULO: Apo011titulo= {
     apo011titulo1: this.apo011tituloForm.get('apo011titulo1')?.value,
     apo011titulo2: this.apo011tituloForm.get('apo011titulo2')?.value, 
     apo011titulo3: this.apo011tituloForm.get('apo011titulo3')?.value,
     apo011titulo4: this.apo011tituloForm.get('apo011titulo4')?.value,
     apo011titulo5: this.apo011tituloForm.get('apo011titulo5')?.value,
     apo011titulo6: this.apo011tituloForm.get('apo011titulo6')?.value, 
     apo011titulo7 :this.apo011tituloForm.get('apo011titulo7')?.value,
     apo011titulo8 :this.apo011tituloForm.get('apo011titulo8')?.value,
     apo011titulo9 :this.apo011tituloForm.get('apo011titulo9')?.value,
     apo011titulo10 :this.apo011tituloForm.get('apo011titulo10')?.value,
     apo011titulo11 :this.apo011tituloForm.get('apo011titulo11')?.value,
     apo011titulo12 :this.apo011tituloForm.get('apo011titulo12')?.value,
     apo011titulo13 :this.apo011tituloForm.get('apo011titulo13')?.value,
     apo011titulo14 :this.apo011tituloForm.get('apo011titulo14')?.value,
     apo011titulo15 :this.apo011tituloForm.get('apo011titulo15')?.value,
     apo011titulo16 :this.apo011tituloForm.get('apo011titulo16')?.value,
     apo011titulo17 :this.apo011tituloForm.get('apo011titulo17')?.value,
     apo011titulo18 :this.apo011tituloForm.get('apo011titulo18')?.value,
     apo011titulo19 :this.apo011tituloForm.get('apo011titulo19')?.value,
     apo011titulo20 :this.apo011tituloForm.get('apo011titulo20')?.value,
     apo011titulo21 :this.apo011tituloForm.get('apo011titulo21')?.value,
     apo011titulo22 :this.apo011tituloForm.get('apo011titulo22')?.value,
     apo011titulo23 :this.apo011tituloForm.get('apo011titulo23')?.value,
     apo011titulo24 :this.apo011tituloForm.get('apo011titulo24')?.value,
     apo011titulo25 :this.apo011tituloForm.get('apo011titulo25')?.value,
     apo011titulo26 :this.apo011tituloForm.get('apo011titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo011titulosService.editarApo011titulo(this.id,APO011TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo011raci']);
      },error => {
        console.log(error);
        this.apo011tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO011TITULO);
      this._apo011titulosService.guardarApo011titulo(APO011TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo011raci']);
    }, error => {
      console.log(error);
      this.apo011tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo011titulosService.obtenerApo011titulo(this.id).subscribe(data =>{
        this.apo011tituloForm.setValue({
         apo011titulo1: data.apo011titulo1,
         apo011titulo2: data.apo011titulo2,
         apo011titulo3: data.apo011titulo3,
         apo011titulo4: data.apo011titulo4,
         apo011titulo5: data.apo011titulo5,
         apo011titulo6: data.apo011titulo6,
         apo011titulo7: data.apo011titulo7,
         apo011titulo8: data.apo011titulo8,
         apo011titulo9: data.apo011titulo9,
         apo011titulo10: data.apo011titulo10,
         apo011titulo11: data.apo011titulo11,
         apo011titulo12: data.apo011titulo12,
         apo011titulo13: data.apo011titulo13,
         apo011titulo14: data.apo011titulo14,
         apo011titulo15: data.apo011titulo15,
         apo011titulo16: data.apo011titulo16,
         apo011titulo17: data.apo011titulo17,
         apo011titulo18: data.apo011titulo18,
         apo011titulo19: data.apo011titulo19,
         apo011titulo20: data.apo011titulo20,
         apo011titulo21: data.apo011titulo21,
         apo011titulo22: data.apo011titulo22,
         apo011titulo23: data.apo011titulo23,
         apo011titulo24: data.apo011titulo24,
         apo011titulo25: data.apo011titulo25,
         apo011titulo26: data.apo011titulo26,

        })
      })
    }
  }
} 



