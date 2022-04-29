import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TablaDos } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class TabladosService {

  url = 'http://localhost:4000/api/tablados/';

  constructor(private http: HttpClient){}

    getTabladoss():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarTablados(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarTablados(tablados: TablaDos): Observable<any> {
    return this.http.post(this.url, tablados);
  }

  obtenerTablados(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTablados(id: string, tablados: TablaDos): Observable<any> {
    return this.http.put(this.url + id, tablados);
  }
}
