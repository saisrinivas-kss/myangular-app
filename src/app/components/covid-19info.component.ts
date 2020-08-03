import { Component, OnInit } from '@angular/core';
import { Covid19casesService } from "../services/covid-19cases.service";
import { AllcountriesinfoService } from "../services/allcountriesinfo.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'covidcases',
  templateUrl: './covid-19info.component.html',
  styleUrls: ['./covid-19info.component.scss']
})
export class Covid19infoComponent implements OnInit {


  public coronacasesinfo:any;

  public Global:any;

  constructor(public covidcasesinfo:Covid19casesService, public allcontries__info:AllcountriesinfoService) { }

  ngOnInit(): void {
    this.covidcasesinfo.covid_19info().subscribe((posRes)=>{
      this.coronacasesinfo = posRes
    }, (errResp:HttpErrorResponse)=>{
          console.warn(errResp, "Error in Fetching data....");
    });
  };

};
