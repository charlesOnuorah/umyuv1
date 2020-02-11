(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-editprofile-editprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/editprofile/editprofile.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/editprofile/editprofile.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n    <!-- <ion-title>editprofile</ion-title> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n    <!-- <ion-title>{{($eventItem | async)?.name}}</ion-title> -->\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit(profileForm.value)\">\n    <ion-card class=\"welcome-card\">\n      <ion-card-header>\n        <ion-card-title>Profile</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">First Name</ion-label>\n          <ion-input type=\"text\" name=\"firstName\" [value]=\"user?.firstName\" formControlName=\"firstName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Last Name</ion-label>\n          <ion-input type=\"text\" name=\"lastName\" [value] = \"user?.lastName\" formControlName=\"lastName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Email Address</ion-label>\n          <ion-input type=\"email\" name=\"email\" [value]=\"user?.email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Phone Number</ion-label>\n          <ion-input type=\"text\" name=\"phoneNumber\" [value]=\"user?.phoneNumber\" formControlName=\"phoneNumber\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-padding-top\">\n          <ion-button type=\"submit\" [disabled]=\"!profileForm.valid\" color=\"primary\">Update Profile</ion-button>\n          <!-- <ion-button expand=\"block\" size=\"large\" shape=\"round\" color=\"primary\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</ion-button> -->\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/editprofile/editprofile.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile.module.ts ***!
  \*********************************************************/
/*! exports provided: EditprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editprofile.page */ "./src/app/pages/editprofile/editprofile.page.ts");







var routes = [
    {
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]
    }
];
var EditprofilePageModule = /** @class */ (function () {
    function EditprofilePageModule() {
    }
    EditprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
        })
    ], EditprofilePageModule);
    return EditprofilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/editprofile/editprofile.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/editprofile/editprofile.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile.page.ts ***!
  \*******************************************************/
/*! exports provided: EditprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePage", function() { return EditprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(formBuilder, nativeStorage, loadingCtrl, toastController, alertController, platform) {
        this.formBuilder = formBuilder;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.alertController = alertController;
        this.platform = platform;
        this.user = { firstName: '', lastName: '', email: '', phoneNumber: '' };
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    }
    EditprofilePage.prototype.ngOnInit = function () {
        var _this = this;
        // this.presentAlert()
        this.nativeStorage.getItem('usercredentials').then(function (User) {
            _this.user.firstName = User.username ? User.username.split(' ')[0] : '';
            _this.user.lastName = User.username ? User.username.split(' ')[1] ?
                User.username.split(' ')[1] : '' : '';
            _this.user.email = User.email;
            _this.user.phoneNumber = User.phoneNumber;
            _this.profileForm.setValue({
                firstName: _this.user.firstName,
                lastName: _this.user.firstName,
                email: _this.user.email,
                phoneNumber: _this.user.phoneNumber
            });
        });
        // const s = JSON.parse(localStorage.getItem('user'));
        // console.log('s', s, this.user)
        // this.user.firstName = s ? s.firstName : '';
        // this.user.lastName = s ? s.lastName : '';
        // this.user.email = s ? s.email : '';
        // this.user.phoneNumber = s ? s.phoneNumber : '';
        // this.profileForm = this.formBuilder.group({
        //   'firstName': ['', [Validators.required]],
        //   'lastName': ['', [Validators.required]]
        // })
    };
    EditprofilePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'here in here',
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
    EditprofilePage.prototype.onSubmit = function (profileForm) {
        // console.log("profile form", profileForm)
        if (this.platform.is('android')) {
            this.submitStandardHttp(profileForm);
        }
        else if (this.platform.is('ios')) {
            this.submitStandardHttp(profileForm);
        }
        else if (this.platform.is('desktop')) {
            this.submitStandardHttp(profileForm);
        }
        else if (this.platform.is('tablet')) {
            this.submitStandardHttp(profileForm);
        }
        else {
            this.submitStandardHttp(profileForm);
        }
    };
    EditprofilePage.prototype.submitStandardHttp = function (profileForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, err_1, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user.firstName = profileForm.firstName;
                        this.user.lastName = profileForm.lastName;
                        this.user.phoneNumber = profileForm.phoneNumber;
                        this.user.email = profileForm.email;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 7]);
                        return [4 /*yield*/, this.nativeStorage.setItem('usercredentials', { User: { username: this.user.firstName + " " + this.user.lastName,
                                    firstName: "" + this.user.firstName,
                                    lastName: "" + this.user.lastName,
                                    email: "" + this.user.email,
                                    phoneNumber: "" + this.user.phoneNumber
                                } })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Okay!',
                                message: 'Profile Updated successfully',
                                buttons: [
                                    {
                                        text: 'Okay',
                                        handler: function () {
                                        }
                                    }
                                ]
                            })];
                    case 3:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        err_1 = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Error Updating Profile',
                                duration: 2000,
                                position: 'top'
                            })];
                    case 6:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    EditprofilePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    EditprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__(/*! raw-loader!./editprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/editprofile/editprofile.page.html"),
            styles: [__webpack_require__(/*! ./editprofile.page.scss */ "./src/app/pages/editprofile/editprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], EditprofilePage);
    return EditprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-editprofile-editprofile-module-es5.js.map