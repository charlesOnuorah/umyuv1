(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-slider-slider-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/slider/slider.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/slider/slider.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"slider-page manual-remove-top-padding\" scroll=\"false\">\n  <ion-slides #gfslider pager [options]=\"options\" style=\"width:100%;height:100%;\">\n    <ion-slide id=\"slider-slide27\" style=\"background-color:#fff;\">\n      <div style=\"display:table;width:100%;height:100%;\">\n        <div style=\"display:table-row;\">\n          <div style=\"display:table-cell;vertical-align:middle;\">\n            <div>\n              <img src=\"assets/slides/logo.jpeg\" style=\"display: block; width: 50%; height: auto; margin-left: auto; margin-right: auto;\">\n            </div>\n            <div class=\"spacer\" style=\"height: 20px;\"></div>\n            <h2 id=\"slider-heading2\" style=\"padding-left: 30px; padding-right: 30px;\">Welcome to Umaru Musa Yar'Adua University</h2>\n            <div class=\"spacer\" style=\"height: 20px;\"></div>\n            <h5>Mobile Learnng Platform</h5>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n\n    <ion-slide style=\"background-color:#fff;\" *ngFor=\"let slide of slidess\">      \n      <div style=\"display:table;width:100%;height:100%;\">\n        <div style=\"display:table-row;\">\n          <div style=\"display:table-cell;vertical-align:middle;\">\n            <div>\n              <img [src]=\"slide.image\" style=\"display: block; width: 40%; height: auto; margin-left: auto; margin-right: auto;\">\n              <!-- <img [src]=\"slide.image\" class=\"slide-image\"> -->\n            </div>\n            <div class=\"spacer\" style=\"height: 20px;\"></div>\n            <h2 id=\"slider-heading4\" [innerHTML]=\"slide.title\" style=\"padding-left: 30px; padding-right: 30px;\"></h2>\n            <p [innerHTML]=\"slide.description\" style=\"padding-left: 30px; padding-right: 30px;\"></p>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" fill=\"clear\" (click)=\"skipSlides()\">Skip <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/slider/slider.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/slider/slider.module.ts ***!
  \***********************************************/
/*! exports provided: SliderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPageModule", function() { return SliderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider.page */ "./src/app/pages/slider/slider.page.ts");







const routes = [
    {
        path: '',
        component: _slider_page__WEBPACK_IMPORTED_MODULE_6__["SliderPage"]
    }
];
let SliderPageModule = class SliderPageModule {
};
SliderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_slider_page__WEBPACK_IMPORTED_MODULE_6__["SliderPage"]]
    })
], SliderPageModule);



/***/ }),

/***/ "./src/app/pages/slider/slider.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/slider/slider.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-slider .toolbar-background {\n  background: transparent;\n  border-color: transparent;\n}\napp-slider .slide-zoom {\n  height: 100%;\n}\napp-slider .slide-title {\n  margin-top: 2.8rem;\n}\napp-slider .slide-image {\n  display: block;\n  width: 70%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  border-radius: 50%;\n}\napp-slider h2 {\n  color: #F5F5F9;\n  font-weight: 300;\n  text-align: center;\n  margin: 10px;\n  font-size: 2.9rem;\n}\napp-slider h3 {\n  color: #F5F5F9;\n  font-weight: 300;\n  text-align: center;\n  font-size: 2.3rem;\n  padding: 0 15px;\n}\napp-slider p {\n  color: #F5E6E6;\n  font-weight: 300;\n  padding: 0 20px;\n  line-height: 1.5;\n  font-size: 14px;\n  margin: 0 0 10px;\n}\napp-slider p b {\n  color: #000000;\n  font-weight: 500;\n}\napp-slider .padding {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYmNnZWR1L0Rlc2t0b3AvdW15dS9zcmMvYXBwL3BhZ2VzL3NsaWRlci9zbGlkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zbGlkZXIvc2xpZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNHLHVCQUFBO0VBQ0EseUJBQUE7QUNETDtBRElFO0VBQ0csWUFBQTtBQ0ZMO0FES0U7RUFDRyxrQkFBQTtBQ0hMO0FETUU7RUFDRyxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pMO0FET0U7RUFDRyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0xMO0FEUUU7RUFDRyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ05MO0FEU0U7RUFDRyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNQTDtBRFNJO0VBQ0csY0FBQTtFQUNBLGdCQUFBO0FDUFA7QURXRTtFQUNHLGFBQUE7QUNUTCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NsaWRlci9zbGlkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXNsaWRlciB7XHJcbiAgICAgICAgXHJcbiAgLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgIFxyXG4gIC5zbGlkZS16b29tIHtcclxuICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2xpZGUtdGl0bGUge1xyXG4gICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcclxuICB9XHJcblxyXG4gIC5zbGlkZS1pbWFnZSB7ICAgICAgXHJcbiAgICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgIHdpZHRoOiA3MCU7IFxyXG4gICAgIGhlaWdodDogYXV0bzsgXHJcbiAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxyXG4gICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJVxyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICAgY29sb3I6ICNGNUY1Rjk7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgIGZvbnQtc2l6ZTogMi45cmVtO1xyXG4gIH1cclxuICAgIFxyXG4gIGgzIHtcclxuICAgICBjb2xvcjogI0Y1RjVGOTtcclxuICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG4gICAgXHJcbiAgcCB7XHJcbiAgICAgY29sb3I6ICNGNUU2RTY7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgICAgXHJcbiAgICBiIHtcclxuICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9ICBcclxuICBcclxuICAucGFkZGluZyB7XHJcbiAgICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgICBcclxufSIsImFwcC1zbGlkZXIgLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuYXBwLXNsaWRlciAuc2xpZGUtem9vbSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmFwcC1zbGlkZXIgLnNsaWRlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuYXBwLXNsaWRlciAuc2xpZGUtaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5hcHAtc2xpZGVyIGgyIHtcbiAgY29sb3I6ICNGNUY1Rjk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDIuOXJlbTtcbn1cbmFwcC1zbGlkZXIgaDMge1xuICBjb2xvcjogI0Y1RjVGOTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuYXBwLXNsaWRlciBwIHtcbiAgY29sb3I6ICNGNUU2RTY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuYXBwLXNsaWRlciBwIGIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmFwcC1zbGlkZXIgLnBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/slider/slider.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/slider/slider.page.ts ***!
  \*********************************************/
/*! exports provided: SliderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPage", function() { return SliderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let SliderPage = class SliderPage {
    constructor(router, alertController) {
        this.router = router;
        this.alertController = alertController;
        this.options = {
            autoplay: 3000,
            direction: 'horizontal',
            initialSlide: 0,
            loop: true,
            pager: false,
            speed: 1000
        };
        this.slidess = [
            {
                image: "assets/slides/search.png",
                title: "Browse course content by discipline",
                description: "Select your faculty, department and level to display your current courses",
            },
            {
                image: "assets/slides/favorite.png",
                title: "Add course contents as favorites",
                description: "Mark regularly visited course as favorites so you can easily view them later",
            },
            {
                image: "assets/slides/chat.png",
                title: "Collaborate with students online",
                description: "Finding any course difficult to comprehend, ask any members currently online",
            }
        ];
    }
    ngOnInit() {
    }
    skipSlides() {
        // Get user credentials if user has already login
        this.router.navigate(['home']);
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['login']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
SliderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], SliderPage.prototype, "slider", void 0);
SliderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__(/*! raw-loader!./slider.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/slider/slider.page.html"),
        styles: [__webpack_require__(/*! ./slider.page.scss */ "./src/app/pages/slider/slider.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], SliderPage);



/***/ })

}]);
//# sourceMappingURL=pages-slider-slider-module-es2015.js.map