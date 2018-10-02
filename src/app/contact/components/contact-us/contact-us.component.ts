import { Component, OnInit, Inject, InjectionToken, Optional } from '@angular/core';
import { ConfigOptionsService, GeneratorFactory, LocalStorageService } from '../../../core/services';

const CONSTANTS = new InjectionToken<Object>('constants');
const RANDOM = new InjectionToken<string>('random');

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [
    ConfigOptionsService,
    LocalStorageService,
    { provide: CONSTANTS, useValue: { App: 'TeaShop', Ver: '1.0' }},
    { provide: RANDOM, useFactory: GeneratorFactory(5), deps: []}
  ]
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Inject(CONSTANTS) public constants: Object,
    @Inject(RANDOM) public random: string,
    @Optional() private configSrvice: ConfigOptionsService,
    @Optional() private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
  }

}
