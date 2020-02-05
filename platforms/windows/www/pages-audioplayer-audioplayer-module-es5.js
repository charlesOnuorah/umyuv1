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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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






var routes = [
    {
        path: '',
        component: _audioplayer_page__WEBPACK_IMPORTED_MODULE_6__["AudioPlayerPage"]
    }
];
var AudioPlayerPageModule = /** @class */ (function () {
    function AudioPlayerPageModule() {
    }
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
    return AudioPlayerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/audioplayer/audioplayer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/audioplayer/audioplayer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n *Ionic 4 Spotify app starter - Ion Spotify (https://store.enappd.com/product/ionic-4-spotify-app-starter)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source tree.\n */\nion-content {\n  --background: linear-gradient(to top, #060606, #011a01);\n}\nion-toolbar {\n  --background: #011a01;\n}\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  -webkit-animation: marquee 50s linear infinite;\n          animation: marquee 50s linear infinite;\n}\nion-title {\n  font-size: 11px;\n}\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold;\n}\n.marquee:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n/* Make it move */\n@-webkit-keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n@keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n.fixedContent {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.fixedContent ion-text {\n  font-size: 22px;\n  font-weight: bold;\n}\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 10px;\n}\n.fixedContent ion-thumbnail {\n  width: 280px;\n  height: 280px;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  -webkit-transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n.header-md:after {\n  bottom: 0px;\n}\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1), background-color 15ms linear, color 15ms linear;\n}\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px;\n}\nion-range {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n.rangePlaytime {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.rangePlaytime .startTime {\n  padding-left: 9px;\n}\n.rangePlaytime .endTime {\n  padding-right: 15px;\n}\n.Iconsize_For_Rev {\n  font-size: 23px;\n}\n.flexRow {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.transparent_Item {\n  --background: transparent;\n}\n.padding_Top {\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXVkaW9wbGF5ZXIvYXVkaW9wbGF5ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdWRpb3BsYXllci9DOlxcVU1ZVUFwcC9zcmNcXGFwcFxccGFnZXNcXGF1ZGlvcGxheWVyXFxhdWRpb3BsYXllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7O0VBQUE7QUFRQTtFQUNFLHVEQUFBO0FERUY7QUNDQTtFQUNFLHFCQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBREVGO0FDQ0E7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FERUY7QUNDQSxpQkFBQTtBQUNBO0VBQ0U7SUFDRSxpQkFBQTtFREVGO0VDQ0E7SUFDRSxtQkFBQTtFRENGO0FBQ0Y7QUNSQTtFQUNFO0lBQ0UsaUJBQUE7RURFRjtFQ0NBO0lBQ0UsbUJBQUE7RURDRjtBQUNGO0FDRUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBREFGO0FDRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURBSjtBQ0dFO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FEREo7QUNLRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0dBQUE7RUFDQSxrSEFBQTtFQUFBLDBHQUFBO0FESEo7QUNPQTtFQUNFLFdBQUE7QURKRjtBQ09BO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUVBLG9CQUFBO0VBQ0EsaUhBQUE7RUFDQSwwR0FBQTtBRExGO0FDUUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRExGO0FDUUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QURMRjtBQ1FBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBRExGO0FDT0U7RUFDRSxpQkFBQTtBRExKO0FDUUU7RUFDRSxtQkFBQTtBRE5KO0FDVUE7RUFDRSxlQUFBO0FEUEY7QUNVQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FEUEY7QUNVQTtFQUNFLHlCQUFBO0FEUEY7QUNVQTtFQUNFLGlCQUFBO0FEUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdWRpb3BsYXllci9hdWRpb3BsYXllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqSW9uaWMgNCBTcG90aWZ5IGFwcCBzdGFydGVyIC0gSW9uIFNwb3RpZnkgKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtc3BvdGlmeS1hcHAtc3RhcnRlcilcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDYwNjA2LCAjMDExYTAxKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMTFhMDE7XG59XG5cbi5tYXJxdWVlIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYW5pbWF0aW9uOiBtYXJxdWVlIDUwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuaW9uLXRpdGxlLnRleHRTdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXJxdWVlOmhvdmVyIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cblxuLyogTWFrZSBpdCBtb3ZlICovXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xuICAwJSB7XG4gICAgdGV4dC1pbmRlbnQ6IDMwZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgdGV4dC1pbmRlbnQ6IC0xMDVlbTtcbiAgfVxufVxuLmZpeGVkQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZpeGVkQ29udGVudCBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZml4ZWRDb250ZW50IC5wVXNlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uZml4ZWRDb250ZW50IGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMjgwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjY2KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24tYnV0dG9uLnBsYXlfcGF1c2VfYnRuIHtcbiAgd2lkdGg6IDY1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLS10cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLmRhcmtDb2xvciB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnJhbmdlUGxheXRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucmFuZ2VQbGF5dGltZSAuc3RhcnRUaW1lIHtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG59XG4ucmFuZ2VQbGF5dGltZSAuZW5kVGltZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5JY29uc2l6ZV9Gb3JfUmV2IHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uZmxleFJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRyYW5zcGFyZW50X0l0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFkZGluZ19Ub3Age1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn0iLCIvKipcclxuICpJb25pYyA0IFNwb3RpZnkgYXBwIHN0YXJ0ZXIgLSBJb24gU3BvdGlmeSAoaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1zcG90aWZ5LWFwcC1zdGFydGVyKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXHJcbiAqL1xyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDYwNjA2LCAjMDExYTAxKTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAxMWEwMTtcclxufVxyXG5cclxuLm1hcnF1ZWUge1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBhbmltYXRpb246IG1hcnF1ZWUgNTBzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbmlvbi10aXRsZS50ZXh0U3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG4ubWFycXVlZTpob3ZlciB7XHJcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZFxyXG59XHJcblxyXG4vKiBNYWtlIGl0IG1vdmUgKi9cclxuQGtleWZyYW1lcyBtYXJxdWVlIHtcclxuICAwJSB7XHJcbiAgICB0ZXh0LWluZGVudDogMzBlbVxyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0ZXh0LWluZGVudDogLTEwNWVtXHJcbiAgfVxyXG59XHJcblxyXG4uZml4ZWRDb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvLyBwYWRkaW5nLXRvcDogMjRweDtcclxuICBpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5wVXNlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIC8vIG1hcmdpbjogMTJweDtcclxuICB9XHJcblxyXG4gIGlvbi10aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjY2KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1tZDphZnRlciB7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ucGxheV9wYXVzZV9idG4ge1xyXG4gIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gZm9udC1zaXplOiAyLjNlbSAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC0tYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIC0tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5kYXJrQ29sb3Ige1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcblxyXG5pb24tcmFuZ2Uge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4ucmFuZ2VQbGF5dGltZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5zdGFydFRpbWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5cHg7XHJcbiAgfVxyXG5cclxuICAuZW5kVGltZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLkljb25zaXplX0Zvcl9SZXYge1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuLmZsZXhSb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50X0l0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nX1RvcCB7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbn1cclxuXHJcbi8vIC50b29sYmFyLWJhY2tncm91bmQuc2MtaW9uLXRvb2xiYXItbWQsXHJcbi8vIC5zYy1pb24tdG9vbGJhci1tZC1zID4gaW9uLXByb2dyZXNzLWJhciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRvb2xiYXItY29udGFpbmVyLnNjLWlvbi10b29sYmFyLW1kIHtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctc3RhcnQpO1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZW5kKTtcclxuLy8gICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy10b3ApO1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLWJvdHRvbSk7XHJcbi8vICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuLy8gICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCk7XHJcbi8vICAgY29udGFpbjogY29udGVudDtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgIHotaW5kZXg6IDEwO1xyXG4vLyAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/index.js");
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










var AudioPlayerPage = /** @class */ (function () {
    function AudioPlayerPage(loadingCtrl, platform, fileTransfer, nativeStorage, activatedRoute, toastCtrl, file, router, alertController) {
        var _this = this;
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
            .then(function (selectedCourse) {
            _this.courseCode = selectedCourse.Code;
            _this.courseTitle = selectedCourse.Title;
            _this.ref.on('value', function (resp) {
                _this.rooms = [];
                _this.rooms = snapshotToArray(resp);
                _this.createRoomCaption = "Create Chat Room";
                _this.actionType = 1;
                if (_this.rooms !== undefined && _this.rooms.length !== 0) {
                    _this.rooms.forEach(function (room) {
                        if (room.roomname === _this.courseCode) {
                            _this.createRoomCaption = "Select Chat Room";
                            _this.actionType = 2;
                        }
                    });
                }
            });
        }, function () { });
    }
    AudioPlayerPage.prototype.ngOnInit = function () {
        var _this = this;
        // Get the ID that was passed with the URL    
        this.activatedRoute.params.subscribe(function (params) {
            _this.courseID = +params['courseid'];
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
        this.platform.ready().then(function () {
            _this.verifyMedia().then(function () { });
        });
    };
    AudioPlayerPage.prototype.verifyMedia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Checking file on local storage, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        // This is where the media file will be stored, you can change it as you like
                        this.file.checkFile(this.dirName, this.fileName)
                            .then(function () {
                            loading.dismiss();
                            // Play downloaded audio
                            _this.playMediaFile();
                        })
                            .catch(function () {
                            loading.dismiss();
                            _this.downloadMedia();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioPlayerPage.prototype.downloadMedia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isDownloaded, transfer;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isDownloaded = false;
                        transfer = this.fileTransfer.create();
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Downloading 1 of 1 file, please wait...'
                            }).then(function (res) {
                                res.present();
                                res.onDidDismiss().then(function (dis) { });
                                setTimeout(function () {
                                    if (isDownloaded === false) {
                                        // Abort active transfer:
                                        transfer.abort();
                                        // Remove incomplete downloaded file
                                        _this.removeTempFile('~' + _this.fileNameTemp).then(function () { });
                                        // Dismiss loading controller
                                        _this.loadingCtrl.dismiss();
                                        // Send failure notification to user
                                        _this.presentToast("File download timedout! Please retry again");
                                    }
                                }, 60000);
                            })];
                    case 1:
                        _a.sent();
                        transfer.onProgress(function (progressEvent) {
                            var counter = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                        });
                        // Downloading File to Device
                        transfer.download(this.downloadURL, this.dirName + this.fileNameTemp)
                            .then(function () {
                            isDownloaded = true;
                            _this.loadingCtrl.dismiss();
                            // Send success notification to user
                            _this.presentToast("Download completed!");
                            // Process downloaded media
                            _this.processMedia().then(function () { }).catch(function () { });
                        })
                            .catch(function () {
                            isDownloaded = false;
                            _this.loadingCtrl.dismiss();
                            // Send failure notification to user
                            _this.presentToast("File download failed!");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioPlayerPage.prototype.playMediaFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Reading file, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.file.readAsText(this.dirName, this.fileName)
                                .then(function (fileContent) {
                                _this.decryptFileContent(fileContent)
                                    .then(function (fileContent) {
                                    var audio = document.getElementsByTagName('audio')[0];
                                    var sources = audio.getElementsByTagName('source');
                                    sources[0].src = fileContent;
                                    audio.load();
                                    loading.dismiss();
                                })
                                    .catch(function () { });
                            })
                                .catch(function (error) {
                                loading.dismiss();
                                _this.presentToast("Error Reading File! " + JSON.stringify(error));
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AudioPlayerPage.prototype.processMedia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readFileContent(this.dirName, this.fileNameTemp)
                            .then(function (fileContent) {
                            if (fileContent.length !== 0) {
                                _this.encryptFileContent(fileContent)
                                    .then(function (encryptedFile) {
                                    if (encryptedFile.length !== 0) {
                                        _this.writeFileContent(_this.dirName, _this.fileName, encryptedFile)
                                            .then(function () {
                                            _this.removeTempFile(_this.fileNameTemp).then(function () {
                                                _this.playMediaFile();
                                            });
                                        });
                                    }
                                });
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioPlayerPage.prototype.readFileContent = function (dirName, fileName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var emptyString, isRead;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        emptyString = "";
                        isRead = false;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Reading file, please wait...'
                            }).then(function (res) {
                                res.present();
                                res.onDidDismiss().then(function (dis) { });
                                setTimeout(function () {
                                    if (isRead === false) {
                                        // Dismiss loading controller
                                        _this.loadingCtrl.dismiss();
                                        // Send failure notification to user
                                        _this.presentToast("File retrieval timedout! Please retry again");
                                    }
                                }, 30000);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.file.readAsDataURL(dirName, fileName)
                                .then(function (fileContent) {
                                isRead = true;
                                _this.loadingCtrl.dismiss();
                                return fileContent;
                            })
                                .catch(function (error) {
                                isRead = false;
                                _this.loadingCtrl.dismiss();
                                _this.presentToast("Error Reading File! " + JSON.stringify(error));
                                return emptyString;
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AudioPlayerPage.prototype.writeFileContent = function (dirName, fileName, encryptedFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Writing file, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.file.writeFile(dirName, fileName, encryptedFile, { replace: true, append: false })
                                .then(function () {
                                loading.dismiss();
                            })
                                .catch(function (error) {
                                loading.dismiss();
                                _this.presentToast("Error Writing File! " + JSON.stringify(error));
                            })];
                    case 3: 
                    // let blob = this.convertBase64ToBlob(originalBase64, contentType)
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AudioPlayerPage.prototype.encryptFileContent = function (fileContent) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Encrypting file, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        fileContent = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();
                        loading.dismiss();
                        return [2 /*return*/, fileContent];
                }
            });
        });
    };
    AudioPlayerPage.prototype.decryptFileContent = function (encryptedFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, fileContent;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Decrypting file, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        fileContent = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].decrypt(encryptedFile, ":<>?{}|[]\!@#$%^&*()_+").toString(crypto_js__WEBPACK_IMPORTED_MODULE_8__["enc"].Utf8);
                        loading.dismiss();
                        return [2 /*return*/, fileContent];
                }
            });
        });
    };
    AudioPlayerPage.prototype.removeTempFile = function (fileName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Removing file, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.file.removeFile(this.dirName, fileName)
                                .then(function () {
                                loading.dismiss();
                            })
                                .catch(function () {
                                loading.dismiss();
                                _this.presentToast("Error Removing File or Temp File No Longer Exist!");
                            })];
                }
            });
        });
    };
    AudioPlayerPage.prototype.presentToast = function (msg) {
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
    AudioPlayerPage.prototype.presentAlert = function (header, message) {
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
    AudioPlayerPage.prototype.enterChatRooms = function () {
        if (this.actionType == 1) {
            // Navigate to create chatroom if room does not exist
            this.router.navigate(['createroom']);
        }
        else {
            // Navigate to chatrooms if room does exist
            this.router.navigate(['chatrooms']);
        }
    };
    AudioPlayerPage.prototype.enterChatRoom = function () {
        // Navigate to chatrooms if room does exist
        this.router.navigate(['chatroom']);
    };
    AudioPlayerPage.prototype.ngOnDestroy = function () { };
    AudioPlayerPage.prototype.getFavoriteCourses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Get all favourite courses from the storage
                    return [4 /*yield*/, this.nativeStorage.getItem('favoritecourse')
                            .then(function (courses) {
                            if (courses.length > 0) {
                                _this.courses = courses;
                                _this.courses.forEach(function (course) {
                                    if (course.id === _this.courseID) {
                                        _this.actionFavType = "Remov";
                                    }
                                });
                            }
                        })
                            .catch(function () {
                            _this.presentToast("Course favorite list is empty!");
                        })];
                    case 1:
                        // Get all favourite courses from the storage
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioPlayerPage.prototype.actionFavoriteCourses = function (actionType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, currentCourse;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: actionType + 'ing course to favorite, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        currentCourse = new src_app_models__WEBPACK_IMPORTED_MODULE_9__["Course"];
                        currentCourse.id = this.courseID;
                        currentCourse.code = this.courseCode;
                        currentCourse.title = this.courseTitle;
                        this.courseLists = [];
                        if (this.courses !== undefined) {
                            this.courses.forEach(function (course) {
                                if (course.id !== _this.courseID) {
                                    _this.courseLists.push(course);
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
                        return [4 /*yield*/, this.nativeStorage.setItem('favoritecourse', this.courseLists)
                                .then(function () {
                                _this.presentAlert("Info", "Course " + actionType + 'ed' + " Successfully!");
                                _this.getFavoriteCourses();
                            })
                                .catch(function () {
                                _this.presentToast("Error adding course to favorite list");
                            })];
                    case 3:
                        _a.sent();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioPlayerPage.prototype.verifyMediaDownload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'This action will download all course contents in MP3 format to your drive, this action may take some time depending on your internet download speed. Proceed?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () { }
                                }, {
                                    text: 'Okay',
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.prepareMediaDownload()];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
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
    AudioPlayerPage.prototype.prepareMediaDownload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, _a, course, count;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.courses = JSON.parse(localStorage.getItem('course'));
                        this.totalFiles = this.courses.length;
                        this.dirName = this.systemBase + this.dirBase + ".audios/";
                        _i = 0, _a = this.courses;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        course = _a[_i];
                        this.fileNameTemp = "audiofiletemp" + course.id + ".mp3";
                        this.fileName = "audiofile" + course.id + ".mp3";
                        this.downloadURL = "http://umyu.easystudy.com.ng/materials/audio/" + this.fileName;
                        return [4 /*yield*/, this.startMediaDownload(course.id)];
                    case 2:
                        count = _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        // Send success notification to user
                        this.presentToast("Process completed!");
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioPlayerPage.prototype.startMediaDownload = function (count) {
        var _this = this;
        var isDownloaded = false;
        // Initialize transfer handle
        var transfer = this.fileTransfer.create();
        return new Promise(function (resolve) {
            _this.loadingCtrl.create({
                message: "Processing " + count + " of " + _this.totalFiles + " file(s), please wait..."
            }).then(function (res) {
                res.present();
                res.onDidDismiss().then(function (dis) { });
                setTimeout(function () {
                    if (isDownloaded === false) {
                        // Abort active transfer:
                        transfer.abort();
                        // Remove incomplete downloaded file
                        _this.file.removeFile(_this.dirName, '~' + _this.fileNameTemp)
                            .then(function () {
                            _this.loadingCtrl.dismiss();
                            resolve(count);
                        })
                            .catch(function (error) {
                            _this.loadingCtrl.dismiss();
                            _this.presentToast("Error removing file: " + '~' + _this.fileNameTemp + " Error: " + JSON.stringify(error));
                        });
                        // Send failure notification to user
                        _this.presentToast("File download timed out for file " + _this.fileNameTemp);
                    }
                }, 60000);
            });
            // transfer.onProgress((progressEvent) => {
            //   var counter = Math.floor(progressEvent.loaded / progressEvent.total * 100);
            // });
            // Verify if selected file for download already exist on the device
            _this.file.checkFile(_this.dirName, _this.fileName)
                .then(function () {
                isDownloaded = true;
                _this.loadingCtrl.dismiss();
                resolve(count);
            })
                .catch(function () {
                // Start the dowload for the selected file
                transfer.download(_this.downloadURL, _this.dirName + _this.fileNameTemp)
                    .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        isDownloaded = true;
                        // this.loadingCtrl.dismiss(); // Don't delete yet
                        // Process downloaded media
                        // const count1:number = await this.processMedia(count);
                        // Start reading the selected file content for encryption
                        this.file.readAsDataURL(this.dirName, this.fileNameTemp)
                            .then(function (fileContent) {
                            var encFileContent = crypto_js__WEBPACK_IMPORTED_MODULE_8__["AES"].encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();
                            _this.file.writeFile(_this.dirName, _this.fileName, encFileContent, { replace: true, append: false })
                                .then(function () {
                                _this.file.removeFile(_this.dirName, _this.fileNameTemp)
                                    .then(function () {
                                    _this.loadingCtrl.dismiss();
                                    resolve(count);
                                })
                                    .catch(function (error) {
                                    _this.loadingCtrl.dismiss();
                                    _this.presentToast("Error removing file: " + _this.fileNameTemp + " Error: " + JSON.stringify(error));
                                });
                            })
                                .catch(function (error) {
                                _this.loadingCtrl.dismiss();
                                _this.presentToast("Error writing file: " + _this.fileName + " Error: " + JSON.stringify(error));
                            });
                        })
                            .catch(function (error) {
                            _this.loadingCtrl.dismiss();
                            _this.presentToast("Error reading file: " + _this.fileNameTemp + " Error: " + JSON.stringify(error));
                        });
                        return [2 /*return*/];
                    });
                }); })
                    .catch(function (error) {
                    isDownloaded = false;
                    _this.loadingCtrl.dismiss();
                    // Send failure notification to user
                    _this.presentToast("File download failed for file: " + _this.fileNameTemp + " Error: " + JSON.stringify(error));
                    resolve(count);
                });
            });
        });
    };
    AudioPlayerPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
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
    return AudioPlayerPage;
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
//# sourceMappingURL=pages-audioplayer-audioplayer-module-es5.js.map