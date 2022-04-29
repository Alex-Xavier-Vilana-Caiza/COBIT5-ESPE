import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TablaOcho } from 'src/app/models/producto';
import { TablaochoService } from 'src/app/services/tablaocho.service';

@Component({
  selector: 'app-crear-tablaocho',
  templateUrl: './crear-tablaocho.component.html',
  styleUrls: ['./crear-tablaocho.component.css']
})
export class CrearTablaochoComponent implements OnInit {

  title = 'CREAR TABLA BAI08';
  tablaochoForm: FormGroup;
  id: string | null;
  
  constructor(private th: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _tablaochoService: TablaochoService,
              private aRouter: ActivatedRoute) { 
    this.tablaochoForm = this.th.group({
      BAI08: ['', Validators.required],
      ca: ['', Validators.required],
      cb: ['', Validators.required],
      cc: ['', Validators.required],
      cd: ['', Validators.required],
      ce: ['', Validators.required],
      cf: ['', Validators.required],
      cg: ['', Validators.required],
      ch: ['', Validators.required],
      ci: ['', Validators.required],
      cj: ['', Validators.required],
      ck: ['', Validators.required],
      cl: ['', Validators.required],
      cm: ['', Validators.required],
      cn: ['', Validators.required],
      co: ['', Validators.required],
      cp: ['', Validators.required],
      cq: ['', Validators.required],
      cr: ['', Validators.required],
      cs: ['', Validators.required],
      ct: ['', Validators.required],
      cu: ['', Validators.required],
      cv: ['', Validators.required],
      cw: ['', Validators.required],
      cx: ['', Validators.required],
      cy: ['', Validators.required],
      cz: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

 ngOnInit(): void {
   this.esEditar();
 }

 agregarTablaocho(){
   const TABLAOCHO: TablaOcho= {
    BAI08: this.tablaochoForm.get('BAI08')?.value,
    ca: this.tablaochoForm.get('ca')?.value,
    cb: this.tablaochoForm.get('cb')?.value,
    cc: this.tablaochoForm.get('cc')?.value,
    cd: this.tablaochoForm.get('cd')?.value,
    ce: this.tablaochoForm.get('ce')?.value,
    cf: this.tablaochoForm.get('cf')?.value,
    cg: this.tablaochoForm.get('cg')?.value,
    ch: this.tablaochoForm.get('ch')?.value,
    ci: this.tablaochoForm.get('ci')?.value,
    cj: this.tablaochoForm.get('cj')?.value,
    ck: this.tablaochoForm.get('ck')?.value,
    cl: this.tablaochoForm.get('cl')?.value,
    cm: this.tablaochoForm.get('cm')?.value,
    cn: this.tablaochoForm.get('cn')?.value,
    co: this.tablaochoForm.get('co')?.value,
    cp: this.tablaochoForm.get('cp')?.value,
    cq: this.tablaochoForm.get('cq')?.value,
    cr: this.tablaochoForm.get('cr')?.value,
    cs: this.tablaochoForm.get('cs')?.value,
    ct: this.tablaochoForm.get('ct')?.value,
    cu: this.tablaochoForm.get('cu')?.value,
    cv: this.tablaochoForm.get('cv')?.value,
    cw: this.tablaochoForm.get('cw')?.value,
    cx: this.tablaochoForm.get('cx')?.value,
    cy: this.tablaochoForm.get('cy')?.value,
    cz: this.tablaochoForm.get('cz')?.value,
    
   } 

   if(this.id !== null) {
     //editamos el producto ñaño
     this._tablaochoService.editarTablaocho(this.id, TABLAOCHO).subscribe(data => {
       this.toastr.success('Producto actualizado con exito', 'Producto actualizado');
       this.router.navigate(['/pagina159']);
     },error => {
       console.log(error);
       this.tablaochoForm.reset();
     })
   }else{
     //agregamos el producto ñaño
     console.log(TABLAOCHO);
     this._tablaochoService.guardarTablaocho(TABLAOCHO).subscribe(data => {
      this.toastr.success('Felicidades', 'Registrado exitosamente');
      this.router.navigate(['/pagina159']);
   }, error => {
     console.log(error);
     this.tablaochoForm.reset();
   })

 }

 }

 esEditar(){
   if(this.id !== null){
     this.title = 'EDITAR TABLA BAI08';
     this._tablaochoService.obtenerTablaocho(this.id).subscribe(data =>{
       this.tablaochoForm.setValue({
        BAI08: data.BAI08,
        ca: data.ca,
        cb: data.cb,
        cc: data.cc,
        cd: data.cd,
        ce: data.ce,
        cf: data.cf,
        cg: data.cg,
        ch: data.ch,
        ci: data.ci,
        cj: data.cj,
        ck: data.ck,
        cl: data.cl,
        cm: data.cm,
        cn: data.cn,
        co: data.co,
        cp: data.cp,
        cq: data.cq,
        cr: data.cr,
        cs: data.cs,
        ct: data.ct,
        cu: data.cu,
        cv: data.cv,
        cw: data.cw,
        cx: data.cx,
        cy: data.cy,
        cz: data.cz,        
       })
     })
   }
 }

}
