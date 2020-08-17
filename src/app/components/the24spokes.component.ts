import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CovidindiaService } from '../services/covidindia.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'the24spokesNews',
  templateUrl: './the24spokes.component.html',
  styleUrls: ['./the24spokes.component.scss']
})
export class The24spokesComponent implements OnInit {


  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }


  public indiacoronacases:any;
  constructor(public covidindiainfo: CovidindiaService) { }

  ngOnInit() {
    this.covidindiainfo.getcovidindiadetails().subscribe((posres)=>{
       this.indiacoronacases = posres;
    },(errres:HttpErrorResponse)=>{
      console.warn(errres, "error while fetching data");
    });
  }
}
