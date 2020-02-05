(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pdfviewer-pdfviewer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pdfviewer/pdfviewer.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pdfviewer/pdfviewer.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{ courseCode }} - PDF\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>{{($eventItem | async)?.name}}</ion-title> -->\n    \n    <ion-buttons slot=\"end\">\n      <ion-button style=\"font-size: 12px;\" (click)=\"actionFavoriteCourses(actionFavType)\" icon-end>\n        <ion-icon name=\"{{ actionFavType === 'Remov' ? 'remove-circle-outline' : 'add-circle-outline' }}\" color=\"light\"></ion-icon>\n        <span style=\"padding-right: 5px; padding-left: 5px;\">Favorite</span>\n        <!-- <ion-icon name=\"star\" color=\"light\"></ion-icon> -->\n      </ion-button>\n      <ion-button style=\"font-size: 12px;\" (click)=\"downloadMedia()\" icon-end>\n        <span style=\"padding-right: 5px;\">Update</span>\n        <ion-icon name=\"cloud-download\" color=\"light\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button style=\"font-size: 12px;\" (click)=\"verifyMediaDownload()\" icon-end>\n        <span style=\"padding-right: 5px;\">Daonload All</span>\n        <ion-icon name=\"cloud-download\" color=\"light\" style=\"padding-right: 5px; padding-left: 5px;\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"background-color:#646464;\">  \n  <ion-toolbar color=\"light\">    \n    <ion-buttons slot=\"start\">\n      <ion-button style=\"font-size: 12px;\" (click)=\"stepFromPage(-1)\" icon-start>\n        <ion-icon name=\"arrow-round-back\" color=\"dark\"></ion-icon>\n        <span style=\"padding-left: 5px;\">Prev</span>\n      </ion-button>\n      <ion-button style=\"font-size: 12px;\" (click)=\"stepFromPage(1)\" icon-end>\n        <span style=\"padding-right: 5px;\">Next</span>\n        <ion-icon name=\"arrow-round-forward\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title style=\"text-align: center; font-size:15px;\">\n      <span *ngIf=\"totalPages\" class=\"page-manipulation\">\n        <span>\n          <ion-label color=\"dark\">{{ page }} of {{ totalPages }}</ion-label>\n        </span>\n      </span>\n    </ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <span class=\"zoom-container\">\n  \n        <ion-button style=\"font-size: 12px;\" (click)=\"zoom(0.2)\" icon-start>\n          <ion-icon name=\"add\" color=\"dark\"></ion-icon>\n          <!-- <span style=\"padding-left: 5px;\">Prev</span> -->\n        </ion-button>\n        <ion-button style=\"font-size: 12px;\" (click)=\"zoom(-0.2)\" icon-end>\n          <!-- <span style=\"padding-right: 5px;\">Next</span> -->\n          <ion-icon name=\"remove\" color=\"dark\"></ion-icon>\n        </ion-button>\n\n        <select title=\"Zoom\" style=\"min-width: 146px;\" [(ngModel)]=\"zoomType\">\n          <option title=\"\" value=\"auto\" selected=\"selected\">Automatic Zoom</option>\n          <option title=\"\" value=\"page-actual\">Actual Size</option>\n          <option title=\"\" value=\"page-fit\">Page Fit</option>\n          <option title=\"\" value=\"page-width\">Page Width</option>\n          <option title=\"\" value=\"custom\" disabled=\"disabled\" hidden=\"true\">{{ zoomType == 'custom' ? zoomValue * 100 : '120' }}%</option>\n          <option title=\"\" value=\"0.5\">50%</option>\n          <option title=\"\" value=\"0.75\">75%</option>\n          <option title=\"\" value=\"1\">100%</option>\n          <option title=\"\" value=\"1.25\">125%</option>\n          <option title=\"\" value=\"1.5\">150%</option>\n          <option title=\"\" value=\"2\">200%</option>\n          <option title=\"\" value=\"3\">300%</option>\n          <option title=\"\" value=\"4\">400%</option>\n        </select>\n      </span>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <pdf-viewer \n    [src]=\"pdfSrc\"\n    [zoom]=\"zoomType == 'custom' ? zoomValue : zoomType\"\n    [(page)]=\"page\"\n    [show-all]=\"true\"\n    (after-load-complete)=\"onLoadComplete($event)\"\n    [show-borders]=\"true\" \n    [stick-to-page]=\"true\"\n    color=\"medium\">\n  </pdf-viewer>\n  \n  <!-- <pdf-viewer\n    [render-text]=\"true\" \n    [fit-to-page]=\"true\" \n    [original-size]=\"false\"\n    style=\"display: block; background-color:#646464;\">\n  </pdf-viewer> -->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"dark\">\n    <ion-button color=\"light\" fill=\"clear\" expand=\"full\" (click)=\"enterChatRooms()\">{{ createRoomCaption }}</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/pdfviewer/pdfviewer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pdfviewer/pdfviewer.module.ts ***!
  \*****************************************************/
/*! exports provided: PDFViewerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDFViewerPageModule", function() { return PDFViewerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pdfviewer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pdfviewer.page */ "./src/app/pages/pdfviewer/pdfviewer.page.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");








const routes = [
    {
        path: '',
        component: _pdfviewer_page__WEBPACK_IMPORTED_MODULE_6__["PDFViewerPage"]
    }
];
let PDFViewerPageModule = class PDFViewerPageModule {
};
PDFViewerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__["PdfViewerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pdfviewer_page__WEBPACK_IMPORTED_MODULE_6__["PDFViewerPage"]]
    })
], PDFViewerPageModule);



/***/ }),

/***/ "./src/app/pages/pdfviewer/pdfviewer.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/pdfviewer/pdfviewer.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-manipulation .page-number {\n  width: 40px;\n  text-align: right;\n  font-size: 15px;\n}\n\n.zoom-container {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n\n.zoom-container select {\n  font-size: 15px;\n  color: #000000;\n  margin: 0;\n  margin-top: 4px;\n  margin-right: 10px;\n  padding: 3px 2px 2px;\n  border: none;\n  background: #f4f5f8;\n}\n\n:host ::ng-deep .pdfViewer {\n  background: #646464 !important;\n  padding-top: 20px !important;\n}\n\n:host ::ng-deep .pdfViewer .page {\n  border: none !important;\n  margin-bottom: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGRmdmlld2VyL0M6XFxVc2Vyc1xcQ2hhcmxlcyBPbnVvcmFoXFxEb2N1bWVudHNcXENCQ1xcUHJvamVjdHNcXFVNWVVBcHBTb3VyY2Uvc3JjXFxhcHBcXHBhZ2VzXFxwZGZ2aWV3ZXJcXHBkZnZpZXdlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BkZnZpZXdlci9wZGZ2aWV3ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElBO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDREo7O0FES0E7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0FDRkY7O0FES0E7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZGZ2aWV3ZXIvcGRmdmlld2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW1hbmlwdWxhdGlvbiB7ICAgICAgICBcclxuICAucGFnZS1udW1iZXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi56b29tLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmc6IDNweCAycHggMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjVmODtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucGRmVmlld2VyIHtcclxuICBiYWNrZ3JvdW5kOiAjNjQ2NDY0ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wZGZWaWV3ZXIgLnBhZ2Uge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIucGFnZS1tYW5pcHVsYXRpb24gLnBhZ2UtbnVtYmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi56b29tLWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi56b29tLWNvbnRhaW5lciBzZWxlY3Qge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAzcHggMnB4IDJweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnBkZlZpZXdlciB7XG4gIGJhY2tncm91bmQ6ICM2NDY0NjQgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5wZGZWaWV3ZXIgLnBhZ2Uge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pdfviewer/pdfviewer.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/pdfviewer/pdfviewer.page.ts ***!
  \***************************************************/
/*! exports provided: PDFViewerPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDFViewerPage", function() { return PDFViewerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/index.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");











let PDFViewerPage = class PDFViewerPage {
    constructor(loadingCtrl, platform, fileTransfer, nativeStorage, activatedRoute, toastCtrl, file, router, alertController) {
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.fileTransfer = fileTransfer;
        this.nativeStorage = nativeStorage;
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.router = router;
        this.alertController = alertController;
        this.dirBase = "/.UMYU/.data/.materials/";
        this.downloadURL = "http://umyu.easystudy.com.ng/materials/";
        this.isRead = false;
        this.courseLists = [];
        this.actionFavType = "Add";
        this.count = 0;
        this.zoomValue = 1;
        this.page = 1;
        this.isSearchShown = false;
        this.isCaseSensativeSearch = false;
        this.zoomType = 'auto';
        this.rooms = [];
        this.ref = Firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('chatrooms/');
        this.getFavoriteCourses();
        this.nativeStorage.getItem('selectedcourse')
            .then(selectedCourse => {
            this.courseCode = selectedCourse.Code;
            this.courseTitle = selectedCourse.Title;
            this.ref.on('value', resp => {
                this.rooms = [];
                this.rooms = snapshotToArray(resp);
                this.createRoomCaption = "Create Chat Room";
                this.actionType = 1;
                if (this.rooms !== undefined && this.rooms.length !== 0) {
                    this.rooms.forEach(room => {
                        if (room.roomname === this.courseCode) {
                            this.createRoomCaption = "Select Chat Room";
                            this.actionType = 2;
                        }
                    });
                }
            });
        }, () => { });
    }
    ngOnInit() {
        // Get the ID that was passed with the URL    
        this.activatedRoute.params.subscribe(params => {
            this.courseID = +params['courseid'];
        });
        if (this.platform.is('android')) {
            this.systemBase = this.file.externalRootDirectory + "/Documents";
        }
        else if (this.platform.is('ios')) {
            this.systemBase = this.file.documentsDirectory + "/Documents";
        }
        else if (this.platform.is('desktop')) {
            this.systemBase = this.file.dataDirectory;
        }
        else if (this.platform.is('tablet')) {
            this.systemBase = this.file.dataDirectory;
        }
        else {
            this.systemBase = this.file.dataDirectory;
        }
        this.count = 1;
        this.totalFiles = 1;
        this.platform.ready().then(() => {
            this.fileNameTemp = "pdffiletemp" + this.courseID + ".pdf";
            this.fileName = "pdffile" + this.courseID + ".pdf";
            this.dirName = this.systemBase + this.dirBase + ".pdfs/";
            this.downloadURL = this.downloadURL + "pdf/" + this.fileName;
            this.verifyMedia().then(() => { });
        });
    }
    verifyMedia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Checking file on local storage, please wait...'
            });
            loading.present();
            //This is where the media file will be stored, you can change it as you like
            this.file.checkFile(this.dirName, this.fileName).then((success) => {
                loading.dismiss();
                // Show downloaded pdf
                this.showMediaFile();
            })
                .catch((error) => {
                loading.dismiss();
                this.downloadMedia();
            });
        });
    }
    downloadMedia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let isDownloaded = false;
            // Initialize transfer handle
            const transfer = this.fileTransfer.create();
            yield this.loadingCtrl.create({
                message: 'Downloading 1 of 1 file, please wait...'
            }).then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => { });
                setTimeout(() => {
                    if (isDownloaded === false) {
                        // Abort active transfer:
                        transfer.abort();
                        // Remove incomplete downloaded file
                        this.removeTempFile('~' + this.fileNameTemp).then(() => { });
                        // Dismiss loading controller
                        this.loadingCtrl.dismiss();
                        // Send failure notification to user
                        this.presentToast("File download timedout! Please retry again");
                    }
                }, 60000);
            });
            transfer.onProgress((progressEvent) => {
                var counter = Math.floor(progressEvent.loaded / progressEvent.total * 100);
            });
            // Downloading File to Device
            transfer.download(this.downloadURL, this.dirName + this.fileNameTemp)
                .then(() => {
                isDownloaded = true;
                this.loadingCtrl.dismiss();
                // Send success notification to user
                this.presentToast("Download completed!");
                // Process downloaded media
                this.processMedia().then(() => { }).catch(() => { });
            })
                .catch(() => {
                isDownloaded = false;
                this.loadingCtrl.dismiss();
                // Send failure notification to user
                this.presentToast("File download failed!");
            });
        });
    }
    showMediaFile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Get media URL and convert to an accessible path
            let loading = yield this.loadingCtrl.create({
                message: 'Reading file, please wait...'
            });
            loading.present();
            return yield this.file.readAsText(this.dirName, this.fileName)
                .then((fileContent) => {
                this.decryptFileContent(fileContent)
                    .then((fileContent) => {
                    this.pdfSrc = fileContent;
                    loading.dismiss();
                })
                    .catch(() => { });
            })
                .catch((error) => {
                loading.dismiss();
                this.presentToast("Error Reading File! " + JSON.stringify(error));
            });
        });
    }
    processMedia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.readFileContent(this.dirName, this.fileNameTemp)
                .then((fileContent) => {
                if (fileContent.length !== 0) {
                    this.encryptFileContent(fileContent)
                        .then((encryptedFile) => {
                        if (encryptedFile.length !== 0) {
                            this.writeFileContent(this.dirName, this.fileName, encryptedFile)
                                .then(() => {
                                this.removeTempFile(this.fileNameTemp).then(() => {
                                    this.showMediaFile();
                                });
                            });
                        }
                    });
                }
            });
        });
    }
    readFileContent(dirName, fileName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let emptyString = "";
            let isRead = false;
            yield this.loadingCtrl.create({
                message: 'Reading file, please wait...'
            }).then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => { });
                setTimeout(() => {
                    if (isRead === false) {
                        // Dismiss loading controller
                        this.loadingCtrl.dismiss();
                        // Send failure notification to user
                        this.presentToast("File retrieval timedout! Please retry again");
                    }
                }, 30000);
            });
            return yield this.file.readAsDataURL(dirName, fileName)
                .then((fileContent) => {
                isRead = true;
                this.loadingCtrl.dismiss();
                return fileContent;
            })
                .catch((error) => {
                isRead = false;
                this.loadingCtrl.dismiss();
                this.presentToast("Error Reading File! " + JSON.stringify(error));
                return emptyString;
            });
        });
    }
    writeFileContent(dirName, fileName, encryptedFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Writing file, please wait...'
            });
            yield loading.present();
            // let blob = this.convertBase64ToBlob(originalBase64, contentType)
            return yield this.file.writeFile(dirName, fileName, encryptedFile, { replace: true, append: false })
                .then(() => {
                loading.dismiss();
            })
                .catch((error) => {
                loading.dismiss();
                this.presentToast("Error Writing File! " + JSON.stringify(error));
            });
        });
    }
    encryptFileContent(fileContent) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Encrypting file, please wait...'
            });
            yield loading.present();
            fileContent = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();
            loading.dismiss();
            return fileContent;
        });
    }
    decryptFileContent(encryptedFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Decrypting file, please wait...'
            });
            yield loading.present();
            let fileContent = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].decrypt(encryptedFile, ":<>?{}|[]\!@#$%^&*()_+").toString(crypto_js__WEBPACK_IMPORTED_MODULE_8__["enc"].Utf8);
            loading.dismiss();
            return fileContent;
        });
    }
    removeTempFile(fileName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Removing file, please wait...'
            });
            yield loading.present();
            return this.file.removeFile(this.dirName, fileName)
                .then(() => {
                loading.dismiss();
            })
                .catch(() => {
                loading.dismiss();
                this.presentToast("Error Removing File or Temp File No Longer Exist!");
            });
        });
    }
    zoom(value) {
        this.zoomType = 'custom';
        this.zoomValue = parseFloat((this.zoomValue + value).toFixed(2));
    }
    stepFromPage(value) {
        this.page += value;
    }
    onLoadComplete(data) {
        this.totalPages = data.numPages;
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            // this.router.navigate(['login']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
    enterChatRooms() {
        if (this.actionType == 1) {
            // Navigate to create chatroom if room does not exist
            this.router.navigate(['createroom']);
        }
        else {
            // Navigate to chatrooms if room does exist
            this.router.navigate(['chatrooms']);
        }
    }
    enterChatRoom() {
        // Navigate to chatrooms if room does exist
        this.router.navigate(['chatroom']);
    }
    ngOnDestroy() { }
    getFavoriteCourses() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Get all favourite courses from the storage
            yield this.nativeStorage.getItem('favoritecourse')
                .then((courses) => {
                if (courses.length > 0) {
                    this.courses = courses;
                    this.courses.forEach(course => {
                        if (course.id === this.courseID) {
                            this.actionFavType = "Remov";
                        }
                    });
                }
            })
                .catch(() => {
                this.presentToast("Course favorite list is empty!");
            });
        });
    }
    actionFavoriteCourses(actionType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: actionType + 'ing course to favorite, please wait...'
            });
            yield loading.present();
            let currentCourse = new src_app_models__WEBPACK_IMPORTED_MODULE_9__["Course"];
            currentCourse.id = this.courseID;
            currentCourse.code = this.courseCode;
            currentCourse.title = this.courseTitle;
            this.courseLists = [];
            if (this.courses !== undefined) {
                this.courses.forEach(course => {
                    if (course.id !== this.courseID) {
                        this.courseLists.push(course);
                    }
                });
            }
            if (actionType === "Add") {
                this.courseLists.push(currentCourse);
                this.actionFavType = "Remov";
            }
            else if (actionType === "Remov") {
                this.actionFavType = "Add";
            }
            yield this.nativeStorage.setItem('favoritecourse', this.courseLists)
                .then(() => {
                this.presentAlert("Info", "Course " + actionType + 'ed' + " Successfully!");
                this.getFavoriteCourses();
            })
                .catch(() => {
                this.presentToast("Error adding course to favorite list");
            });
            loading.dismiss();
        });
    }
    verifyMediaDownload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'This action will download all course contents in PDF format to your drive, this action may take some time depending on your internet download speed. Proceed?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { }
                    }, {
                        text: 'Okay',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            yield this.prepareMediaDownload();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    prepareMediaDownload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.courses = JSON.parse(localStorage.getItem('course'));
            this.totalFiles = this.courses.length;
            this.dirName = this.systemBase + this.dirBase + ".pdfs/";
            // for (let i = 0; i < this.totalFiles; i++) {
            for (const course of this.courses) {
                this.fileNameTemp = "pdffiletemp" + course.id + ".pdf";
                this.fileName = "pdffile" + course.id + ".pdf";
                this.downloadURL = "http://umyu.easystudy.com.ng/materials/pdf/" + this.fileName;
                // await is converting Promise<number> into number
                const count = yield this.startMediaDownload(course.id);
                // console.log(count);
            }
            // Send success notification to user
            this.presentToast("Process completed!");
        });
    }
    startMediaDownload(count) {
        let isDownloaded = false;
        // Initialize transfer handle
        const transfer = this.fileTransfer.create();
        return new Promise(resolve => {
            this.loadingCtrl.create({
                message: "Processing " + count + " of " + this.totalFiles + " file(s), please wait..."
            }).then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => { });
                setTimeout(() => {
                    if (isDownloaded === false) {
                        // Abort active transfer:
                        transfer.abort();
                        // Remove incomplete downloaded file
                        this.file.removeFile(this.dirName, '~' + this.fileNameTemp)
                            .then(() => {
                            this.loadingCtrl.dismiss();
                            resolve(count);
                        })
                            .catch((error) => {
                            this.loadingCtrl.dismiss();
                            this.presentToast("Error removing file: " + '~' + this.fileNameTemp + " Error: " + JSON.stringify(error));
                        });
                        // Send failure notification to user
                        this.presentToast("File download timed out for file " + this.fileNameTemp);
                    }
                }, 60000);
            });
            // transfer.onProgress((progressEvent) => {
            //   var counter = Math.floor(progressEvent.loaded / progressEvent.total * 100);
            // });
            // Verify if selected file for download already exist on the device
            this.file.checkFile(this.dirName, this.fileName)
                .then(() => {
                isDownloaded = true;
                this.loadingCtrl.dismiss();
                resolve(count);
            })
                .catch(() => {
                // Start the dowload for the selected file
                transfer.download(this.downloadURL, this.dirName + this.fileNameTemp)
                    .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    isDownloaded = true;
                    // this.loadingCtrl.dismiss(); // Don't delete yet
                    // Process downloaded media
                    // const count1:number = await this.processMedia(count);
                    // Start reading the selected file content for encryption
                    this.file.readAsDataURL(this.dirName, this.fileNameTemp)
                        .then((fileContent) => {
                        const encFileContent = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();
                        this.file.writeFile(this.dirName, this.fileName, encFileContent, { replace: true, append: false })
                            .then(() => {
                            this.file.removeFile(this.dirName, this.fileNameTemp)
                                .then(() => {
                                this.loadingCtrl.dismiss();
                                resolve(count);
                            })
                                .catch((error) => {
                                this.loadingCtrl.dismiss();
                                this.presentToast("Error removing file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
                            });
                        })
                            .catch((error) => {
                            this.loadingCtrl.dismiss();
                            this.presentToast("Error writing file: " + this.fileName + " Error: " + JSON.stringify(error));
                        });
                    })
                        .catch((error) => {
                        this.loadingCtrl.dismiss();
                        this.presentToast("Error reading file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
                    });
                }))
                    .catch((error) => {
                    isDownloaded = false;
                    this.loadingCtrl.dismiss();
                    // Send failure notification to user
                    this.presentToast("File download failed for file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
                    resolve(count);
                });
            });
        });
    }
};
PDFViewerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
PDFViewerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pdfviewer',
        template: __webpack_require__(/*! raw-loader!./pdfviewer.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pdfviewer/pdfviewer.page.html"),
        styles: [__webpack_require__(/*! ./pdfviewer.page.scss */ "./src/app/pages/pdfviewer/pdfviewer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], PDFViewerPage);

const snapshotToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};


/***/ })

}]);
//# sourceMappingURL=pages-pdfviewer-pdfviewer-module-es2015.js.map