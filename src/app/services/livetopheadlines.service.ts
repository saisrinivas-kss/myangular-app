import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivetopheadlinesService {

  constructor(public topheadlines:HttpClient) { }

  public topheadlinesnewinindia():Observable<any>{
    return this.topheadlines.get("http://newsapi.org/v2/top-headlines?country=in&apiKey=8da0d5cf661e44599f9d53fd4009b7c8");
  }
}
