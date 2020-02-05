(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-course-course-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/course/course.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/course/course.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Courses\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button style=\"font-size: 12px;\" (click)=\"refreshCourse()\" icon-end>\n        <span style=\"padding-right: 5px;\">Refresh</span>\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"assets/banners/banner41.jpg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title>Courses</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>To start learning, select a course to get started. Courses are available in 3 different media format.</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Select a Course</ion-label>\n    </ion-list-header>\n    <div *ngIf=\"isFound === false\">\n      <ion-item>            \n        <div style=\"display:table;width:100%;height:100%;\">\n          <div style=\"display:table-row;\">\n            <div style=\"display:table-cell;vertical-align:middle;\">\n              <div>\n                <img src=\"assets/imgs/no-record-found.png\" style=\"display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto;\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-item>\n    </div>\n    <div *ngIf=\"isFound === true\">\n      <ion-item button detail lines=\"inset\" (click)=\"setupSelectedCourse(course)\" *ngFor=\"let course of courses\" [routerLink]=\"['/', 'mediaformat', course.id]\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          <h2>{{ course.code }}</h2>\n          <p>{{ course.title }}</p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/course/course.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/course/course.module.ts ***!
  \***********************************************/
/*! exports provided: CoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePageModule", function() { return CoursePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course.page */ "./src/app/pages/course/course.page.ts");







const routes = [
    {
        path: '',
        component: _course_page__WEBPACK_IMPORTED_MODULE_6__["CoursePage"]
    }
];
let CoursePageModule = class CoursePageModule {
};
CoursePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_course_page__WEBPACK_IMPORTED_MODULE_6__["CoursePage"]]
    })
], CoursePageModule);



/***/ }),

/***/ "./src/app/pages/course/course.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/course/course.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cnNlL0M6XFxVTVlVQXBwL3NyY1xcYXBwXFxwYWdlc1xcY291cnNlXFxjb3Vyc2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb3Vyc2UvY291cnNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7O0VBR0UsY0FBQTtBQ0NGOztBREVBOzs7RUFHRSxpQkFBQTtBQ0NGOztBREVBOzs7RUFHRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9EQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXJzZS9jb3Vyc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4gIFxyXG4uc2MtaW9uLWNhcmQtcHdhLWgsXHJcbi5zYy1pb24tY2FyZC1tZC1oLFxyXG4uc2MtaW9uLWNhcmQtaW9zLWgge1xyXG4gIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxyXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXHJcbi5zYy1pb24tY2FyZC1pb3MtcyBpbWcge1xyXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcblxyXG4ubGlzdC1wd2EsXHJcbi5saXN0LW1kLFxyXG4ubGlzdC1pb3Mge1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtbWQtaCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zYy1pb24tY2FyZC1wd2EtaCxcbi5zYy1pb24tY2FyZC1tZC1oLFxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgZGlzcGxheTogdW5zZXQ7XG59XG5cbi5zYy1pb24tY2FyZC1wd2EtcyBpbWcsXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59XG5cbi5saXN0LXB3YSxcbi5saXN0LW1kLFxuLmxpc3QtaW9zIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/course/course.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/course/course.page.ts ***!
  \*********************************************/
/*! exports provided: CoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePage", function() { return CoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");









let CoursePage = class CoursePage {
    /**
     * Constructor of our course faculty page
     * @param activatedRoute Information about the route we are on
     * @param courseCodeService The course code Service to get data
     */
    constructor(http, nativeHttp, platform, toastCtrl, loadingCtrl, nativeStorage, activatedRoute, alertController) {
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.isFound = false;
        this.dirBase = "/.UMYU/.data/.materials/";
        this.downloadURL = "http://umyu.easystudy.com.ng/materials/";
    }
    ngOnInit() {
        // Get the ID that was passed with the URL    
        this.activatedRoute.params.subscribe(params => {
            this.levelid = +params['levelid'];
            this.departmentid = +params['departmentid'];
        });
        // // Get the courses from the API
        // this.nativeStorage.getItem('course').then(
        //   course => {
        //     this.presentAlert("Info", "Setup course list retrieved!" + JSON.parse(course.Course));
        //     this.courses = JSON.parse(course.Course);
        //     this.courses = this.getFilterByDepartmentLevelID(this.courses);
        //    },
        //   () => {
        //     this.getCourses();
        //   }
        // ).catch((error) => {
        //   // Send failure notification to user
        //   this.presentToast("Unable to retrieve course list!");
        // });
        // Get the courses from the API    
        this.courses = JSON.parse(localStorage.getItem('course'));
        if (this.courses === null) {
            this.isFound = false;
            this.getCourses();
        }
        else {
            this.isFound = true;
            this.courses = this.getFilterByDepartmentLevelID(this.courses);
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
            let _httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache');
            let httpHeaders = {
                headers: _httpHeaders
            };
            this.http.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/code', httpHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss())).subscribe(data => {
                this.courses = data['Codes'];
                this.setupCourses();
                this.courses = this.getFilterByDepartmentLevelID(this.courses);
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
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.nativeHttp.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/code', {}, { 'Content-Type': 'application/json' })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss())).subscribe(data => {
                let parsed = JSON.parse(data.data);
                this.courses = parsed.Codes;
                this.setupCourses();
                this.courses = this.getFilterByDepartmentLevelID(this.courses);
            }, error => {
                this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
            });
        });
    }
    getFilterByDepartmentLevelID(courses) {
        let courseList = [];
        courses.forEach(course => {
            if (course.department_id === this.departmentid && course.level_id === this.levelid) {
                courseList.push(course);
            }
        });
        // New department and level selected, retrieve course
        // matching department and level from online server
        if (courseList !== null) {
            this.isFound = true;
        }
        else {
            this.isFound = false;
        }
        return courseList;
    }
    refreshCourse() {
        this.getCourses();
    }
    setupCourses() {
        localStorage.setItem('course', JSON.stringify(this.courses));
    }
    setupSelectedCourse(course) {
        this.nativeStorage.setItem('selectedcourse', { Code: course.code, Title: course.title }).then(() => { }, () => { });
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
};
CoursePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
CoursePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course',
        template: __webpack_require__(/*! raw-loader!./course.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/course/course.page.html"),
        styles: [__webpack_require__(/*! ./course.page.scss */ "./src/app/pages/course/course.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], CoursePage);



/***/ })

}]);
//# sourceMappingURL=pages-course-course-module-es2015.js.map