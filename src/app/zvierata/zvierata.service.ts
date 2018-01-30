import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Zviera } from '../Zviera';

@Injectable()
export class ZvierataService {
  zvierata: Zviera[];

  //zvierata: Zviera[] = [new Zviera(1, "32a", "krava", "hneda", "z", "1992-09-21", "2000-11-21", 100, ""),
  //new Zviera(2, "321q", "kon", "arabsky", "m", "2000-11-21", "2005-01-21", 0, "")];


  constructor(private http: HttpClient) { }
  private serverUrl = 'http://localhost:8080/zvierata';

  getZvierata(): Observable<Zviera[]> {
    return of(this.zvierata);
  }

  getZvierataFromServer(): Observable<Zviera[]> {
    return this.http.get<Zviera[]>(this.serverUrl);
  }

  addZviera(zviera: Zviera): Observable<any> {
    /* zviera.datumNarodenia = "[" + zviera.fdatumNarodenia.substring(6) + ","
       + zviera.fdatumNarodenia.substring(3, 5) + "," + zviera.fdatumNarodenia.substring(0, 2) + "]";*/
    return this.http.post(this.serverUrl, zviera);
  }

}

