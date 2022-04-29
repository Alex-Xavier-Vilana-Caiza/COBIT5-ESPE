import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo010titulo } from 'src/app/models/Apo010';
import { Apo010titulosService } from 'src/app/services/apo010titulos.service';

@Component({
  selector: 'app-apo010titulo',
  templateUrl: './apo010titulo.component.html',
  styleUrls: ['./apo010titulo.component.css']
})
export class Apo010tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo010tituloForm: FormGroup;
  id: string | null;
  constructor(private apo010group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo010titulosService: Apo010titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo010tituloForm = this.apo010group.group
      ({
        apo010titulo1: ['', Validators.required], 
        apo010titulo2: ['', Validators.required],
        apo010titulo3: ['', Validators.required],
        apo010titulo4: ['', Validators.required],
        apo010titulo5: ['', Validators.required],
        apo010titulo6: ['', Validators.required],
        apo010titulo7: ['', Validators.required],
        apo010titulo8: ['', Validators.required],
        apo010titulo9: ['', Validators.required],
        apo010titulo10: ['', Validators.required],
        apo010titulo11: ['', Validators.required],
        apo010titulo12: ['', Validators.required],
        apo010titulo13: ['', Validators.required],
        apo010titulo14: ['', Validators.required],
        apo010titulo15: ['', Validators.required],
        apo010titulo16:['', Validators.required],
        apo010titulo17: ['', Validators.required],
        apo010titulo18: ['', Validators.required],
        apo010titulo19: ['', Validators.required],
        apo010titulo20: ['', Validators.required],
        apo010titulo21: ['', Validators.required],
        apo010titulo22: ['', Validators.required],
        apo010titulo23: ['', Validators.required],
        apo010titulo24: ['', Validators.required],
        apo010titulo25: ['', Validators.required],
        apo010titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo010titulo(){
    const APO010TITULO: Apo010titulo= {
     apo010titulo1: this.apo010tituloForm.get('apo010titulo1')?.value,
     apo010titulo2: this.apo010tituloForm.get('apo010titulo2')?.value, 
     apo010titulo3: this.apo010tituloForm.get('apo010titulo3')?.value,
     apo010titulo4: this.apo010tituloForm.get('apo010titulo4')?.value,
     apo010titulo5: this.apo010tituloForm.get('apo010titulo5')?.value,
     apo010titulo6: this.apo010tituloForm.get('apo010titulo6')?.value, 
     apo010titulo7 :this.apo010tituloForm.get('apo010titulo7')?.value,
     apo010titulo8 :this.apo010tituloForm.get('apo010titulo8')?.value,
     apo010titulo9 :this.apo010tituloForm.get('apo010titulo9')?.value,
     apo010titulo10 :this.apo010tituloForm.get('apo010titulo10')?.value,
     apo010titulo11 :this.apo010tituloForm.get('apo010titulo11')?.value,
     apo010titulo12 :this.apo010tituloForm.get('apo010titulo12')?.value,
     apo010titulo13 :this.apo010tituloForm.get('apo010titulo13')?.value,
     apo010titulo14 :this.apo010tituloForm.get('apo010titulo14')?.value,
     apo010titulo15 :this.apo010tituloForm.get('apo010titulo15')?.value,
     apo010titulo16 :this.apo010tituloForm.get('apo010titulo16')?.value,
     apo010titulo17 :this.apo010tituloForm.get('apo010titulo17')?.value,
     apo010titulo18 :this.apo010tituloForm.get('apo010titulo18')?.value,
     apo010titulo19 :this.apo010tituloForm.get('apo010titulo19')?.value,
     apo010titulo20 :this.apo010tituloForm.get('apo010titulo20')?.value,
     apo010titulo21 :this.apo010tituloForm.get('apo010titulo21')?.value,
     apo010titulo22 :this.apo010tituloForm.get('apo010titulo22')?.value,
     apo010titulo23 :this.apo010tituloForm.get('apo010titulo23')?.value,
     apo010titulo24 :this.apo010tituloForm.get('apo010titulo24')?.value,
     apo010titulo25 :this.apo010tituloForm.get('apo010titulo25')?.value,
     apo010titulo26 :this.apo010tituloForm.get('apo010titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo010titulosService.editarApo010titulo(this.id,APO010TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo010raci']);
      },error => {
        console.log(error);
        this.apo010tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO010TITULO);
      this._apo010titulosService.guardarApo010titulo(APO010TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo010raci']);
    }, error => {
      console.log(error);
      this.apo010tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo010titulosService.obtenerApo010titulo(this.id).subscribe(data =>{
        this.apo010tituloForm.setValue({
         apo010titulo1: data.apo010titulo1,
         apo010titulo2: data.apo010titulo2,
         apo010titulo3: data.apo010titulo3,
         apo010titulo4: data.apo010titulo4,
         apo010titulo5: data.apo010titulo5,
         apo010titulo6: data.apo010titulo6,
         apo010titulo7: data.apo010titulo7,
         apo010titulo8: data.apo010titulo8,
         apo010titulo9: data.apo010titulo9,
         apo010titulo10: data.apo010titulo10,
         apo010titulo11: data.apo010titulo11,
         apo010titulo12: data.apo010titulo12,
         apo010titulo13: data.apo010titulo13,
         apo010titulo14: data.apo010titulo14,
         apo010titulo15: data.apo010titulo15,
         apo010titulo16: data.apo010titulo16,
         apo010titulo17: data.apo010titulo17,
         apo010titulo18: data.apo010titulo18,
         apo010titulo19: data.apo010titulo19,
         apo010titulo20: data.apo010titulo20,
         apo010titulo21: data.apo010titulo21,
         apo010titulo22: data.apo010titulo22,
         apo010titulo23: data.apo010titulo23,
         apo010titulo24: data.apo010titulo24,
         apo010titulo25: data.apo010titulo25,
         apo010titulo26: data.apo010titulo26,

        })
      })
    }
  }
} 



