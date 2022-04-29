import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo013titulo } from 'src/app/models/Apo013';
import { Apo013titulosService } from 'src/app/services/apo013titulos.service';

@Component({
  selector: 'app-apo013titulo',
  templateUrl: './apo013titulo.component.html',
  styleUrls: ['./apo013titulo.component.css']
})
export class Apo013tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo013tituloForm: FormGroup;
  id: string | null;
  constructor(private apo013group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo013titulosService: Apo013titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo013tituloForm = this.apo013group.group
      ({
        apo013titulo1: ['', Validators.required], 
        apo013titulo2: ['', Validators.required],
        apo013titulo3: ['', Validators.required],
        apo013titulo4: ['', Validators.required],
        apo013titulo5: ['', Validators.required],
        apo013titulo6: ['', Validators.required],
        apo013titulo7: ['', Validators.required],
        apo013titulo8: ['', Validators.required],
        apo013titulo9: ['', Validators.required],
        apo013titulo10: ['', Validators.required],
        apo013titulo11: ['', Validators.required],
        apo013titulo12: ['', Validators.required],
        apo013titulo13: ['', Validators.required],
        apo013titulo14: ['', Validators.required],
        apo013titulo15: ['', Validators.required],
        apo013titulo16:['', Validators.required],
        apo013titulo17: ['', Validators.required],
        apo013titulo18: ['', Validators.required],
        apo013titulo19: ['', Validators.required],
        apo013titulo20: ['', Validators.required],
        apo013titulo21: ['', Validators.required],
        apo013titulo22: ['', Validators.required],
        apo013titulo23: ['', Validators.required],
        apo013titulo24: ['', Validators.required],
        apo013titulo25: ['', Validators.required],
        apo013titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo013titulo(){
    const APO013TITULO: Apo013titulo= {
     apo013titulo1: this.apo013tituloForm.get('apo013titulo1')?.value,
     apo013titulo2: this.apo013tituloForm.get('apo013titulo2')?.value, 
     apo013titulo3: this.apo013tituloForm.get('apo013titulo3')?.value,
     apo013titulo4: this.apo013tituloForm.get('apo013titulo4')?.value,
     apo013titulo5: this.apo013tituloForm.get('apo013titulo5')?.value,
     apo013titulo6: this.apo013tituloForm.get('apo013titulo6')?.value, 
     apo013titulo7 :this.apo013tituloForm.get('apo013titulo7')?.value,
     apo013titulo8 :this.apo013tituloForm.get('apo013titulo8')?.value,
     apo013titulo9 :this.apo013tituloForm.get('apo013titulo9')?.value,
     apo013titulo10 :this.apo013tituloForm.get('apo013titulo10')?.value,
     apo013titulo11 :this.apo013tituloForm.get('apo013titulo11')?.value,
     apo013titulo12 :this.apo013tituloForm.get('apo013titulo12')?.value,
     apo013titulo13 :this.apo013tituloForm.get('apo013titulo13')?.value,
     apo013titulo14 :this.apo013tituloForm.get('apo013titulo14')?.value,
     apo013titulo15 :this.apo013tituloForm.get('apo013titulo15')?.value,
     apo013titulo16 :this.apo013tituloForm.get('apo013titulo16')?.value,
     apo013titulo17 :this.apo013tituloForm.get('apo013titulo17')?.value,
     apo013titulo18 :this.apo013tituloForm.get('apo013titulo18')?.value,
     apo013titulo19 :this.apo013tituloForm.get('apo013titulo19')?.value,
     apo013titulo20 :this.apo013tituloForm.get('apo013titulo20')?.value,
     apo013titulo21 :this.apo013tituloForm.get('apo013titulo21')?.value,
     apo013titulo22 :this.apo013tituloForm.get('apo013titulo22')?.value,
     apo013titulo23 :this.apo013tituloForm.get('apo013titulo23')?.value,
     apo013titulo24 :this.apo013tituloForm.get('apo013titulo24')?.value,
     apo013titulo25 :this.apo013tituloForm.get('apo013titulo25')?.value,
     apo013titulo26 :this.apo013tituloForm.get('apo013titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo013titulosService.editarApo013titulo(this.id,APO013TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo013raci']);
      },error => {
        console.log(error);
        this.apo013tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO013TITULO);
      this._apo013titulosService.guardarApo013titulo(APO013TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo013raci']);
    }, error => {
      console.log(error);
      this.apo013tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo013titulosService.obtenerApo013titulo(this.id).subscribe(data =>{
        this.apo013tituloForm.setValue({
         apo013titulo1: data.apo013titulo1,
         apo013titulo2: data.apo013titulo2,
         apo013titulo3: data.apo013titulo3,
         apo013titulo4: data.apo013titulo4,
         apo013titulo5: data.apo013titulo5,
         apo013titulo6: data.apo013titulo6,
         apo013titulo7: data.apo013titulo7,
         apo013titulo8: data.apo013titulo8,
         apo013titulo9: data.apo013titulo9,
         apo013titulo10: data.apo013titulo10,
         apo013titulo11: data.apo013titulo11,
         apo013titulo12: data.apo013titulo12,
         apo013titulo13: data.apo013titulo13,
         apo013titulo14: data.apo013titulo14,
         apo013titulo15: data.apo013titulo15,
         apo013titulo16: data.apo013titulo16,
         apo013titulo17: data.apo013titulo17,
         apo013titulo18: data.apo013titulo18,
         apo013titulo19: data.apo013titulo19,
         apo013titulo20: data.apo013titulo20,
         apo013titulo21: data.apo013titulo21,
         apo013titulo22: data.apo013titulo22,
         apo013titulo23: data.apo013titulo23,
         apo013titulo24: data.apo013titulo24,
         apo013titulo25: data.apo013titulo25,
         apo013titulo26: data.apo013titulo26,

        })
      })
    }
  }
} 



