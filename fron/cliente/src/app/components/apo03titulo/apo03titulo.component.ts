import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apo03titulo } from 'src/app/models/Apo03';
import { Apo03titulosService } from 'src/app/services/apo03titulos.service';

@Component({
  selector: 'app-apo03titulo',
  templateUrl: './apo03titulo.component.html',
  styleUrls: ['./apo03titulo.component.css']
})
export class Apo03tituloComponent implements OnInit {
  title = 'MODIFICAR RACI'; 
  apo03tituloForm: FormGroup;
  id: string | null;
  constructor(private apo03group: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _apo03titulosService: Apo03titulosService,
    private aRouter: ActivatedRoute) { 
      this.apo03tituloForm = this.apo03group.group
      ({
        apo03titulo1: ['', Validators.required], 
        apo03titulo2: ['', Validators.required],
        apo03titulo3: ['', Validators.required],
        apo03titulo4: ['', Validators.required],
        apo03titulo5: ['', Validators.required],
        apo03titulo6: ['', Validators.required],
        apo03titulo7: ['', Validators.required],
        apo03titulo8: ['', Validators.required],
        apo03titulo9: ['', Validators.required],
        apo03titulo10: ['', Validators.required],
        apo03titulo11: ['', Validators.required],
        apo03titulo12: ['', Validators.required],
        apo03titulo13: ['', Validators.required],
        apo03titulo14: ['', Validators.required],
        apo03titulo15: ['', Validators.required],
        apo03titulo16:['', Validators.required],
        apo03titulo17: ['', Validators.required],
        apo03titulo18: ['', Validators.required],
        apo03titulo19: ['', Validators.required],
        apo03titulo20: ['', Validators.required],
        apo03titulo21: ['', Validators.required],
        apo03titulo22: ['', Validators.required],
        apo03titulo23: ['', Validators.required],
        apo03titulo24: ['', Validators.required],
        apo03titulo25: ['', Validators.required],
        apo03titulo26: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.Edit();
  }
  agregarApo03titulo(){
    const APO03TITULO: Apo03titulo= {
     apo03titulo1: this.apo03tituloForm.get('apo03titulo1')?.value,
     apo03titulo2: this.apo03tituloForm.get('apo03titulo2')?.value, 
     apo03titulo3: this.apo03tituloForm.get('apo03titulo3')?.value,
     apo03titulo4: this.apo03tituloForm.get('apo03titulo4')?.value,
     apo03titulo5: this.apo03tituloForm.get('apo03titulo5')?.value,
     apo03titulo6: this.apo03tituloForm.get('apo03titulo6')?.value, 
     apo03titulo7 :this.apo03tituloForm.get('apo03titulo7')?.value,
     apo03titulo8 :this.apo03tituloForm.get('apo03titulo8')?.value,
     apo03titulo9 :this.apo03tituloForm.get('apo03titulo9')?.value,
     apo03titulo10 :this.apo03tituloForm.get('apo03titulo10')?.value,
     apo03titulo11 :this.apo03tituloForm.get('apo03titulo11')?.value,
     apo03titulo12 :this.apo03tituloForm.get('apo03titulo12')?.value,
     apo03titulo13 :this.apo03tituloForm.get('apo03titulo13')?.value,
     apo03titulo14 :this.apo03tituloForm.get('apo03titulo14')?.value,
     apo03titulo15 :this.apo03tituloForm.get('apo03titulo15')?.value,
     apo03titulo16 :this.apo03tituloForm.get('apo03titulo16')?.value,
     apo03titulo17 :this.apo03tituloForm.get('apo03titulo17')?.value,
     apo03titulo18 :this.apo03tituloForm.get('apo03titulo18')?.value,
     apo03titulo19 :this.apo03tituloForm.get('apo03titulo19')?.value,
     apo03titulo20 :this.apo03tituloForm.get('apo03titulo20')?.value,
     apo03titulo21 :this.apo03tituloForm.get('apo03titulo21')?.value,
     apo03titulo22 :this.apo03tituloForm.get('apo03titulo22')?.value,
     apo03titulo23 :this.apo03tituloForm.get('apo03titulo23')?.value,
     apo03titulo24 :this.apo03tituloForm.get('apo03titulo24')?.value,
     apo03titulo25 :this.apo03tituloForm.get('apo03titulo25')?.value,
     apo03titulo26 :this.apo03tituloForm.get('apo03titulo26')?.value,
 
     
    } 
 
    if(this.id !== null) {
      //editamos 
      this._apo03titulosService.editarApo03titulo(this.id,APO03TITULO).subscribe(data => {
        this.toastr.success('Registro actualizado con exito', 'Registro actualizado');
        this.router.navigate(['/Apo03raci']);
      },error => {
        console.log(error);
        this.apo03tituloForm.reset();
      })
    }else{
      //agregamos 
      console.log(APO03TITULO);
      this._apo03titulosService.guardarApo03titulo(APO03TITULO).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/Apo03raci']);
    }, error => {
      console.log(error);
      this.apo03tituloForm.reset();
    })
 
  }
 
  }
 
  Edit(){
    if(this.id !== null){
      this.title = 'Editar Matriz 03';
      this._apo03titulosService.obtenerApo03titulo(this.id).subscribe(data =>{
        this.apo03tituloForm.setValue({
         apo03titulo1: data.apo03titulo1,
         apo03titulo2: data.apo03titulo2,
         apo03titulo3: data.apo03titulo3,
         apo03titulo4: data.apo03titulo4,
         apo03titulo5: data.apo03titulo5,
         apo03titulo6: data.apo03titulo6,
         apo03titulo7: data.apo03titulo7,
         apo03titulo8: data.apo03titulo8,
         apo03titulo9: data.apo03titulo9,
         apo03titulo10: data.apo03titulo10,
         apo03titulo11: data.apo03titulo11,
         apo03titulo12: data.apo03titulo12,
         apo03titulo13: data.apo03titulo13,
         apo03titulo14: data.apo03titulo14,
         apo03titulo15: data.apo03titulo15,
         apo03titulo16: data.apo03titulo16,
         apo03titulo17: data.apo03titulo17,
         apo03titulo18: data.apo03titulo18,
         apo03titulo19: data.apo03titulo19,
         apo03titulo20: data.apo03titulo20,
         apo03titulo21: data.apo03titulo21,
         apo03titulo22: data.apo03titulo22,
         apo03titulo23: data.apo03titulo23,
         apo03titulo24: data.apo03titulo24,
         apo03titulo25: data.apo03titulo25,
         apo03titulo26: data.apo03titulo26,

        })
      })
    }
  }
} 


