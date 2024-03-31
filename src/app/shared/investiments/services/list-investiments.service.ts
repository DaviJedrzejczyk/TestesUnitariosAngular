import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Investiments } from '../model/investiments';

@Injectable({
  providedIn: 'root',
})
export class ListInvestimentsService {
  private url =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  constructor(private _http: HttpClient) {}

  public list(): Observable<Array<Investiments>> {
    return this._http
      .get<Array<Investiments>>(this.url)
      .pipe(map((res) => res));
  }
}
