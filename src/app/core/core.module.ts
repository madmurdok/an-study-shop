import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantsService, ConfigOptionsService, LocalStorageService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ConstantsService,
    ConfigOptionsService,
    LocalStorageService]
})
export class CoreModule { }
