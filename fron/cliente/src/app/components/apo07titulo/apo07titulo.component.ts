import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo07titulo } from 'src/app/models/Apo07';
import { Apo07titulosService } from 'src/app/services/apo07titulos.service';

@Component({
  selector: 'app-apo07titulo',
  templateUrl: './apo07titulo.component.html',
  styleUrls: ['./apo07titulo.component.css']
})
export class Apo07tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo07tituloForm: FormGroup;
  id: string | null;
  constructor(private apo07group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo07titulosService: Apo07titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo07tituloForm = this.apo07group.group
      ({
        apo07titulo1: ['', Validators.required], 
        apo07titulo2: ['', Validators.required],
        apo07titulo3: ['', Validators.required],
        apo07titulo4: ['', Validators.required],
        apo07titulo5: ['', Validators.required],
        apo07titulo6: ['', Validators.required],
        apo07titulo7: ['', Validators.required],
        apo07titulo8: ['', Validators.required],
        apo07titulo9: ['', Validators.required],
        apo07titulo10: ['', Validators.required],
        apo07titulo11: ['', Validators.required],
        apo07titulo12: ['', Validators.required],
        apo07titulo13: ['', Validators.required],
        apo07titulo14: ['', Validators.required],
        apo07titulo15: ['', Validators.required],
        apo07titulo16:['', Validators.required],
        apo07titulo17: ['', Validators.required],
        apo07titulo18: ['', Validators.required],
        apo07titulo19: ['', Validators.required],
        apo07titulo20: ['', Validators.required],
        apo07titulo21: ['', Validators.required],
        apo07titulo22: ['', Validators.required],
        apo07titulo23: ['', Validators.required],
        apo07titulo24: ['', Validators.required],
        apo07titulo25: ['', Validators.required],
        apo07titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo07titulo(){
    const APO07TITULO: Apo07titulo= {
     apo07titulo1: this.apo07tituloForm.get('apo07titulo1')?.value,
     apo07titulo2: this.apo07tituloForm.get('apo07titulo2')?.value, 
     apo07titulo3: this.apo07tituloForm.get('apo07titulo3')?.value,
     apo07titulo4: this.apo07tituloForm.get('apo07titulo4')?.value,
     apo07titulo5: this.apo07tituloForm.get('apo07titulo5')?.value,
     apo07titulo6: this.apo07tituloForm.get('apo07titulo6')?.value, 
     apo07titulo7 :this.apo07tituloForm.get('apo07titulo7')?.value,
     apo07titulo8 :this.apo07tituloForm.get('apo07titulo8')?.value,
     apo07titulo9 :this.apo07tituloForm.get('apo07titulo9')?.value,
     apo07titulo10 :this.apo07tituloForm.get('apo07titulo10')?.value,
     apo07titulo11 :this.apo07tituloForm.get('apo07titulo11')?.value,
     apo07titulo12 :this.apo07tituloForm.get('apo07titulo12')?.value,
     apo07titulo13 :this.apo07tituloForm.get('apo07titulo13')?.value,
     apo07titulo14 :this.apo07tituloForm.get('apo07titulo14')?.value,
     apo07titulo15 :this.apo07tituloForm.get('apo07titulo15')?.value,
     apo07titulo16 :this.apo07tituloForm.get('apo07titulo16')?.value,
     apo07titulo17 :this.apo07tituloForm.get('apo07titulo17')?.value,
     apo07titulo18 :this.apo07tituloForm.get('apo07titulo18')?.value,
     apo07titulo19 :this.apo07tituloForm.get('apo07titulo19')?.value,
     apo07titulo20 :this.apo07tituloForm.get('apo07titulo20')?.value,
     apo07titulo21 :this.apo07tituloForm.get('apo07titulo21')?.value,
     apo07titulo22 :this.apo07tituloForm.get('apo07titulo22')?.value,
     apo07titulo23 :this.apo07tituloForm.get('apo07titulo23')?.value,
     apo07titulo24 :this.apo07tituloForm.get('apo07titulo24')?.value,
     apo07titulo25 :this.apo07tituloForm.get('apo07titulo25')?.value,
     apo07titulo26 :this.apo07tituloForm.get('apo07titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo07titulosService.editarApo07titulo(this.id,APO07TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo07raci']);
      },error => {
        console.log(error);
        this.apo07tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO07TITULO);
      this._apo07titulosService.guardarApo07titulo(APO07TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo07raci']);
    }, error => {
      console.log(error);
      this.apo07tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo07titulosService.obtenerApo07titulo(this.id).subscribe(data =>{
        this.apo07tituloForm.setValue({
         apo07titulo1: data.apo07titulo1,
         apo07titulo2: data.apo07titulo2,
         apo07titulo3: data.apo07titulo3,
         apo07titulo4: data.apo07titulo4,
         apo07titulo5: data.apo07titulo5,
         apo07titulo6: data.apo07titulo6,
         apo07titulo7: data.apo07titulo7,
         apo07titulo8: data.apo07titulo8,
         apo07titulo9: data.apo07titulo9,
         apo07titulo10: data.apo07titulo10,
         apo07titulo11: data.apo07titulo11,
         apo07titulo12: data.apo07titulo12,
         apo07titulo13: data.apo07titulo13,
         apo07titulo14: data.apo07titulo14,
         apo07titulo15: data.apo07titulo15,
         apo07titulo16: data.apo07titulo16,
         apo07titulo17: data.apo07titulo17,
         apo07titulo18: data.apo07titulo18,
         apo07titulo19: data.apo07titulo19,
         apo07titulo20: data.apo07titulo20,
         apo07titulo21: data.apo07titulo21,
         apo07titulo22: data.apo07titulo22,
         apo07titulo23: data.apo07titulo23,
         apo07titulo24: data.apo07titulo24,
         apo07titulo25: data.apo07titulo25,
         apo07titulo26: data.apo07titulo26,

        })
      })
    }
  }
} 


