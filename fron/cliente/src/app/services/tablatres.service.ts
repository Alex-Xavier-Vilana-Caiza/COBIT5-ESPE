import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TablaTres } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class TablatresService {

  url = 'http://localhost:4000/api/tablatres/';

  constructor(private http: HttpClient){}

    getTablatress():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarTablatres(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarTablatres(tablatres: TablaTres): Observable<any> {
    return this.http.post(this.url, tablatres);
  }

  obtenerTablatres(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTablatres(id: string, tablatres: TablaTres): Observable<any> {
    return this.http.put(this.url + id, tablatres);
  }
}