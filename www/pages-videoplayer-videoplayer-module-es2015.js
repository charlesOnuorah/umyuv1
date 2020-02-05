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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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






const routes = [
    {
        path: '',
        component: _videoplayer_page__WEBPACK_IMPORTED_MODULE_6__["VideoPlayerPage"]
    }
];
let VideoPlayerPageModule = class VideoPlayerPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/videoplayer/videoplayer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/videoplayer/videoplayer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n *Ionic 4 Spotify app starter - Ion Spotify (https://store.enappd.com/product/ionic-4-spotify-app-starter)\n *\n * Copyright © 2019-present Enappd. All rights reserved.\n *\n * This source code is licensed as per the terms found in the\n * LICENSE.md file in the root directory of this source tree.\n */\n.welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\nion-content {\n  --background: linear-gradient(to top, #060606, #011a01);\n}\nion-toolbar {\n  --background: #011a01;\n}\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  -webkit-animation: marquee 50s linear infinite;\n          animation: marquee 50s linear infinite;\n}\nion-title {\n  font-size: 11px;\n}\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold;\n}\n.marquee:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n/* Make it move */\n@-webkit-keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n@keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n.fixedContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.fixedContent ion-text {\n  font-size: 22px;\n  font-weight: bold;\n}\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 10px;\n}\n.fixedContent ion-thumbnail {\n  width: 280px;\n  height: 280px;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n.header-md:after {\n  bottom: 0px;\n}\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1), background-color 15ms linear, color 15ms linear;\n}\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px;\n}\nion-range {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n.rangePlaytime {\n  display: flex;\n  justify-content: space-between;\n}\n.rangePlaytime .startTime {\n  padding-left: 9px;\n}\n.rangePlaytime .endTime {\n  padding-right: 15px;\n}\n.Iconsize_For_Rev {\n  font-size: 23px;\n}\n.flexRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.transparent_Item {\n  --background: transparent;\n}\n.padding_Top {\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW9wbGF5ZXIvdmlkZW9wbGF5ZXIucGFnZS5zY3NzIiwiL1VzZXJzL2NiY2dlZHUvRGVza3RvcC91bXl1L3NyYy9hcHAvcGFnZXMvdmlkZW9wbGF5ZXIvdmlkZW9wbGF5ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7OztFQUFBO0FBUUM7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FERUY7QUNDQTs7O0VBR0UsY0FBQTtBREVGO0FDQ0E7OztFQUdFLGlCQUFBO0FERUY7QUNDQTtFQUNFLG9EQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QURFRjtBQ0NBO0VBQ0UsdURBQUE7QURFRjtBQ0NBO0VBQ0UscUJBQUE7QURFRjtBQ0NBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FERUY7QUNDQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QURFRjtBQ0NBLGlCQUFBO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VERUY7RUNDQTtJQUNFLG1CQUFBO0VEQ0Y7QUFDRjtBQ1JBO0VBQ0U7SUFDRSxpQkFBQTtFREVGO0VDQ0E7SUFDRSxtQkFBQTtFRENGO0FBQ0Y7QUNFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QURBRjtBQ0VFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEQUo7QUNHRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBRERKO0FDS0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtHQUFBO0VBQ0EsMEdBQUE7QURISjtBQ09BO0VBQ0UsV0FBQTtBREpGO0FDT0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsb0JBQUE7RUFDQSxpSEFBQTtFQUNBLDBHQUFBO0FETEY7QUNRQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FETEY7QUNRQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBRExGO0FDUUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QURMRjtBQ09FO0VBQ0UsaUJBQUE7QURMSjtBQ1FFO0VBQ0UsbUJBQUE7QUROSjtBQ1VBO0VBQ0UsZUFBQTtBRFBGO0FDVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FEUEY7QUNVQTtFQUNFLHlCQUFBO0FEUEY7QUNVQTtFQUNFLGlCQUFBO0FEUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aWRlb3BsYXllci92aWRlb3BsYXllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqSW9uaWMgNCBTcG90aWZ5IGFwcCBzdGFydGVyIC0gSW9uIFNwb3RpZnkgKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLTQtc3BvdGlmeS1hcHAtc3RhcnRlcilcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjLWlvbi1jYXJkLXB3YS1oLFxuLnNjLWlvbi1jYXJkLW1kLWgsXG4uc2MtaW9uLWNhcmQtaW9zLWgge1xuICBkaXNwbGF5OiB1bnNldDtcbn1cblxuLnNjLWlvbi1jYXJkLXB3YS1zIGltZyxcbi5zYy1pb24tY2FyZC1tZC1zIGltZyxcbi5zYy1pb24tY2FyZC1pb3MtcyBpbWcge1xuICBtYXJnaW4tdG9wOiAtMThweDtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDYwNjA2LCAjMDExYTAxKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMTFhMDE7XG59XG5cbi5tYXJxdWVlIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYW5pbWF0aW9uOiBtYXJxdWVlIDUwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuaW9uLXRpdGxlLnRleHRTdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXJxdWVlOmhvdmVyIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cblxuLyogTWFrZSBpdCBtb3ZlICovXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xuICAwJSB7XG4gICAgdGV4dC1pbmRlbnQ6IDMwZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgdGV4dC1pbmRlbnQ6IC0xMDVlbTtcbiAgfVxufVxuLmZpeGVkQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZpeGVkQ29udGVudCBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZml4ZWRDb250ZW50IC5wVXNlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uZml4ZWRDb250ZW50IGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMjgwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjY2KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24tYnV0dG9uLnBsYXlfcGF1c2VfYnRuIHtcbiAgd2lkdGg6IDY1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLS10cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLmRhcmtDb2xvciB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnJhbmdlUGxheXRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucmFuZ2VQbGF5dGltZSAuc3RhcnRUaW1lIHtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG59XG4ucmFuZ2VQbGF5dGltZSAuZW5kVGltZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5JY29uc2l6ZV9Gb3JfUmV2IHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uZmxleFJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRyYW5zcGFyZW50X0l0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFkZGluZ19Ub3Age1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn0iLCIvKipcclxuICpJb25pYyA0IFNwb3RpZnkgYXBwIHN0YXJ0ZXIgLSBJb24gU3BvdGlmeSAoaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtNC1zcG90aWZ5LWFwcC1zdGFydGVyKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXHJcbiAqL1xyXG4gLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4gIFxyXG4uc2MtaW9uLWNhcmQtcHdhLWgsXHJcbi5zYy1pb24tY2FyZC1tZC1oLFxyXG4uc2MtaW9uLWNhcmQtaW9zLWgge1xyXG4gIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxyXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXHJcbi5zYy1pb24tY2FyZC1pb3MtcyBpbWcge1xyXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtbWQtaCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDYwNjA2LCAjMDExYTAxKTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAxMWEwMTtcclxufVxyXG5cclxuLm1hcnF1ZWUge1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBhbmltYXRpb246IG1hcnF1ZWUgNTBzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbmlvbi10aXRsZS50ZXh0U3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG4ubWFycXVlZTpob3ZlciB7XHJcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZFxyXG59XHJcblxyXG4vKiBNYWtlIGl0IG1vdmUgKi9cclxuQGtleWZyYW1lcyBtYXJxdWVlIHtcclxuICAwJSB7XHJcbiAgICB0ZXh0LWluZGVudDogMzBlbVxyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0ZXh0LWluZGVudDogLTEwNWVtXHJcbiAgfVxyXG59XHJcblxyXG4uZml4ZWRDb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvLyBwYWRkaW5nLXRvcDogMjRweDtcclxuICBpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5wVXNlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIC8vIG1hcmdpbjogMTJweDtcclxuICB9XHJcblxyXG4gIGlvbi10aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjY2KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1tZDphZnRlciB7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ucGxheV9wYXVzZV9idG4ge1xyXG4gIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gZm9udC1zaXplOiAyLjNlbSAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC0tYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIC0tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5kYXJrQ29sb3Ige1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcblxyXG5pb24tcmFuZ2Uge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4ucmFuZ2VQbGF5dGltZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5zdGFydFRpbWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5cHg7XHJcbiAgfVxyXG5cclxuICAuZW5kVGltZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLkljb25zaXplX0Zvcl9SZXYge1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuLmZsZXhSb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50X0l0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nX1RvcCB7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbn1cclxuXHJcbi8vIC50b29sYmFyLWJhY2tncm91bmQuc2MtaW9uLXRvb2xiYXItbWQsXHJcbi8vIC5zYy1pb24tdG9vbGJhci1tZC1zID4gaW9uLXByb2dyZXNzLWJhciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRvb2xiYXItY29udGFpbmVyLnNjLWlvbi10b29sYmFyLW1kIHtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctc3RhcnQpO1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZW5kKTtcclxuLy8gICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy10b3ApO1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLWJvdHRvbSk7XHJcbi8vICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuLy8gICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCk7XHJcbi8vICAgY29udGFpbjogY29udGVudDtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgIHotaW5kZXg6IDEwO1xyXG4vLyAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuIl19 */"

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










let VideoPlayerPage = class VideoPlayerPage {
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
        this.fileNameTemp = "videofiletemp" + this.courseID + ".mp4";
        this.fileName = "videofile" + this.courseID + ".mp4";
        this.dirName = this.systemBase + this.dirBase + ".videos/";
        this.downloadURL = this.downloadURL + "video/" + this.fileName;
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
            //This is where the media file will be stored, you can change it as you like
            this.file.checkFile(this.dirName, this.fileName)
                .then(() => {
                loading.dismiss();
                // Play downloaded video
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
                    var video = document.getElementsByTagName('video')[0];
                    var sources = video.getElementsByTagName('source');
                    sources[0].src = fileContent;
                    video.load();
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
            // await this.readFileContent(this.dirNameTemp, this.fileNameTemp)
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
            return fileContent;
        });
    }
    removeTempFile(fileName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Removing file, please wait...'
            });
            yield loading.present();
            // return this.file.removeFile(this.dirNameTemp, this.fileNameTemp)
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
                        handler: () => {
                            // this.router.navigate(['login']);
                        }
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
                message: 'This action will download all course contents in MP4 format to your drive, this action may take some time depending on your internet download speed. Proceed?',
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
            this.dirName = this.systemBase + this.dirBase + ".videos/";
            // for (let i = 0; i < this.totalFiles; i++) {
            for (const course of this.courses) {
                this.fileNameTemp = "videofiletemp" + course.id + ".mp4";
                this.fileName = "videofile" + course.id + ".mp4";
                this.downloadURL = "http://umyu.easystudy.com.ng/materials/video/" + this.fileName;
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
VideoPlayerPage.ctorParameters = () => [
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
//# sourceMappingURL=pages-videoplayer-videoplayer-module-es2015.js.map