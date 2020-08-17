import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidindiaService {

  constructor(public covidindiahttp:HttpClient) { }

  /**
   * getcovidindiadetails
   */
  public getcovidindiadetails():Observable<any> {
    return this.covidindiahttp.get("https://api.rootnet.in/covid19-in/stats/latest");
  }
}
