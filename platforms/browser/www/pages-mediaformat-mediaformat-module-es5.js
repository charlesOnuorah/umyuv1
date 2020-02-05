(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mediaformat-mediaformat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mediaformat/mediaformat.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mediaformat/mediaformat.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Media Format Options\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"assets/banners/banner41.jpg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title>{{ courseCode }}</ion-card-title>\n      <ion-card-subtitle>{{ courseTitle }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Select any of the available optional learning format <strong>(PDF, Audio and Video)</strong> to get started.</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Select your viewing option</ion-label>\n    </ion-list-header>\n    \n    <ion-item button detail lines=\"inset\" [routerLink]=\"['/', 'pdfviewer', courseID]\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Read PDF Format</h2>\n        <p>Read the PDF version of this course</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item button detail lines=\"inset\" [routerLink]=\"['/', 'audioplayer', courseID]\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"volume-high\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Play Course Audio</h2>\n        <p>Listen to the audio version of this course</p>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item button detail lines=\"inset\" [routerLink]=\"['/', 'videoplayer', courseID]\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"videocam\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Watch Course Video</h2>\n        <p>Watch the video version of this course</p>\n      </ion-label>\n    </ion-item>\n    \n    <!-- <ion-item button detail lines=\"inset\" [routerLink]=\"['/', 'pptviewer', courseID]\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"filing\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>View Powerpoint Format</h2>\n        <p>Read the powerpoint version of this course</p>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item button detail lines=\"inset\" [routerLink]=\"['/', 'mediaplayer', courseID, 4]\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"filing\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Powerpoint Format</h2>\n        <p>Read the powerpoint version of this course</p>\n      </ion-label>\n    </ion-item> -->\n  </ion-list>  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/mediaformat/mediaformat.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mediaformat/mediaformat.module.ts ***!
  \*********************************************************/
/*! exports provided: MediaFormatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaFormatPageModule", function() { return MediaFormatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mediaformat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mediaformat.page */ "./src/app/pages/mediaformat/mediaformat.page.ts");







var routes = [
    {
        path: '',
        component: _mediaformat_page__WEBPACK_IMPORTED_MODULE_6__["MediaFormatPage"]
    }
];
var MediaFormatPageModule = /** @class */ (function () {
    function MediaFormatPageModule() {
    }
    MediaFormatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mediaformat_page__WEBPACK_IMPORTED_MODULE_6__["MediaFormatPage"]]
        })
    ], MediaFormatPageModule);
    return MediaFormatPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mediaformat/mediaformat.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/mediaformat/mediaformat.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVkaWFmb3JtYXQvQzpcXFVzZXJzXFxDaGFybGVzIE9udW9yYWhcXERvY3VtZW50c1xcQ0JDXFxQcm9qZWN0c1xcVU1ZVUFwcFNvdXJjZS9zcmNcXGFwcFxccGFnZXNcXG1lZGlhZm9ybWF0XFxtZWRpYWZvcm1hdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lZGlhZm9ybWF0L21lZGlhZm9ybWF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7O0VBR0UsY0FBQTtBQ0NGOztBREVBOzs7RUFHRSxpQkFBQTtBQ0NGOztBREVBOzs7RUFHRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9EQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZGlhZm9ybWF0L21lZGlhZm9ybWF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuICBcclxuLnNjLWlvbi1jYXJkLXB3YS1oLFxyXG4uc2MtaW9uLWNhcmQtbWQtaCxcclxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLXB3YS1zIGltZyxcclxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxyXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAtMThweDtcclxufVxyXG5cclxuLmxpc3QtcHdhLFxyXG4ubGlzdC1tZCxcclxuLmxpc3QtaW9zIHtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLWgsXG4uc2MtaW9uLWNhcmQtbWQtaCxcbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxuLnNjLWlvbi1jYXJkLWlvcy1zIGltZyB7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4ubGlzdC1wd2EsXG4ubGlzdC1tZCxcbi5saXN0LWlvcyB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/mediaformat/mediaformat.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mediaformat/mediaformat.page.ts ***!
  \*******************************************************/
/*! exports provided: MediaFormatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaFormatPage", function() { return MediaFormatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");




var MediaFormatPage = /** @class */ (function () {
    /**
     * Constructor of our course viewer page
     * @param activatedRoute Information about the route we are on
     * @param courseCodeService The course code Service to get data
     */
    function MediaFormatPage(activatedRoute, nativeStorage) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.nativeStorage = nativeStorage;
        this.nativeStorage.getItem('selectedcourse').then(function (selectedCourse) {
            _this.courseCode = selectedCourse.Code;
            _this.courseTitle = selectedCourse.Title;
        }, function () { });
    }
    MediaFormatPage.prototype.ngOnInit = function () {
        var _this = this;
        // Get the ID that was passed with the URL    
        this.activatedRoute.params.subscribe(function (params) {
            _this.courseID = +params['courseid'];
        });
    };
    MediaFormatPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] }
    ]; };
    MediaFormatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mediaformat',
            template: __webpack_require__(/*! raw-loader!./mediaformat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mediaformat/mediaformat.page.html"),
            styles: [__webpack_require__(/*! ./mediaformat.page.scss */ "./src/app/pages/mediaformat/mediaformat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]])
    ], MediaFormatPage);
    return MediaFormatPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mediaformat-mediaformat-module-es5.js.map