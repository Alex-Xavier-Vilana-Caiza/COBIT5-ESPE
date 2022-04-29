import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tablax } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class TablaxService {

  url = 'http://localhost:4000/api/tablax/';

  constructor(private http: HttpClient){}

    getTablaxx():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarTablax(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarTablax(tablax: Tablax): Observable<any> {
    return this.http.post(this.url, tablax);
  }

  obtenerTablax(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTablax(id: string, tablax: Tablax): Observable<any> {
    return this.http.put(this.url + id, tablax);
  }
}
