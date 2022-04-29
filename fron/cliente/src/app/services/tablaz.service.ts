import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tablaz } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class TablazService {

  url = 'http://localhost:4000/api/tablazz/';

  constructor(private http: HttpClient){}

    getTablazz():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarTablaz(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarTablaz(tablaz: Tablaz): Observable<any> {
    return this.http.post(this.url, tablaz);
  }

  obtenerTablaz(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTablaz(id: string, tablaz: Tablaz): Observable<any> {
    return this.http.put(this.url + id, tablaz);
  }
}
