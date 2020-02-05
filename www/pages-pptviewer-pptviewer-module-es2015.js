(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pptviewer-pptviewer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pptviewer/pptviewer.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pptviewer/pptviewer.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{ courseCode }} - PPT\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>{{($eventItem | async)?.name}}</ion-title> -->\n    \n    <ion-buttons slot=\"end\">\n      <ion-button style=\"font-size: 12px;\" (click)=\"actionFavoriteCourses(actionFavType)\" icon-end>\n        <ion-icon name=\"{{ actionFavType === 'Remov' ? 'remove-circle-outline' : 'add-circle-outline' }}\" color=\"light\"></ion-icon>\n        <span style=\"padding-right: 5px; padding-left: 5px;\">Favorite</span>\n        <!-- <ion-icon name=\"star\" color=\"light\"></ion-icon> -->\n      </ion-button>\n      <ion-button style=\"font-size: 12px;\" (click)=\"downloadMedia()\" icon-end>\n        <span style=\"padding-right: 5px;\">Update</span>\n        <ion-icon name=\"cloud-download\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" style=\"background-color:#646464;\">\n  <ngx-doc-viewer [url]=\"pptSrc\" viewer=\"google\" style=\"width:100%;height:100%;\"></ngx-doc-viewer>\n\n  <!-- <pdf-viewer \n    [src]=\"pptSrc\"\n    [zoom]=\"zoomType == 'custom' ? zoomValue : zoomType\"\n    [(page)]=\"page\"\n    [show-all]=\"true\"\n    (after-load-complete)=\"onLoadComplete($event)\"\n    [show-borders]=\"true\" \n    [stick-to-page]=\"true\"\n    color=\"medium\">\n  </pdf-viewer> -->\n  <!-- <ion-toolbar color=\"dark\">\n    <ion-button color=\"light\" fill=\"clear\" expand=\"full\" (click)=\"enterChatRooms()\">{{ createRoomCaption }}</ion-button>\n  </ion-toolbar> -->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"dark\">\n    <ion-button color=\"light\" fill=\"clear\" expand=\"full\" (click)=\"enterChatRooms()\">{{ createRoomCaption }}</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/pptviewer/pptviewer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pptviewer/pptviewer.module.ts ***!
  \*****************************************************/
/*! exports provided: PPTViewerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPTViewerPageModule", function() { return PPTViewerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pptviewer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pptviewer.page */ "./src/app/pages/pptviewer/pptviewer.page.ts");
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-doc-viewer */ "./node_modules/ngx-doc-viewer/fesm2015/ngx-doc-viewer.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");









const routes = [
    {
        path: '',
        component: _pptviewer_page__WEBPACK_IMPORTED_MODULE_6__["PPTViewerPage"]
    }
];
let PPTViewerPageModule = class PPTViewerPageModule {
};
PPTViewerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxDocViewerModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__["PdfViewerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pptviewer_page__WEBPACK_IMPORTED_MODULE_6__["PPTViewerPage"]]
    })
], PPTViewerPageModule);



/***/ }),

/***/ "./src/app/pages/pptviewer/pptviewer.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/pptviewer/pptviewer.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BwdHZpZXdlci9wcHR2aWV3ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/pptviewer/pptviewer.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/pptviewer/pptviewer.page.ts ***!
  \***************************************************/
/*! exports provided: PPTViewerPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPTViewerPage", function() { return PPTViewerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/dist/index.cjs.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");












let PPTViewerPage = class PPTViewerPage {
    constructor(loadingCtrl, platform, fileTransfer, nativeStorage, activatedRoute, toastCtrl, document, file, router, alertController) {
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.fileTransfer = fileTransfer;
        this.nativeStorage = nativeStorage;
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.document = document;
        this.file = file;
        this.router = router;
        this.alertController = alertController;
        this.dirBase = "/.UMYU/.data/.materials/";
        this.downloadURL = "http://umyu.easystudy.com.ng/materials/";
        // pptSrc: string = "https://devdactic.com/html/5-simple-hacks-LBT.pdf";
        this.pptSrc = "https://file-examples.com/wp-content/uploads/2017/08/file_example_PPT_500kB.ppt";
        this.isFound = false;
        this.courseLists = [];
        this.actionFavType = "Add";
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
        this.fileNameTemp = "powerpointfiletemp" + this.courseID + ".ppt";
        this.fileName = "powerpointfile" + this.courseID + ".ppt";
        this.mimeType = "application/vnd.ms-powerpoint";
        if (this.platform.is('android')) {
            this.systemBase = this.file.externalRootDirectory + "/Documents";
            this.fileNameTemp = "powerpointfiletemp" + this.courseID + ".pptx";
            this.fileName = "powerpointfile" + this.courseID + ".pptx";
            this.mimeType = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
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
        this.dirName = this.systemBase + this.dirBase + ".powerpoints/";
        this.downloadURL = this.downloadURL + "powerpoint/" + this.fileName;
        this.platform.ready().then(() => {
            this.verifyMedia().then(() => { });
        });
    }
    verifyMedia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Checking file on local storage, please wait...'
            });
            yield loading.present();
            //This is where the media file will be stored, you can change it as you like
            this.file.checkFile(this.dirName, this.fileName).then((success) => {
                loading.dismiss();
                // Show downloaded ppt/pptx
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
                message: 'Downloading file, please wait...'
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
            yield loading.present();
            return yield this.file.readAsText(this.dirName, this.fileName)
                .then((fileContent) => {
                loading.dismiss();
                this.decryptFileContent(fileContent)
                    .then((fileContent) => {
                    /*
                    * File reader provides us with an incorrectly encoded base64 string.
                    * So we have to fix it, in order to upload it correctly.
                    */
                    // let encodingType = "data:"+ this.mimeType + ";base64,";
                    let originalBase64 = fileContent.split(',')[1]; // Remove the "data:application..." string.
                    let decodedBase64 = atob(originalBase64); // Decode the incorrectly encoded base64 string.
                    let encodedBase64 = btoa(decodedBase64); // re-encode the base64 string (correctly).
                    // let newBase64 = encodingType + encodedBase64; // Add theencodingType to the string.
                    this.convertBase64ToBlob(encodedBase64, this.mimeType)
                        .then((blob) => {
                        this.writeFileContent(this.dirName, this.fileNameTemp, blob)
                            .then(() => {
                            // let win: any = window; // hack compilator
                            // this.pptSrc = win.Ionic.WebView.convertFileSrc(this.dirName + this.fileNameTemp);
                            // this.pptSrc2 = this.downloadURL; //"https://file-examples.com/wp-content/uploads/2017/08/file_example_PPT_500kB.ppt";
                        });
                    })
                        .catch(() => { });
                })
                    .catch(() => { });
            })
                .catch((error) => {
                loading.dismiss();
                this.presentToast("Error Reading File! " + JSON.stringify(error));
            });
        });
    }
    // showMediaFile() {
    //   const options: DocumentViewerOptions = {
    //     title: 'PPT Viewer'
    //   }
    //   // Get media URL and convert to an accessible path
    //   let win: any = window; // hack compilator
    //   this.pptSrc = win.Ionic.WebView.convertFileSrc(this.dirName + this.fileName);
    //   this.document.viewDocument(this.pptSrc, 'application/vnd.ms-powerpoint', options);
    // }  
    /**
    Convert a base64 string in a Blob according to the data and contentType.
    @param b64Data {String} Pure base64 string without contentType
    @param contentType {String} the content type of the file i.e (application/vnd.ms-powerpoint - text/plain)
    @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript 47
    @return Blob
    */
    convertBase64ToBlob(b64Data, contentType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Converting file, please wait...'
            });
            yield loading.present();
            contentType = contentType || "";
            let sliceSize = 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            loading.dismiss();
            return blob;
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
            // let encodingType = "data:application/pdf;base64,";
            // /*
            // * File reader provides us with an incorrectly encoded base64 string.
            // * So we have to fix it, in order to upload it correctly.
            // */
            // let mimeType = fileContent.split(',')[0]; // Remove the "data:application..." string.
            // let originalBase64 = fileContent.split(',')[1]; // Remove the "data:application..." string.
            // fileContent = encodingType + originalBase64; // Add the encodingType to the string.
            fileContent = crypto_js__WEBPACK_IMPORTED_MODULE_9__["AES"].encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();
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
            let fileContent = crypto_js__WEBPACK_IMPORTED_MODULE_9__["AES"].decrypt(encryptedFile, ":<>?{}|[]\!@#$%^&*()_+").toString(crypto_js__WEBPACK_IMPORTED_MODULE_9__["enc"].Utf8);
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
            // return this.file.removeFile(this.dirNameTemp, this.fileNameTemp)
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
                        handler: () => { }
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
            let currentCourse = new src_app_models__WEBPACK_IMPORTED_MODULE_10__["Course"];
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
};
PPTViewerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["DocumentViewer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
PPTViewerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pptviewer',
        template: __webpack_require__(/*! raw-loader!./pptviewer.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pptviewer/pptviewer.page.html"),
        styles: [__webpack_require__(/*! ./pptviewer.page.scss */ "./src/app/pages/pptviewer/pptviewer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["DocumentViewer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], PPTViewerPage);

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
//# sourceMappingURL=pages-pptviewer-pptviewer-module-es2015.js.map