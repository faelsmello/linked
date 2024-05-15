import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISets } from '../shared/interfaces/sets';
import { ICards } from '../shared/interfaces/cards';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private ENDPOINT = 'https://api.magicthegathering.io/v1';

  constructor(private _http: HttpClient) {}

  public fetchListSets(name: string): Observable<ISets> {
    const params = new HttpParams({
      fromObject: {
        name,
      },
    });

    return this._http.get<ISets>(`${this.ENDPOINT}/sets`, { params });
  }

  public fetchListBooter(code: string): Observable<ICards> {
    return this._http.get<ICards>(`${this.ENDPOINT}/sets/${code}/booster`);
  }
}
