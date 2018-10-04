import { Injectable } from '@angular/core';
import { CONSTANTS } from '../constants/constants';
import { CoreModule } from '../core.module';
@Injectable({
  providedIn: CoreModule
})
export class ConstantsService {

  getConstants() {
    return CONSTANTS;
  }
}
