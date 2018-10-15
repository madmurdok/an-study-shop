import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta) {}

  ngAfterViewInit () {
    this.appTitle.nativeElement.innerText = 'Welcome to Tea Shop!';
  }

  onActivate($event) {
    console.log('Activated Component', $event);
  }

  onDeactivate($event) {
   console.log('Deactivated Component', $event);
  }

}
