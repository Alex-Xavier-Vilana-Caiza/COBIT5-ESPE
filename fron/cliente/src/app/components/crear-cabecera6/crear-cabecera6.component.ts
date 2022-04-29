import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cabecera6 } from 'src/app/models/producto';
import { Cabecera6Service } from 'src/app/services/cabecera6.service';

@Component({
  selector: 'app-crear-cabecera6',
  templateUrl: './crear-cabecera6.component.html',
  styleUrls: ['./crear-cabecera6.component.css']
})
export class CrearCabecera6Component implements OnInit {
  cabecera6Form: FormGroup;
  titulo = 'BAI06';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _cabecera6Service: Cabecera6Service,
    private aRouter: ActivatedRoute) { this.cabecera6Form = this.fb.group({
      mma: ['', Validators.required],
      mmb: ['', Validators.required],
      mmc: ['', Validators.required],
      mmd: ['', Validators.required],
      mme: ['', Validators.required],
      mmf: ['', Validators.required],
      mmg: ['', Validators.required],
      mmh: ['', Validators.required],
      mmi: ['', Validators.required],
      mmj: ['', Validators.required],
      mmk: ['', Validators.required],
      mml: ['', Validators.required],
      mmm: ['', Validators.required],
      mmn: ['', Validators.required],
      mmo: ['', Validators.required],
      mmp: ['', Validators.required],
      mmq: ['', Validators.required],
      mmr: ['', Validators.required],
      mms: ['', Validators.required],
      mmt: ['', Validators.required],
      mmu: ['', Validators.required],
      mmv: ['', Validators.required],
      mmw: ['', Validators.required],
      mmx: ['', Validators.required],
      mmy: ['', Validators.required],
      mmz: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id'); }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarCabecera6(){
    const Cabecera6: Cabecera6= {
      mma: this.cabecera6Form.get('mma')?.value,
      mmb: this.cabecera6Form.get('mmb')?.value,
      mmc: this.cabecera6Form.get('mmc')?.value,
      mmd: this.cabecera6Form.get('mmd')?.value,
      mme: this.cabecera6Form.get('mme')?.value,
      mmf: this.cabecera6Form.get('mmf')?.value,
      mmg: this.cabecera6Form.get('mmg')?.value,
      mmh: this.cabecera6Form.get('mmh')?.value,
      mmi: this.cabecera6Form.get('mmi')?.value,
      mmj: this.cabecera6Form.get('mmj')?.value,
      mmk: this.cabecera6Form.get('mmk')?.value,
      mml: this.cabecera6Form.get('mml')?.value,
      mmm: this.cabecera6Form.get('mmm')?.value,
      mmn: this.cabecera6Form.get('mmn')?.value,
      mmo: this.cabecera6Form.get('mmo')?.value,
      mmp: this.cabecera6Form.get('mmp')?.value,
      mmq: this.cabecera6Form.get('mmq')?.value,
      mmr: this.cabecera6Form.get('mmr')?.value,
      mms: this.cabecera6Form.get('mms')?.value,
      mmt: this.cabecera6Form.get('mmt')?.value,
      mmu: this.cabecera6Form.get('mmu')?.value,
      mmv: this.cabecera6Form.get('mmv')?.value,
      mmw: this.cabecera6Form.get('mmw')?.value,
      mmx: this.cabecera6Form.get('mmx')?.value,
      mmy: this.cabecera6Form.get('mmy')?.value,
      mmz: this.cabecera6Form.get('mmz')?.value,
    } 

    if(this.id !== null) {
      //editamos el producto ñaño
      this._cabecera6Service.editarCabecera6(this.id, Cabecera6).subscribe(data => {
        this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
        this.router.navigate(['/pagina149']);
      },error => {
        console.log(error);
        this.cabecera6Form.reset();
      })
    }else{
      //agregamos el producto ñaño
      console.log(Cabecera6);
      this._cabecera6Service.guardarCabecera6(Cabecera6).subscribe(data => {
       this.toastr.success('Felicidades', 'Registrado exitosamente');
       this.router.navigate(['/pagina149']);
    }, error => {
      console.log(error);
      this.cabecera6Form.reset();
    })

  }

  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'EDITAR CABECERA BAI06';
      this._cabecera6Service.obtenerCabecera6(this.id).subscribe(data =>{
        this.cabecera6Form.setValue({
          mma: data.mma,
          mmb: data.mmb,
          mmc: data.mmc,
          mmd: data.mmd,
          mme: data.mme,
          mmf: data.mmf,
          mmg: data.mmg,
          mmh: data.mmh,
          mmi: data.mmi,
          mmj: data.mmj,
          mmk: data.mmk,
          mml: data.mml,
          mmm: data.mmm,
          mmn: data.mmn,
          mmo: data.mmo,
          mmp: data.mmp,
          mmq: data.mmq,
          mmr: data.mmr,
          mms: data.mms,
          mmt: data.mmt,
          mmu: data.mmu,
          mmv: data.mmv,
          mmw: data.mmw,
          mmx: data.mmx,
          mmy: data.mmy,
          mmz: data.mmz,
        })
      })
    }
  }

}
