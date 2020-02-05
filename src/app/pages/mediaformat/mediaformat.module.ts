import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MediaFormatPage } from './mediaformat.page';

const routes: Routes = [
  {
    path: '',
    component: MediaFormatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MediaFormatPage]
})
export class MediaFormatPageModule {}
