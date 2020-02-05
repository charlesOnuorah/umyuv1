import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BulkDownloadPage } from './bulkdownload.page';

const routes: Routes = [
  {
    path: '',
    component: BulkDownloadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BulkDownloadPage]
})
export class BulkDownloadPageModule {}
