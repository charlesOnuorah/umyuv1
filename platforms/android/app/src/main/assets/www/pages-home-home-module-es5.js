(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <!-- <ion-button (click)=\"settingPopover()\">\n        <ion-icon name=\"more\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"assets/banners/banner21.jpg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title>Welcome to Umaru Musa Yar'Adua University</ion-card-title>\n      <ion-card-subtitle>Mobile Learnng Platform</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Learning just got better, download all the courses you are interested in and start learning at your own pace. Click <strong>Browse Resources</strong> to get started.</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>What Next</ion-label>\n    </ion-list-header>\n    <ion-item class=\"hover-item\" (click)=\"navigateToEditProfilePage()\" [routerLink]=\"['/', 'edit']\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"person\"></ion-icon>\n      <ion-label>Edit Profile</ion-label>\n    </ion-item>\n    <ion-item class=\"hover-item\" (click)=\"verifySetup()\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n      <ion-label>Browse Resources</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/', 'favorites']\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n      <ion-label>Favorite Courses</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/', 'chatrooms']\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"chatboxes\"></ion-icon>\n      <ion-label>Enter Chat Room</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/', 'bulkdownload']\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"cloud-download\"></ion-icon>\n      <ion-label>Download Manager</ion-label>\n    </ion-item>\n    <ion-item class=\"hover-item\" (click)=\"presentAlertConfirm()\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"construct\"></ion-icon>\n      <ion-label>Reset Parameters</ion-label>\n    </ion-item>\n    \n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/setting/setting.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/setting/setting.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-list>\n    <ion-item (click)=\"home()\">\n      Home\n    </ion-item>\n    <ion-item (click)=\"slider()\">\n      Slider\n    </ion-item>\n    <ion-item (click)=\"logout()\">\n      Logout\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../setting/setting.component */ "./src/app/pages/setting/setting.component.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            entryComponents: [
                _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__["SettingComponent"],
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__["SettingComponent"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n\n.hover-item {\n  background-color: #F5F5F5;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYmNnZWR1L0Rlc2t0b3AvcHJvamVjdHMvdW15dXYxL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7O0VBR0UsY0FBQTtBQ0NGOztBREVBOzs7RUFHRSxpQkFBQTtBQ0NGOztBREVBOzs7RUFHRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9EQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiAgXG4uc2MtaW9uLWNhcmQtcHdhLWgsXG4uc2MtaW9uLWNhcmQtbWQtaCxcbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxuLnNjLWlvbi1jYXJkLWlvcy1zIGltZyB7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4ubGlzdC1wd2EsXG4ubGlzdC1tZCxcbi5saXN0LWlvcyB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5ob3Zlci1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjLWlvbi1jYXJkLXB3YS1oLFxuLnNjLWlvbi1jYXJkLW1kLWgsXG4uc2MtaW9uLWNhcmQtaW9zLWgge1xuICBkaXNwbGF5OiB1bnNldDtcbn1cblxuLnNjLWlvbi1jYXJkLXB3YS1zIGltZyxcbi5zYy1pb24tY2FyZC1tZC1zIGltZyxcbi5zYy1pb24tY2FyZC1pb3MtcyBpbWcge1xuICBtYXJnaW4tdG9wOiAtMThweDtcbn1cblxuLmxpc3QtcHdhLFxuLmxpc3QtbWQsXG4ubGlzdC1pb3Mge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uaG92ZXItaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/setting/setting.component */ "./src/app/pages/setting/setting.component.ts");






var HomePage = /** @class */ (function () {
    function HomePage(popoverController, loadingCtrl, nativeStorage, router, events, alertController) {
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.events = events;
        this.alertController = alertController;
        // this.platform.ready().then(() => {
        //   this.platform.backButton.subscribeWithPriority(9999, () => {
        //     document.addEventListener('backbutton', function (event) {
        //       event.preventDefault();
        //       event.stopPropagation();
        //     }, false);
        //   });
        // });
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.settingPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        /** Sync event from popover component */
                        this.events.subscribe('fromPopoverEvent', function () {
                            _this.syncTasks();
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.syncTasks = function () {
    };
    HomePage.prototype.resetParameters = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Resetting setup parameters, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.nativeStorage.remove('faculty');
                        this.nativeStorage.remove('facultyid');
                        this.nativeStorage.remove('department');
                        this.nativeStorage.remove('departmentid');
                        this.nativeStorage.remove('level');
                        this.nativeStorage.remove('levelid');
                        this.nativeStorage.remove('course');
                        localStorage.removeItem('course');
                        this.nativeStorage.remove('courseid');
                        this.nativeStorage.remove('selectedcourse');
                        this.nativeStorage.remove('chatinfo');
                        this.nativeStorage.remove('favoritecourse');
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'All default data will be removed from the device. Internet access will be required to retrieved data. Proceed?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.resetParameters();
                                    }
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
    HomePage.prototype.navigateToEditProfilePage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.router.navigate(['/edit']);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.verifySetup = function () {
        // Navigate to faculties
        this.router.navigate(['/faculties']);
        // Verify if faculties has been setup already
        // this.nativeStorage.getItem('faculty').then(
        //   faculty => {
        //     // Get the setup faculty id
        //     this.nativeStorage.getItem('facultyid').then(
        //       facultyid => {
        //         this.facultyID = facultyid.FacultyID;
        //         // Verify if departments has been setup already
        //         this.nativeStorage.getItem('department').then(
        //           department => {
        //             // Get the setup department id
        //             this.nativeStorage.getItem('departmentid').then(
        //               departmentid => {
        //                 this.departmentID = departmentid.DepartmentID;
        //                 // Verify if levels has been setup already
        //                 this.nativeStorage.getItem('level').then(
        //                   level => {
        //                     // Get the setup level id
        //                     this.nativeStorage.getItem('levelid').then(
        //                       levelid => {
        //                         this.levelID = levelid.LevelID;
        //                         // Navigate and display courses
        //                         this.router.navigate(['/courses/'+this.departmentID+'/'+this.levelID]);
        //                       },
        //                       () => {
        //                         // Navigate and display levels
        //                         this.router.navigate(['/levels/'+this.departmentID]);
        //                       }
        //                     );
        //                   },
        //                   () => {
        //                     // Navigate and display levels
        //                     this.router.navigate(['/levels/'+this.departmentID]);
        //                   }
        //                 );
        //               },
        //               () => {
        //                 // Navigate and display departments
        //                 this.router.navigate(['/departments/'+this.facultyID]);
        //               }
        //             );                
        //           },
        //           () => {
        //             // Navigate and display departments
        //             this.router.navigate(['/departments/'+this.facultyID]);
        //           }
        //         );
        //       },
        //       () => {
        //         // Navigate and display faculties
        //         this.router.navigate(['/faculties']);
        //       }
        //     );
        //   },
        //   () => {
        //     // Navigate and display faculties
        //     this.router.navigate(['/faculties']);
        //   }
        // );
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pages/setting/setting.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/setting/setting.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/setting/setting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/setting/setting.component.ts ***!
  \****************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SettingComponent = /** @class */ (function () {
    function SettingComponent(events, router, navParams, popoverController) {
        this.events = events;
        this.router = router;
        this.navParams = navParams;
        this.popoverController = popoverController;
    }
    SettingComponent.prototype.ngOnInit = function () {
        //Get data from popover page
        this.page = this.navParams.get('data');
    };
    SettingComponent.prototype.home = function () {
        // code for setting home option in apps
        this.router.navigate(['home']);
    };
    SettingComponent.prototype.slider = function () {
        // code for setting wifi option in apps
        this.router.navigate(['login']);
    };
    SettingComponent.prototype.logout = function () {
        // code for setting logiut option in apps
        this.router.navigate(['login']);
    };
    SettingComponent.prototype.eventFromPopover = function () {
        this.events.publish('fromPopoverEvent');
        this.popoverController.dismiss();
    };
    SettingComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/app/pages/setting/setting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map