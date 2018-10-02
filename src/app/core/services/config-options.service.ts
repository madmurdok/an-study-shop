import { Injectable } from '@angular/core';

import { ConfigModel} from '../../shared/models';

@Injectable({
  providedIn: 'root'
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
