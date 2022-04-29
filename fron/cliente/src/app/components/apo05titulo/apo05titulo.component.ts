import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo05titulo } from 'src/app/models/Apo05';
import { Apo05titulosService } from 'src/app/services/apo05titulos.service';

@Component({
  selector: 'app-apo05titulo',
  templateUrl: './apo05titulo.component.html',
  styleUrls: ['./apo05titulo.component.css']
})
export class Apo05tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo05tituloForm: FormGroup;
  id: string | null;
  constructor(private apo05group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo05titulosService: Apo05titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo05tituloForm = this.apo05group.group
      ({
        apo05titulo1: ['', Validators.required], 
        apo05titulo2: ['', Validators.required],
        apo05titulo3: ['', Validators.required],
        apo05titulo4: ['', Validators.required],
        apo05titulo5: ['', Validators.required],
        apo05titulo6: ['', Validators.required],
        apo05titulo7: ['', Validators.required],
        apo05titulo8: ['', Validators.required],
        apo05titulo9: ['', Validators.required],
        apo05titulo10: ['', Validators.required],
        apo05titulo11: ['', Validators.required],
        apo05titulo12: ['', Validators.required],
        apo05titulo13: ['', Validators.required],
        apo05titulo14: ['', Validators.required],
        apo05titulo15: ['', Validators.required],
        apo05titulo16:['', Validators.required],
        apo05titulo17: ['', Validators.required],
        apo05titulo18: ['', Validators.required],
        apo05titulo19: ['', Validators.required],
        apo05titulo20: ['', Validators.required],
        apo05titulo21: ['', Validators.required],
        apo05titulo22: ['', Validators.required],
        apo05titulo23: ['', Validators.required],
        apo05titulo24: ['', Validators.required],
        apo05titulo25: ['', Validators.required],
        apo05titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo05titulo(){
    const APO05TITULO: Apo05titulo= {
     apo05titulo1: this.apo05tituloForm.get('apo05titulo1')?.value,
     apo05titulo2: this.apo05tituloForm.get('apo05titulo2')?.value, 
     apo05titulo3: this.apo05tituloForm.get('apo05titulo3')?.value,
     apo05titulo4: this.apo05tituloForm.get('apo05titulo4')?.value,
     apo05titulo5: this.apo05tituloForm.get('apo05titulo5')?.value,
     apo05titulo6: this.apo05tituloForm.get('apo05titulo6')?.value, 
     apo05titulo7 :this.apo05tituloForm.get('apo05titulo7')?.value,
     apo05titulo8 :this.apo05tituloForm.get('apo05titulo8')?.value,
     apo05titulo9 :this.apo05tituloForm.get('apo05titulo9')?.value,
     apo05titulo10 :this.apo05tituloForm.get('apo05titulo10')?.value,
     apo05titulo11 :this.apo05tituloForm.get('apo05titulo11')?.value,
     apo05titulo12 :this.apo05tituloForm.get('apo05titulo12')?.value,
     apo05titulo13 :this.apo05tituloForm.get('apo05titulo13')?.value,
     apo05titulo14 :this.apo05tituloForm.get('apo05titulo14')?.value,
     apo05titulo15 :this.apo05tituloForm.get('apo05titulo15')?.value,
     apo05titulo16 :this.apo05tituloForm.get('apo05titulo16')?.value,
     apo05titulo17 :this.apo05tituloForm.get('apo05titulo17')?.value,
     apo05titulo18 :this.apo05tituloForm.get('apo05titulo18')?.value,
     apo05titulo19 :this.apo05tituloForm.get('apo05titulo19')?.value,
     apo05titulo20 :this.apo05tituloForm.get('apo05titulo20')?.value,
     apo05titulo21 :this.apo05tituloForm.get('apo05titulo21')?.value,
     apo05titulo22 :this.apo05tituloForm.get('apo05titulo22')?.value,
     apo05titulo23 :this.apo05tituloForm.get('apo05titulo23')?.value,
     apo05titulo24 :this.apo05tituloForm.get('apo05titulo24')?.value,
     apo05titulo25 :this.apo05tituloForm.get('apo05titulo25')?.value,
     apo05titulo26 :this.apo05tituloForm.get('apo05titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo05titulosService.editarApo05titulo(this.id,APO05TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo05raci']);
      },error => {
        console.log(error);
        this.apo05tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO05TITULO);
      this._apo05titulosService.guardarApo05titulo(APO05TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo05raci']);
    }, error => {
      console.log(error);
      this.apo05tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo05titulosService.obtenerApo05titulo(this.id).subscribe(data =>{
        this.apo05tituloForm.setValue({
         apo05titulo1: data.apo05titulo1,
         apo05titulo2: data.apo05titulo2,
         apo05titulo3: data.apo05titulo3,
         apo05titulo4: data.apo05titulo4,
         apo05titulo5: data.apo05titulo5,
         apo05titulo6: data.apo05titulo6,
         apo05titulo7: data.apo05titulo7,
         apo05titulo8: data.apo05titulo8,
         apo05titulo9: data.apo05titulo9,
         apo05titulo10: data.apo05titulo10,
         apo05titulo11: data.apo05titulo11,
         apo05titulo12: data.apo05titulo12,
         apo05titulo13: data.apo05titulo13,
         apo05titulo14: data.apo05titulo14,
         apo05titulo15: data.apo05titulo15,
         apo05titulo16: data.apo05titulo16,
         apo05titulo17: data.apo05titulo17,
         apo05titulo18: data.apo05titulo18,
         apo05titulo19: data.apo05titulo19,
         apo05titulo20: data.apo05titulo20,
         apo05titulo21: data.apo05titulo21,
         apo05titulo22: data.apo05titulo22,
         apo05titulo23: data.apo05titulo23,
         apo05titulo24: data.apo05titulo24,
         apo05titulo25: data.apo05titulo25,
         apo05titulo26: data.apo05titulo26,

        })
      })
    }
  }
} 

