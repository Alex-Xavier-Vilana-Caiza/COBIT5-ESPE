import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TablaSeis } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class TablaseisService {
  url = 'http://localhost:4000/api/tablaseis/';

  constructor(private http: HttpClient){}

    getTablaseiss():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarTablaseis(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarTablaseis(tablaseis: TablaSeis): Observable<any> {
    return this.http.post(this.url, tablaseis);
  }

  obtenerTablaseis(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTablaseis(id: string, tablaseis: TablaSeis): Observable<any> {
    return this.http.put(this.url + id, tablaseis);
  }
}
