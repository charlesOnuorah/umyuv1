import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
 
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { ToastController } from '@ionic/angular';
import { Media } from '@ionic-native/media/ngx';
import { Httpd } from '@ionic-native/httpd/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { CourseCodeService, CourseDepartmentService, CourseFacultyService,
  CourseLevelService, DownloadService, AuthService} from './services';
import { ApiService, UtilityService} from './shared';

import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, PdfViewerModule, FormsModule, NgxDocViewerModule],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    ApiService,
    AuthService,
    UtilityService,
    CourseCodeService,
    CourseDepartmentService,
    CourseFacultyService,
    CourseLevelService,
    DownloadService,
    File,
    FileOpener,
    FileTransfer,
    DocumentViewer,
    Diagnostic,
    FileTransferObject,
    SpinnerDialog,
    Toast,
    ToastController,
    Media,
    Httpd,
    NativeStorage,
    ScreenOrientation,
    NavController,
    IonicModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
