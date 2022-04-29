import { Racicuatro } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RacicuatroService {
  url = 'http://localhost:4000/api/racicuatros/';

  constructor(private http: HttpClient){}

    getRacicuatros():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarRacicuatro(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarRacicuatro(racicuatro: Racicuatro): Observable<any> {
    return this.http.post(this.url, racicuatro);
  }

  obtenerRacicuatro(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarRacicuatro(id: string, racicuatro: Racicuatro): Observable<any> {
    return this.http.put(this.url + id, racicuatro);
  }
}
