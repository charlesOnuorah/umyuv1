(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favorite-favorite-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/favorite/favorite.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/favorite/favorite.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Favorite Courses\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"assets/banners/banner41.jpg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title>Favorite Courses</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>To start learning, select a course to get started. Courses are available in 3 different media format.</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Select a Course</ion-label>\n    </ion-list-header>\n    <div *ngIf=\"isFound === false\">\n      <ion-item>            \n        <div style=\"display:table;width:100%;height:100%;\">\n          <div style=\"display:table-row;\">\n            <div style=\"display:table-cell;vertical-align:middle;\">\n              <div>\n                <img src=\"assets/imgs/no-record-found.png\" style=\"display: block; width: 100%; height: auto; margin-left: auto; margin-right: auto;\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-item>\n    </div>\n    <div *ngIf=\"isFound === true\">\n      <ion-item button detail lines=\"inset\" (click)=\"setupSelectedCourse(course)\" *ngFor=\"let course of courses\" [routerLink]=\"['/', 'mediaformat', course.id]\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          <h2>{{ course.code }}</h2>\n          <p>{{ course.title }}</p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/favorite/favorite.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/favorite/favorite.module.ts ***!
  \***************************************************/
/*! exports provided: FavoritePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function() { return FavoritePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorite.page */ "./src/app/pages/favorite/favorite.page.ts");







var routes = [
    {
        path: '',
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePage"]
    }
];
var FavoritePageModule = /** @class */ (function () {
    function FavoritePageModule() {
    }
    FavoritePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePage"]]
        })
    ], FavoritePageModule);
    return FavoritePageModule;
}());



/***/ }),

/***/ "./src/app/pages/favorite/favorite.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/favorite/favorite.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYmNnZWR1L0Rlc2t0b3AvcHJvamVjdHMvdW15dXYxL3NyYy9hcHAvcGFnZXMvZmF2b3JpdGUvZmF2b3JpdGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYXZvcml0ZS9mYXZvcml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGNBQUE7QUNDRjs7QURFQTs7O0VBR0UsaUJBQUE7QUNDRjs7QURFQTs7O0VBR0UsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvREFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYXZvcml0ZS9mYXZvcml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiAgXHJcbi5zYy1pb24tY2FyZC1wd2EtaCxcclxuLnNjLWlvbi1jYXJkLW1kLWgsXHJcbi5zYy1pb24tY2FyZC1pb3MtaCB7XHJcbiAgZGlzcGxheTogdW5zZXQ7XHJcbn1cclxuXHJcbi5zYy1pb24tY2FyZC1wd2EtcyBpbWcsXHJcbi5zYy1pb24tY2FyZC1tZC1zIGltZyxcclxuLnNjLWlvbi1jYXJkLWlvcy1zIGltZyB7XHJcbiAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbn1cclxuXHJcbi5saXN0LXB3YSxcclxuLmxpc3QtbWQsXHJcbi5saXN0LWlvcyB7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5zYy1pb24tY2FyZC1tZC1oIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjLWlvbi1jYXJkLXB3YS1oLFxuLnNjLWlvbi1jYXJkLW1kLWgsXG4uc2MtaW9uLWNhcmQtaW9zLWgge1xuICBkaXNwbGF5OiB1bnNldDtcbn1cblxuLnNjLWlvbi1jYXJkLXB3YS1zIGltZyxcbi5zYy1pb24tY2FyZC1tZC1zIGltZyxcbi5zYy1pb24tY2FyZC1pb3MtcyBpbWcge1xuICBtYXJnaW4tdG9wOiAtMThweDtcbn1cblxuLmxpc3QtcHdhLFxuLmxpc3QtbWQsXG4ubGlzdC1pb3Mge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/favorite/favorite.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/favorite/favorite.page.ts ***!
  \*************************************************/
/*! exports provided: FavoritePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePage", function() { return FavoritePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");




var FavoritePage = /** @class */ (function () {
    /**
     * Constructor of our favorite courses page
     * @param activatedRoute Information about the route we are on
     * @param courseCodeService The course code Service to get data
     */
    function FavoritePage(loadingCtrl, toastCtrl, nativeStorage, alertController) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
        this.isFound = false;
    }
    FavoritePage.prototype.ngOnInit = function () {
        var _this = this;
        // Get the favorite courses from the storage    
        this.getFavoriteCourses().then(function () {
            if (_this.courses.length > 0) {
                _this.isFound = true;
            }
            else {
                _this.isFound = false;
            }
        });
    };
    FavoritePage.prototype.getFavoriteCourses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Retrieving favorite course(s), please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        // Get all favourite courses from the storage
                        return [4 /*yield*/, this.nativeStorage.getItem('favoritecourse')
                                .then(function (courseLists) {
                                if (courseLists.length > 0) {
                                    _this.courses = courseLists;
                                }
                            })
                                .catch(function () {
                                // this.presentAlert("Error", "Something went wrong");
                            })];
                    case 3:
                        // Get all favourite courses from the storage
                        _a.sent();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    FavoritePage.prototype.setupSelectedCourse = function (course) {
        this.nativeStorage.setItem('selectedcourse', { Code: course.code, Title: course.title }).then(function () { }, function () { });
    };
    FavoritePage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FavoritePage.prototype.presentAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: [{
                                    text: 'OK',
                                    handler: function () { }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FavoritePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    FavoritePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite',
            template: __webpack_require__(/*! raw-loader!./favorite.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/favorite/favorite.page.html"),
            styles: [__webpack_require__(/*! ./favorite.page.scss */ "./src/app/pages/favorite/favorite.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], FavoritePage);
    return FavoritePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-favorite-favorite-module-es5.js.map