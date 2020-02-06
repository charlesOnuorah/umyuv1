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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider.page */ "./src/app/pages/slider/slider.page.ts");







var routes = [
    {
        path: '',
        component: _slider_page__WEBPACK_IMPORTED_MODULE_6__["SliderPage"]
    }
];
var SliderPageModule = /** @class */ (function () {
    function SliderPageModule() {
    }
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
    return SliderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/slider/slider.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/slider/slider.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-slider .toolbar-background {\n  background: transparent;\n  border-color: transparent;\n}\napp-slider .slide-zoom {\n  height: 100%;\n}\napp-slider .slide-title {\n  margin-top: 2.8rem;\n}\napp-slider .slide-image {\n  display: block;\n  width: 70%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  border-radius: 50%;\n}\napp-slider h2 {\n  color: #F5F5F9;\n  font-weight: 300;\n  text-align: center;\n  margin: 10px;\n  font-size: 2.9rem;\n}\napp-slider h3 {\n  color: #F5F5F9;\n  font-weight: 300;\n  text-align: center;\n  font-size: 2.3rem;\n  padding: 0 15px;\n}\napp-slider p {\n  color: #F5E6E6;\n  font-weight: 300;\n  padding: 0 20px;\n  line-height: 1.5;\n  font-size: 14px;\n  margin: 0 0 10px;\n}\napp-slider p b {\n  color: #000000;\n  font-weight: 500;\n}\napp-slider .padding {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYmNnZWR1L0Rlc2t0b3AvcHJvamVjdHMvdW15dXYxL3NyYy9hcHAvcGFnZXMvc2xpZGVyL3NsaWRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NsaWRlci9zbGlkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0csdUJBQUE7RUFDQSx5QkFBQTtBQ0RMO0FESUU7RUFDRyxZQUFBO0FDRkw7QURLRTtFQUNHLGtCQUFBO0FDSEw7QURNRTtFQUNHLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSkw7QURPRTtFQUNHLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTEw7QURRRTtFQUNHLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTkw7QURTRTtFQUNHLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1BMO0FEU0k7RUFDRyxjQUFBO0VBQ0EsZ0JBQUE7QUNQUDtBRFdFO0VBQ0csYUFBQTtBQ1RMIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2xpZGVyL3NsaWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2xpZGVyIHtcclxuICAgICAgICBcclxuICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAgXHJcbiAgLnNsaWRlLXpvb20ge1xyXG4gICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zbGlkZS10aXRsZSB7XHJcbiAgICAgbWFyZ2luLXRvcDogMi44cmVtO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlLWltYWdlIHsgICAgICBcclxuICAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICAgd2lkdGg6IDcwJTsgXHJcbiAgICAgaGVpZ2h0OiBhdXRvOyBcclxuICAgICBtYXJnaW4tbGVmdDogYXV0bzsgXHJcbiAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgICBjb2xvcjogI0Y1RjVGOTtcclxuICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgZm9udC1zaXplOiAyLjlyZW07XHJcbiAgfVxyXG4gICAgXHJcbiAgaDMge1xyXG4gICAgIGNvbG9yOiAjRjVGNUY5O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgICBcclxuICBwIHtcclxuICAgICBjb2xvcjogI0Y1RTZFNjtcclxuICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgICBcclxuICAgIGIge1xyXG4gICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH0gIFxyXG4gIFxyXG4gIC5wYWRkaW5nIHtcclxuICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAgIFxyXG59IiwiYXBwLXNsaWRlciAudG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5hcHAtc2xpZGVyIC5zbGlkZS16b29tIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuYXBwLXNsaWRlciAuc2xpZGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5hcHAtc2xpZGVyIC5zbGlkZS1pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmFwcC1zbGlkZXIgaDIge1xuICBjb2xvcjogI0Y1RjVGOTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMi45cmVtO1xufVxuYXBwLXNsaWRlciBoMyB7XG4gIGNvbG9yOiAjRjVGNUY5O1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5hcHAtc2xpZGVyIHAge1xuICBjb2xvcjogI0Y1RTZFNjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5hcHAtc2xpZGVyIHAgYiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuYXBwLXNsaWRlciAucGFkZGluZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var SliderPage = /** @class */ (function () {
    function SliderPage(router, alertController) {
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
    SliderPage.prototype.ngOnInit = function () {
    };
    SliderPage.prototype.skipSlides = function () {
        // Get user credentials if user has already login
        this.router.navigate(['home']);
    };
    SliderPage.prototype.presentAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        _this.router.navigate(['login']);
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
    SliderPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
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
    return SliderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-slider-slider-module-es5.js.map