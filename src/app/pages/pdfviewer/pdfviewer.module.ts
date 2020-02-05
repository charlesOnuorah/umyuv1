import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PDFViewerPage } from './pdfviewer.page';
import { PdfViewerModule } from 'ng2-pdf-viewer'

const routes: Routes = [
  {
    path: '',
    component: PDFViewerPage
  }
];

@NgModule({
  imports: [
    PdfViewerModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PDFViewerPage]
})
export class PDFViewerPageModule {}
