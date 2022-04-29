import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TablaOcho } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class TablaochoService {
  
  url = 'http://localhost:4000/api/tablaocho/';

  constructor(private http: HttpClient){}

    getTablaochos():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarTablaocho(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarTablaocho(tablaocho: TablaOcho): Observable<any> {
    return this.http.post(this.url, tablaocho);
  }

  obtenerTablaocho(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTablaocho(id: string, tablaocho: TablaOcho): Observable<any> {
    return this.http.put(this.url + id, tablaocho);
  }
}
