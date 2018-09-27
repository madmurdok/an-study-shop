import { Component, OnInit } from '@angular/core';
import { ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle', {read: ViewContainerRef}) appTitle: ViewContainerRef;
  title = 'shop';

  ngOnInit() {
    this.appTitle.element.nativeElement.innerText = 'Welcome to Tea Shop!';
  }

}
