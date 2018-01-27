import { Injectable } from '@angular/core';
import { Pole } from '../Pole';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PoliaService {

  private polia: Pole[] = [new Pole(6, 'E', '12aService', 192, 'vlastnik', 'mrkva'),
  new Pole(6, 'E', '15bService', 147, 'najomca', 'ryza')];

  constructor(private http: HttpClient) { }
  private serverUrl = 'http://localhost:8080/polia';

  getPolia(): Observable<Pole[]> {
    return of(this.polia);
  }

  getPoliaFromServer(): Observable<Pole[]> {
    return this.http.get<Pole[]>(this.serverUrl);
  }

  addPole(pole: Pole): Observable<any> {
    return this.http.post(this.serverUrl, pole);
  }

}
