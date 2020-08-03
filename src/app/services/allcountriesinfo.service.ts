import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllcountriesinfoService {

  constructor(public  Allcountriesinfohttp: HttpClient) { }

  public getallcountriesinfo():Observable<any>{
    return this.Allcountriesinfohttp.get("https://restcountries.eu/rest/v2/all");
  };
};
