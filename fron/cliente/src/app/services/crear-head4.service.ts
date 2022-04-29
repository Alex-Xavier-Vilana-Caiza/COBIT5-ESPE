import { Head4 } from './../models/producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'   
})
export class Head4Service {
  url= 'http://localhost:4000/api/heads4/';

  constructor(private http: HttpClient) { }

  getHeads4(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarHead4(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarHead4(head4: Head4): Observable<any> {
    return this.http.post(this.url, head4);
  }

  obtenerHead4(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarHead4(id: string, head4: Head4): Observable<any> {
    return this.http.put(this.url + id, head4);
  }
}
