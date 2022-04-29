import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cabR3 } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ThreesService {

  url = 'http://localhost:4000/api/threes/';

  constructor(private http: HttpClient){}

    getThrees():Observable<any> {
      return this.http.get(this.url);
  }

  eliminarThree(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  guardarThree(three:cabR3): Observable<any> {
    return this.http.post(this.url, three);
  }

  obtenerThree(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarThree(id: string, three: cabR3): Observable<any> {
    return this.http.put(this.url + id, three);
  }
}