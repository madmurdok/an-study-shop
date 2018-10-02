import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  ngAfterViewInit () {
    this.appTitle.nativeElement.innerText = 'Welcome to Tea Shop!';
  }

}
