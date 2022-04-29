import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo04titulo } from 'src/app/models/Apo04';
import { Apo04titulosService } from 'src/app/services/apo04titulos.service';

@Component({
  selector: 'app-apo04titulo',
  templateUrl: './apo04titulo.component.html',
  styleUrls: ['./apo04titulo.component.css']
})
export class Apo04tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo04tituloForm: FormGroup;
  id: string | null;
  constructor(private apo04group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo04titulosService: Apo04titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo04tituloForm = this.apo04group.group
      ({
        apo04titulo1: ['', Validators.required], 
        apo04titulo2: ['', Validators.required],
        apo04titulo3: ['', Validators.required],
        apo04titulo4: ['', Validators.required],
        apo04titulo5: ['', Validators.required],
        apo04titulo6: ['', Validators.required],
        apo04titulo7: ['', Validators.required],
        apo04titulo8: ['', Validators.required],
        apo04titulo9: ['', Validators.required],
        apo04titulo10: ['', Validators.required],
        apo04titulo11: ['', Validators.required],
        apo04titulo12: ['', Validators.required],
        apo04titulo13: ['', Validators.required],
        apo04titulo14: ['', Validators.required],
        apo04titulo15: ['', Validators.required],
        apo04titulo16:['', Validators.required],
        apo04titulo17: ['', Validators.required],
        apo04titulo18: ['', Validators.required],
        apo04titulo19: ['', Validators.required],
        apo04titulo20: ['', Validators.required],
        apo04titulo21: ['', Validators.required],
        apo04titulo22: ['', Validators.required],
        apo04titulo23: ['', Validators.required],
        apo04titulo24: ['', Validators.required],
        apo04titulo25: ['', Validators.required],
        apo04titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo04titulo(){
    const APO04TITULO: Apo04titulo= {
     apo04titulo1: this.apo04tituloForm.get('apo04titulo1')?.value,
     apo04titulo2: this.apo04tituloForm.get('apo04titulo2')?.value, 
     apo04titulo3: this.apo04tituloForm.get('apo04titulo3')?.value,
     apo04titulo4: this.apo04tituloForm.get('apo04titulo4')?.value,
     apo04titulo5: this.apo04tituloForm.get('apo04titulo5')?.value,
     apo04titulo6: this.apo04tituloForm.get('apo04titulo6')?.value, 
     apo04titulo7 :this.apo04tituloForm.get('apo04titulo7')?.value,
     apo04titulo8 :this.apo04tituloForm.get('apo04titulo8')?.value,
     apo04titulo9 :this.apo04tituloForm.get('apo04titulo9')?.value,
     apo04titulo10 :this.apo04tituloForm.get('apo04titulo10')?.value,
     apo04titulo11 :this.apo04tituloForm.get('apo04titulo11')?.value,
     apo04titulo12 :this.apo04tituloForm.get('apo04titulo12')?.value,
     apo04titulo13 :this.apo04tituloForm.get('apo04titulo13')?.value,
     apo04titulo14 :this.apo04tituloForm.get('apo04titulo14')?.value,
     apo04titulo15 :this.apo04tituloForm.get('apo04titulo15')?.value,
     apo04titulo16 :this.apo04tituloForm.get('apo04titulo16')?.value,
     apo04titulo17 :this.apo04tituloForm.get('apo04titulo17')?.value,
     apo04titulo18 :this.apo04tituloForm.get('apo04titulo18')?.value,
     apo04titulo19 :this.apo04tituloForm.get('apo04titulo19')?.value,
     apo04titulo20 :this.apo04tituloForm.get('apo04titulo20')?.value,
     apo04titulo21 :this.apo04tituloForm.get('apo04titulo21')?.value,
     apo04titulo22 :this.apo04tituloForm.get('apo04titulo22')?.value,
     apo04titulo23 :this.apo04tituloForm.get('apo04titulo23')?.value,
     apo04titulo24 :this.apo04tituloForm.get('apo04titulo24')?.value,
     apo04titulo25 :this.apo04tituloForm.get('apo04titulo25')?.value,
     apo04titulo26 :this.apo04tituloForm.get('apo04titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo04titulosService.editarApo04titulo(this.id,APO04TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo04raci']);
      },error => {
        console.log(error);
        this.apo04tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO04TITULO);
      this._apo04titulosService.guardarApo04titulo(APO04TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo04raci']);
    }, error => {
      console.log(error);
      this.apo04tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo04titulosService.obtenerApo04titulo(this.id).subscribe(data =>{
        this.apo04tituloForm.setValue({
         apo04titulo1: data.apo04titulo1,
         apo04titulo2: data.apo04titulo2,
         apo04titulo3: data.apo04titulo3,
         apo04titulo4: data.apo04titulo4,
         apo04titulo5: data.apo04titulo5,
         apo04titulo6: data.apo04titulo6,
         apo04titulo7: data.apo04titulo7,
         apo04titulo8: data.apo04titulo8,
         apo04titulo9: data.apo04titulo9,
         apo04titulo10: data.apo04titulo10,
         apo04titulo11: data.apo04titulo11,
         apo04titulo12: data.apo04titulo12,
         apo04titulo13: data.apo04titulo13,
         apo04titulo14: data.apo04titulo14,
         apo04titulo15: data.apo04titulo15,
         apo04titulo16: data.apo04titulo16,
         apo04titulo17: data.apo04titulo17,
         apo04titulo18: data.apo04titulo18,
         apo04titulo19: data.apo04titulo19,
         apo04titulo20: data.apo04titulo20,
         apo04titulo21: data.apo04titulo21,
         apo04titulo22: data.apo04titulo22,
         apo04titulo23: data.apo04titulo23,
         apo04titulo24: data.apo04titulo24,
         apo04titulo25: data.apo04titulo25,
         apo04titulo26: data.apo04titulo26,

        })
      })
    }
  }
} 


