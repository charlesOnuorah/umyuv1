(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <!-- <ion-button (click)=\"settingPopover()\">\n        <ion-icon name=\"more\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"assets/banners/banner21.jpg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title>Welcome to Umaru Musa Yar'Adua University</ion-card-title>\n      <ion-card-subtitle>Mobile Learnng Platform</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Learning just got better, download all the courses you are interested in and start learning at your own pace. Click <strong>Browse Resources</strong> to get started.</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>What Next</ion-label>\n    </ion-list-header>\n    <ion-item class=\"hover-item\" (click)=\"verifySetup()\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n      <ion-label>Browse Resources</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/', 'favorites']\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"star\"></ion-icon>\n      <ion-label>Favorite Courses</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/', 'chatrooms']\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"chatboxes\"></ion-icon>\n      <ion-label>Enter Chat Room</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/', 'bulkdownload']\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"cloud-download\"></ion-icon>\n      <ion-label>Download Manager</ion-label>\n    </ion-item>\n    <ion-item class=\"hover-item\" (click)=\"presentAlertConfirm()\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"construct\"></ion-icon>\n      <ion-label>Reset Parameters</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../setting/setting.component */ "./src/app/pages/setting/setting.component.ts");








let HomePageModule = class HomePageModule {
};
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



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n\n.hover-item {\n  background-color: #F5F5F5;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVU1ZVUFwcC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBOzs7RUFHRSxjQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGlCQUFBO0FDQ0Y7O0FERUE7OztFQUdFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0RBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuICBcbi5zYy1pb24tY2FyZC1wd2EtaCxcbi5zYy1pb24tY2FyZC1tZC1oLFxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgZGlzcGxheTogdW5zZXQ7XG59XG5cbi5zYy1pb24tY2FyZC1wd2EtcyBpbWcsXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59XG5cbi5saXN0LXB3YSxcbi5saXN0LW1kLFxuLmxpc3QtaW9zIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmhvdmVyLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLWgsXG4uc2MtaW9uLWNhcmQtbWQtaCxcbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxuLnNjLWlvbi1jYXJkLWlvcy1zIGltZyB7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4ubGlzdC1wd2EsXG4ubGlzdC1tZCxcbi5saXN0LWlvcyB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5ob3Zlci1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/setting/setting.component */ "./src/app/pages/setting/setting.component.ts");






let HomePage = class HomePage {
    constructor(popoverController, loadingCtrl, nativeStorage, router, events, alertController) {
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
    ngOnInit() {
    }
    settingPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"],
                event: ev,
                translucent: true
            });
            /** Sync event from popover component */
            this.events.subscribe('fromPopoverEvent', () => {
                this.syncTasks();
            });
            return yield popover.present();
        });
    }
    syncTasks() {
    }
    resetParameters() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Resetting setup parameters, please wait...'
            });
            yield loading.present();
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
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'All default data will be removed from the device. Internet access will be required to retrieved data. Proceed?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.resetParameters();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    verifySetup() {
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
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SettingComponent = class SettingComponent {
    constructor(events, router, navParams, popoverController) {
        this.events = events;
        this.router = router;
        this.navParams = navParams;
        this.popoverController = popoverController;
    }
    ngOnInit() {
        //Get data from popover page
        this.page = this.navParams.get('data');
    }
    home() {
        // code for setting home option in apps
        this.router.navigate(['home']);
    }
    slider() {
        // code for setting wifi option in apps
        this.router.navigate(['login']);
    }
    logout() {
        // code for setting logiut option in apps
        this.router.navigate(['login']);
    }
    eventFromPopover() {
        this.events.publish('fromPopoverEvent');
        this.popoverController.dismiss();
    }
};
SettingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map