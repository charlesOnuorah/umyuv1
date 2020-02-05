(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-department-department-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/department/department.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/department/department.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Departments\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button style=\"font-size: 12px;\" (click)=\"refreshDepartment()\" icon-end>\n        <span style=\"padding-right: 5px;\">Refresh</span>\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"assets/banners/banner51.jpg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title>Deparments</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Select your department to display list of all the courses available in the department</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Select Your Department</ion-label>\n    </ion-list-header>    \n    <ion-item button detail lines=\"inset\" (click)=\"setupDepartmentID(department.id)\" *ngFor=\"let department of departments\" [routerLink]=\"['/', 'levels', department.id]\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"filing\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h3>{{ department.name }}</h3>\n      </ion-label>  \n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/department/department.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/department/department.module.ts ***!
  \*******************************************************/
/*! exports provided: DepartmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentPageModule", function() { return DepartmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _department_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./department.page */ "./src/app/pages/department/department.page.ts");







const routes = [
    {
        path: '',
        component: _department_page__WEBPACK_IMPORTED_MODULE_6__["DepartmentPage"]
    }
];
let DepartmentPageModule = class DepartmentPageModule {
};
DepartmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_department_page__WEBPACK_IMPORTED_MODULE_6__["DepartmentPage"]]
    })
], DepartmentPageModule);



/***/ }),

/***/ "./src/app/pages/department/department.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/department/department.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVwYXJ0bWVudC9DOlxcVU1ZVUFwcC9zcmNcXGFwcFxccGFnZXNcXGRlcGFydG1lbnRcXGRlcGFydG1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXBhcnRtZW50L2RlcGFydG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBOzs7RUFHRSxjQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGlCQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0RBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVwYXJ0bWVudC9kZXBhcnRtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuICBcclxuLnNjLWlvbi1jYXJkLXB3YS1oLFxyXG4uc2MtaW9uLWNhcmQtbWQtaCxcclxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLXB3YS1zIGltZyxcclxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxyXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAtMThweDtcclxufVxyXG5cclxuLmxpc3QtcHdhLFxyXG4ubGlzdC1tZCxcclxuLmxpc3QtaW9zIHtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLWgsXG4uc2MtaW9uLWNhcmQtbWQtaCxcbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxuLnNjLWlvbi1jYXJkLWlvcy1zIGltZyB7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4ubGlzdC1wd2EsXG4ubGlzdC1tZCxcbi5saXN0LWlvcyB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/department/department.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/department/department.page.ts ***!
  \*****************************************************/
/*! exports provided: DepartmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentPage", function() { return DepartmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");









let DepartmentPage = class DepartmentPage {
    /**
     * Constructor of our course faculty page
     * @param activatedRoute Information about the route we are on
     * @param courseDepartmentService The course department Service to get data
     */
    constructor(activatedRoute, http, platform, loadingCtrl, nativeHttp, nativeStorage, alertController) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.nativeHttp = nativeHttp;
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
    }
    ngOnInit() {
        // Get the ID that was passed with the URL    
        this.activatedRoute.params.subscribe(params => {
            const id = +params['id'];
            this.facultyid = id;
        });
        // Get the course departments from the API
        this.nativeStorage.getItem('department').then(department => {
            // this.presentAlert("Info", "Setup department list retrieved!" + JSON.parse(department.Department));
            this.departments = JSON.parse(department.Department);
            this.departments = this.getFilterByFacultyID(this.departments);
        }, () => {
            this.getDepartments();
        });
        if (this.departments === null) {
            this.getDepartments();
        }
    }
    getDepartments() {
        if (this.platform.is('android')) {
            this.getDepartmentNativeHttp();
        }
        else if (this.platform.is('ios')) {
            this.getDepartmentNativeHttp();
        }
        else if (this.platform.is('desktop')) {
            this.getDepartmentStandard();
        }
        else if (this.platform.is('tablet')) {
            this.getDepartmentStandard();
        }
        else {
            this.getDepartmentStandard();
        }
    }
    getDepartmentStandard() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading departments, please wait...'
            });
            yield loading.present();
            let _httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache');
            let httpHeaders = {
                headers: _httpHeaders
            };
            this.http.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/department', httpHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss())).subscribe(data => {
                this.departments = data['Departments'];
                this.setupDepartments();
                this.departments = this.getFilterByFacultyID(this.departments);
            }, error => {
                this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
            });
        });
    }
    getDepartmentNativeHttp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading departments, please wait...'
            });
            yield loading.present();
            // Returns a promise, need to convert with of() to Observable (if want)!
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.nativeHttp.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/department', {}, { 'Content-Type': 'application/json' })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss())).subscribe(data => {
                let parsed = JSON.parse(data.data);
                this.departments = parsed.Departments;
                this.setupDepartments();
                this.departments = this.getFilterByFacultyID(this.departments);
            }, error => {
                this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
            });
        });
    }
    getFilterByFacultyID(departments) {
        let departmentList = [];
        departments.forEach(department => {
            if (department.facultys_id === this.facultyid) {
                departmentList.push(department);
            }
        });
        // New faculty selected, retrieve department 
        // matching faculty from online server
        if (departmentList === null) {
            this.getDepartments();
        }
        return departmentList;
    }
    refreshDepartment() {
        this.getDepartments();
    }
    setupDepartments() {
        this.nativeStorage.setItem('department', { Department: JSON.stringify(this.departments) }).then(() => { }, () => { });
    }
    setupDepartmentID(departmentID) {
        this.nativeStorage.setItem('departmentid', { DepartmentID: departmentID }).then(() => { }, () => { });
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
DepartmentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
DepartmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-department',
        template: __webpack_require__(/*! raw-loader!./department.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/department/department.page.html"),
        styles: [__webpack_require__(/*! ./department.page.scss */ "./src/app/pages/department/department.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], DepartmentPage);



/***/ })

}]);
//# sourceMappingURL=pages-department-department-module-es2015.js.map