(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-audioplayer-audioplayer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/audioplayer/audioplayer.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/audioplayer/audioplayer.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{ courseCode }} - MP3\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>{{($eventItem | async)?.name}}</ion-title> -->\n    \n    <ion-buttons slot=\"end\">\n      <ion-button style=\"font-size: 12px;\" (click)=\"actionFavoriteCourses(actionFavType)\" icon-end>\n        <ion-icon name=\"{{ actionFavType === 'Remov' ? 'remove-circle-outline' : 'add-circle-outline' }}\" color=\"light\"></ion-icon>\n        <span style=\"padding-right: 5px; padding-left: 5px;\">Favorite</span>\n        <!-- <ion-icon name=\"star\" color=\"light\"></ion-icon> -->\n      </ion-button>\n      <ion-button style=\"font-size: 12px;\" (click)=\"downloadMedia()\" icon-end>\n        <span style=\"padding-right: 5px;\">Update</span>\n        <ion-icon name=\"cloud-download\" color=\"light\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button style=\"font-size: 12px;\" (click)=\"verifyMediaDownload()\" icon-end>\n        <span style=\"padding-right: 5px;\">Daonload All</span>\n        <ion-icon name=\"cloud-download\" color=\"light\" style=\"padding-right: 5px; padding-left: 5px;\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <div class=\"fixedContent\">\n      <ion-card-content class=\"ion-align-items-center rowSection\" style=\"background-color: black; position: relative;top:0;left:0;width:100%;height:100%;\">\n        <ion-thumbnail style=\"top:0;left:0;width:100%;height:160px;\" [ngStyle]=\"{'background':'url('+ image +')'}\"></ion-thumbnail>\n        <audio type=\"audio/mpeg\" style=\"top:0;left:0;width:100%;\" controls controlsList=\"nodownload\">\n          <source src=\"\" type=\"audio/mp3\">\n        </audio>\n      </ion-card-content>\n    </div>\n  </ion-card>\n\n  <div class=\"padding_Top\">\n    <div class=\"fixedContent\">\n      <!-- <ion-text color=\"light\">{{ courseCode }}</ion-text>\n      <p text-uppercase color=\"light\" class=\"pUser microsoft marquee11 \">{{ courseTitle }}</p> -->\n      \n      <h3 style=\"font-size: 28px; color: #f4f5f8 !important; margin-bottom: 0px;\" color=\"light\">{{ courseCode }}</h3>\n      <h4 style=\"font-size: 18px; color: #f4f5f8 !important;\" color=\"light\">{{ courseTitle }}</h4>\n\n      <p style=\"font-size: 14px; padding-left: 20px; padding-right: 20px; text-align: center; line-height: 1.5em;\" color=\"light\" class=\"pUser microsoft\">Tap the play button to start listening to <strong>{{ courseTitle }}</strong> audio course. Click the <strong>UPDATE</strong> button at the top right corner to update this course</p>\n    </div>\n    <!-- <ion-range min=\"0\" max=\"{{duration}}\" [(ngModel)]=\"position\" color=\"light\">\n    </ion-range>\n    <div class=\"rangePlaytime\">\n      <ion-label class=\"startTime\" color=\"light\">{{ display_position }}</ion-label>\n      <ion-label class=\"endTime\" color=\"light\" *ngIf=\"duration == -1\">--:--</ion-label>\n      <ion-label class=\"endTime\" color=\"light\" *ngIf=\"duration != -1\">{{ display_duration }}</ion-label>\n    </div> -->\n  </div>\n\n  <!-- <ion-grid>\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-col>\n        <div class=\"flexRow\">\n          <div>\n            <ion-button fill=\"clear\" color=\"light\">\n              <ion-icon name=\"heart-empty\" class=\"Iconsize_For_Rev\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"controlSeconds('back')\">\n              <ion-icon name=\"rewind\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button class=\"play_pause_btn\" (click)=\"play()\" color=\"light\" *ngIf=\"!is_playing\" justify-content-center\n              [disabled]=\"!is_ready\" align-items-center>\n              <ion-icon name=\"play\" class=\"darkColor\"></ion-icon>\n            </ion-button>\n\n            <ion-button class=\"play_pause_btn\" (click)=\"pause()\" color=\"light\" *ngIf=\"is_playing\" justify-content-center\n              [disabled]=\"!is_ready\" align-items-center>\n              <ion-icon name=\"pause\" class=\"darkColor\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"controlSeconds('forward')\">\n              <ion-icon name=\"fastforward\" class=\"Iconsize_For_Rev\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button fill=\"clear\" color=\"light\">\n              <ion-icon name=\"remove-circle-outline\" class=\"Iconsize_For_Rev\"></ion-icon>\n            </ion-button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\" class=\"transparent_Item\">\n          <ion-button slot=\"start\" fill=\"clear\" color=\"light\">\n            <ion-icon name=\"flash\" expand=\"icon-only\" class=\"Iconsize_For_Rev\"></ion-icon>\n          </ion-button>\n          <ion-button slot=\"end\" fill=\"clear\" color=\"light\">\n            <ion-icon name=\"share\" expand=\"icon-only\" class=\"Iconsize_For_Rev\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"dark\">\n    <ion-button color=\"light\" fill=\"clear\" expand=\"full\" (click)=\"enterChatRooms()\">{{ createRoomCaption }}</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/audioplayer/audioplayer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/audioplayer/audioplayer.module.ts ***!
  \*********************************************************/
/*! exports provided: AudioPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerPageModule", function() { return AudioPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _audioplayer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audioplayer.page */ "./src/app/pages/audioplayer/audioplayer.page.ts");

/**
 * Ionic 4 Spotify app starter - Ion Spotify (https://store.enappd.com/product/ionic-4-spotify-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */






const routes = [
    {
        path: '',
        component: _audioplayer_page__WEBPACK_IMPORTED_MODULE_6__["AudioPlayerPage"]
    }
];
let AudioPlayerPageModule = class AudioPlayerPageModule {
};
AudioPlayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_audioplayer_page__WEBPACK_IMPORTED_MODULE_6__["AudioPlayerPage"]]
    })
], AudioPlayerPageModule);



/***/ }),

/***/ "./src/app/pages/audioplayer/audioplayer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/audioplayer/audioplayer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n *Ionic 4 Spotify app starter - Ion Spotify (https://store.enappd.com/product/ionic-4-spotify-app-starter)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source tree.\n */\nion-content {\n  --background: linear-gradient(to top, #060606, #011a01);\n}\nion-toolbar {\n  --background: #011a01;\n}\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  -webkit-animation: marquee 50s linear infinite;\n          animation: marquee 50s linear infinite;\n}\nion-title {\n  font-size: 11px;\n}\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold;\n}\n.marquee:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n/* Make it move */\n@-webkit-keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n@keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n.fixedContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.fixedContent ion-text {\n  font-size: 22px;\n  font-weight: bold;\n}\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 10px;\n}\n.fixedContent ion-thumbnail {\n  width: 280px;\n  height: 280px;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n.header-md:after {\n  bottom: 0px;\n}\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1), background-color 15ms linear, color 15ms linear;\n}\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px;\n}\nion-range {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n.rangePlaytime {\n  display: flex;\n  justify-content: space-between;\n}\n.rangePlaytime .startTime {\n  padding-left: 9px;\n}\n.rangePlaytime .endTime {\n  padding-right: 15px;\n}\n.Iconsize_For_Rev {\n  font-size: 23px;\n}\n.flexRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.transparent_Item {\n  --background: transparent;\n}\n.padding_Top {\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXVkaW9wbGF5ZXIvYXVkaW9wbGF5ZXIucGFnZS5zY3NzIiwiL1VzZXJzL2NiY2dlZHUvRGVza3RvcC91bXl1L3NyYy9hcHAvcGFnZXMvYXVkaW9wbGF5ZXIvYXVkaW9wbGF5ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7OztFQUFBO0FBUUE7RUFDRSx1REFBQTtBREVGO0FDQ0E7RUFDRSxxQkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURFRjtBQ0NBO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtBREVGO0FDQ0EsaUJBQUE7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RURFRjtFQ0NBO0lBQ0UsbUJBQUE7RURDRjtBQUNGO0FDUkE7RUFDRTtJQUNFLGlCQUFBO0VERUY7RUNDQTtJQUNFLG1CQUFBO0VEQ0Y7QUFDRjtBQ0VBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBREFGO0FDRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURBSjtBQ0dFO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FEREo7QUNLRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0dBQUE7RUFDQSwwR0FBQTtBREhKO0FDT0E7RUFDRSxXQUFBO0FESkY7QUNPQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQkFBQTtFQUNBLGlIQUFBO0VBQ0EsMEdBQUE7QURMRjtBQ1FBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURMRjtBQ1FBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FETEY7QUNRQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBRExGO0FDT0U7RUFDRSxpQkFBQTtBRExKO0FDUUU7RUFDRSxtQkFBQTtBRE5KO0FDVUE7RUFDRSxlQUFBO0FEUEY7QUNVQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QURQRjtBQ1VBO0VBQ0UseUJBQUE7QURQRjtBQ1VBO0VBQ0UsaUJBQUE7QURQRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1ZGlvcGxheWVyL2F1ZGlvcGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICpJb25pYyA0IFNwb3RpZnkgYXBwIHN0YXJ0ZXIgLSBJb24gU3BvdGlmeSAoaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1zcG90aWZ5LWFwcC1zdGFydGVyKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICMwMTFhMDEpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAxMWEwMTtcbn1cblxuLm1hcnF1ZWUge1xuICB3aWR0aDogNDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbmltYXRpb246IG1hcnF1ZWUgNTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5pb24tdGl0bGUudGV4dFN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hcnF1ZWU6aG92ZXIge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuXG4vKiBNYWtlIGl0IG1vdmUgKi9cbkBrZXlmcmFtZXMgbWFycXVlZSB7XG4gIDAlIHtcbiAgICB0ZXh0LWluZGVudDogMzBlbTtcbiAgfVxuICAxMDAlIHtcbiAgICB0ZXh0LWluZGVudDogLTEwNWVtO1xuICB9XG59XG4uZml4ZWRDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZml4ZWRDb250ZW50IGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5maXhlZENvbnRlbnQgLnBVc2VyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5maXhlZENvbnRlbnQgaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAyODBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNjYpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYm90dG9tOiAwcHg7XG59XG5cbmlvbi1idXR0b24ucGxheV9wYXVzZV9idG4ge1xuICB3aWR0aDogNjVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAtLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xufVxuXG4uZGFya0NvbG9yIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuaW9uLXJhbmdlIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucmFuZ2VQbGF5dGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yYW5nZVBsYXl0aW1lIC5zdGFydFRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDlweDtcbn1cbi5yYW5nZVBsYXl0aW1lIC5lbmRUaW1lIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLkljb25zaXplX0Zvcl9SZXYge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5mbGV4Um93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udHJhbnNwYXJlbnRfSXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYWRkaW5nX1RvcCB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufSIsIi8qKlxyXG4gKklvbmljIDQgU3BvdGlmeSBhcHAgc3RhcnRlciAtIElvbiBTcG90aWZ5IChodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LXNwb3RpZnktYXBwLXN0YXJ0ZXIpXHJcbiAqXHJcbiAqIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICMwMTFhMDEpO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDExYTAxO1xyXG59XHJcblxyXG4ubWFycXVlZSB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGFuaW1hdGlvbjogbWFycXVlZSA1MHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuaW9uLXRpdGxlLnRleHRTdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuXHJcbi5tYXJxdWVlOmhvdmVyIHtcclxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkXHJcbn1cclxuXHJcbi8qIE1ha2UgaXQgbW92ZSAqL1xyXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xyXG4gIDAlIHtcclxuICAgIHRleHQtaW5kZW50OiAzMGVtXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRleHQtaW5kZW50OiAtMTA1ZW1cclxuICB9XHJcbn1cclxuXHJcbi5maXhlZENvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIGlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnBVc2VyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNjYpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNjUpO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLW1kOmFmdGVyIHtcclxuICBib3R0b206IDBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5wbGF5X3BhdXNlX2J0biB7XHJcbiAgd2lkdGg6IDY1cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcclxuICAvLyBmb250LXNpemU6IDIuM2VtICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLS1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgLS10cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcclxufVxyXG5cclxuLmRhcmtDb2xvciB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuXHJcbmlvbi1yYW5nZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5yYW5nZVBsYXl0aW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLnN0YXJ0VGltZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICB9XHJcblxyXG4gIC5lbmRUaW1lIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uSWNvbnNpemVfRm9yX1JldiB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcblxyXG4uZmxleFJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnRfSXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZGRpbmdfVG9wIHtcclxuICBwYWRkaW5nLXRvcDogMjRweDtcclxufVxyXG5cclxuLy8gLnRvb2xiYXItYmFja2dyb3VuZC5zYy1pb24tdG9vbGJhci1tZCxcclxuLy8gLnNjLWlvbi10b29sYmFyLW1kLXMgPiBpb24tcHJvZ3Jlc3MtYmFyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAudG9vbGJhci1jb250YWluZXIuc2MtaW9uLXRvb2xiYXItbWQge1xyXG4vLyAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1zdGFydCk7XHJcbi8vICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1lbmQpO1xyXG4vLyAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLXRvcCk7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctYm90dG9tKTtcclxuLy8gICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KTtcclxuLy8gICBjb250YWluOiBjb250ZW50O1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgei1pbmRleDogMTA7XHJcbi8vICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/audioplayer/audioplayer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/audioplayer/audioplayer.page.ts ***!
  \*******************************************************/
/*! exports provided: AudioPlayerPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerPage", function() { return AudioPlayerPage; });
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
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");

/**
 * Ionic 4 Spotify app starter - Ion Spotify (https://store.enappd.com/product/ionic-4-spotify-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */










let AudioPlayerPage = class AudioPlayerPage {
    constructor(loadingCtrl, platform, fileTransfer, nativeStorage, activatedRoute, toastCtrl, file, router, alertController) {
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.fileTransfer = fileTransfer;
        this.nativeStorage = nativeStorage;
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.router = router;
        this.alertController = alertController;
        this.image = 'assets/imgs/album_art2.gif';
        this.dirBase = "/.UMYU/.data/.materials/";
        this.downloadURL = "http://umyu.easystudy.com.ng/materials/";
        this.isFound = false;
        this.courseLists = [];
        this.actionFavType = "Add";
        this.count = 0;
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
        if (this.platform.is('android')) {
            this.systemBase = this.file.externalRootDirectory + "/Documents";
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
        this.fileNameTemp = "audiofiletemp" + this.courseID + ".mp3";
        this.fileName = "audiofile" + this.courseID + ".mp3";
        this.dirName = this.systemBase + this.dirBase + ".audios/";
        this.downloadURL = this.downloadURL + "audio/" + this.fileName;
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
            // This is where the media file will be stored, you can change it as you like
            this.file.checkFile(this.dirName, this.fileName)
                .then(() => {
                loading.dismiss();
                // Play downloaded audio
                this.playMediaFile();
            })
                .catch(() => {
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
                message: 'Downloading 1 of 1 file, please wait...'
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
    playMediaFile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Get media URL and convert to an accessible path
            let loading = yield this.loadingCtrl.create({
                message: 'Reading file, please wait...'
            });
            yield loading.present();
            return yield this.file.readAsText(this.dirName, this.fileName)
                .then((fileContent) => {
                this.decryptFileContent(fileContent)
                    .then((fileContent) => {
                    var audio = document.getElementsByTagName('audio')[0];
                    var sources = audio.getElementsByTagName('source');
                    sources[0].src = fileContent;
                    audio.load();
                    loading.dismiss();
                })
                    .catch(() => { });
            })
                .catch((error) => {
                loading.dismiss();
                this.presentToast("Error Reading File! " + JSON.stringify(error));
            });
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
                                    this.playMediaFile();
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
            // let blob = this.convertBase64ToBlob(originalBase64, contentType)
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
            fileContent = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();
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
            let fileContent = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].decrypt(encryptedFile, ":<>?{}|[]\!@#$%^&*()_+").toString(crypto_js__WEBPACK_IMPORTED_MODULE_8__["enc"].Utf8);
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
            let currentCourse = new src_app_models__WEBPACK_IMPORTED_MODULE_9__["Course"];
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
    verifyMediaDownload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'This action will download all course contents in MP3 format to your drive, this action may take some time depending on your internet download speed. Proceed?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { }
                    }, {
                        text: 'Okay',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            yield this.prepareMediaDownload();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    prepareMediaDownload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.courses = JSON.parse(localStorage.getItem('course'));
            this.totalFiles = this.courses.length;
            this.dirName = this.systemBase + this.dirBase + ".audios/";
            // for (let i = 0; i < this.totalFiles; i++) {
            for (const course of this.courses) {
                this.fileNameTemp = "audiofiletemp" + course.id + ".mp3";
                this.fileName = "audiofile" + course.id + ".mp3";
                this.downloadURL = "http://umyu.easystudy.com.ng/materials/audio/" + this.fileName;
                // await is converting Promise<number> into number
                const count = yield this.startMediaDownload(course.id);
                // console.log(count);
            }
            // Send success notification to user
            this.presentToast("Process completed!");
        });
    }
    startMediaDownload(count) {
        let isDownloaded = false;
        // Initialize transfer handle
        const transfer = this.fileTransfer.create();
        return new Promise(resolve => {
            this.loadingCtrl.create({
                message: "Processing " + count + " of " + this.totalFiles + " file(s), please wait..."
            }).then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => { });
                setTimeout(() => {
                    if (isDownloaded === false) {
                        // Abort active transfer:
                        transfer.abort();
                        // Remove incomplete downloaded file
                        this.file.removeFile(this.dirName, '~' + this.fileNameTemp)
                            .then(() => {
                            this.loadingCtrl.dismiss();
                            resolve(count);
                        })
                            .catch((error) => {
                            this.loadingCtrl.dismiss();
                            this.presentToast("Error removing file: " + '~' + this.fileNameTemp + " Error: " + JSON.stringify(error));
                        });
                        // Send failure notification to user
                        this.presentToast("File download timed out for file " + this.fileNameTemp);
                    }
                }, 60000);
            });
            // transfer.onProgress((progressEvent) => {
            //   var counter = Math.floor(progressEvent.loaded / progressEvent.total * 100);
            // });
            // Verify if selected file for download already exist on the device
            this.file.checkFile(this.dirName, this.fileName)
                .then(() => {
                isDownloaded = true;
                this.loadingCtrl.dismiss();
                resolve(count);
            })
                .catch(() => {
                // Start the dowload for the selected file
                transfer.download(this.downloadURL, this.dirName + this.fileNameTemp)
                    .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    isDownloaded = true;
                    // this.loadingCtrl.dismiss(); // Don't delete yet
                    // Process downloaded media
                    // const count1:number = await this.processMedia(count);
                    // Start reading the selected file content for encryption
                    this.file.readAsDataURL(this.dirName, this.fileNameTemp)
                        .then((fileContent) => {
                        const encFileContent = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();
                        this.file.writeFile(this.dirName, this.fileName, encFileContent, { replace: true, append: false })
                            .then(() => {
                            this.file.removeFile(this.dirName, this.fileNameTemp)
                                .then(() => {
                                this.loadingCtrl.dismiss();
                                resolve(count);
                            })
                                .catch((error) => {
                                this.loadingCtrl.dismiss();
                                this.presentToast("Error removing file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
                            });
                        })
                            .catch((error) => {
                            this.loadingCtrl.dismiss();
                            this.presentToast("Error writing file: " + this.fileName + " Error: " + JSON.stringify(error));
                        });
                    })
                        .catch((error) => {
                        this.loadingCtrl.dismiss();
                        this.presentToast("Error reading file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
                    });
                }))
                    .catch((error) => {
                    isDownloaded = false;
                    this.loadingCtrl.dismiss();
                    // Send failure notification to user
                    this.presentToast("File download failed for file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
                    resolve(count);
                });
            });
        });
    }
};
AudioPlayerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
AudioPlayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audioplayer',
        template: __webpack_require__(/*! raw-loader!./audioplayer.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/audioplayer/audioplayer.page.html"),
        styles: [__webpack_require__(/*! ./audioplayer.page.scss */ "./src/app/pages/audioplayer/audioplayer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], AudioPlayerPage);

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
//# sourceMappingURL=pages-audioplayer-audioplayer-module-es2015.js.map