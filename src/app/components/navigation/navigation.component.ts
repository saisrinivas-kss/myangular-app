import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >=10;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
