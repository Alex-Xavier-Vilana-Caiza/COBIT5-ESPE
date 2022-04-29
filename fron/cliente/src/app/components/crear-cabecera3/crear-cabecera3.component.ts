import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cabecera3 } from 'src/app/models/producto';
import { Cabecera3Service } from 'src/app/services/cabecera3.service';

@Component({
  selector: 'app-crear-cabecera3',
  templateUrl: './crear-cabecera3.component.html',
  styleUrls: ['./crear-cabecera3.component.css']
})
export class CrearCabecera3Component implements OnInit {
  cabecera3Form: FormGroup;
  titulo = 'BAI02';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _cabecera3Service: Cabecera3Service,
    private aRouter: ActivatedRoute) { this.cabecera3Form = this.fb.group({
      zza: ['', Validators.required],
      zzb: ['', Validators.required],
      zzc: ['', Validators.required],
      zzd: ['', Validators.required],
      zze: ['', Validators.required],
      zzf: ['', Validators.required],
      zzg: ['', Validators.required],
      zzh: ['', Validators.required],
      zzi: ['', Validators.required],
      zzj: ['', Validators.required],
      zzk: ['', Validators.required],
      zzl: ['', Validators.required],
      zzm: ['', Validators.required],
      zzn: ['', Validators.required],
      zzo: ['', Validators.required],
      zzp: ['', Validators.required],
      zzq: ['', Validators.required],
      zzr: ['', Validators.required],
      zzs: ['', Validators.required],
      zzt: ['', Validators.required],
      zzu: ['', Validators.required],
      zzv: ['', Validators.required],
      zzw: ['', Validators.required],
      zzx: ['', Validators.required],
      zzy: ['', Validators.required],
      zzz: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id'); }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarCabecera3(){
    const Cabecera3: Cabecera3= {
      zza: this.cabecera3Form.get('zza')?.value,
      zzb: this.cabecera3Form.get('zzb')?.value,
      zzc: this.cabecera3Form.get('zzc')?.value,
      zzd: this.cabecera3Form.get('zzd')?.value,
      zze: this.cabecera3Form.get('zze')?.value,
      zzf: this.cabecera3Form.get('zzf')?.value,
      zzg: this.cabecera3Form.get('zzg')?.value,
      zzh: this.cabecera3Form.get('zzh')?.value,
      zzi: this.cabecera3Form.get('zzi')?.value,
      zzj: this.cabecera3Form.get('zzj')?.value,
      zzk: this.cabecera3Form.get('zzk')?.value,
      zzl: this.cabecera3Form.get('zzl')?.value,
      zzm: this.cabecera3Form.get('zzm')?.value,
      zzn: this.cabecera3Form.get('zzn')?.value,
      zzo: this.cabecera3Form.get('zzo')?.value,
      zzp: this.cabecera3Form.get('zzp')?.value,
      zzq: this.cabecera3Form.get('zzq')?.value,
      zzr: this.cabecera3Form.get('zzr')?.value,
      zzs: this.cabecera3Form.get('zzs')?.value,
      zzt: this.cabecera3Form.get('zzt')?.value,
      zzu: this.cabecera3Form.get('zzu')?.value,
      zzv: this.cabecera3Form.get('zzv')?.value,
      zzw: this.cabecera3Form.get('zzw')?.value,
      zzx: this.cabecera3Form.get('zzx')?.value,
      zzy: this.cabecera3Form.get('zzy')?.value,
      zzz: this.cabecera3Form.get('zzz')?.value,
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecera3Service.editarCabecera3(this.id, Cabecera3).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina130']);
      },error => {
        console.log(error);
        this.cabecera3Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(Cabecera3);
      this._cabecera3Service.guardarCabecera3(Cabecera3).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina130']);
    }, error => {
      console.log(error);
      this.cabecera3Form.reset();
    })

  }

  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar cabecera RACI';
      this._cabecera3Service.obtenerCabecera3(this.id).subscribe(data =>{
        this.cabecera3Form.setValue({
          zza: data.zza,
          zzb: data.zzb,
          zzc: data.zzc,
          zzd: data.zzd,
          zze: data.zze,
          zzf: data.zzf,
          zzg: data.zzg,
          zzh: data.zzh,
          zzi: data.zzi,
          zzj: data.zzj,
          zzk: data.zzk,
          zzl: data.zzl,
          zzm: data.zzm,
          zzn: data.zzn,
          zzo: data.zzo,
          zzp: data.zzp,
          zzq: data.zzq,
          zzr: data.zzr,
          zzs: data.zzs,
          zzt: data.zzt,
          zzu: data.zzu,
          zzv: data.zzv,
          zzw: data.zzw,
          zzx: data.zzx,
          zzy: data.zzy,
          zzz: data.zzz,
        })
      })
    }
  }

}
