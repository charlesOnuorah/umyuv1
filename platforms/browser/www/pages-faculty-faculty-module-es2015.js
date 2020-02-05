(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faculty-faculty-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/faculty/faculty.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/faculty/faculty.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Faculty\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button style=\"font-size: 12px;\" (click)=\"refreshFaculty()\" icon-end>\n        <span style=\"padding-right: 5px;\">Refresh</span>\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"assets/banners/banner31.jpg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title>Faculties</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Select your faculty to display all the departments in the faculty</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Select Your Faculty</ion-label>\n    </ion-list-header>\n    <!-- <ion-item button *ngFor=\"let faculty of (faculties | async)\" [routerLink]=\"['/', 'faculties', faculty.id]\"> -->\n    <ion-item button detail lines=\"inset\" (click)=\"setupFacultyID(faculty.id)\" *ngFor=\"let faculty of faculties\" [routerLink]=\"['/', 'departments', faculty.id]\">          \n      <ion-icon slot=\"start\" color=\"medium\" name=\"business\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h3>{{ faculty.name }}</h3>\n      </ion-label>  \n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/faculty/faculty.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/faculty/faculty.module.ts ***!
  \*************************************************/
/*! exports provided: FacultyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyPageModule", function() { return FacultyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _faculty_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faculty.page */ "./src/app/pages/faculty/faculty.page.ts");







let FacultyPageModule = class FacultyPageModule {
};
FacultyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _faculty_page__WEBPACK_IMPORTED_MODULE_6__["FacultyPage"]
                }
            ])
        ],
        declarations: [_faculty_page__WEBPACK_IMPORTED_MODULE_6__["FacultyPage"]]
    })
], FacultyPageModule);



/***/ }),

/***/ "./src/app/pages/faculty/faculty.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/faculty/faculty.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFjdWx0eS9DOlxcVXNlcnNcXENoYXJsZXMgT251b3JhaFxcRG9jdW1lbnRzXFxDQkNcXFByb2plY3RzXFxVTVlVQXBwU291cmNlL3NyY1xcYXBwXFxwYWdlc1xcZmFjdWx0eVxcZmFjdWx0eS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZhY3VsdHkvZmFjdWx0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGNBQUE7QUNDRjs7QURFQTs7O0VBR0UsaUJBQUE7QUNDRjs7QURFQTs7O0VBR0UsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvREFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYWN1bHR5L2ZhY3VsdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuICBcbi5zYy1pb24tY2FyZC1wd2EtaCxcbi5zYy1pb24tY2FyZC1tZC1oLFxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgZGlzcGxheTogdW5zZXQ7XG59XG5cbi5zYy1pb24tY2FyZC1wd2EtcyBpbWcsXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59XG5cbi5saXN0LXB3YSxcbi5saXN0LW1kLFxuLmxpc3QtaW9zIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLWgsXG4uc2MtaW9uLWNhcmQtbWQtaCxcbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxuLnNjLWlvbi1jYXJkLWlvcy1zIGltZyB7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4ubGlzdC1wd2EsXG4ubGlzdC1tZCxcbi5saXN0LWlvcyB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/faculty/faculty.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/faculty/faculty.page.ts ***!
  \***********************************************/
/*! exports provided: FacultyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyPage", function() { return FacultyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");








let FacultyPage = class FacultyPage {
    /**
     * Constructor of our course faculty page
     * @param activatedRoute Information about the route we are on
     * @param courseFacultyService The course faculty Service to get data
     */
    constructor(http, platform, loadingCtrl, nativeHttp, nativeStorage, alertController) {
        this.http = http;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.nativeHttp = nativeHttp;
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
    }
    ngOnInit() {
        // Get the ID that was passed with the URL
        // let id = this.activatedRoute.snapshot.paramMap.get('id');
        // Get the course faculties from the API
        this.nativeStorage.getItem('faculty').then(faculty => {
            this.faculties = JSON.parse(faculty.Faculty);
        }, () => {
            this.getFaculties();
        });
        if (this.faculties === null) {
            this.getFaculties();
        }
    }
    getFaculties() {
        if (this.platform.is('android')) {
            this.getFacultyNativeHttp();
        }
        else if (this.platform.is('ios')) {
            this.getFacultyNativeHttp();
        }
        else if (this.platform.is('desktop')) {
            this.getFacultyStandard();
        }
        else if (this.platform.is('tablet')) {
            this.getFacultyStandard();
        }
        else {
            this.getFacultyStandard();
        }
    }
    getFacultyStandard() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading faculties, please wait...'
            });
            yield loading.present();
            let _httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache');
            let httpHeaders = {
                headers: _httpHeaders
            };
            this.http.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/faculty', httpHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => loading.dismiss())).subscribe(data => {
                this.faculties = data['Facultys'];
                this.setupFaculties();
            }, error => {
                this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
            });
        });
    }
    getFacultyNativeHttp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading faculties, please wait...'
            });
            yield loading.present();
            // Returns a promise, need to convert with of() to Observable (if want)!
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.nativeHttp.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/faculty', {}, { 'Content-Type': 'application/json' })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => loading.dismiss())).subscribe(data => {
                let parsed = JSON.parse(data.data);
                this.faculties = parsed.Facultys;
                this.setupFaculties();
            }, error => {
                this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
            });
        });
    }
    refreshFaculty() {
        this.getFaculties();
    }
    setupFaculties() {
        this.nativeStorage.setItem('faculty', { Faculty: JSON.stringify(this.faculties) }).then(() => { }, () => { });
    }
    setupFacultyID(facultyID) {
        this.nativeStorage.setItem('facultyid', { FacultyID: facultyID }).then(() => { }, () => { });
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
};
FacultyPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
FacultyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faculty',
        template: __webpack_require__(/*! raw-loader!./faculty.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/faculty/faculty.page.html"),
        styles: [__webpack_require__(/*! ./faculty.page.scss */ "./src/app/pages/faculty/faculty.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], FacultyPage);



/***/ })

}]);
//# sourceMappingURL=pages-faculty-faculty-module-es2015.js.map