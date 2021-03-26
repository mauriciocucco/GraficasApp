import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  getInfoUsers() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getInfoDona() {
    return this.getInfoUsers().pipe(
      map((resp) => {
        const labels = Object.keys(resp);
        const data = Object.values(resp);

        return { labels, data };
      })
    );
  }
}
