import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TablaSiete } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class TablasieteService {
  url = 'http://localhost:4000/api/tablasiete/';

  constructor(private http: HttpClient){}

    getTablasietes():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarTablasiete (id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarTablasiete(tablasiete : TablaSiete): Observable<any> {
    return this.http.post(this.url, tablasiete );
  }

  obtenerTablasiete(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTablasiete (id: string, tablasiete: TablaSiete): Observable<any> {
    return this.http.put(this.url + id, tablasiete );
  }
}
