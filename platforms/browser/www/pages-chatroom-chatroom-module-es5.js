(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chatroom-chatroom-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chatroom/chatroom.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chatroom/chatroom.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"exitChat()\" text=\"Exit {{ roomname }} Room\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button style=\"font-size: 12px;\" (click)=\"exitChat()\" icon-end><span style=\"padding-right: 5px;\">Exit Chat</span>\n        <ion-icon name=\"exit\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"moreItems()\">\n        <ion-icon name=\"more\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let chat of chats\" no-lines>\n      <div class=\"chat-status\" class=\"ion-text-center\" *ngIf=\"chat.type==='join'||chat.type==='exit';else message\">\n        <span class=\"chat-date\">{{chat.sendDate | date:'short'}}</span>\n        <span class=\"chat-content-center\">{{chat.message}}</span>\n      </div>\n      <ng-template #message>\n        <div class=\"chat-message\" text-right *ngIf=\"chat.user === username\">\n          <div class=\"right-bubble\">\n            <span class=\"msg-name\">Me</span>\n            <span class=\"msg-date\">{{chat.sendDate | date:'short'}}</span>\n            <p class=\"ion-text-wrap\">{{chat.message}}</p>\n          </div>\n        </div>\n        <div class=\"chat-message\" class=\"ion-text-left\" *ngIf=\"chat.user !== username\">\n          <div class=\"left-bubble\">\n            <span class=\"msg-name\">{{chat.user}}</span>\n            <span class=\"msg-date\">{{chat.sendDate | date:'short'}}</span>\n            <p class=\"ion-text-wrap\">{{chat.message}}</p>\n          </div>\n        </div>\n      </ng-template>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-10>\n        <ion-input type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"data.message\" name=\"message\"></ion-input>\n      </ion-col>\n      <ion-col col-2 (click)=\"sendMessage()\">\n        <ion-icon name=\"paper-plane\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer> -->\n\n<ion-content #IonContent fullscreen=\"false\" class=\"ion-no-padding no-padding\" style=\"background: url(assets/imgs/chat-back.png) fixed;\">\n  <ion-list>\n    <div *ngFor=\"let chat of chats; let i = index;\">\n      \n      <ion-row *ngIf=\"chat.type === 'join' && chat.user === username\">\n        <p class=\"notification\">\n          <span class=\"notification-text\">You joined <span class=\"time\">{{chat.sendDate | date:'shortTime'}}</span></span>\n        </p>\n      </ion-row>\n      <ion-row *ngIf=\"chat.type === 'join' && chat.user !== username\">\n          <p class=\"notification\">\n            <span class=\"notification-text\">{{chat.user}} has joined <span class=\"time\">{{chat.sendDate | date:'shortTime'}}</span></span>\n          </p>\n        </ion-row>\n      <ion-row *ngIf=\"chat.type === 'exit' && chat.user !== username\">\n          <p class=\"notification\">\n            <span class=\"notification-text\">\n              {{chat.user}} has left <span class=\"time\">{{chat.sendDate | date:'shortTime'}}\n\n              </span></span>\n          </p>\n        </ion-row>\n        <ion-row [ngClass]=\"chat.user === username ? 'display display-right':'display display-left'\" *ngIf=\"chat.type === 'message'\">\n            <span [ngClass]=\"chat.user === username ? 'innermsg right':'innermsg left'\">\n              <span *ngIf=\"chat.user !== username\" class=\"chat-user\">{{chat.user}}</span>\n              {{ chat.message }}\n              <span class=\"time\">{{chat.sendDate | date:'shortTime'}}</span>\n            </span>\n        </ion-row>\n      \n      <ion-row *ngIf=\"((chats[i+1] && chats[i+1].user != chat.user) || !chats[i+1])\">\n      <!-- <ion-row> -->\n        <ion-col>\n          <!-- <span><ion-text>{{chat.user}}</ion-text></span> @ <span><ion-text>{{chat.sendDate | date:'short'}}</ion-text></span> -->\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-list>\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\" sendMessage()\" [disabled]=\"isEnabled === false\">\n      <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n  <ion-row *ngIf=\"loader\">\n    <ion-col class=\"loading-col ion-no-padding\">\n      <div class=\"imageAvatarRight\">\n        <div class=\"imageAvatarBottomLoader\">\n          <ion-avatar class=\"avatar\">\n            <div class=\"imageAvatarBottomIcon\">\n              <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\n            </div>\n            <ion-img src=\"assets/imgs/chat-you.png\"></ion-img>\n          </ion-avatar>\n        </div>\n        <ion-label>\n          <div class=\"chatDivLoader\">\n            <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\n            <ion-img src=\"assets/imgs/loader.gif\"></ion-img>\n            <!-- <p class=\"ion-padding ion-text-wrap\"> {{paramData.name || 'Pam'}} is typing...</p> -->\n            <div class=\"corner-parent-right\">\n              <div class=\"corner-child-right\">\n\n              </div>\n            </div>\n          </div>\n        </ion-label>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer color=\"light\">\n  <ion-item color=\"light\">\n    <!-- <ion-icon slot=\"start\" name=\"chatboxes\" expand=\"icon-only\" class=\"footerIcon\"></ion-icon> -->\n    <ion-input color=\"light\" style=\"color:rgb(33, 34, 36) !important;\" class=\"input-box\" type=\"text\" name=\"message\" placeholder=\"Write a message...\" [(ngModel)]=\"data.message\" (ionInput)=\"userTyping($event)\" (keyup.enter)=\"sendMessage()\"></ion-input>\n    <ion-icon slot=\"end\" name=\"paper-plane\" (click)=\"sendMessage()\"></ion-icon>\n  </ion-item>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/chatroom/chatroom.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chatroom/chatroom.module.ts ***!
  \***************************************************/
/*! exports provided: ChatRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPageModule", function() { return ChatRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chatroom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatroom.page */ "./src/app/pages/chatroom/chatroom.page.ts");







var routes = [
    {
        path: '',
        component: _chatroom_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]
    }
];
var ChatRoomPageModule = /** @class */ (function () {
    function ChatRoomPageModule() {
    }
    ChatRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chatroom_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]]
        })
    ], ChatRoomPageModule);
    return ChatRoomPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chatroom/chatroom.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/chatroom/chatroom.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Chatter - Chat themes Ionic 4 (https://www.enappd.com)\n *\n * Copyright © 2018-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source .\n * \n */\nion-content {\n  --background: url('chat-back.png') no-repeat center center fixed;\n}\nion-header {\n  --background: #5B2573 ;\n}\nion-toolbar,\nion-item {\n  --background: transparent;\n}\nion-list {\n  background: transparent;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n.imageAvatarRight {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.imageAvatarRight .imageAvatarBottom {\n  max-width: 214px;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n.imageAvatarRight .avatar {\n  width: 50px;\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.imageAvatarRight .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  right: 10.1%;\n  color: #272626;\n}\n.imageAvatarRight .chatDiv {\n  text-align: justify;\n  position: relative;\n  background: #DCF8C6;\n  border-radius: 6px;\n  border-bottom-left-radius: 0;\n  max-width: 85vw;\n  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n.imageAvatarRight ion-img {\n  width: 35px;\n  height: 35px;\n}\n.imageAvatarRight .sharper.chatDiv {\n  border-radius: 0;\n}\n.imageAvatarRight .sharper-bottom.chatDiv {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.imageAvatarRight .sharper-top.chatDiv {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.imageAvatarLeft {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.imageAvatarLeft .imageAvatarBottom {\n  max-width: 214px;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n.imageAvatarLeft .avatar {\n  width: 50px;\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.imageAvatarLeft .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  right: 10.1%;\n  color: #272626;\n}\n.imageAvatarLeft .chatDiv {\n  text-align: left;\n  position: relative;\n  background: #f5f5f5;\n  border-radius: 6px;\n  border-bottom-right-radius: 0;\n  max-width: 85vw;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n.imageAvatarLeft ion-img {\n  width: 35px;\n  height: 35px;\n}\n.imageAvatarLeft .sharper.chatDiv {\n  border-radius: 0;\n}\n.imageAvatarLeft .sharper-bottom.chatDiv {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.imageAvatarLeft .sharper-top.chatDiv {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\nion-fab-button {\n  width: 47px !important;\n  height: 47px !important;\n}\nion-fab {\n  bottom: -22px !important;\n}\n.footerIcon {\n  color: rgba(33, 34, 36, 0.7);\n}\nion-input {\n  color: rgba(33, 34, 36, 0.7);\n  --placeholder-color: rgba(33, 34, 36, 0.7);\n}\n.chatDivLoader {\n  position: relative;\n  background: #DCF8C6;\n  border-radius: 16px;\n  min-width: 80px;\n  max-width: 80px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #272626;\n  padding: 2px;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.chatDivLoader .corner-parent-right {\n  background: #DCF8C6;\n  height: 10px;\n  width: 10px;\n  position: absolute;\n  left: -4px;\n  bottom: -2px;\n  border-radius: 0;\n  border-radius: 5px;\n}\n.chatDivLoader .corner-parent-right .corner-child-right {\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background: #DCF8C6;\n  position: absolute;\n  top: 7px;\n  left: -7px;\n}\nion-text {\n  font-size: 12px;\n  color: #272626;\n}\nion-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.imageAvatarBottomLoader {\n  max-width: 214px;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 8px;\n  z-index: 11;\n}\n.hidden {\n  visibility: hidden;\n}\n.loading-col {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  padding-left: 20px;\n}\n.right {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  padding-left: 20px;\n}\n.left {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding-right: 20px;\n}\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right {\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  position: absolute;\n  left: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right .corner-child-right {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background: transparent;\n  box-shadow: 15px 12px 0 0px #DCF8C6;\n}\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left {\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  position: absolute;\n  right: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left .corner-child-left {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background: transparent;\n  box-shadow: -15px 12px 0 0px #f5f5f5;\n}\n.input-box {\n  color: white;\n}\n.sc-ion-label-md-s p {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: -2px;\n  font-size: 14px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n.no-padding {\n  padding: 0px !important;\n}\n.notification {\n  padding: 3px 5px;\n  text-align: center;\n  width: 100%;\n  border-radius: 7.5px;\n  padding: 3px 12px 6px;\n}\n.notification-text {\n  padding: 3px 5px;\n  background: rgba(225, 245, 254, 0.92);\n  text-transform: capitalize;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n  border-radius: 7.5px;\n  font-size: 0.85em;\n}\n.time {\n  font-size: 0.45em;\n  color: #1b1b1b;\n  display: inline-block;\n}\n.innermsg {\n  padding: 5px 10px;\n  margin: 5px;\n  font-size: 1.45em;\n  border-radius: 15px;\n  margin-bottom: 5px;\n}\n.innermsg.left {\n  float: left;\n  background-color: #F1F0F0;\n  max-width: 70%;\n  font-size: 1.45em;\n  color: black;\n  border-radius: 7.5px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n}\n.innermsg.right {\n  float: right;\n  background-color: #dcf8c6;\n  color: #000;\n  max-width: 70%;\n  font-size: 1.45em;\n  border-radius: 7.5px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n}\n.msgbubble {\n  margin-bottom: 10px;\n}\n.display {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px;\n}\n.display-left {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.display-right {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.chat-user {\n  color: #91ab01;\n  font-size: 0.5em;\n  text-transform: capitalize;\n  text-decoration: underline;\n  padding: 2px 0px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdHJvb20vY2hhdHJvb20ucGFnZS5zY3NzIiwiL1VzZXJzL2NiY2dlZHUvRGVza3RvcC9wcm9qZWN0cy91bXl1djEvc3JjL2FwcC9wYWdlcy9jaGF0cm9vbS9jaGF0cm9vbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztFQUFBO0FBV0M7RUFDQyxnRUFBQTtBREFGO0FDS0E7RUFDRSxzQkFBQTtBREZGO0FDSUE7O0VBRUUseUJBQUE7QURERjtBQ0dBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEQUY7QUNFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FEQ0Y7QUNBRTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBRENKO0FDQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEQ0o7QUNDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7QURBSjtBQ0VFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUdBLGVBQUE7RUFDQSwyQ0FBQTtBREhKO0FDS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBREhKO0FDTUk7RUFDRSxnQkFBQTtBREpOO0FDUUk7RUFDRSw0QkFBQTtF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QTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQ0FBQTtBRDFCVjtBQ2dDQTtFQUNFLFlBQUE7QUQ3QkY7QUNpQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUQ5QkY7QUNpQ0E7RUFDRSx1QkFBQTtBRDlCRjtBQ2lDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBRDlCRjtBQ2lDQTtFQUNFLGdCQUFBO0VBQ0UscUNBQUE7RUFDQSwwQkFBQTtFQUNBLDZDQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FEOUJKO0FDaUNBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUQ5QkY7QUNpQ0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUQ5QkY7QUNpQ0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Usb0JBQUE7RUFDQSwyQ0FBQTtBRDlCSjtBQ3lDQTtFQUNFLFlBQUE7RUFFQSx5QkFBQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNFLDJDQUFBO0FEeENKO0FDMkNBO0VBQ0UsbUJBQUE7QUR4Q0Y7QUMyQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxhQUFBO0FEeENGO0FDMkNBO0VBQ0UsdUJBQUE7VUFBQSwyQkFBQTtBRHhDRjtBQzJDQTtFQUNFLHFCQUFBO1VBQUEseUJBQUE7QUR4Q0Y7QUMyQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEeENGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdHJvb20vY2hhdHJvb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiBDaGF0dGVyIC0gQ2hhdCB0aGVtZXMgSW9uaWMgNCAoaHR0cHM6Ly93d3cuZW5hcHBkLmNvbSlcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOC1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cbiAqIFxuICovXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2NoYXQtYmFjay5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNUIyNTczIDtcbn1cblxuaW9uLXRvb2xiYXIsXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW1hZ2VBdmF0YXJSaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uaW1hZ2VBdmF0YXJSaWdodCAuaW1hZ2VBdmF0YXJCb3R0b20ge1xuICBtYXgtd2lkdGg6IDIxNHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDZweDtcbiAgei1pbmRleDogMTE7XG59XG4uaW1hZ2VBdmF0YXJSaWdodCAuYXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW1hZ2VBdmF0YXJSaWdodCAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcmlnaHQ6IDEwLjElO1xuICBjb2xvcjogIzI3MjYyNjtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IC5jaGF0RGl2IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjRENGOEM2O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIG1heC13aWR0aDogODV2dztcbiAgYm94LXNoYWRvdzogLTFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IGlvbi1pbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLnNoYXJwZXIuY2hhdERpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uaW1hZ2VBdmF0YXJSaWdodCAuc2hhcnBlci1ib3R0b20uY2hhdERpdiB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLnNoYXJwZXItdG9wLmNoYXREaXYge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmltYWdlQXZhdGFyTGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5pbWFnZUF2YXRhckxlZnQgLmltYWdlQXZhdGFyQm90dG9tIHtcbiAgbWF4LXdpZHRoOiAyMTRweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2cHg7XG4gIHotaW5kZXg6IDExO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuYXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5pbWFnZUF2YXRhckJvdHRvbUljb24ge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByaWdodDogMTAuMSU7XG4gIGNvbG9yOiAjMjcyNjI2O1xufVxuLmltYWdlQXZhdGFyTGVmdCAuY2hhdERpdiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgbWF4LXdpZHRoOiA4NXZ3O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IGlvbi1pbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmltYWdlQXZhdGFyTGVmdCAuc2hhcnBlci5jaGF0RGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5pbWFnZUF2YXRhckxlZnQgLnNoYXJwZXItYm90dG9tLmNoYXREaXYge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5pbWFnZUF2YXRhckxlZnQgLnNoYXJwZXItdG9wLmNoYXREaXYge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogNDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWZhYiB7XG4gIGJvdHRvbTogLTIycHggIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlckljb24ge1xuICBjb2xvcjogcmdiYSgzMywgMzQsIDM2LCAwLjcpO1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogcmdiYSgzMywgMzQsIDM2LCAwLjcpO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDMzLCAzNCwgMzYsIDAuNyk7XG59XG5cbi5jaGF0RGl2TG9hZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjRENGOEM2O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMyNzI2MjY7XG4gIHBhZGRpbmc6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2hhdERpdkxvYWRlciAuY29ybmVyLXBhcmVudC1yaWdodCB7XG4gIGJhY2tncm91bmQ6ICNEQ0Y4QzY7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTRweDtcbiAgYm90dG9tOiAtMnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY2hhdERpdkxvYWRlciAuY29ybmVyLXBhcmVudC1yaWdodCAuY29ybmVyLWNoaWxkLXJpZ2h0IHtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI0RDRjhDNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbiAgbGVmdDogLTdweDtcbn1cblxuaW9uLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjcyNjI2O1xufVxuXG5pb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZUF2YXRhckJvdHRvbUxvYWRlciB7XG4gIG1heC13aWR0aDogMjE0cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmxvYWRpbmctY29sIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ubGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5jbHViYmVkIC5pbWFnZUF2YXRhclJpZ2h0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LXJpZ2h0IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTMwcHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jbHViYmVkIC5pbWFnZUF2YXRhclJpZ2h0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LXJpZ2h0IC5jb3JuZXItY2hpbGQtcmlnaHQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMTVweCAxMnB4IDAgMHB4ICNEQ0Y4QzY7XG59XG4uY2x1YmJlZCAuaW1hZ2VBdmF0YXJMZWZ0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LWxlZnQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTMwcHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jbHViYmVkIC5pbWFnZUF2YXRhckxlZnQgLmNoYXREaXYgLmNvcm5lci1wYXJlbnQtbGVmdCAuY29ybmVyLWNoaWxkLWxlZnQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogLTE1cHggMTJweCAwIDBweCAjZjVmNWY1O1xufVxuXG4uaW5wdXQtYm94IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2MtaW9uLWxhYmVsLW1kLXMgcCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNy41cHg7XG4gIHBhZGRpbmc6IDNweCAxMnB4IDZweDtcbn1cblxuLm5vdGlmaWNhdGlvbi10ZXh0IHtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDI0NSwgMjU0LCAwLjkyKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgYm94LXNoYWRvdzogMCAxcHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcbiAgYm9yZGVyLXJhZGl1czogNy41cHg7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xufVxuXG4udGltZSB7XG4gIGZvbnQtc2l6ZTogMC40NWVtO1xuICBjb2xvcjogIzFiMWIxYjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW5uZXJtc2cge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS40NWVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbm5lcm1zZy5sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYwRjA7XG4gIG1heC13aWR0aDogNzAlO1xuICBmb250LXNpemU6IDEuNDVlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA3LjVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcbn1cblxuLmlubmVybXNnLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNmOGM2O1xuICBjb2xvcjogIzAwMDtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIGZvbnQtc2l6ZTogMS40NWVtO1xuICBib3JkZXItcmFkaXVzOiA3LjVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcbn1cblxuLm1zZ2J1YmJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmRpc3BsYXktbGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmRpc3BsYXktcmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY2hhdC11c2VyIHtcbiAgY29sb3I6ICM5MWFiMDE7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcGFkZGluZzogMnB4IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59IiwiLyoqXHJcbiAqIENoYXR0ZXIgLSBDaGF0IHRoZW1lcyBJb25pYyA0IChodHRwczovL3d3dy5lbmFwcGQuY29tKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAxOC1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cclxuICogXHJcbiAqL1xyXG5cclxuXHJcbiBpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvY2hhdC1iYWNrLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoL3NyYy9hc3NldHMvaW1nL2NoYXQtYmFjay5wbmcpICM1QjI1NzMgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYXQgMCA1MCUscmdiKDE3MywgNDIsIDE2MiksIzVCMjU3Myk7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYXQgMCA1MCUscmdiKDkxLCAxMzYsIDkwKSxyZ2IoMzcsIDExNSwgMzcpKTtcclxufVxyXG5pb24taGVhZGVye1xyXG4gIC0tYmFja2dyb3VuZDogIzVCMjU3M1xyXG59XHJcbmlvbi10b29sYmFyLFxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uaW1hZ2VBdmF0YXJSaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgLmltYWdlQXZhdGFyQm90dG9tIHtcclxuICAgIG1heC13aWR0aDogMjE0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzVCMjU3MztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgfVxyXG4gIC5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTclO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHJpZ2h0OiAxMC4xJTtcclxuICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZ2IoMzksIDM4LCAzOCk7XHJcbiAgfVxyXG4gIC5jaGF0RGl2IHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjOGZlY2FlN2E7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRENGOEM2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICAvLyBtaW4td2lkdGg6IDcydnc7XHJcbiAgICBtYXgtd2lkdGg6IDg1dnc7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBpb24taW1nIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gIH1cclxuICAuc2hhcnBlciB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhcnBlci1ib3R0b20ge1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zaGFycGVyLXRvcCB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uaW1hZ2VBdmF0YXJMZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIC5pbWFnZUF2YXRhckJvdHRvbSB7XHJcbiAgICBtYXgtd2lkdGg6IDIxNHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICM1QjI1NzM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gIH1cclxuICAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE3JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICByaWdodDogMTAuMSU7XHJcbiAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogcmdiKDM5LCAzOCwgMzgpO1xyXG4gIH1cclxuICAuY2hhdERpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigzMiwxNzcsMjEyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIC8vIG1pbi13aWR0aDogNzJ2dztcclxuICAgIG1heC13aWR0aDogODV2dztcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB9XHJcbiAgaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgLnNoYXJwZXIge1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNoYXJwZXItYm90dG9tIHtcclxuICAgICYuY2hhdERpdiB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhcnBlci10b3Age1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICB3aWR0aDogNDdweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDdweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mYWIge1xyXG4gIGJvdHRvbTogLTIycHggIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVySWNvbiB7XHJcbiAgLy8gY29sb3I6IHJnYmEoMjQ0LCAyNDUsIDI0OCwgMC43KTtcclxuICBjb2xvcjogcmdiYSgzMywgMzQsIDM2LCAwLjcpO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6IHJnYmEoMzMsIDM0LCAzNiwgMC43KTtcclxuICAvLyAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDI0NCwgMjQ1LCAyNDgsIDAuNyk7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgzMywgMzQsIDM2LCAwLjcpO1xyXG59XHJcbi5jaGF0RGl2TG9hZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gYmFja2dyb3VuZDogIzkxNjRhYzdhO1xyXG4gIGJhY2tncm91bmQ6ICNEQ0Y4QzY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHJnYigzOSwgMzgsIDM4KTtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAuY29ybmVyLXBhcmVudC1yaWdodHtcclxuICAgIGJhY2tncm91bmQ6ICNEQ0Y4QzY7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjOTE2NGFjN2E7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC00cHg7XHJcbiAgICBib3R0b206IC0ycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmNvcm5lci1jaGlsZC1yaWdodHtcclxuICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgYmFja2dyb3VuZDogI0RDRjhDNjtcclxuICAgICAgLy8gYmFja2dyb3VuZDogIzkxNjRhYzdhO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogN3B4O1xyXG4gICAgICBsZWZ0OiAtN3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIC8vIGNvbG9yOiAjZDdkOGRhYzc7XHJcbiAgY29sb3I6IHJnYigzOSwgMzgsIDM4KTtcclxufVxyXG5pb24tY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmltYWdlQXZhdGFyQm90dG9tTG9hZGVyIHtcclxuICBtYXgtd2lkdGg6IDIxNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5sb2FkaW5nLWNvbHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4ubGVmdHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jbHViYmVkIHtcclxuICAuaW1hZ2VBdmF0YXJSaWdodCB7XHJcbiAgICAuY2hhdERpdiB7XHJcbiAgICAgIC5jb3JuZXItcGFyZW50LXJpZ2h0e1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAuY29ybmVyLWNoaWxkLXJpZ2h0e1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAvLyBib3gtc2hhZG93OiAxNXB4IDEycHggMCAwcHggIzkxNjRhYzdhO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMTVweCAxMnB4IDAgMHB4ICNEQ0Y4QzY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbWFnZUF2YXRhckxlZnQge1xyXG4gICAgLmNoYXREaXYge1xyXG4gICAgICAuY29ybmVyLXBhcmVudC1sZWZ0e1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgLmNvcm5lci1jaGlsZC1sZWZ0e1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAvLyBib3gtc2hhZG93OiAtMTVweCAxMnB4IDAgMHB4ICMyMGIxZDQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAtMTVweCAxMnB4IDAgMHB4ICNmNWY1ZjU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5pbnB1dC1ib3h7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8vIGNvbG9yOiByZ2IoMzksIDM4LCAzOCk7XHJcbn1cclxuXHJcbi5zYy1pb24tbGFiZWwtbWQtcyBwIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xyXG4gIG92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcblxyXG4ubm8tcGFkZGluZ3tcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbntcclxuICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA3LjVweDtcclxuICBwYWRkaW5nOiAzcHggMTJweCA2cHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tdGV4dHtcclxuICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjUsMjQ1LDI1NCwuOTIpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCBoc2xhKDAsMCUsMTAwJSwuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwLjVweCByZ2JhKDAsMCwwLC4xMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3LjVweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG59XHJcblxyXG4udGltZXtcclxuICBmb250LXNpemU6IDAuNDVlbTtcclxuICBjb2xvcjogIzFiMWIxYjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbm5lcm1zZyB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjQ1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5pbm5lcm1zZy5sZWZ0IHtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMEYwO1xyXG4gIG1heC13aWR0aDogNzAlO1xyXG4gIGZvbnQtc2l6ZTogMS40NWVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMC41cHggcmdiYSgwLDAsMCwuMTMpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5pbm5lcm1zZy5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDg0RkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZjhjNjtcclxuICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgZm9udC1zaXplOiAxLjQ1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNy41cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwLjVweCByZ2JhKDAsMCwwLC4xMyk7XHJcbn1cclxuXHJcbi5tc2didWJibGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5kaXNwbGF5e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmRpc3BsYXktbGVmdHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LXJpZ2h0e1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jaGF0LXVzZXJ7XHJcbiAgY29sb3I6ICM5MWFiMDE7XHJcbiAgZm9udC1zaXplOiAwLjVlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBwYWRkaW5nOiAycHggMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/chatroom/chatroom.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/chatroom/chatroom.page.ts ***!
  \*************************************************/
/*! exports provided: ChatRoomPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPage", function() { return ChatRoomPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/dist/index.cjs.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");






var ChatRoomPage = /** @class */ (function () {
    function ChatRoomPage(router, nativeStorage) {
        var _this = this;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.data = { type: '', username: '', message: '' };
        this.chats = [];
        this.offStatus = false;
        this.isEnabled = false;
        this.loader = false;
        // Get the stored chat information
        this.nativeStorage.getItem('chatinfo').then(function (chatInfo) {
            _this.roomkey = chatInfo.Key;
            _this.username = 'charles onuorah'; //chatInfo.UserName;
            _this.roomname = chatInfo.RoomName;
            _this.data.type = 'message';
            _this.data.username = _this.username;
            Firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('chatrooms/' + _this.roomkey + '/chats').add({
                type: 'join',
                user: _this.data.username,
                message: _this.data.username + ' has joined this room.',
                sendDate: Date()
            });
            // let joinData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
            // joinData.set({
            //   type:'join',
            //   user:this.data.username,
            //   message:this.data.username+' has joined this room.',
            //   sendDate:Date()
            // });
            _this.data.message = '';
            Firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('chatrooms/' + _this.roomkey + '/chats').onSnapshot(function (docSnapshot) {
                var chat = [];
                if (docSnapshot.empty) {
                    return;
                }
                docSnapshot.forEach(function (doc) {
                    if (doc.data().message.trim() !== '') {
                        chat.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: doc.id }, doc.data()));
                    }
                });
                console.log('chat before', chat);
                chat.sort(function (chat1, chat2) {
                    if (new Date(chat1.sendDate) > new Date(chat2.sendDate)) {
                        return 1;
                    }
                    else if (new Date(chat1.sendDate) < new Date(chat2.sendDate)) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
                console.log('chat', chat);
                _this.chats = chat;
                setTimeout(function () {
                    if (_this.offStatus === false) {
                        _this.content.scrollToBottom(300);
                    }
                }, 500);
            });
            // firebase.database().ref('chatrooms/'+this.roomkey+'/chats').on('value', resp => {
            //   this.chats = [];
            //   this.chats = snapshotToArray(resp);
            //   setTimeout(() => {
            //     if(this.offStatus === false) {
            //       this.content.scrollToBottom(300);
            //     }
            //   }, 1000);
            // });
        }, function (error) {
            _this.router.navigateByUrl('/chatrooms');
        });
    }
    ChatRoomPage.prototype.ngOnInit = function () {
    };
    ChatRoomPage.prototype.userTyping = function (event) {
        // this.userInput = event.target.value;
        // if (this.userInput.length !== 0) {
        //   this.isEnabled = true;
        // }
        // else
        // {
        //   this.isEnabled = false;
        // }    
        // this.scrollDown();
        // setTimeout(() => {
        //   this.senderSends();
        // }, 500);
    };
    ChatRoomPage.prototype.sendMessage = function () {
        var _this = this;
        if (this.data.message.trim() !== '') {
            Firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('chatrooms/' + this.roomkey + '/chats').add({
                type: 'message',
                user: this.data.username,
                message: this.data.message,
                sendDate: Date()
            }).then(function () {
                _this.data.message = '';
                _this.scrollDown();
                // setTimeout(() => {
                //   this.senderSends();
                // }, 500);
            });
        }
        // let newData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
        // newData.set({
        //   type:this.data.type,
        //   user:this.data.username,
        //   message:this.data.message,
        //   sendDate:Date()
        // });
    };
    ChatRoomPage.prototype.senderSends = function () {
        var _this = this;
        this.loader = true;
        setTimeout(function () {
            // this.msgList.push({
            //   userId: this.User,
            //   userName: this.User,
            //   userAvatar: "../../assets/chat/chat5.jpg",
            //   time: "12:01",
            //   message: "Sorry, didn't get what you said. Can you repeat that please"
            // });
            _this.loader = false;
            _this.scrollDown();
        }, 2000);
        this.scrollDown();
    };
    ChatRoomPage.prototype.scrollDown = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(50);
        }, 50);
    };
    ChatRoomPage.prototype.exitChat = function () {
        var exitData = Firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        exitData.set({
            type: 'exit',
            user: this.data.username,
            message: this.data.username + ' has exited this room.',
            sendDate: Date()
        });
        this.offStatus = true;
    };
    ChatRoomPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], ChatRoomPage.prototype, "content", void 0);
    ChatRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! raw-loader!./chatroom.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chatroom/chatroom.page.html"),
            styles: [__webpack_require__(/*! ./chatroom.page.scss */ "./src/app/pages/chatroom/chatroom.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]])
    ], ChatRoomPage);
    return ChatRoomPage;
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
//# sourceMappingURL=pages-chatroom-chatroom-module-es5.js.map