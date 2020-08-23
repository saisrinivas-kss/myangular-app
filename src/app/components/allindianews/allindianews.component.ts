import { Component, OnInit } from '@angular/core';
import { LivetopheadlinesService } from "../../services/livetopheadlines.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'indiannews',
  templateUrl: './allindianews.component.html',
  styleUrls: ['./allindianews.component.scss']
})
export class AllindianewsComponent implements OnInit {

  constructor(public allnewsinindia:LivetopheadlinesService) { }

  public TopheadlinesinIndia:any;

  ngOnInit(): void {
    this.allnewsinindia.topheadlinesnewinindia().subscribe((positiveresponse)=>{
      this.TopheadlinesinIndia = positiveresponse;
    },
    (errorresponse:HttpErrorResponse)=>{
      console.warn(errorresponse, "Error while fetching data..")
    })
  }

}
