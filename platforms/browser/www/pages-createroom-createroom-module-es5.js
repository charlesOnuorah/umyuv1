(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-createroom-createroom-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/createroom/createroom.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/createroom/createroom.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Create Chat Room\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <!-- <ion-button (click)=\"moreItems()\">\n        <ion-icon name=\"more\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"assets/banners/banner41.jpg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title>{{ courseCode }}</ion-card-title>\n      <ion-card-subtitle>{{ courseTitle }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p><strong> {{ courseTitle }} </strong> chat room does not yet exist, click the button below to create this chat room and be the first to start a chat.</p>\n    </ion-card-content>\n\n    <!-- <ion-card-content *ngIf=\"mediaType == 1 || mediaType == 4\" >\n      <iframe [src]=\"mediaURL\" style=\"width:100%; height: 1100px;\"></iframe>\n    </ion-card-content> -->\n\n  </ion-card>   \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button color=\"light\" fill=\"clear\" expand=\"full\" (click)=\"createChatRoom()\">Create Chat Room</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/createroom/createroom.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/createroom/createroom.module.ts ***!
  \*******************************************************/
/*! exports provided: CreateRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoomPageModule", function() { return CreateRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _createroom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createroom.page */ "./src/app/pages/createroom/createroom.page.ts");







var routes = [
    {
        path: '',
        component: _createroom_page__WEBPACK_IMPORTED_MODULE_6__["CreateRoomPage"]
    }
];
var CreateRoomPageModule = /** @class */ (function () {
    function CreateRoomPageModule() {
    }
    CreateRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_createroom_page__WEBPACK_IMPORTED_MODULE_6__["CreateRoomPage"]]
        })
    ], CreateRoomPageModule);
    return CreateRoomPageModule;
}());



/***/ }),

/***/ "./src/app/pages/createroom/createroom.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/createroom/createroom.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlcm9vbS9DOlxcVXNlcnNcXENoYXJsZXMgT251b3JhaFxcRG9jdW1lbnRzXFxDQkNcXFByb2plY3RzXFxVTVlVQXBwU291cmNlL3NyY1xcYXBwXFxwYWdlc1xcY3JlYXRlcm9vbVxcY3JlYXRlcm9vbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0ZXJvb20vY3JlYXRlcm9vbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGNBQUE7QUNDRjs7QURFQTs7O0VBR0UsaUJBQUE7QUNDRjs7QURFQTs7O0VBR0UsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvREFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGVyb29tL2NyZWF0ZXJvb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4gIFxyXG4uc2MtaW9uLWNhcmQtcHdhLWgsXHJcbi5zYy1pb24tY2FyZC1tZC1oLFxyXG4uc2MtaW9uLWNhcmQtaW9zLWgge1xyXG4gIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxyXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXHJcbi5zYy1pb24tY2FyZC1pb3MtcyBpbWcge1xyXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcblxyXG4ubGlzdC1wd2EsXHJcbi5saXN0LW1kLFxyXG4ubGlzdC1pb3Mge1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtbWQtaCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zYy1pb24tY2FyZC1wd2EtaCxcbi5zYy1pb24tY2FyZC1tZC1oLFxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgZGlzcGxheTogdW5zZXQ7XG59XG5cbi5zYy1pb24tY2FyZC1wd2EtcyBpbWcsXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59XG5cbi5saXN0LXB3YSxcbi5saXN0LW1kLFxuLmxpc3QtaW9zIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/createroom/createroom.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/createroom/createroom.page.ts ***!
  \*****************************************************/
/*! exports provided: CreateRoomPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoomPage", function() { return CreateRoomPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/index.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_6__);







var CreateRoomPage = /** @class */ (function () {
    /**
     * Constructor of our course viewer page
     * @param activatedRoute Information about the route we are on
     * @param courseCodeService The course code Service to get data
     */
    function CreateRoomPage(loadingCtrl, activatedRoute, nativeStorage, router, toastCtrl, spinnerDialog) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.activatedRoute = activatedRoute;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.spinnerDialog = spinnerDialog;
        this.rooms = [];
        this.ref = Firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('chatrooms/');
        this.ref.on('value', function (resp) {
            _this.rooms = [];
            _this.rooms = snapshotToArray(resp);
        });
        this.nativeStorage.getItem('selectedcourse').then(function (selectedCourse) {
            _this.courseCode = selectedCourse.Code;
            _this.courseTitle = selectedCourse.Title;
        }, function () { });
    }
    CreateRoomPage.prototype.ngOnInit = function () {
        var _this = this;
        // Get the ID that was passed with the URL    
        this.activatedRoute.params.subscribe(function (params) {
            _this.courseID = +params['courseid'];
        });
    };
    CreateRoomPage.prototype.createChatRoom = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, newData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Creatiing chat room, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        newData = this.ref.push();
                        newData.set({
                            // roomname:this.data.roomname
                            roomname: this.courseCode,
                            roomtitle: this.courseTitle
                        });
                        loading.dismiss();
                        // Navigate and display chatroom
                        this.router.navigate(['/chatrooms/']);
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateRoomPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__["SpinnerDialog"] }
    ]; };
    CreateRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createroom',
            template: __webpack_require__(/*! raw-loader!./createroom.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/createroom/createroom.page.html"),
            styles: [__webpack_require__(/*! ./createroom.page.scss */ "./src/app/pages/createroom/createroom.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__["SpinnerDialog"]])
    ], CreateRoomPage);
    return CreateRoomPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};


/***/ })

}]);
//# sourceMappingURL=pages-createroom-createroom-module-es5.js.map