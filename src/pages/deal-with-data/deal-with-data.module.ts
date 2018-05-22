import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealWithDataPage } from './deal-with-data';

@NgModule({
  declarations: [
    DealWithDataPage,
  ],
  imports: [
    IonicPageModule.forChild(DealWithDataPage),
  ],
})
export class DealWithDataPageModule {}
