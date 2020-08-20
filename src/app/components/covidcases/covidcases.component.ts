import { Component, OnInit } from '@angular/core';
import { CovidindiaService } from "../../services/covidindia.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'coronacases',
  templateUrl: './covidcases.component.html',
  styleUrls: ['./covidcases.component.scss']
})
export class CovidcasesComponent implements OnInit {
  public overallcasesinindia:any;

  constructor(public overallcases:CovidindiaService) { }

  ngOnInit(): void {
    this.overallcases.getcovidindiadetails().subscribe((posres)=>{
      this.overallcasesinindia = posres;
    },
    (errresp:HttpErrorResponse)=>{
        console.warn(errresp,"error");
    });
  }

}
