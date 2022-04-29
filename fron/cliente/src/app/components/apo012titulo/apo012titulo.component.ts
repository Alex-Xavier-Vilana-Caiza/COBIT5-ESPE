import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo012titulo } from 'src/app/models/Apo012';
import { Apo012titulosService } from 'src/app/services/apo012titulos.service';

@Component({
  selector: 'app-apo012titulo',
  templateUrl: './apo012titulo.component.html',
  styleUrls: ['./apo012titulo.component.css']
})
export class Apo012tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo012tituloForm: FormGroup;
  id: string | null;
  constructor(private apo012group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo012titulosService: Apo012titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo012tituloForm = this.apo012group.group
      ({
        apo012titulo1: ['', Validators.required], 
        apo012titulo2: ['', Validators.required],
        apo012titulo3: ['', Validators.required],
        apo012titulo4: ['', Validators.required],
        apo012titulo5: ['', Validators.required],
        apo012titulo6: ['', Validators.required],
        apo012titulo7: ['', Validators.required],
        apo012titulo8: ['', Validators.required],
        apo012titulo9: ['', Validators.required],
        apo012titulo10: ['', Validators.required],
        apo012titulo11: ['', Validators.required],
        apo012titulo12: ['', Validators.required],
        apo012titulo13: ['', Validators.required],
        apo012titulo14: ['', Validators.required],
        apo012titulo15: ['', Validators.required],
        apo012titulo16:['', Validators.required],
        apo012titulo17: ['', Validators.required],
        apo012titulo18: ['', Validators.required],
        apo012titulo19: ['', Validators.required],
        apo012titulo20: ['', Validators.required],
        apo012titulo21: ['', Validators.required],
        apo012titulo22: ['', Validators.required],
        apo012titulo23: ['', Validators.required],
        apo012titulo24: ['', Validators.required],
        apo012titulo25: ['', Validators.required],
        apo012titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo012titulo(){
    const APO012TITULO: Apo012titulo= {
     apo012titulo1: this.apo012tituloForm.get('apo012titulo1')?.value,
     apo012titulo2: this.apo012tituloForm.get('apo012titulo2')?.value, 
     apo012titulo3: this.apo012tituloForm.get('apo012titulo3')?.value,
     apo012titulo4: this.apo012tituloForm.get('apo012titulo4')?.value,
     apo012titulo5: this.apo012tituloForm.get('apo012titulo5')?.value,
     apo012titulo6: this.apo012tituloForm.get('apo012titulo6')?.value, 
     apo012titulo7 :this.apo012tituloForm.get('apo012titulo7')?.value,
     apo012titulo8 :this.apo012tituloForm.get('apo012titulo8')?.value,
     apo012titulo9 :this.apo012tituloForm.get('apo012titulo9')?.value,
     apo012titulo10 :this.apo012tituloForm.get('apo012titulo10')?.value,
     apo012titulo11 :this.apo012tituloForm.get('apo012titulo11')?.value,
     apo012titulo12 :this.apo012tituloForm.get('apo012titulo12')?.value,
     apo012titulo13 :this.apo012tituloForm.get('apo012titulo13')?.value,
     apo012titulo14 :this.apo012tituloForm.get('apo012titulo14')?.value,
     apo012titulo15 :this.apo012tituloForm.get('apo012titulo15')?.value,
     apo012titulo16 :this.apo012tituloForm.get('apo012titulo16')?.value,
     apo012titulo17 :this.apo012tituloForm.get('apo012titulo17')?.value,
     apo012titulo18 :this.apo012tituloForm.get('apo012titulo18')?.value,
     apo012titulo19 :this.apo012tituloForm.get('apo012titulo19')?.value,
     apo012titulo20 :this.apo012tituloForm.get('apo012titulo20')?.value,
     apo012titulo21 :this.apo012tituloForm.get('apo012titulo21')?.value,
     apo012titulo22 :this.apo012tituloForm.get('apo012titulo22')?.value,
     apo012titulo23 :this.apo012tituloForm.get('apo012titulo23')?.value,
     apo012titulo24 :this.apo012tituloForm.get('apo012titulo24')?.value,
     apo012titulo25 :this.apo012tituloForm.get('apo012titulo25')?.value,
     apo012titulo26 :this.apo012tituloForm.get('apo012titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo012titulosService.editarApo012titulo(this.id,APO012TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo012raci']);
      },error => {
        console.log(error);
        this.apo012tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO012TITULO);
      this._apo012titulosService.guardarApo012titulo(APO012TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo012raci']);
    }, error => {
      console.log(error);
      this.apo012tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo012titulosService.obtenerApo012titulo(this.id).subscribe(data =>{
        this.apo012tituloForm.setValue({
         apo012titulo1: data.apo012titulo1,
         apo012titulo2: data.apo012titulo2,
         apo012titulo3: data.apo012titulo3,
         apo012titulo4: data.apo012titulo4,
         apo012titulo5: data.apo012titulo5,
         apo012titulo6: data.apo012titulo6,
         apo012titulo7: data.apo012titulo7,
         apo012titulo8: data.apo012titulo8,
         apo012titulo9: data.apo012titulo9,
         apo012titulo10: data.apo012titulo10,
         apo012titulo11: data.apo012titulo11,
         apo012titulo12: data.apo012titulo12,
         apo012titulo13: data.apo012titulo13,
         apo012titulo14: data.apo012titulo14,
         apo012titulo15: data.apo012titulo15,
         apo012titulo16: data.apo012titulo16,
         apo012titulo17: data.apo012titulo17,
         apo012titulo18: data.apo012titulo18,
         apo012titulo19: data.apo012titulo19,
         apo012titulo20: data.apo012titulo20,
         apo012titulo21: data.apo012titulo21,
         apo012titulo22: data.apo012titulo22,
         apo012titulo23: data.apo012titulo23,
         apo012titulo24: data.apo012titulo24,
         apo012titulo25: data.apo012titulo25,
         apo012titulo26: data.apo012titulo26,

        })
      })
    }
  }
} 


