(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chatrooms-chatrooms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chatrooms/chatrooms.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chatrooms/chatrooms.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Chat Rooms\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button (click)=\"moreItems()\">\n        <ion-icon name=\"more\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Select a chat room</ion-label>\n    </ion-list-header>\n    \n    <ion-item button detail lines=\"inset\" *ngFor=\"let room of rooms\" (click)=\"joinRoom(room.key, room.roomname)\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"chatboxes\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{room.roomname}}</h2>\n        <p>{{room.roomtitle}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>  \n</ion-content>\n\n<!-- <ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item *ngFor=\"let room of rooms\">\n      {{room.roomname}}\n      <ion-icon name=\"chatboxes\" item-end (click)=\"joinRoom(room.key)\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content> -->"

/***/ }),

/***/ "./src/app/pages/chatrooms/chatrooms.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/chatrooms/chatrooms.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatRoomsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomsPageModule", function() { return ChatRoomsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chatrooms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatrooms.page */ "./src/app/pages/chatrooms/chatrooms.page.ts");







var routes = [
    {
        path: '',
        component: _chatrooms_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomsPage"]
    }
];
var ChatRoomsPageModule = /** @class */ (function () {
    function ChatRoomsPageModule() {
    }
    ChatRoomsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chatrooms_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomsPage"]]
        })
    ], ChatRoomsPageModule);
    return ChatRoomsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chatrooms/chatrooms.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/chatrooms/chatrooms.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXRyb29tcy9jaGF0cm9vbXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/chatrooms/chatrooms.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chatrooms/chatrooms.page.ts ***!
  \***************************************************/
/*! exports provided: ChatRoomsPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomsPage", function() { return ChatRoomsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/dist/index.cjs.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");





var ChatRoomsPage = /** @class */ (function () {
    function ChatRoomsPage(router, nativeStorage) {
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.rooms = [];
        this.ref = Firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('chatrooms');
    }
    ChatRoomsPage.prototype.ngOnInit = function () {
        var _this = this;
        // Get user credentials if user has already login
        this.nativeStorage.getItem('usercredentials').then(function (usercredentials) {
            _this.username = usercredentials.User.username;
            if (_this.username === undefined || _this.username.length == 0) {
                _this.router.navigate(['register']);
                // this.getChatroom()
            }
            _this.getChatroom();
        }, function (error) {
            // this.getChatroom()
            _this.router.navigateByUrl('/register');
        });
    };
    ChatRoomsPage.prototype.getChatroom = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.ref.onSnapshot(function (docSnapshot) {
                    var data = [];
                    if (docSnapshot.empty) {
                        data = [];
                    }
                    else {
                        docSnapshot.forEach(function (doc) {
                            data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: doc.id }, doc.data()));
                        });
                    }
                    _this.rooms = data;
                    // this.rooms = snapshotToArray(resp);
                });
                return [2 /*return*/];
            });
        });
    };
    ChatRoomsPage.prototype.joinRoom = function (key, roomname) {
        this.nativeStorage.setItem('chatinfo', { Key: key, RoomName: roomname, UserName: this.username }).then(function () { }, function () { });
        // Navigate and display chatroom
        this.router.navigate(['/chatroom']);
    };
    ChatRoomsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] }
    ]; };
    ChatRoomsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatrooms',
            template: __webpack_require__(/*! raw-loader!./chatrooms.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chatrooms/chatrooms.page.html"),
            styles: [__webpack_require__(/*! ./chatrooms.page.scss */ "./src/app/pages/chatrooms/chatrooms.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]])
    ], ChatRoomsPage);
    return ChatRoomsPage;
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
//# sourceMappingURL=pages-chatrooms-chatrooms-module-es5.js.map