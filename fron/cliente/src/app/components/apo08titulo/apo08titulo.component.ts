import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo08titulo } from 'src/app/models/Apo08';
import { Apo08titulosService } from 'src/app/services/apo08titulos.service';

@Component({
  selector: 'app-apo08titulo',
  templateUrl: './apo08titulo.component.html',
  styleUrls: ['./apo08titulo.component.css']
})
export class Apo08tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo08tituloForm: FormGroup;
  id: string | null;
  constructor(private apo08group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo08titulosService: Apo08titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo08tituloForm = this.apo08group.group
      ({
        apo08titulo1: ['', Validators.required], 
        apo08titulo2: ['', Validators.required],
        apo08titulo3: ['', Validators.required],
        apo08titulo4: ['', Validators.required],
        apo08titulo5: ['', Validators.required],
        apo08titulo6: ['', Validators.required],
        apo08titulo7: ['', Validators.required],
        apo08titulo8: ['', Validators.required],
        apo08titulo9: ['', Validators.required],
        apo08titulo10: ['', Validators.required],
        apo08titulo11: ['', Validators.required],
        apo08titulo12: ['', Validators.required],
        apo08titulo13: ['', Validators.required],
        apo08titulo14: ['', Validators.required],
        apo08titulo15: ['', Validators.required],
        apo08titulo16:['', Validators.required],
        apo08titulo17: ['', Validators.required],
        apo08titulo18: ['', Validators.required],
        apo08titulo19: ['', Validators.required],
        apo08titulo20: ['', Validators.required],
        apo08titulo21: ['', Validators.required],
        apo08titulo22: ['', Validators.required],
        apo08titulo23: ['', Validators.required],
        apo08titulo24: ['', Validators.required],
        apo08titulo25: ['', Validators.required],
        apo08titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo08titulo(){
    const APO08TITULO: Apo08titulo= {
     apo08titulo1: this.apo08tituloForm.get('apo08titulo1')?.value,
     apo08titulo2: this.apo08tituloForm.get('apo08titulo2')?.value, 
     apo08titulo3: this.apo08tituloForm.get('apo08titulo3')?.value,
     apo08titulo4: this.apo08tituloForm.get('apo08titulo4')?.value,
     apo08titulo5: this.apo08tituloForm.get('apo08titulo5')?.value,
     apo08titulo6: this.apo08tituloForm.get('apo08titulo6')?.value, 
     apo08titulo7 :this.apo08tituloForm.get('apo08titulo7')?.value,
     apo08titulo8 :this.apo08tituloForm.get('apo08titulo8')?.value,
     apo08titulo9 :this.apo08tituloForm.get('apo08titulo9')?.value,
     apo08titulo10 :this.apo08tituloForm.get('apo08titulo10')?.value,
     apo08titulo11 :this.apo08tituloForm.get('apo08titulo11')?.value,
     apo08titulo12 :this.apo08tituloForm.get('apo08titulo12')?.value,
     apo08titulo13 :this.apo08tituloForm.get('apo08titulo13')?.value,
     apo08titulo14 :this.apo08tituloForm.get('apo08titulo14')?.value,
     apo08titulo15 :this.apo08tituloForm.get('apo08titulo15')?.value,
     apo08titulo16 :this.apo08tituloForm.get('apo08titulo16')?.value,
     apo08titulo17 :this.apo08tituloForm.get('apo08titulo17')?.value,
     apo08titulo18 :this.apo08tituloForm.get('apo08titulo18')?.value,
     apo08titulo19 :this.apo08tituloForm.get('apo08titulo19')?.value,
     apo08titulo20 :this.apo08tituloForm.get('apo08titulo20')?.value,
     apo08titulo21 :this.apo08tituloForm.get('apo08titulo21')?.value,
     apo08titulo22 :this.apo08tituloForm.get('apo08titulo22')?.value,
     apo08titulo23 :this.apo08tituloForm.get('apo08titulo23')?.value,
     apo08titulo24 :this.apo08tituloForm.get('apo08titulo24')?.value,
     apo08titulo25 :this.apo08tituloForm.get('apo08titulo25')?.value,
     apo08titulo26 :this.apo08tituloForm.get('apo08titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo08titulosService.editarApo08titulo(this.id,APO08TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo08raci']);
      },error => {
        console.log(error);
        this.apo08tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO08TITULO);
      this._apo08titulosService.guardarApo08titulo(APO08TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo08raci']);
    }, error => {
      console.log(error);
      this.apo08tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo08titulosService.obtenerApo08titulo(this.id).subscribe(data =>{
        this.apo08tituloForm.setValue({
         apo08titulo1: data.apo08titulo1,
         apo08titulo2: data.apo08titulo2,
         apo08titulo3: data.apo08titulo3,
         apo08titulo4: data.apo08titulo4,
         apo08titulo5: data.apo08titulo5,
         apo08titulo6: data.apo08titulo6,
         apo08titulo7: data.apo08titulo7,
         apo08titulo8: data.apo08titulo8,
         apo08titulo9: data.apo08titulo9,
         apo08titulo10: data.apo08titulo10,
         apo08titulo11: data.apo08titulo11,
         apo08titulo12: data.apo08titulo12,
         apo08titulo13: data.apo08titulo13,
         apo08titulo14: data.apo08titulo14,
         apo08titulo15: data.apo08titulo15,
         apo08titulo16: data.apo08titulo16,
         apo08titulo17: data.apo08titulo17,
         apo08titulo18: data.apo08titulo18,
         apo08titulo19: data.apo08titulo19,
         apo08titulo20: data.apo08titulo20,
         apo08titulo21: data.apo08titulo21,
         apo08titulo22: data.apo08titulo22,
         apo08titulo23: data.apo08titulo23,
         apo08titulo24: data.apo08titulo24,
         apo08titulo25: data.apo08titulo25,
         apo08titulo26: data.apo08titulo26,

        })
      })
    }
  }
} 


