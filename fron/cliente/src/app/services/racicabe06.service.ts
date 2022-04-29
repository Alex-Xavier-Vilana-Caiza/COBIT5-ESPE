import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Racicabe06 } from '../models/raci06';

@Injectable({
  providedIn: 'root'
})
export class Racicabe06Service {
  url = 'http://localhost:4000/api/racicabe06s/';
  constructor(private http: HttpClient) { }

  getRacicabe06():Observable<any> {
    return this.http.get(this.url);
}

eliminarRacicabe06(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRacicabe06(racicabe06: Racicabe06): Observable<any> {
  return this.http.post(this.url, racicabe06);
}

obtenerRacicabe06(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRacicabe06(id: string, racicabe06: Racicabe06): Observable<any> {
  return this.http.put(this.url + id, racicabe06);
}
}
