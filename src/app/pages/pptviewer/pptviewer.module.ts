import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PPTViewerPage } from './pptviewer.page';
import { NgxDocViewerModule } from 'ngx-doc-viewer'
import { PdfViewerModule } from 'ng2-pdf-viewer'

const routes: Routes = [
  {
    path: '',
    component: PPTViewerPage
  }
];

@NgModule({
  imports: [
    NgxDocViewerModule,
    PdfViewerModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PPTViewerPage]
})
export class PPTViewerPageModule {}
