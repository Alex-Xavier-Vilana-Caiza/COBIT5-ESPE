import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raci05 } from 'src/app/models/raci05';

@Injectable({
  providedIn: 'root'
})
export class Raci05Service {
  url = 'http://localhost:4000/api/raci05s/';

  constructor(private http: HttpClient) { }

  getRaci05():Observable<any> {
    return this.http.get(this.url);
}

eliminarRaci05(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarRaci05(raci05: Raci05): Observable<any> {
  return this.http.post(this.url, raci05);
}

obtenerRaci05(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarRaci05(id: string, raci05: Raci05): Observable<any> {
  return this.http.put(this.url + id, raci05);
}
}
