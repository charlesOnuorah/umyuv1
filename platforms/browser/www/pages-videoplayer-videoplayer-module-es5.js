(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-videoplayer-videoplayer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/videoplayer/videoplayer.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/videoplayer/videoplayer.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{ courseCode }} - MP4\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>{{($eventItem | async)?.name}}</ion-title> -->\n    \n    <ion-buttons slot=\"end\">\n      <ion-button style=\"font-size: 12px;\" (click)=\"actionFavoriteCourses(actionFavType)\" icon-end>\n        <ion-icon name=\"{{ actionFavType === 'Remov' ? 'remove-circle-outline' : 'add-circle-outline' }}\" color=\"light\"></ion-icon>\n        <span style=\"padding-right: 5px; padding-left: 5px;\">Favorite</span>\n        <!-- <ion-icon name=\"star\" color=\"light\"></ion-icon> -->\n      </ion-button>\n      <ion-button style=\"font-size: 12px;\" (click)=\"downloadMedia()\" icon-end>\n        <span style=\"padding-right: 5px;\">Update</span>\n        <ion-icon name=\"cloud-download\" color=\"light\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button style=\"font-size: 12px;\" (click)=\"verifyMediaDownload()\" icon-end>\n        <span style=\"padding-right: 5px;\">Daonload All</span>\n        <ion-icon name=\"cloud-download\" color=\"light\" style=\"padding-right: 5px; padding-left: 5px;\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <div class=\"fixedContent\">\n      <ion-card-content class=\"ion-align-items-center rowSection\" style=\"background-color: black; position: relative;\">\n        <video preload=\"metadata\"\n          controls controlsList=\"nodownload\"\n          webkit-playsinline=\"webkit-playsinline\"\n          class=\"videoPlayer\" style=\"top:0;left:0;width:100%;height:100%;\"\n          poster=\"assets/imgs/loading_video.gif\">\n          <!-- poster=\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"> -->\n          <source src=\"\" type=\"video/mp4\"/>\n        </video>\n      </ion-card-content>\n    </div>\n  </ion-card>\n\n  <div class=\"padding_Top\">\n    <div class=\"fixedContent\">      \n      <h3 style=\"font-size: 28px; color: #f4f5f8 !important; margin-bottom: 0px;\" color=\"light\">{{ courseCode }}</h3>\n      <h4 style=\"font-size: 18px; color: #f4f5f8 !important;\" color=\"light\">{{ courseTitle }}</h4>\n      <p style=\"font-size: 14px; padding-left: 20px; padding-right: 20px; text-align: center; line-height: 1.5em;\" color=\"light\" class=\"pUser microsoft\">Tap the play button to start watching <strong>{{ courseTitle }}</strong> video course. Click the <strong>UPDATE</strong> button at the top right corner to update this course</p>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"dark\">\n    <ion-button color=\"light\" fill=\"clear\" expand=\"full\" (click)=\"enterChatRooms()\">{{ createRoomCaption }}</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/videoplayer/videoplayer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/videoplayer/videoplayer.module.ts ***!
  \*********************************************************/
/*! exports provided: VideoPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerPageModule", function() { return VideoPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _videoplayer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videoplayer.page */ "./src/app/pages/videoplayer/videoplayer.page.ts");

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
        component: _videoplayer_page__WEBPACK_IMPORTED_MODULE_6__["VideoPlayerPage"]
    }
];
var VideoPlayerPageModule = /** @class */ (function () {
    function VideoPlayerPageModule() {
    }
    VideoPlayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_videoplayer_page__WEBPACK_IMPORTED_MODULE_6__["VideoPlayerPage"]]
        })
    ], VideoPlayerPageModule);
    return VideoPlayerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/videoplayer/videoplayer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/videoplayer/videoplayer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n *Ionic 4 Spotify app starter - Ion Spotify (https://store.enappd.com/product/ionic-4-spotify-app-starter)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source tree.\n */\n.welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\nion-content {\n  --background: linear-gradient(to top, #060606, #011a01);\n}\nion-toolbar {\n  --background: #011a01;\n}\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  -webkit-animation: marquee 50s linear infinite;\n          animation: marquee 50s linear infinite;\n}\nion-title {\n  font-size: 11px;\n}\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold;\n}\n.marquee:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n/* Make it move */\n@-webkit-keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n@keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n.fixedContent {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.fixedContent ion-text {\n  font-size: 22px;\n  font-weight: bold;\n}\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 10px;\n}\n.fixedContent ion-thumbnail {\n  width: 280px;\n  height: 280px;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  -webkit-transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n.header-md:after {\n  bottom: 0px;\n}\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1), background-color 15ms linear, color 15ms linear;\n}\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px;\n}\nion-range {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n.rangePlaytime {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.rangePlaytime .startTime {\n  padding-left: 9px;\n}\n.rangePlaytime .endTime {\n  padding-right: 15px;\n}\n.Iconsize_For_Rev {\n  font-size: 23px;\n}\n.flexRow {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.transparent_Item {\n  --background: transparent;\n}\n.padding_Top {\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW9wbGF5ZXIvdmlkZW9wbGF5ZXIucGFnZS5zY3NzIiwiL1VzZXJzL2NiY2dlZHUvRGVza3RvcC9wcm9qZWN0cy91bXl1djEvc3JjL2FwcC9wYWdlcy92aWRlb3BsYXllci92aWRlb3BsYXllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7O0VBQUE7QUFRQztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QURFRjtBQ0NBOzs7RUFHRSxjQUFBO0FERUY7QUNDQTs7O0VBR0UsaUJBQUE7QURFRjtBQ0NBO0VBQ0Usb0RBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBREVGO0FDQ0E7RUFDRSx1REFBQTtBREVGO0FDQ0E7RUFDRSxxQkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURFRjtBQ0NBO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtBREVGO0FDQ0EsaUJBQUE7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RURFRjtFQ0NBO0lBQ0UsbUJBQUE7RURDRjtBQUNGO0FDUkE7RUFDRTtJQUNFLGlCQUFBO0VERUY7RUNDQTtJQUNFLG1CQUFBO0VEQ0Y7QUFDRjtBQ0VBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QURBRjtBQ0VFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEQUo7QUNHRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBRERKO0FDS0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtHQUFBO0VBQ0Esa0hBQUE7RUFBQSwwR0FBQTtBREhKO0FDT0E7RUFDRSxXQUFBO0FESkY7QUNPQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQkFBQTtFQUNBLGlIQUFBO0VBQ0EsMEdBQUE7QURMRjtBQ1FBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURMRjtBQ1FBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FETEY7QUNRQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QURMRjtBQ09FO0VBQ0UsaUJBQUE7QURMSjtBQ1FFO0VBQ0UsbUJBQUE7QUROSjtBQ1VBO0VBQ0UsZUFBQTtBRFBGO0FDVUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBRFBGO0FDVUE7RUFDRSx5QkFBQTtBRFBGO0FDVUE7RUFDRSxpQkFBQTtBRFBGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlkZW9wbGF5ZXIvdmlkZW9wbGF5ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKklvbmljIDQgU3BvdGlmeSBhcHAgc3RhcnRlciAtIElvbiBTcG90aWZ5IChodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy00LXNwb3RpZnktYXBwLXN0YXJ0ZXIpXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zYy1pb24tY2FyZC1wd2EtaCxcbi5zYy1pb24tY2FyZC1tZC1oLFxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgZGlzcGxheTogdW5zZXQ7XG59XG5cbi5zYy1pb24tY2FyZC1wd2EtcyBpbWcsXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59XG5cbi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA2MDYwNiwgIzAxMWEwMSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDExYTAxO1xufVxuXG4ubWFycXVlZSB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFuaW1hdGlvbjogbWFycXVlZSA1MHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbmlvbi10aXRsZS50ZXh0U3VidGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFycXVlZTpob3ZlciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbi8qIE1ha2UgaXQgbW92ZSAqL1xuQGtleWZyYW1lcyBtYXJxdWVlIHtcbiAgMCUge1xuICAgIHRleHQtaW5kZW50OiAzMGVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRleHQtaW5kZW50OiAtMTA1ZW07XG4gIH1cbn1cbi5maXhlZENvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5maXhlZENvbnRlbnQgaW9uLXRleHQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZpeGVkQ29udGVudCAucFVzZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZpeGVkQ29udGVudCBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC42NiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBib3R0b206IDBweDtcbn1cblxuaW9uLWJ1dHRvbi5wbGF5X3BhdXNlX2J0biB7XG4gIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC0tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XG59XG5cbi5kYXJrQ29sb3Ige1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG5pb24tcmFuZ2Uge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5yYW5nZVBsYXl0aW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnJhbmdlUGxheXRpbWUgLnN0YXJ0VGltZSB7XG4gIHBhZGRpbmctbGVmdDogOXB4O1xufVxuLnJhbmdlUGxheXRpbWUgLmVuZFRpbWUge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uSWNvbnNpemVfRm9yX1JldiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmZsZXhSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50cmFuc3BhcmVudF9JdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhZGRpbmdfVG9wIHtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59IiwiLyoqXHJcbiAqSW9uaWMgNCBTcG90aWZ5IGFwcCBzdGFydGVyIC0gSW9uIFNwb3RpZnkgKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtc3BvdGlmeS1hcHAtc3RhcnRlcilcclxuICpcclxuICogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuIC53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuICBcclxuLnNjLWlvbi1jYXJkLXB3YS1oLFxyXG4uc2MtaW9uLWNhcmQtbWQtaCxcclxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLXB3YS1zIGltZyxcclxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxyXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAtMThweDtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA2MDYwNiwgIzAxMWEwMSk7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMTFhMDE7XHJcbn1cclxuXHJcbi5tYXJxdWVlIHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYW5pbWF0aW9uOiBtYXJxdWVlIDUwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG5pb24tdGl0bGUudGV4dFN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuLm1hcnF1ZWU6aG92ZXIge1xyXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWRcclxufVxyXG5cclxuLyogTWFrZSBpdCBtb3ZlICovXHJcbkBrZXlmcmFtZXMgbWFycXVlZSB7XHJcbiAgMCUge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDMwZW1cclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdGV4dC1pbmRlbnQ6IC0xMDVlbVxyXG4gIH1cclxufVxyXG5cclxuLmZpeGVkQ29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy8gcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgaW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAucFVzZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAvLyBtYXJnaW46IDEycHg7XHJcbiAgfVxyXG5cclxuICBpb24tdGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC42NiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC42NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItbWQ6YWZ0ZXIge1xyXG4gIGJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uLnBsYXlfcGF1c2VfYnRuIHtcclxuICB3aWR0aDogNjVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xyXG4gIC8vIGZvbnQtc2l6ZTogMi4zZW0gIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAtLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xyXG59XHJcblxyXG4uZGFya0NvbG9yIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG5cclxuaW9uLXJhbmdlIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLnJhbmdlUGxheXRpbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuc3RhcnRUaW1lIHtcclxuICAgIHBhZGRpbmctbGVmdDogOXB4O1xyXG4gIH1cclxuXHJcbiAgLmVuZFRpbWUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5JY29uc2l6ZV9Gb3JfUmV2IHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi5mbGV4Um93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50cmFuc3BhcmVudF9JdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFkZGluZ19Ub3Age1xyXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xyXG59XHJcblxyXG4vLyAudG9vbGJhci1iYWNrZ3JvdW5kLnNjLWlvbi10b29sYmFyLW1kLFxyXG4vLyAuc2MtaW9uLXRvb2xiYXItbWQtcyA+IGlvbi1wcm9ncmVzcy1iYXIge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50b29sYmFyLWNvbnRhaW5lci5zYy1pb24tdG9vbGJhci1tZCB7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLXN0YXJ0KTtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLWVuZCk7XHJcbi8vICAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmctdG9wKTtcclxuLy8gICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1ib3R0b20pO1xyXG4vLyAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpO1xyXG4vLyAgIGNvbnRhaW46IGNvbnRlbnQ7XHJcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICB6LWluZGV4OiAxMDtcclxuLy8gICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/videoplayer/videoplayer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/videoplayer/videoplayer.page.ts ***!
  \*******************************************************/
/*! exports provided: VideoPlayerPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerPage", function() { return VideoPlayerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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










var VideoPlayerPage = /** @class */ (function () {
    function VideoPlayerPage(loadingCtrl, platform, fileTransfer, nativeStorage, activatedRoute, toastCtrl, file, router, alertController) {
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
        this.image = 'assets/img/album_art2.gif';
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
    VideoPlayerPage.prototype.ngOnInit = function () {
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
        this.fileNameTemp = "videofiletemp" + this.courseID + ".mp4";
        this.fileName = "videofile" + this.courseID + ".mp4";
        this.dirName = this.systemBase + this.dirBase + ".videos/";
        this.downloadURL = this.downloadURL + "video/" + this.fileName;
        this.platform.ready().then(function () {
            _this.verifyMedia().then(function () { });
        });
    };
    VideoPlayerPage.prototype.verifyMedia = function () {
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
                        //This is where the media file will be stored, you can change it as you like
                        this.file.checkFile(this.dirName, this.fileName)
                            .then(function () {
                            loading.dismiss();
                            // Play downloaded video
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
    VideoPlayerPage.prototype.downloadMedia = function () {
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
    VideoPlayerPage.prototype.playMediaFile = function () {
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
                                    var video = document.getElementsByTagName('video')[0];
                                    var sources = video.getElementsByTagName('source');
                                    sources[0].src = fileContent;
                                    video.load();
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
    VideoPlayerPage.prototype.processMedia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // await this.readFileContent(this.dirNameTemp, this.fileNameTemp)
                    return [4 /*yield*/, this.readFileContent(this.dirName, this.fileNameTemp)
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
                        // await this.readFileContent(this.dirNameTemp, this.fileNameTemp)
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VideoPlayerPage.prototype.readFileContent = function (dirName, fileName) {
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
    VideoPlayerPage.prototype.writeFileContent = function (dirName, fileName, encryptedFile) {
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
    VideoPlayerPage.prototype.encryptFileContent = function (fileContent) {
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
                        // let key = CryptoJS.enc.Utf8.parse(this.key());
                        // let iv = CryptoJS.enc.Utf8.parse(this.key());
                        // let encrypted = CryptoJS.AES.encrypt(
                        //   CryptoJS.enc.Utf8.parse(fileContent),
                        //   key,
                        //   {
                        //     keySize: 128 / 8,
                        //     iv: iv,
                        //     mode: CryptoJS.mode.CBC,
                        //     padding: CryptoJS.pad.Pkcs7
                        //   }
                        // );
                        // let cipherText = CryptoJS.enc.Hex.stringify(encrypted.ciphertext);
                        loading.dismiss();
                        return [2 /*return*/, fileContent];
                }
            });
        });
    };
    VideoPlayerPage.prototype.decryptFileContent = function (encryptedFile) {
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
                        // let key = CryptoJS.enc.Utf8.parse(this.key());
                        // let iv = CryptoJS.enc.Utf8.parse(this.key());
                        // const decrypted = CryptoJS.AES.decrypt(
                        //   CryptoJS.enc.Utf8.parse(encryptedString),
                        //   key,
                        //   {
                        //     keySize: 128 / 8,
                        //     iv: iv,
                        //     mode: CryptoJS.mode.CBC,
                        //     padding: CryptoJS.pad.Pkcs7
                        //   }
                        // );
                        // let cipherText = CryptoJS.enc.Hex.stringify(decrypted.ciphertext);
                        loading.dismiss();
                        return [2 /*return*/, fileContent];
                }
            });
        });
    };
    VideoPlayerPage.prototype.removeTempFile = function (fileName) {
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
                        // return this.file.removeFile(this.dirNameTemp, this.fileNameTemp)
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
    VideoPlayerPage.prototype.presentToast = function (msg) {
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
    VideoPlayerPage.prototype.presentAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        // this.router.navigate(['login']);
                                    }
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
    VideoPlayerPage.prototype.enterChatRooms = function () {
        if (this.actionType == 1) {
            // Navigate to create chatroom if room does not exist
            this.router.navigate(['createroom']);
        }
        else {
            // Navigate to chatrooms if room does exist
            this.router.navigate(['chatrooms']);
        }
    };
    VideoPlayerPage.prototype.enterChatRoom = function () {
        // Navigate to chatrooms if room does exist
        this.router.navigate(['chatroom']);
    };
    VideoPlayerPage.prototype.ngOnDestroy = function () { };
    VideoPlayerPage.prototype.getFavoriteCourses = function () {
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
    VideoPlayerPage.prototype.actionFavoriteCourses = function (actionType) {
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
    VideoPlayerPage.prototype.verifyMediaDownload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'This action will download all course contents in MP4 format to your drive, this action may take some time depending on your internet download speed. Proceed?',
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
    VideoPlayerPage.prototype.prepareMediaDownload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, _a, course, count;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.courses = JSON.parse(localStorage.getItem('course'));
                        this.totalFiles = this.courses.length;
                        this.dirName = this.systemBase + this.dirBase + ".videos/";
                        _i = 0, _a = this.courses;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        course = _a[_i];
                        this.fileNameTemp = "videofiletemp" + course.id + ".mp4";
                        this.fileName = "videofile" + course.id + ".mp4";
                        this.downloadURL = "http://umyu.easystudy.com.ng/materials/video/" + this.fileName;
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
    VideoPlayerPage.prototype.startMediaDownload = function (count) {
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
    VideoPlayerPage.ctorParameters = function () { return [
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
    VideoPlayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videoplayer',
            template: __webpack_require__(/*! raw-loader!./videoplayer.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/videoplayer/videoplayer.page.html"),
            styles: [__webpack_require__(/*! ./videoplayer.page.scss */ "./src/app/pages/videoplayer/videoplayer.page.scss")]
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
    ], VideoPlayerPage);
    return VideoPlayerPage;
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
//# sourceMappingURL=pages-videoplayer-videoplayer-module-es5.js.map