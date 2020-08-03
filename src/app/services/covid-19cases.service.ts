import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19casesService {

  constructor(public covid_19http: HttpClient) { }

  public covid_19info():Observable<any>{
   return this.covid_19http.get("https://api.covid19api.com/summary");
  };

};
