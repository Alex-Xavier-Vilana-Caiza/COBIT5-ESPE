import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cabecera8 } from 'src/app/models/producto';
import { Cabecera8Service } from 'src/app/services/cabecera8.service';

@Component({
  selector: 'app-crear-cabecera8',
  templateUrl: './crear-cabecera8.component.html',
  styleUrls: ['./crear-cabecera8.component.css']
})
export class CrearCabecera8Component implements OnInit {

  cabecera8Form: FormGroup;
  titulo = 'CREAR CABECERA BAI08';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _cabecera8Service: Cabecera8Service,
    private aRouter: ActivatedRoute) { this.cabecera8Form = this.fb.group({
      maa: ['', Validators.required],
      mab: ['', Validators.required],
      mac: ['', Validators.required],
      mad: ['', Validators.required],
      mae: ['', Validators.required],
      maf: ['', Validators.required],
      mag: ['', Validators.required],
      mah: ['', Validators.required],
      mai: ['', Validators.required],
      maj: ['', Validators.required],
      mak: ['', Validators.required],
      mal: ['', Validators.required],
      mam: ['', Validators.required],
      man: ['', Validators.required],
      mao: ['', Validators.required],
      map: ['', Validators.required],
      maq: ['', Validators.required],
      mar: ['', Validators.required],
      mas: ['', Validators.required],
      mat: ['', Validators.required],
      mau: ['', Validators.required],
      mav: ['', Validators.required],
      maw: ['', Validators.required],
      max: ['', Validators.required],
      may: ['', Validators.required],
      maz: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id'); }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarCabecera8(){
    const Cabecera8: Cabecera8= {
      maa: this.cabecera8Form.get('maa')?.value,
      mab: this.cabecera8Form.get('mab')?.value,
      mac: this.cabecera8Form.get('mac')?.value,
      mad: this.cabecera8Form.get('mad')?.value,
      mae: this.cabecera8Form.get('mae')?.value,
      maf: this.cabecera8Form.get('maf')?.value,
      mag: this.cabecera8Form.get('mag')?.value,
      mah: this.cabecera8Form.get('mah')?.value,
      mai: this.cabecera8Form.get('mai')?.value,
      maj: this.cabecera8Form.get('maj')?.value,
      mak: this.cabecera8Form.get('mak')?.value,
      mal: this.cabecera8Form.get('mal')?.value,
      mam: this.cabecera8Form.get('mam')?.value,
      man: this.cabecera8Form.get('man')?.value,
      mao: this.cabecera8Form.get('mao')?.value,
      map: this.cabecera8Form.get('map')?.value,
      maq: this.cabecera8Form.get('maq')?.value,
      mar: this.cabecera8Form.get('mar')?.value,
      mas: this.cabecera8Form.get('mas')?.value,
      mat: this.cabecera8Form.get('mat')?.value,
      mau: this.cabecera8Form.get('mau')?.value,
      mav: this.cabecera8Form.get('mav')?.value,
      maw: this.cabecera8Form.get('maw')?.value,
      max: this.cabecera8Form.get('max')?.value,
      may: this.cabecera8Form.get('may')?.value,
      maz: this.cabecera8Form.get('maz')?.value,
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecera8Service.editarCabecera8(this.id, Cabecera8).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina159']);
      },error => {
        console.log(error);
        this.cabecera8Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(Cabecera8);
      this._cabecera8Service.guardarCabecera8(Cabecera8).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina159']);
    }, error => {
      console.log(error);
      this.cabecera8Form.reset();
    })

  }

  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'EDITAR CABECERA BAI08';
      this._cabecera8Service.obtenerCabecera8(this.id).subscribe(data =>{
        this.cabecera8Form.setValue({
          maa: data.maa,
          mab: data.mab,
          mac: data.mac,
          mad: data.mad,
          mae: data.mae,
          maf: data.maf,
          mag: data.mag,
          mah: data.mah,
          mai: data.mai,
          maj: data.maj,
          mak: data.mak,
          mal: data.mal,
          mam: data.mam,
          man: data.man,
          mao: data.mao,
          map: data.map,
          maq: data.maq,
          mar: data.mar,
          mas: data.mas,
          mat: data.mat,
          mau: data.mau,
          mav: data.mav,
          maw: data.maw,
          max: data.max,
          may: data.may,
          maz: data.maz,
        })
      })
    }
  }

}
