import { Injectable } from '@angular/core';
import { CONSTANTS } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  getConstants() {
    return CONSTANTS;
  }
}
