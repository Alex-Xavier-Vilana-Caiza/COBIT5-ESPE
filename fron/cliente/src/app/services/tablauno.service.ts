import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TablaUno } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class TablaunoService {

  url = 'http://localhost:4000/api/tablauno/';

  constructor(private http: HttpClient){}

    getTablaunos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarTablauno(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarTablauno(tablauno: TablaUno): Observable<any> {
    return this.http.post(this.url, tablauno);
  }

  obtenerTablauno(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTablauno(id: string, tablauno: TablaUno): Observable<any> {
    return this.http.put(this.url + id, tablauno);
  }
}