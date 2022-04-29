import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { cabecera, Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { CabeceraService } from 'src/app/services/cabecera.service';

@Component({
  selector: 'app-crear-cabecera',
  templateUrl: './crear-cabecera.component.html',
  styleUrls: ['./crear-cabecera.component.css']
})
export class CrearCabeceraComponent implements OnInit {
  cabeceraForm: FormGroup;
  title = 'MODIFICAR RACI';
  id: string | null;


  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cabeceraService: CabeceraService,
              private aRouter: ActivatedRoute) {
    this.cabeceraForm = this.fb.group({
      ab: ['', Validators.required],
      bb: ['', Validators.required],
      cb: ['', Validators.required],
      db: ['', Validators.required],

      uno: ['', Validators.required],
      dos: ['', Validators.required],
      tres: ['', Validators.required],
      cuatro: ['', Validators.required],
      cinco: ['', Validators.required],
      seis: ['', Validators.required],
      siete: ['', Validators.required],
      ocho: ['', Validators.required],
      nueve: ['', Validators.required],
      dies: ['', Validators.required],
      once: ['', Validators.required],
      doce: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
}

  ngOnInit(): void {
    this.Edit();
  }

  agregarCabecera(){

    const CABECERA: cabecera = {
      ab: this.cabeceraForm.get('ab')?.value,
      bb: this.cabeceraForm.get('bb')?.value,
      cb: this.cabeceraForm.get('cb')?.value,
      db: this.cabeceraForm.get('db')?.value,

      uno: this.cabeceraForm.get('uno')?.value,
      dos: this.cabeceraForm.get('dos')?.value,
      tres: this.cabeceraForm.get('tres')?.value,
      cuatro: this.cabeceraForm.get('cuatro')?.value,
      cinco: this.cabeceraForm.get('cinco')?.value,
      seis: this.cabeceraForm.get('seis')?.value,
      siete: this.cabeceraForm.get('siete')?.value,
      ocho: this.cabeceraForm.get('ocho')?.value,
      nueve: this.cabeceraForm.get('nueve')?.value,
      dies: this.cabeceraForm.get('dies')?.value,
      once: this.cabeceraForm.get('once')?.value,
      doce: this.cabeceraForm.get('doce')?.value,

    }
    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabeceraService.editarCabecera(this.id, CABECERA).subscribe(data => {
        this.toastr.success('RACI actualizado con exito', 'Producto actualizado');
        this.router.navigate(['listar-productos']);
      },error => {
        console.log(error);
        this.cabeceraForm.reset();
      })
    }else{
    console.log(CABECERA);
    this._cabeceraService.guardarCabecera(CABECERA).subscribe(data => {
    this.toastr.info('Felicidades', 'Registrado exitosamente');
    this.router.navigate(['listar-productos']);
    }, error => {
      console.log(error);
      this.cabeceraForm.reset();
    })
  }
}

  Edit(){
    if(this.id !== null){
      this.title = 'MODIFICAR RACI';
      this._cabeceraService.obtenerCabecera(this.id).subscribe(data =>{
        this.cabeceraForm.setValue({
          ab: data.ab,
          bb: data.bb,
          cb: data.cb,
          db: data.db,

          uno: data.uno,
          dos: data.dos,
          tres: data.tres,
          cuatro: data.cuatro,
          cinco: data.cinco,
          seis: data.seis,
          siete: data.siete,
          ocho: data.ocho,
          nueve: data.nueve,
          dies: data.dies,
          once: data.once,
          doce: data.doce,

        })
      })
    }
  }

}
