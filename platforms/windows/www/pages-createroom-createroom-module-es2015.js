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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _createroom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createroom.page */ "./src/app/pages/createroom/createroom.page.ts");







const routes = [
    {
        path: '',
        component: _createroom_page__WEBPACK_IMPORTED_MODULE_6__["CreateRoomPage"]
    }
];
let CreateRoomPageModule = class CreateRoomPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/createroom/createroom.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/createroom/createroom.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlcm9vbS9DOlxcVU1ZVUFwcC9zcmNcXGFwcFxccGFnZXNcXGNyZWF0ZXJvb21cXGNyZWF0ZXJvb20ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGVyb29tL2NyZWF0ZXJvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBOzs7RUFHRSxjQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGlCQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0RBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlcm9vbS9jcmVhdGVyb29tLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuICBcclxuLnNjLWlvbi1jYXJkLXB3YS1oLFxyXG4uc2MtaW9uLWNhcmQtbWQtaCxcclxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLXB3YS1zIGltZyxcclxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxyXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAtMThweDtcclxufVxyXG5cclxuLmxpc3QtcHdhLFxyXG4ubGlzdC1tZCxcclxuLmxpc3QtaW9zIHtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLWgsXG4uc2MtaW9uLWNhcmQtbWQtaCxcbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxuLnNjLWlvbi1jYXJkLWlvcy1zIGltZyB7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4ubGlzdC1wd2EsXG4ubGlzdC1tZCxcbi5saXN0LWlvcyB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/index.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_6__);







let CreateRoomPage = class CreateRoomPage {
    /**
     * Constructor of our course viewer page
     * @param activatedRoute Information about the route we are on
     * @param courseCodeService The course code Service to get data
     */
    constructor(loadingCtrl, activatedRoute, nativeStorage, router, toastCtrl, spinnerDialog) {
        this.loadingCtrl = loadingCtrl;
        this.activatedRoute = activatedRoute;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.spinnerDialog = spinnerDialog;
        this.rooms = [];
        this.ref = Firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('chatrooms/');
        this.ref.on('value', resp => {
            this.rooms = [];
            this.rooms = snapshotToArray(resp);
        });
        this.nativeStorage.getItem('selectedcourse').then(selectedCourse => {
            this.courseCode = selectedCourse.Code;
            this.courseTitle = selectedCourse.Title;
        }, () => { });
    }
    ngOnInit() {
        // Get the ID that was passed with the URL    
        this.activatedRoute.params.subscribe(params => {
            this.courseID = +params['courseid'];
        });
    }
    createChatRoom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Creatiing chat room, please wait...'
            });
            yield loading.present();
            let newData = this.ref.push();
            newData.set({
                // roomname:this.data.roomname
                roomname: this.courseCode,
                roomtitle: this.courseTitle
            });
            loading.dismiss();
            // Navigate and display chatroom
            this.router.navigate(['/chatrooms/']);
        });
    }
};
CreateRoomPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__["SpinnerDialog"] }
];
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
//# sourceMappingURL=pages-createroom-createroom-module-es2015.js.map