(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Register\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\">\n    <ion-card class=\"welcome-card\">\n      <ion-card-header>\n        <ion-card-title>Register here</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input type=\"text\" name=\"username\" formControlName=\"username\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" name=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-padding-top\">\n          <ion-button expand=\"block\" size=\"large\" shape=\"round\" color=\"primary\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</ion-button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYmNnZWR1L0Rlc2t0b3AvdW15dS9zcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLGNBQUE7QUNDRjs7QURFQTs7RUFFRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4gICAgICBcclxuLnNjLWlvbi1jYXJkLW1kLWgsXHJcbi5zYy1pb24tY2FyZC1pb3MtaCB7XHJcbiAgZGlzcGxheTogdW5zZXQ7XHJcbn1cclxuICAgIFxyXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXHJcbi5zYy1pb24tY2FyZC1pb3MtcyBpbWcge1xyXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xyXG59IiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCxcbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtcyBpbWcsXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/dist/index.cjs.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");











var RegisterPage = /** @class */ (function () {
    function RegisterPage(http, formBuilder, loadingCtrl, router, nativeStorage, toastController, alertController, nativeHttp, platform) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.toastController = toastController;
        this.alertController = alertController;
        this.nativeHttp = nativeHttp;
        this.platform = platform;
        this.user = { username: '', password: '' };
        this.users = [];
        this.isFound = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            'username': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    RegisterPage.prototype.onSubmit = function (registerForm) {
        if (this.platform.is('android')) {
            this.submitNativeHttp(registerForm);
        }
        else if (this.platform.is('ios')) {
            this.submitNativeHttp(registerForm);
        }
        else if (this.platform.is('desktop')) {
            this.submitStandardHttp(registerForm);
        }
        else if (this.platform.is('tablet')) {
            this.submitStandardHttp(registerForm);
        }
        else {
            this.submitStandardHttp(registerForm);
        }
    };
    RegisterPage.prototype.submitStandardHttp = function (registerForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, userCredentials, _httpHeaders, httpHeaders;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Login in progress, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.user.username = registerForm.username;
                        this.user.password = registerForm.password;
                        userCredentials = {
                            "username": this.user.username,
                            "pin": this.user.password
                        };
                        _httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]()
                            .set('Content-Type', 'application/json')
                            .set('Cache-Control', 'no-cache');
                        httpHeaders = {
                            headers: _httpHeaders
                        };
                        this.http.post('http://umyu.easystudy.com.ng/api/v1/api/v1/user/activate', userCredentials, httpHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return loading.dismiss(); }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            if (data['status'] === 200) {
                                _this.nativeStorage.setItem('usercredentials', { User: userCredentials }).then(function () {
                                }, function (error) {
                                    _this.presentAlert("Error!", "Error storing user credentials" + JSON.stringify(error));
                                });
                                _this.router.navigate(['home']);
                            }
                            else {
                                _this.presentAlert("Warning!", "Invalid Username or Password! Please try again...");
                            }
                        }, function (error) {
                            _this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.submitNativeHttp = function (registerForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, userCredentials;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Login in progress, please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.user.username = registerForm.username;
                        this.user.password = registerForm.password;
                        userCredentials = {
                            "username": this.user.username,
                            "pin": this.user.password
                        };
                        // Returns a promise, need to convert with of() to Observable (if want)!
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.nativeHttp.post('http://umyu.easystudy.com.ng/api/v1/api/v1/user/activate', userCredentials, { 'Content-Type': 'application/json' })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return loading.dismiss(); })).subscribe(function (data) {
                            var parsed = JSON.parse(data.data);
                            loading.dismiss();
                            if (parsed.status === 200) {
                                _this.nativeStorage.setItem('usercredentials', { User: userCredentials }).then(function () {
                                }, function (error) {
                                    _this.presentAlert("Error!", "Error storing user credentials: " + JSON.stringify(error));
                                });
                                _this.router.navigate(['home']);
                            }
                            else {
                                _this.presentAlert("Warning!", "Invalid Username or Password! Please try again...");
                            }
                        }, function (error) {
                            _this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // async onSubmit(registerForm) {    
    //   let loading = await this.loadingCtrl.create({
    //     message: 'Registration in progress, please wait...'
    //   });
    //   await loading.present();
    //   this.user.username = registerForm.username;
    //   this.user.password = registerForm.password;
    //   firebase.database().ref('users').on('value', resp => {
    //     this.users = [];
    //     this.users = snapshotToArray(resp);
    //     if (this.users === undefined || this.users.length == 0) {        
    //       this.saveUserToFirebase();
    //     }
    //     else
    //     {
    //       for (let user of this.users) {
    //         if (user.username === this.user.username) {
    //           this.presentAlert("Warning!", "Username (" + this.user.username + ") already exisit! Please choose another name!");
    //           this.isFound = true;
    //           break;
    //         }
    //       }
    //       if (this.isFound === false) {
    //         this.saveUserToFirebase();
    //         loading.dismiss();
    //       }
    //       // this.users.forEach(user => {
    //       //   if (user.username == this.user.username) {
    //       //     this.presentAlert("Warning!", "Username (" + this.user.username + ") already exisit! Please choose another name!");
    //       //   }
    //       //   else
    //       //   {
    //       //     this.saveUserToFirebase();
    //       //   }
    //       // });
    //     }
    //   });    
    // }
    RegisterPage.prototype.saveUserToFirebase = function () {
        var newData = Firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('users').push();
        newData.set({
            username: this.user.username,
            password: this.user.password,
            created: Date()
        });
        this.nativeStorage.setItem('credentials', { User: this.user }).then(function () { }, function (error) { });
        this.router.navigate(['home']);
    };
    RegisterPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.presentAlert = function (header, message) {
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
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], RegisterPage);
    return RegisterPage;
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
//# sourceMappingURL=pages-register-register-module-es5.js.map