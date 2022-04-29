import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo09titulo } from 'src/app/models/Apo09';
import { Apo09titulosService } from 'src/app/services/apo09titulos.service';

@Component({
  selector: 'app-apo09titulo',
  templateUrl: './apo09titulo.component.html',
  styleUrls: ['./apo09titulo.component.css']
})
export class Apo09tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo09tituloForm: FormGroup;
  id: string | null;
  constructor(private apo09group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo09titulosService: Apo09titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo09tituloForm = this.apo09group.group
      ({
        apo09titulo1: ['', Validators.required], 
        apo09titulo2: ['', Validators.required],
        apo09titulo3: ['', Validators.required],
        apo09titulo4: ['', Validators.required],
        apo09titulo5: ['', Validators.required],
        apo09titulo6: ['', Validators.required],
        apo09titulo7: ['', Validators.required],
        apo09titulo8: ['', Validators.required],
        apo09titulo9: ['', Validators.required],
        apo09titulo10: ['', Validators.required],
        apo09titulo11: ['', Validators.required],
        apo09titulo12: ['', Validators.required],
        apo09titulo13: ['', Validators.required],
        apo09titulo14: ['', Validators.required],
        apo09titulo15: ['', Validators.required],
        apo09titulo16:['', Validators.required],
        apo09titulo17: ['', Validators.required],
        apo09titulo18: ['', Validators.required],
        apo09titulo19: ['', Validators.required],
        apo09titulo20: ['', Validators.required],
        apo09titulo21: ['', Validators.required],
        apo09titulo22: ['', Validators.required],
        apo09titulo23: ['', Validators.required],
        apo09titulo24: ['', Validators.required],
        apo09titulo25: ['', Validators.required],
        apo09titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo09titulo(){
    const APO09TITULO: Apo09titulo= {
     apo09titulo1: this.apo09tituloForm.get('apo09titulo1')?.value,
     apo09titulo2: this.apo09tituloForm.get('apo09titulo2')?.value, 
     apo09titulo3: this.apo09tituloForm.get('apo09titulo3')?.value,
     apo09titulo4: this.apo09tituloForm.get('apo09titulo4')?.value,
     apo09titulo5: this.apo09tituloForm.get('apo09titulo5')?.value,
     apo09titulo6: this.apo09tituloForm.get('apo09titulo6')?.value, 
     apo09titulo7:this.apo09tituloForm.get('apo09titulo7')?.value,
     apo09titulo8 :this.apo09tituloForm.get('apo09titulo8')?.value,
     apo09titulo9 :this.apo09tituloForm.get('apo09titulo9')?.value,
     apo09titulo10 :this.apo09tituloForm.get('apo09titulo10')?.value,
     apo09titulo11 :this.apo09tituloForm.get('apo09titulo11')?.value,
     apo09titulo12 :this.apo09tituloForm.get('apo09titulo12')?.value,
     apo09titulo13 :this.apo09tituloForm.get('apo09titulo13')?.value,
     apo09titulo14 :this.apo09tituloForm.get('apo09titulo14')?.value,
     apo09titulo15 :this.apo09tituloForm.get('apo09titulo15')?.value,
     apo09titulo16 :this.apo09tituloForm.get('apo09titulo16')?.value,
     apo09titulo17 :this.apo09tituloForm.get('apo09titulo17')?.value,
     apo09titulo18 :this.apo09tituloForm.get('apo09titulo18')?.value,
     apo09titulo19 :this.apo09tituloForm.get('apo09titulo19')?.value,
     apo09titulo20 :this.apo09tituloForm.get('apo09titulo20')?.value,
     apo09titulo21 :this.apo09tituloForm.get('apo09titulo21')?.value,
     apo09titulo22 :this.apo09tituloForm.get('apo09titulo22')?.value,
     apo09titulo23 :this.apo09tituloForm.get('apo09titulo23')?.value,
     apo09titulo24 :this.apo09tituloForm.get('apo09titulo24')?.value,
     apo09titulo25 :this.apo09tituloForm.get('apo09titulo25')?.value,
     apo09titulo26 :this.apo09tituloForm.get('apo09titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo09titulosService.editarApo09titulo(this.id,APO09TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo09raci']);
      },error => {
        console.log(error);
        this.apo09tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO09TITULO);
      this._apo09titulosService.guardarApo09titulo(APO09TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo09raci']);
    }, error => {
      console.log(error);
      this.apo09tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo09titulosService.obtenerApo09titulo(this.id).subscribe(data =>{
        this.apo09tituloForm.setValue({
         apo09titulo1: data.apo09titulo1,
         apo09titulo2: data.apo09titulo2,
         apo09titulo3: data.apo09titulo3,
         apo09titulo4: data.apo09titulo4,
         apo09titulo5: data.apo09titulo5,
         apo09titulo6: data.apo09titulo6,
         apo09titulo7: data.apo09titulo9,
         apo09titulo8: data.apo09titulo8,
         apo09titulo9: data.apo09titulo9,
         apo09titulo10: data.apo09titulo10,
         apo09titulo11: data.apo09titulo11,
         apo09titulo12: data.apo09titulo12,
         apo09titulo13: data.apo09titulo13,
         apo09titulo14: data.apo09titulo14,
         apo09titulo15: data.apo09titulo15,
         apo09titulo16: data.apo09titulo16,
         apo09titulo17: data.apo09titulo19,
         apo09titulo18: data.apo09titulo18,
         apo09titulo19: data.apo09titulo19,
         apo09titulo20: data.apo09titulo20,
         apo09titulo21: data.apo09titulo21,
         apo09titulo22: data.apo09titulo22,
         apo09titulo23: data.apo09titulo23,
         apo09titulo24: data.apo09titulo24,
         apo09titulo25: data.apo09titulo25,
         apo09titulo26: data.apo09titulo26,

        })
      })
    }
  }
} 



