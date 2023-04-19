import { Injectable } from '@angular/core';
import {Observable,pipe,tap} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { MikroStudyCaseConfig } from './MikroStudyCaseConfig';
import { environment } from 'src/app/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  static AppSettings: MikroStudyCaseConfig;
  constructor(private http: HttpClient) { }

  load(): Observable<MikroStudyCaseConfig> {
    const version = '1.0'; // sabit bir versiyon numarası test için
    return this.http.get<MikroStudyCaseConfig>(`./assets/config/appsettings.${environment.name}.json?v=${version}`)
      .pipe(
        tap(result => {
          ConfigService.AppSettings = result;
          console.log(result);
        }),
      );
  }
}
