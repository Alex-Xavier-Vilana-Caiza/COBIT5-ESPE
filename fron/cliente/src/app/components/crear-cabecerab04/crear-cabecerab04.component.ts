import { Cabecerab04 } from 'src/app/models/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cabecerab04Service } from 'src/app/services/cabecerab04.service';

@Component({
  selector: 'app-crear-cabecerab04',
  templateUrl: './crear-cabecerab04.component.html',
  styleUrls: ['./crear-cabecerab04.component.css']
})
export class CrearCabecerab04Component implements OnInit {

  cabecerab04Form: FormGroup;
  titulo = 'Crear tabla';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cabecerab04Service: Cabecerab04Service,
              private aRouter: ActivatedRoute) {
    this.cabecerab04Form = this.fb.group({
      n1: ['', Validators.required],
      n2: ['', Validators.required],
      n3: ['', Validators.required],
      n4: ['', Validators.required],
      n5: ['', Validators.required],
      n6: ['', Validators.required],
      n7: ['', Validators.required],
      n8: ['', Validators.required],
      n9: ['', Validators.required],
      n10: ['', Validators.required],
      n11: ['', Validators.required],
      n12: ['', Validators.required],
      n13: ['', Validators.required],
      n14: ['', Validators.required],
      n15: ['', Validators.required],
      n16: ['', Validators.required],
      n17: ['', Validators.required],
      n18: ['', Validators.required],
      n19: ['', Validators.required],
      n20: ['', Validators.required],
      n21: ['', Validators.required],
      n22: ['', Validators.required],
      n23: ['', Validators.required],
      n24: ['', Validators.required],
      n25: ['', Validators.required],
      n26: ['', Validators.required],
     
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCabecerab04(){
    const CABECERAB04: Cabecerab04= {
      n1: this.cabecerab04Form.get('n1')?.value,
      n2: this.cabecerab04Form.get('n2')?.value,
      n3: this.cabecerab04Form.get('n3')?.value,
      n4: this.cabecerab04Form.get('n4')?.value,
      n5: this.cabecerab04Form.get('n5')?.value,
      n6: this.cabecerab04Form.get('n6')?.value,
      n7: this.cabecerab04Form.get('n7')?.value,
      n8: this.cabecerab04Form.get('n8')?.value,
      n9: this.cabecerab04Form.get('n9')?.value,
      n10: this.cabecerab04Form.get('n10')?.value,
      n11: this.cabecerab04Form.get('n11')?.value,
      n12: this.cabecerab04Form.get('n12')?.value,
      n13: this.cabecerab04Form.get('n13')?.value,
      n14: this.cabecerab04Form.get('n14')?.value,
      n15: this.cabecerab04Form.get('n15')?.value,
      n16: this.cabecerab04Form.get('n16')?.value,
      n17: this.cabecerab04Form.get('n17')?.value,
      n18: this.cabecerab04Form.get('n18')?.value,
      n19: this.cabecerab04Form.get('n19')?.value,
      n20: this.cabecerab04Form.get('n20')?.value,
      n21: this.cabecerab04Form.get('n21')?.value,
      n22: this.cabecerab04Form.get('n22')?.value,
      n23: this.cabecerab04Form.get('n23')?.value,
      n24: this.cabecerab04Form.get('n24')?.value,
      n25: this.cabecerab04Form.get('n25')?.value,
      n26: this.cabecerab04Form.get('n26')?.value,
      
     
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecerab04Service.editarCabecerab04(this.id, CABECERAB04).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina142']);
      },error => {
        console.log(error);
        this.cabecerab04Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(CABECERAB04);
      this._cabecerab04Service.guardarCabecerab04(CABECERAB04).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina142']);
    }, error => {
      console.log(error);
      this.cabecerab04Form.reset();
    })

  }


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._cabecerab04Service.obtenerCabecerab04(this.id).subscribe(data =>{
        this.cabecerab04Form.setValue({
          n1: data.n1,
          n2: data.n2,
          n3: data.n3,
          n4: data.n4,
          n5: data.n5,
          n6: data.n6,
          n7: data.n7,
          n8: data.n8,
          n9: data.n9,
          n10: data.n10,
          n11: data.n11,
          n12: data.n12,
          n13: data.n13,
          n14: data.n14,
          n15: data.n15,
          n16: data.n16,
          n17: data.n17,
          n18: data.n18,
          n19: data.n19,
          n20: data.n20,
          n21: data.n21,
          n22: data.n22,
          n23: data.n23,
          n24: data.n24,
          n25: data.n25,
          n26: data.n26,
          
          
        })
      })
    }
  }
}
