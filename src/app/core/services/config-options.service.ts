import { Injectable } from '@angular/core';

import { ConfigModel} from '../../shared/models';

import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {

  config: ConfigModel;

  constructor() { }

  setConfig (config: ConfigModel) {
    this.config = config;
    this.config.lastUpdateTime = new Date();
  }

  getConfig (): ConfigModel {
    return this.config;
  }
}
