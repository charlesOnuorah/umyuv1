(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bulkdownload-bulkdownload-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bulkdownload/bulkdownload.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bulkdownload/bulkdownload.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Download Manager\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"assets/banners/banner41.jpg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title>Umaru Musa Yar'Adua University</ion-card-title>\n      <ion-card-subtitle>Mobile Download Manager</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Select any of the available format <strong>(PDF, Audio and Video)</strong> to start download.</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Select your download option</ion-label>\n    </ion-list-header>\n    \n    <ion-item button detail lines=\"inset\" (click)=\"verifyMediaDownload('pdf', '.pdf')\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>PDF Format</h2>\n        <p>Download all courses in PDF format</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item button detail lines=\"inset\" (click)=\"verifyMediaDownload('audio', '.mp3')\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"volume-high\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Audio Format</h2>\n        <p>Download all courses in MP3 format</p>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item button detail lines=\"inset\" (click)=\"verifyMediaDownload('video', '.mp4')\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"videocam\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Video Format</h2>\n        <p>Download all courses in MP4 format</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/bulkdownload/bulkdownload.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/bulkdownload/bulkdownload.module.ts ***!
  \***********************************************************/
/*! exports provided: BulkDownloadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkDownloadPageModule", function() { return BulkDownloadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bulkdownload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bulkdownload.page */ "./src/app/pages/bulkdownload/bulkdownload.page.ts");







const routes = [
    {
        path: '',
        component: _bulkdownload_page__WEBPACK_IMPORTED_MODULE_6__["BulkDownloadPage"]
    }
];
let BulkDownloadPageModule = class BulkDownloadPageModule {
};
BulkDownloadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_bulkdownload_page__WEBPACK_IMPORTED_MODULE_6__["BulkDownloadPage"]]
    })
], BulkDownloadPageModule);



/***/ }),

/***/ "./src/app/pages/bulkdownload/bulkdownload.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/bulkdownload/bulkdownload.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYmNnZWR1L0Rlc2t0b3AvdW15dS9zcmMvYXBwL3BhZ2VzL2J1bGtkb3dubG9hZC9idWxrZG93bmxvYWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9idWxrZG93bmxvYWQvYnVsa2Rvd25sb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7O0VBR0UsY0FBQTtBQ0NGOztBREVBOzs7RUFHRSxpQkFBQTtBQ0NGOztBREVBOzs7RUFHRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9EQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1bGtkb3dubG9hZC9idWxrZG93bmxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4gIFxyXG4uc2MtaW9uLWNhcmQtcHdhLWgsXHJcbi5zYy1pb24tY2FyZC1tZC1oLFxyXG4uc2MtaW9uLWNhcmQtaW9zLWgge1xyXG4gIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxyXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXHJcbi5zYy1pb24tY2FyZC1pb3MtcyBpbWcge1xyXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcblxyXG4ubGlzdC1wd2EsXHJcbi5saXN0LW1kLFxyXG4ubGlzdC1pb3Mge1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtbWQtaCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zYy1pb24tY2FyZC1wd2EtaCxcbi5zYy1pb24tY2FyZC1tZC1oLFxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgZGlzcGxheTogdW5zZXQ7XG59XG5cbi5zYy1pb24tY2FyZC1wd2EtcyBpbWcsXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59XG5cbi5saXN0LXB3YSxcbi5saXN0LW1kLFxuLmxpc3QtaW9zIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/bulkdownload/bulkdownload.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/bulkdownload/bulkdownload.page.ts ***!
  \*********************************************************/
/*! exports provided: BulkDownloadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkDownloadPage", function() { return BulkDownloadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");











let BulkDownloadPage = class BulkDownloadPage {
    /**
     * Constructor of our course viewer page
     * @param activatedRoute Information about the route we are on
     * @param courseCodeService The course code Service to get data
     */
    constructor(loadingCtrl, platform, file, http, nativeHttp, fileTransfer, toastCtrl, alertController) {
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.file = file;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.fileTransfer = fileTransfer;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.dirBase = "/.UMYU/.data/.materials/";
        this.downloadURL = "http://umyu.easystudy.com.ng/materials/";
        this.count = 0;
    }
    ngOnInit() {
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
        // Get the courses from the API    
        this.courses = JSON.parse(localStorage.getItem('course'));
        if (this.courses === null) {
            this.getCourses();
        }
    }
    getCourses() {
        if (this.platform.is('android')) {
            this.getCourseNativeHttp();
        }
        else if (this.platform.is('ios')) {
            this.getCourseNativeHttp();
        }
        else if (this.platform.is('desktop')) {
            this.getCourseStandard();
        }
        else if (this.platform.is('tablet')) {
            this.getCourseStandard();
        }
        else {
            this.getCourseStandard();
        }
    }
    getCourseStandard() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading courses, please wait...'
            });
            yield loading.present();
            let _httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache');
            let httpHeaders = {
                headers: _httpHeaders
            };
            this.http.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/code', httpHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss())).subscribe(data => {
                this.courses = data['Codes'];
                this.setupCourses();
                this.presentToast("Loading Completed!");
            }, error => {
                this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
            });
        });
    }
    getCourseNativeHttp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading courses, please wait...'
            });
            yield loading.present();
            // Returns a promise, need to convert with of() to Observable (if want)!
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(this.nativeHttp.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/code', {}, { 'Content-Type': 'application/json' })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss())).subscribe(data => {
                let parsed = JSON.parse(data.data);
                this.courses = parsed.Codes;
                this.setupCourses();
                this.presentToast("Loading Completed!");
            }, error => {
                this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
            });
        });
    }
    setupCourses() {
        localStorage.setItem('course', JSON.stringify(this.courses));
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
                        handler: () => { }
                    }]
            });
            yield alert.present();
        });
    }
    verifyMediaDownload(fileFormat, fileExtension) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.fileFormat = fileFormat;
            this.fileExtension = fileExtension;
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'This action will download all course contents in (' + this.fileExtension + ') format to your drive, this action may take some time depending on your internet download speed. Proceed?',
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
            // this.courses = JSON.parse(localStorage.getItem('course'));
            this.totalFiles = this.courses.length;
            this.presentToast("Process Start!");
            this.dirName = this.systemBase + this.dirBase + "." + this.fileFormat + "s/";
            // for (let i = 0; i < this.totalFiles; i++) {
            for (const course of this.courses) {
                this.fileNameTemp = this.fileFormat + "filetemp" + course.id + this.fileExtension;
                this.fileName = this.fileFormat + "file" + course.id + this.fileExtension;
                this.downloadURL = "http://umyu.easystudy.com.ng/materials/" + this.fileFormat + "/" + this.fileName;
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
                        const encFileContent = crypto_js__WEBPACK_IMPORTED_MODULE_5__["AES"].encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();
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
    ngOnDestroy() { }
};
BulkDownloadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
BulkDownloadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bulkdownload',
        template: __webpack_require__(/*! raw-loader!./bulkdownload.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bulkdownload/bulkdownload.page.html"),
        styles: [__webpack_require__(/*! ./bulkdownload.page.scss */ "./src/app/pages/bulkdownload/bulkdownload.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], BulkDownloadPage);



/***/ })

}]);
//# sourceMappingURL=pages-bulkdownload-bulkdownload-module-es2015.js.map